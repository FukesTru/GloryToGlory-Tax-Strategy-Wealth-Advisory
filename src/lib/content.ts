/**
 * Content registry — single import point for pages, nav, sitemap and breadcrumbs.
 */
import type { Locale } from "./i18n";
import type { BlogPost, Service, ServiceArea } from "@/content/types";
import { UI } from "@/content/site";

import { financialPlanning } from "@/content/services/financial-planning";
import { taxStrategyPlanning } from "@/content/services/tax-strategy-planning";
import { equityCompensation } from "@/content/services/equity-compensation";
import { rsuRsaPlanning } from "@/content/services/rsu-rsa-planning";
import { stockOptionsIsoNso } from "@/content/services/stock-options-iso-nso";
import { retirementPlanning } from "@/content/services/retirement-planning";
import { educationFundPlanning } from "@/content/services/education-fund-planning";
import { assetAllocation } from "@/content/services/asset-allocation";

import { bayArea } from "@/content/areas/bay-area";
import { southernCalifornia } from "@/content/areas/southern-california";
import { remoteAdvisory } from "@/content/areas/remote-advisory";

import { rsuVsIsoVsNso } from "@/content/blog/rsu-vs-iso-vs-nso";
import { avoidSurpriseTaxBillRsu } from "@/content/blog/avoid-surprise-tax-bill-when-rsus-vest";
import { financialPlanningH1bGreenCard } from "@/content/blog/financial-planning-h1b-green-card-holders";
import { plans529TaiwaneseAmerican } from "@/content/blog/529-plans-explained-taiwanese-american-families";
import { exerciseIsosEarly } from "@/content/blog/should-you-exercise-isos-early";

/** The six parent services, in display order. */
export const PARENT_SERVICES: Service[] = [
  financialPlanning,
  taxStrategyPlanning,
  equityCompensation,
  retirementPlanning,
  educationFundPlanning,
  assetAllocation,
];

export const SUB_SERVICES: Service[] = [rsuRsaPlanning, stockOptionsIsoNso];

export const ALL_SERVICES: Service[] = [...PARENT_SERVICES, ...SUB_SERVICES];

export const AREAS: ServiceArea[] = [bayArea, southernCalifornia, remoteAdvisory];

export const POSTS: BlogPost[] = [
  rsuVsIsoVsNso,
  avoidSurpriseTaxBillRsu,
  financialPlanningH1bGreenCard,
  plans529TaiwaneseAmerican,
  exerciseIsosEarly,
].sort((a, b) => (a.date < b.date ? 1 : -1));

export function getService(path: string): Service | undefined {
  return ALL_SERVICES.find((s) => s.path === path);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return ALL_SERVICES.find((s) => s.slug === slug);
}

export function getArea(slug: string): ServiceArea | undefined {
  return AREAS.find((a) => a.slug === slug);
}

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Static page names for breadcrumbs, sitemap and related-link cards. */
export const STATIC_PAGE_NAMES: Record<string, Record<Locale, string>> = {
  "/": { en: "Home", "zh-hant": "首頁" },
  "/about": { en: "About Grace", "zh-hant": "認識 Grace" },
  "/services": { en: "Services", "zh-hant": "服務項目" },
  "/blog": { en: "Insights & Blog", "zh-hant": "理財觀點" },
  "/contact": { en: "Contact", "zh-hant": "聯絡我們" },
  "/disclaimer": { en: "Disclaimer", "zh-hant": "免責聲明" },
  "/privacy-policy": { en: "Privacy Policy", "zh-hant": "隱私權政策" },
  "/sitemap": { en: "Sitemap", "zh-hant": "網站地圖" },
};

/** Human name for any internal path, in the given locale. */
export function pageName(path: string, locale: Locale): string {
  const s = getService(path);
  if (s) return s.name[locale];
  const a = AREAS.find((x) => x.path === path);
  if (a) return a.region[locale];
  const p = POSTS.find((x) => `/blog/${x.slug}` === path);
  if (p) return p.title[locale];
  return STATIC_PAGE_NAMES[path]?.[locale] ?? UI[locale].common.learnMore;
}

/** One-line blurb for related-link cards. */
export function pageBlurb(path: string, locale: Locale): string | undefined {
  const s = getService(path);
  if (s) return s.cardBlurb[locale];
  const a = AREAS.find((x) => x.path === path);
  if (a) return a.content[locale].heroSub;
  const p = POSTS.find((x) => `/blog/${x.slug}` === path);
  if (p) return p.excerpt[locale];
  return undefined;
}

/** Every indexable English path on the site (used by sitemap.xml and the HTML sitemap). */
export function allPaths(): string[] {
  return [
    "/",
    "/about",
    "/services",
    ...ALL_SERVICES.map((s) => s.path),
    ...AREAS.map((a) => a.path),
    "/blog",
    ...POSTS.map((p) => `/blog/${p.slug}`),
    "/contact",
    "/disclaimer",
    "/privacy-policy",
    "/sitemap",
  ];
}
