#!/usr/bin/env node
/**
 * Puts Unsplash photography into public/images/.
 *
 *   npm run images:unsplash                       # uses scripts/unsplash.json
 *   npm run images:unsplash -- post-x.jpg=<id>    # one-off overrides
 *   npm run images:unsplash -- --soft             # never fail the build
 *
 * Runs automatically before `next build` (see the prebuild script), so a
 * deployment with network access ends up with the photos even if nobody runs
 * the command by hand. With --soft, any failure leaves the generated artwork
 * in place and the build continues.
 *
 * Each photo is cropped to the size the layout expects (from
 * src/content/image-manifest.json), written over the matching file, and
 * recorded in:
 *   public/images/.unsplash-lock.json    which photo each file came from
 *   public/images/CREDITS.md             photographer credits
 *   src/content/image-alt-overrides.json alt text describing the photo,
 *                                        merged by src/content/images.ts
 *
 * Commit the downloaded JPEGs plus the lock file and later builds skip the
 * network entirely.
 *
 * Set UNSPLASH_ACCESS_KEY to use the official API (resolves the photographer
 * and satisfies the API's download-tracking requirement). Without a key the
 * script uses the public per-photo download endpoint, which redirects to the
 * CDN and works with modern short photo ids.
 */
import { readFile, writeFile, appendFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images");
const manifestPath = join(root, "src", "content", "image-manifest.json");
const altPath = join(root, "src", "content", "image-alt-overrides.json");
const lockPath = join(outDir, ".unsplash-lock.json");
const creditsPath = join(outDir, "CREDITS.md");
const defaultMap = join(root, "scripts", "unsplash.json");

const KEY = process.env.UNSPLASH_ACCESS_KEY;
const UA = "GloryToGlory-site/1.0 (+https://glorytoglory.com)";
/** Overridable so both network paths can be exercised against a stand-in server. */
const BASE = process.env.UNSPLASH_DOWNLOAD_BASE ?? "https://unsplash.com";
const API_BASE = process.env.UNSPLASH_API_BASE ?? "https://api.unsplash.com";

/** Accepts a bare id or any unsplash.com/photos/... URL. */
export function photoId(input) {
  const trimmed = String(input).trim();
  if (!trimmed.includes("/")) return trimmed;
  const m =
    trimmed.match(/photos\/(?:[^/?#]*-)?([A-Za-z0-9_-]{8,})(?:[/?#]|$)/) ||
    trimmed.match(/photo-([A-Za-z0-9_-]+)/);
  if (!m) throw new Error(`Could not read a photo id from "${input}"`);
  return m[1];
}

async function readJson(path, fallback) {
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch {
    return fallback;
  }
}

async function parseArgs(argv) {
  const opts = { soft: argv.includes("--soft"), pairs: {}, file: null };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--file") opts.file = argv[++i];
    else if (argv[i] === "--soft") continue;
    else {
      const eq = argv[i].indexOf("=");
      if (eq > 0) opts.pairs[argv[i].slice(0, eq)] = { id: argv[i].slice(eq + 1) };
    }
  }
  return opts;
}

/** Resolve a photo id to downloadable bytes. */
async function download(id, width) {
  if (KEY) return viaApi(id, width);

  // Keyless. Try the website's own JSON endpoint first: it yields a direct
  // images.unsplash.com URL, and that CDN serves anyone, including build
  // servers. Fall back to the per-photo download redirect, which works from an
  // ordinary connection but is refused from datacenter IPs.
  try {
    return await viaNapi(id, width);
  } catch (napiErr) {
    try {
      return await viaDownloadRedirect(id, width);
    } catch (dlErr) {
      throw new Error(`${napiErr.message}; then ${dlErr.message}`);
    }
  }
}

async function viaApi(id, width) {
  const meta = await fetch(`${API_BASE}/photos/${id}`, {
    headers: { Authorization: `Client-ID ${KEY}`, "Accept-Version": "v1", "User-Agent": UA },
  });
  if (meta.status === 401) throw new Error("UNSPLASH_ACCESS_KEY rejected (HTTP 401) — check the key");
  if (meta.status === 403) {
    throw new Error(
      `api rate limit reached (HTTP 403; ${meta.headers.get("x-ratelimit-remaining") ?? "?"} left) — a demo app allows 50 requests an hour`,
    );
  }
  if (!meta.ok) throw new Error(`api ${meta.status}`);
  const data = await meta.json();
  if (!data?.urls?.raw) throw new Error("api returned no image url");

  // Required by the API terms whenever a photo is downloaded.
  if (data.links?.download_location) {
    await fetch(data.links.download_location, {
      headers: { Authorization: `Client-ID ${KEY}`, "User-Agent": UA },
    }).catch(() => {});
  }
  return { buf: await bytes(sized(data.urls.raw, width)), credit: { name: data.user?.name ?? null } };
}

/** Adds sizing parameters to an Unsplash CDN url, whatever query it already carries. */
function sized(raw, width) {
  const url = new URL(raw);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", "85");
  url.searchParams.set("fm", "jpg");
  return url.toString();
}

async function viaNapi(id, width) {
  const res = await fetch(`${BASE}/napi/photos/${id}`, {
    headers: { "User-Agent": UA, Accept: "application/json" },
  });
  if (!res.ok) throw new Error(`napi ${res.status}`);
  const data = await res.json();
  const raw = data?.urls?.raw;
  if (!raw) throw new Error("napi returned no image url");
  return { buf: await bytes(sized(raw, width)), credit: { name: data.user?.name ?? null } };
}

async function viaDownloadRedirect(id, width) {
  const res = await fetch(`${BASE}/photos/${id}/download?force=true&w=${width}`, {
    headers: { "User-Agent": UA },
    redirect: "follow",
  });
  if (res.status === 403 || res.status === 401) {
    throw new Error(`download endpoint refused (HTTP ${res.status}) — needs UNSPLASH_ACCESS_KEY on a build server`);
  }
  if (!res.ok) throw new Error(`download endpoint ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 1024) throw new Error("download response too small to be a photo");
  return { buf, credit: null };
}

async function bytes(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`image CDN ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 1024) throw new Error("image response too small to be a photo");
  return buf;
}

async function main() {
  if (process.argv.includes("--status")) return status();
  const opts = await parseArgs(process.argv.slice(2));
  const mapPath = opts.file ?? defaultMap;
  const fromFile = await readJson(mapPath, {});
  const map = { ...fromFile, ...opts.pairs };
  delete map.$comment;
  delete map._comment;

  const manifest = await readJson(manifestPath, null);
  if (!manifest) {
    const msg = "image-manifest.json is missing — run `npm run artwork` first.";
    if (opts.soft) return console.warn(`[unsplash] skipped: ${msg}`);
    throw new Error(msg);
  }

  const lock = await readJson(lockPath, {});
  const altOverrides = await readJson(altPath, {});
  const credits = [];
  let fetched = 0;
  let skipped = 0;
  const failures = [];
  /** Several slots share a photo (a region hero and its card). Fetch it once. */
  const byId = new Map();

  for (const [file, entryRaw] of Object.entries(map)) {
    const entry = typeof entryRaw === "string" ? { id: entryRaw } : entryRaw;
    const target = manifest[file];
    if (!target) {
      failures.push(`${file}: not a known image slot`);
      continue;
    }

    let id;
    try {
      id = photoId(entry.id);
    } catch (err) {
      failures.push(`${file}: ${err.message}`);
      continue;
    }

    // Already downloaded this exact photo (e.g. committed to the repo).
    if (lock[file] === id && (await exists(join(outDir, file)))) {
      if (entry.alt) altOverrides[file] = entry.alt;
      skipped++;
      continue;
    }

    try {
      const need = Math.max(target.width, 1600);
      let got = byId.get(id);
      if (!got || got.width < need) {
        got = { ...(await download(id, need)), width: need };
        byId.set(id, got);
      }
      const { buf, credit } = got;
      await sharp(buf)
        .resize(target.width, target.height, { fit: "cover", position: "attention" })
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(join(outDir, file));

      lock[file] = id;
      if (entry.alt) altOverrides[file] = entry.alt;
      const who = credit?.name ?? entry.credit ?? "see photo page";
      credits.push(`- \`${file}\` — [Unsplash photo ${id}](https://unsplash.com/photos/${id}) by ${who}`);
      fetched++;
      console.log(`[unsplash] ${file} <- ${id} (${target.width}x${target.height})`);
    } catch (err) {
      failures.push(`${file} (${id}): ${err.message}`);
    }
  }

  if (fetched > 0) {
    await writeFile(lockPath, `${JSON.stringify(lock, null, 2)}\n`, "utf8");
    let header = "";
    if (!(await exists(creditsPath))) {
      header =
        "# Image credits\n\nPhotographs from [Unsplash](https://unsplash.com), used under the Unsplash Licence.\nThe remaining images are generated artwork (`npm run artwork`) and need no credit.\n";
    }
    await appendFile(creditsPath, `${header}\n${credits.join("\n")}\n`, "utf8");
  }
  if (fetched > 0 || Object.keys(altOverrides).length) {
    await writeFile(altPath, `${JSON.stringify(altOverrides, null, 2)}\n`, "utf8");
  }

  const summary = `[unsplash] ${fetched} downloaded, ${skipped} already current, ${failures.length} failed`;
  if (failures.length === 0) {
    console.log(summary);
    return;
  }

  const bar = "=".repeat(72);
  console.warn(`\n${bar}`);
  console.warn(summary);
  for (const f of failures) console.warn(`  ${f}`);
  if (opts.soft) {
    console.warn("");
    console.warn("  These slots are showing GENERATED ARTWORK, not photographs.");
    console.warn("  The build continues, but the site will not show the photos you configured.");
    console.warn("  Fix: set UNSPLASH_ACCESS_KEY in your host's environment variables,");
    console.warn("  or run `npm run images:photos` locally and commit public/images/.");
    console.warn(`${bar}\n`);
    return;
  }
  console.warn(`${bar}\n`);
  process.exitCode = 1;
}

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

main().catch((err) => {
  const soft = process.argv.includes("--soft");
  console.warn(`[unsplash] ${err.message ?? err}`);
  if (!soft) process.exitCode = 1;
});
