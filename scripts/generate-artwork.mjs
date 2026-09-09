#!/usr/bin/env node
/**
 * Generates every illustration used by the site into public/images/, plus
 * src/content/image-manifest.json (dimensions and blur placeholders).
 *
 * Which files are photographs rather than artwork is recorded separately, in
 * public/images/.unsplash-lock.json, by scripts/fetch-unsplash.mjs.
 *
 *   npm run artwork
 *
 * The artwork is drawn from code in the brand palette, so it is deterministic,
 * license-free and always matches the design tokens. To use photography
 * instead, drop a file with the same name into public/images/ (see
 * scripts/fetch-unsplash.mjs) and re-run this script with --keep-existing to
 * refresh the manifest without overwriting your photos.
 */
import { mkdir, writeFile, access } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { C } from "./lib/art.mjs";
import { skyline } from "./lib/skyline.mjs";
import { motifs } from "./lib/abstract.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "images");
const manifestPath = join(root, "src", "content", "image-manifest.json");
const keepExisting = process.argv.includes("--keep-existing");

const HERO = { width: 2400, height: 1100 };
const AREA_CARD = { width: 1200, height: 675 };
const CARD = { width: 1600, height: 900 };
const FEATURE = { width: 1400, height: 1050 };

/** name -> SVG factory. Sizes chosen for how each image is displayed. */
const IMAGES = [
  // --- Page heroes (sit behind a navy overlay) ---
  {
    file: "hero-home.jpg",
    ...HERO,
    svg: (w, h) =>
      skyline({
        width: w, height: h, seed: 4021, glowX: 0.76, water: true, peak: 0.74, spread: 0.3, horizon: 0.8,
        marks: [
          { kind: "pyramid", at: 0.58, scale: 0.8, layer: "near" },
          { kind: "taperTower", at: 0.72, scale: 1.02, layer: "near", width: 0.92 },
          { kind: "crownTower", at: 0.88, scale: 0.8, layer: "near" },
        ],
      }),
  },
  { file: "hero-services.jpg", ...HERO, svg: (w, h) => motifs.panels(w, h, 815, C.gold, { hero: true }) },
  { file: "hero-about.jpg", ...HERO, svg: (w, h) => motifs.orbit(w, h, 233, C.gold, { hero: true }) },
  { file: "hero-contact.jpg", ...HERO, svg: (w, h) => motifs.arcs(w, h, 517, C.emerald600, { hero: true }) },
  { file: "hero-blog.jpg", ...HERO, svg: (w, h) => motifs.horizonLine(w, h, 661, C.gold, { hero: true }) },
  { file: "hero-testimonials.jpg", ...HERO, svg: (w, h) => motifs.orbit(w, h, 909, C.emerald600, { hero: true }) },
  { file: "hero-legal.jpg", ...HERO, svg: (w, h) => motifs.horizonLine(w, h, 1201, C.emerald600, { hero: true }) },

  // --- Service heroes ---
  { file: "service-financial-planning.jpg", ...HERO, svg: (w, h) => motifs.orbit(w, h, 3101, C.gold, { hero: true }) },
  { file: "service-tax-strategy-planning.jpg", ...HERO, svg: (w, h) => motifs.steps(w, h, 3202, C.gold, { hero: true }) },
  { file: "service-equity-compensation.jpg", ...HERO, svg: (w, h) => motifs.paths(w, h, 3303, C.gold, { hero: true }) },
  { file: "service-rsu-rsa-planning.jpg", ...HERO, svg: (w, h) => motifs.timeline(w, h, 3404, C.gold, { hero: true }) },
  { file: "service-stock-options-iso-nso.jpg", ...HERO, svg: (w, h) => motifs.paths(w, h, 3505, C.emerald600, { hero: true }) },
  { file: "service-retirement-planning.jpg", ...HERO, svg: (w, h) => motifs.horizonLine(w, h, 3606, C.gold, { hero: true }) },
  { file: "service-education-fund-planning.jpg", ...HERO, svg: (w, h) => motifs.layers(w, h, 3707, C.emerald600, { hero: true }) },
  { file: "service-asset-allocation.jpg", ...HERO, svg: (w, h) => motifs.panels(w, h, 3808, C.emerald600, { hero: true }) },

  // --- Service areas: distinct skylines, also used on the home cities strip ---
  {
    file: "area-bay-area.jpg",
    ...HERO,
    svg: (w, h) =>
      skyline({
        width: w, height: h, seed: 7011, glowX: 0.72, water: true, peak: 0.54, horizon: 0.78,
        marks: [
          { kind: "pyramid", at: 0.3, scale: 0.88, layer: "near" },
          { kind: "taperTower", at: 0.48, scale: 1.05, layer: "near", width: 0.9 },
          { kind: "spireTower", at: 0.7, scale: 0.72, layer: "mid" },
        ],
      }),
  },
  {
    file: "area-southern-california.jpg",
    ...HERO,
    svg: (w, h) =>
      skyline({
        width: w, height: h, seed: 7022, glowX: 0.3, glowOpacity: 0.4, peak: 0.58, horizon: 0.76, palms: 3,
        marks: [
          { kind: "spireTower", at: 0.46, scale: 0.98, layer: "near", width: 0.85 },
          { kind: "crownTower", at: 0.62, scale: 0.8, layer: "near" },
        ],
      }),
  },
  {
    file: "area-remote-advisory.jpg",
    ...HERO,
    svg: (w, h) =>
      skyline({
        width: w, height: h, seed: 7033, glowX: 0.5, glowColor: C.emerald600, glowOpacity: 0.3,
        peak: 0.34, spread: 0.5, horizon: 0.79, water: true,
        marks: [
          { kind: "needle", at: 0.22, scale: 1.0, layer: "near", width: 1.3 },
          { kind: "crownTower", at: 0.68, scale: 0.86, layer: "near" },
        ],
      }),
  },

  // --- Region cards (home page cities strip): tighter crop than the heroes ---
  {
    file: "card-bay-area.jpg",
    ...AREA_CARD,
    svg: (w, h) =>
      skyline({
        width: w, height: h, seed: 7011, glowX: 0.68, glowOpacity: 0.4, water: true, peak: 0.5, horizon: 0.72,
        marks: [
          { kind: "pyramid", at: 0.32, scale: 0.92, layer: "near" },
          { kind: "taperTower", at: 0.52, scale: 1.08, layer: "near", width: 0.9 },
        ],
      }),
  },
  {
    file: "card-southern-california.jpg",
    ...AREA_CARD,
    svg: (w, h) =>
      skyline({
        width: w, height: h, seed: 7022, glowX: 0.32, glowOpacity: 0.5, peak: 0.56, horizon: 0.74, palms: 2,
        marks: [
          { kind: "spireTower", at: 0.48, scale: 1.02, layer: "near", width: 0.85 },
          { kind: "crownTower", at: 0.66, scale: 0.84, layer: "near" },
        ],
      }),
  },
  {
    file: "card-remote-advisory.jpg",
    ...AREA_CARD,
    svg: (w, h) =>
      skyline({
        width: w, height: h, seed: 7033, glowX: 0.5, glowColor: C.emerald600, glowOpacity: 0.4,
        peak: 0.32, spread: 0.46, horizon: 0.74, water: true,
        marks: [
          { kind: "needle", at: 0.2, scale: 1.05, layer: "near", width: 1.3 },
          { kind: "crownTower", at: 0.64, scale: 0.9, layer: "near" },
        ],
      }),
  },

  // --- Blog article headers ---
  { file: "post-rsu-vs-iso-vs-nso.jpg", ...CARD, svg: (w, h) => motifs.paths(w, h, 5101, C.gold) },
  { file: "post-avoid-surprise-tax-bill-when-rsus-vest.jpg", ...CARD, svg: (w, h) => motifs.steps(w, h, 5202, C.gold) },
  { file: "post-financial-planning-h1b-green-card-holders.jpg", ...CARD, svg: (w, h) => motifs.arcs(w, h, 5303, C.emerald600) },
  { file: "post-529-plans-explained-taiwanese-american-families.jpg", ...CARD, svg: (w, h) => motifs.layers(w, h, 5404, C.emerald600) },
  { file: "post-should-you-exercise-isos-early.jpg", ...CARD, svg: (w, h) => motifs.timeline(w, h, 5505, C.gold) },

  // --- Section feature (services hub intro) ---
  { file: "feature-one-plan.jpg", ...FEATURE, svg: (w, h) => motifs.orbit(w, h, 6101, C.gold) },
];

async function exists(p) {
  try {
    await access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const manifest = {};

  for (const img of IMAGES) {
    const dest = join(outDir, img.file);

    if (keepExisting && (await exists(dest))) {
      const meta = await sharp(dest).metadata();
      manifest[img.file] = { width: meta.width, height: meta.height, blurDataURL: await blur(dest) };
      console.log(`kept    ${img.file} (${meta.width}x${meta.height})`);
      continue;
    }

    const svg = img.svg(img.width, img.height);
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 82, mozjpeg: true, chromaSubsampling: "4:4:4" })
      .toFile(dest);

    manifest[img.file] = { width: img.width, height: img.height, blurDataURL: await blur(dest) };
    console.log(`drew    ${img.file} (${img.width}x${img.height})`);
  }

  const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]));
  await writeFile(manifestPath, `${JSON.stringify(sorted, null, 2)}\n`, "utf8");
  console.log(`\nmanifest -> ${manifestPath} (${Object.keys(sorted).length} images)`);
}

/** Tiny base64 preview used as the Next.js blur placeholder. */
async function blur(file) {
  const buf = await sharp(file).resize(16).jpeg({ quality: 40 }).toBuffer();
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
