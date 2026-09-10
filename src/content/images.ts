import manifest from "./image-manifest.json";
import altOverrides from "./image-alt-overrides.json";
import type { L } from "./types";

/**
 * Every image the site uses, with translated alt text.
 *
 * Dimensions and blur placeholders come from image-manifest.json, which
 * `npm run artwork` regenerates. Swapping in photography is a file drop:
 * put a JPEG with the same name in public/images/ and re-run
 * `npm run artwork -- --keep-existing` to refresh the manifest.
 *
 * Alt text policy: page-hero images sit behind the H1 and carry no
 * information of their own, so they render with alt="" (correct for
 * decorative images, which screen readers should skip). Content images —
 * article headers, region cards, the feature image — use the translated
 * text below.
 *
 * When a slot has been swapped for an Unsplash photo, the fetch script writes
 * the photo's description into image-alt-overrides.json and it wins over the
 * text below, so the alt text always describes what is actually shown.
 */

interface ImageDef {
  file: keyof typeof manifest;
  alt: L<string>;
}

const DEFS = {
  heroHome: {
    file: "hero-home.jpg",
    alt: {
      en: "Illustration of a city skyline at night above calm water",
      "zh-hant": "夜晚城市天際線與平靜水面的插畫",
    },
  },
  heroServices: {
    file: "hero-services.jpg",
    alt: {
      en: "Illustration of overlapping panels, each showing a small rising chart",
      "zh-hant": "多個相互交疊的面板插畫，每個面板顯示一條上升的走勢線",
    },
  },
  heroAbout: {
    file: "hero-about.jpg",
    alt: {
      en: "Illustration of concentric orbits around a single gold point",
      "zh-hant": "環繞單一金色圓點的同心軌道插畫",
    },
  },
  heroContact: {
    file: "hero-contact.jpg",
    alt: {
      en: "Illustration of arcs connecting points across a horizon",
      "zh-hant": "跨越地平線連結各個節點的弧線插畫",
    },
  },
  heroBlog: {
    file: "hero-blog.jpg",
    alt: {
      en: "Illustration of a steadily rising line above a horizon",
      "zh-hant": "地平線上穩定上升的線條插畫",
    },
  },
  heroPricing: {
    file: "hero-pricing.jpg",
    alt: {
      en: "Illustration of stacked bands growing over time",
      "zh-hant": "隨時間逐層堆疊成長的區塊插畫",
    },
  },
  heroLegal: {
    file: "hero-legal.jpg",
    alt: {
      en: "Quiet illustration of a horizon line",
      "zh-hant": "簡約的地平線插畫",
    },
  },
  featureOnePlan: {
    file: "feature-one-plan.jpg",
    alt: {
      en: "Illustration of one plan at the centre with each part of a financial life orbiting it",
      "zh-hant": "以一套計畫為中心，財務生活各個環節環繞其外的插畫",
    },
  },
} satisfies Record<string, ImageDef>;

/** Service hero images, keyed by the service's last URL segment. */
const SERVICE_DEFS: Record<string, ImageDef> = {
  "financial-planning": {
    file: "service-financial-planning.jpg",
    alt: {
      en: "Illustration of orbits around a single point, representing one coordinated plan",
      "zh-hant": "環繞單一中心的軌道插畫，象徵一套協調一致的計畫",
    },
  },
  "tax-strategy-planning": {
    file: "service-tax-strategy-planning.jpg",
    alt: {
      en: "Illustration of rising columns with one column showing a shortfall in gold",
      "zh-hant": "逐步上升的柱狀圖插畫，其中一根以金色標示出缺口",
    },
  },
  "equity-compensation": {
    file: "service-equity-compensation.jpg",
    alt: {
      en: "Illustration of three paths branching from a single starting point",
      "zh-hant": "自同一起點分出三條路徑的插畫",
    },
  },
  "rsu-rsa-planning": {
    file: "service-rsu-rsa-planning.jpg",
    alt: {
      en: "Illustration of a timeline with a decision point branching in two directions",
      "zh-hant": "時間軸插畫，在決策點分出兩個方向",
    },
  },
  "stock-options-iso-nso": {
    file: "service-stock-options-iso-nso.jpg",
    alt: {
      en: "Illustration of diverging paths in green and gold",
      "zh-hant": "以綠色與金色呈現的分歧路徑插畫",
    },
  },
  "retirement-planning": {
    file: "service-retirement-planning.jpg",
    alt: {
      en: "Illustration of a long rising line above a distant horizon",
      "zh-hant": "遠方地平線上長期上升的線條插畫",
    },
  },
  "education-fund-planning": {
    file: "service-education-fund-planning.jpg",
    alt: {
      en: "Illustration of stacked bands growing over time, like contributions compounding",
      "zh-hant": "隨時間逐層堆疊成長的區塊插畫，象徵提撥的複利累積",
    },
  },
  "asset-allocation": {
    file: "service-asset-allocation.jpg",
    alt: {
      en: "Illustration of separate panels holding different parts of a portfolio",
      "zh-hant": "以不同面板分別呈現投資組合各部位的插畫",
    },
  },
};

/** Service-area images, keyed by area slug. */
const AREA_DEFS: Record<string, ImageDef> = {
  "bay-area": {
    file: "area-bay-area.jpg",
    alt: {
      en: "Illustration of the San Francisco Bay Area skyline at night, seen across the water",
      "zh-hant": "跨越水面所見的舊金山灣區夜間天際線插畫",
    },
  },
  "southern-california": {
    file: "area-southern-california.jpg",
    alt: {
      en: "Illustration of a Southern California skyline at dusk with palm trees in the foreground",
      "zh-hant": "南加州黃昏天際線插畫，前景有棕櫚樹剪影",
    },
  },
  "remote-advisory": {
    file: "area-remote-advisory.jpg",
    alt: {
      en: "Illustration of a distant skyline with an observation tower, seen across water at night",
      "zh-hant": "夜間跨水面所見的遠方天際線與觀景塔插畫",
    },
  },
};

/** Compact region cards used on the home page cities strip. */
const AREA_CARD_DEFS: Record<string, ImageDef> = {
  "bay-area": { file: "card-bay-area.jpg", alt: AREA_DEFS["bay-area"].alt },
  "southern-california": { file: "card-southern-california.jpg", alt: AREA_DEFS["southern-california"].alt },
  "remote-advisory": { file: "card-remote-advisory.jpg", alt: AREA_DEFS["remote-advisory"].alt },
};

/** Article header images, keyed by post slug. */
const POST_DEFS: Record<string, ImageDef> = {
  "rsu-vs-iso-vs-nso": {
    file: "post-rsu-vs-iso-vs-nso.jpg",
    alt: {
      en: "Illustration of three paths branching from one grant, each ending at a different point",
      "zh-hant": "自同一筆授予分出三條路徑、各自通往不同終點的插畫",
    },
  },
  "avoid-surprise-tax-bill-when-rsus-vest": {
    file: "post-avoid-surprise-tax-bill-when-rsus-vest.jpg",
    alt: {
      en: "Illustration of columns of income with one column showing the gap left by flat withholding",
      "zh-hant": "收入柱狀圖插畫，其中一根呈現固定稅率預扣所留下的缺口",
    },
  },
  "financial-planning-h1b-green-card-holders": {
    file: "post-financial-planning-h1b-green-card-holders.jpg",
    alt: {
      en: "Illustration of arcs linking points across a long horizon",
      "zh-hant": "跨越遼闊地平線連結各點的弧線插畫",
    },
  },
  "529-plans-explained-taiwanese-american-families": {
    file: "post-529-plans-explained-taiwanese-american-families.jpg",
    alt: {
      en: "Illustration of savings bands stacking up over the years before college",
      "zh-hant": "在子女就讀大學前逐年堆疊的儲蓄區塊插畫",
    },
  },
  "should-you-exercise-isos-early": {
    file: "post-should-you-exercise-isos-early.jpg",
    alt: {
      en: "Illustration of a timeline where one decision splits into two outcomes",
      "zh-hant": "時間軸插畫，一個決定分出兩種結果",
    },
  },
};

export interface SiteImage {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
  alt: L<string>;
}

const OVERRIDES = altOverrides as Partial<Record<string, L<string>>>;

function build(def: ImageDef): SiteImage {
  const meta = manifest[def.file];
  return {
    src: `/images/${def.file}`,
    width: meta.width,
    height: meta.height,
    blurDataURL: meta.blurDataURL,
    alt: OVERRIDES[def.file] ?? def.alt,
  };
}

export type ImageKey = keyof typeof DEFS;

export const IMAGES: Record<ImageKey, SiteImage> = Object.fromEntries(
  Object.entries(DEFS).map(([k, v]) => [k, build(v)]),
) as Record<ImageKey, SiteImage>;

const SERVICE_IMAGES: Record<string, SiteImage> = Object.fromEntries(
  Object.entries(SERVICE_DEFS).map(([k, v]) => [k, build(v)]),
);
const AREA_IMAGES: Record<string, SiteImage> = Object.fromEntries(
  Object.entries(AREA_DEFS).map(([k, v]) => [k, build(v)]),
);
const POST_IMAGES: Record<string, SiteImage> = Object.fromEntries(
  Object.entries(POST_DEFS).map(([k, v]) => [k, build(v)]),
);

const AREA_CARD_IMAGES: Record<string, SiteImage> = Object.fromEntries(
  Object.entries(AREA_CARD_DEFS).map(([k, v]) => [k, build(v)]),
);

/**
 * Grace's portrait. Returns the real photograph once one is present in
 * public/images (see detectHeadshot in scripts/generate-artwork.mjs), and the
 * placeholder illustration until then, so the About page never 404s an image.
 */
const HEADSHOT_ALT: L<string> = {
  en: 'Grace Chen, financial advisor and founder of GloryToGlory Tax Strategy & Wealth Advisory',
  "zh-hant": "GloryToGlory 稅務策略與財富顧問創辦人、財務顧問 Grace Chen",
};

const HEADSHOT_PLACEHOLDER: SiteImage = {
  src: "/images/grace-headshot.svg",
  width: 600,
  height: 720,
  blurDataURL: "",
  alt: HEADSHOT_ALT,
};

export function headshotImage(): { image: SiteImage; isPlaceholder: boolean } {
  for (const file of ["grace-headshot.jpg", "grace-headshot.jpeg", "grace-headshot.png", "grace-headshot.webp"] as const) {
    const meta = (manifest as Record<string, { width: number; height: number; blurDataURL: string } | undefined>)[file];
    if (meta) {
      return {
        image: { src: `/images/${file}`, width: meta.width, height: meta.height, blurDataURL: meta.blurDataURL, alt: HEADSHOT_ALT },
        isPlaceholder: false,
      };
    }
  }
  return { image: HEADSHOT_PLACEHOLDER, isPlaceholder: true };
}

export const serviceImage = (slug: string): SiteImage | undefined => SERVICE_IMAGES[slug];
export const areaCardImage = (slug: string): SiteImage | undefined => AREA_CARD_IMAGES[slug];
export const areaImage = (slug: string): SiteImage | undefined => AREA_IMAGES[slug];
export const postImage = (slug: string): SiteImage | undefined => POST_IMAGES[slug];
