import type { Locale } from "../lib/i18n";

/** A value that exists in every supported language. */
export type L<T> = Record<Locale, T>;

export interface FAQ {
  q: string;
  a: string;
}

export interface ProcessStep {
  title: string;
  body: string;
}

export type IconName =
  | "compass"
  | "shield"
  | "chart"
  | "layers"
  | "sunrise"
  | "graduation"
  | "pie"
  | "options"
  | "globe"
  | "video"
  | "map"
  | "spark";

/** Per-language content for a service page (parent or sub-page). */
export interface ServiceContent {
  /** Keyword-focused title; the site suffix is appended automatically. */
  metaTitle: string;
  /** 150–160 characters. */
  metaDescription: string;
  h1: string;
  heroSub: string;
  /** 150–200 words for parent pages, ~200 for equity sub-pages. Array of paragraphs. */
  intro: string[];
  /** Heading for the bullet list, e.g. "What This Covers" / "What We Handle". */
  coversTitle: string;
  covers: string[];
  /** 3–4 steps. Sub-pages may leave this empty. */
  process: ProcessStep[];
  /** Short paragraph on why an independent, fee-transparent advisor matters. */
  whyIndependent: string;
  /** 4–6 questions (6 for equity sub-pages). */
  faqs: FAQ[];
}

export interface Service {
  /** Last URL segment, e.g. "tax-strategy-planning". */
  slug: string;
  /** Full English path, e.g. "/services/tax-strategy-planning". */
  path: string;
  /** Parent hub path for sub-pages, e.g. "/services/equity-compensation". */
  parent?: string;
  icon: IconName;
  /** Short display name used in nav, cards and breadcrumbs. */
  name: L<string>;
  /** One-sentence card blurb. */
  cardBlurb: L<string>;
  /** Related page paths (2–3) for internal linking. */
  related: string[];
  content: L<ServiceContent>;
}

export interface AreaContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSub: string;
  /** ~200 words naming the specific cities. */
  intro: string[];
  /** Which services matter most here and why. */
  relevantServices: { path: string; why: string }[];
  /** Virtual-first framing, in-person flexibility if local. */
  virtualNote: string;
  faqs: FAQ[];
}

export interface ServiceArea {
  slug: string;
  /** e.g. "/bay-area" */
  path: string;
  icon: IconName;
  region: L<string>;
  /** English city names used in schema.org areaServed. */
  cities: string[];
  citiesLocalized: L<string[]>;
  content: L<AreaContent>;
}

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export interface BlogPost {
  slug: string;
  /** ISO date, e.g. "2026-08-12". */
  date: string;
  readingMinutes: number;
  category: L<string>;
  title: L<string>;
  excerpt: L<string>;
  metaDescription: L<string>;
  /** 300–500 words. Inline links use markdown syntax: [text](/services/...). */
  body: L<Block[]>;
  /** Service paths this post should link to. */
  relatedServices: string[];
}

/** Long-form informational pages (Disclaimer, Privacy Policy). */
export interface LegalPageContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSub: string;
  /** e.g. "September 2026" */
  lastUpdated: string;
  /** Prominent warning banner (used on the Disclaimer placeholder). */
  notice?: string;
  sections: { heading: string; blocks: Block[] }[];
}
