#!/usr/bin/env node
/**
 * Replaces generated artwork with Unsplash photography.
 *
 *   npm run images:unsplash -- hero-home.jpg=<photo-id-or-url> [more...]
 *   npm run images:unsplash -- --file scripts/unsplash.example.json
 *
 * Then refresh dimensions and blur placeholders without redrawing the photos:
 *
 *   npm run artwork -- --keep-existing
 *
 * Each photo is cropped to the exact size the layout expects (read from
 * src/content/image-manifest.json) and written over the matching file in
 * public/images/, so no code changes are needed.
 *
 * Attribution
 * -----------
 * The Unsplash licence does not require credit, but crediting the
 * photographer is expected practice and their API terms require it for API
 * use. Every download is appended to public/images/CREDITS.md.
 *
 * Set UNSPLASH_ACCESS_KEY to use the official API: it resolves the
 * photographer's name, honours the API's download-tracking requirement, and
 * avoids relying on direct CDN URLs. Without a key the script falls back to
 * the public CDN URL and records the photo ID only.
 */
import { readFile, appendFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images");
const manifestPath = join(root, "src", "content", "image-manifest.json");
const creditsPath = join(outDir, "CREDITS.md");
const KEY = process.env.UNSPLASH_ACCESS_KEY;

/** Accepts a bare id, or any unsplash.com/photos/... URL. */
function photoId(input) {
  const trimmed = String(input).trim();
  if (!trimmed.includes("/")) return trimmed.replace(/^photo-/, "");
  const m = trimmed.match(/photos\/(?:[^/]*-)?([A-Za-z0-9_-]{8,})/) || trimmed.match(/photo-([A-Za-z0-9_-]+)/);
  if (!m) throw new Error(`Could not read a photo id from "${input}"`);
  return m[1];
}

async function parseArgs(argv) {
  const pairs = {};
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === "--file") {
      const raw = await readFile(argv[++i], "utf8");
      Object.assign(pairs, JSON.parse(raw));
      continue;
    }
    const eq = argv[i].indexOf("=");
    if (eq > 0) pairs[argv[i].slice(0, eq)] = argv[i].slice(eq + 1);
  }
  return pairs;
}

async function lookup(id) {
  if (!KEY) {
    return {
      url: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2400&q=85`,
      credit: null,
    };
  }
  const res = await fetch(`https://api.unsplash.com/photos/${id}`, {
    headers: { Authorization: `Client-ID ${KEY}`, "Accept-Version": "v1" },
  });
  if (!res.ok) throw new Error(`Unsplash API ${res.status} for photo ${id}`);
  const data = await res.json();
  // Required by the Unsplash API terms whenever a photo is downloaded.
  if (data.links?.download_location) {
    await fetch(data.links.download_location, { headers: { Authorization: `Client-ID ${KEY}` } }).catch(() => {});
  }
  return {
    url: `${data.urls.raw}&w=2400&q=85&fm=jpg`,
    credit: {
      name: data.user?.name ?? "Unknown",
      profile: data.user?.links?.html ?? `https://unsplash.com/@${data.user?.username ?? ""}`,
      page: data.links?.html ?? `https://unsplash.com/photos/${id}`,
    },
  };
}

async function main() {
  const pairs = await parseArgs(process.argv.slice(2));
  const names = Object.keys(pairs);
  if (names.length === 0) {
    console.error("Usage: npm run images:unsplash -- <file.jpg>=<photo-id-or-url> [...]");
    console.error("   or: npm run images:unsplash -- --file scripts/unsplash.example.json");
    process.exit(1);
  }

  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  const credits = [];

  for (const [file, ref] of Object.entries(pairs)) {
    const target = manifest[file];
    if (!target) {
      console.error(`skip    ${file} — not a known image. Known names are the keys of image-manifest.json.`);
      continue;
    }
    const id = photoId(ref);
    const { url, credit } = await lookup(id);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Download failed (${res.status}) for ${file}`);
    const buf = Buffer.from(await res.arrayBuffer());

    await sharp(buf)
      .resize(target.width, target.height, { fit: "cover", position: "attention" })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(join(outDir, file));

    const who = credit ? `${credit.name} (${credit.profile})` : "photographer unknown — set UNSPLASH_ACCESS_KEY";
    credits.push(`- \`${file}\` — Unsplash photo [${id}](${credit?.page ?? `https://unsplash.com/photos/${id}`}) by ${who}`);
    console.log(`fetched ${file} <- unsplash ${id} (${target.width}x${target.height})`);
  }

  if (credits.length) {
    let header = "";
    try {
      await access(creditsPath);
    } catch {
      header = "# Image credits\n\nPhotography sourced from Unsplash. Generated artwork is drawn by `npm run artwork` and needs no credit.\n";
    }
    await appendFile(creditsPath, `${header}\n${credits.join("\n")}\n`, "utf8");
    console.log(`\ncredits -> ${creditsPath}`);
  }

  console.log("\nNext: npm run artwork -- --keep-existing   (refreshes sizes and blur placeholders)");
  console.log("Then review the alt text in src/content/images.ts so it describes the new photos.");
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
