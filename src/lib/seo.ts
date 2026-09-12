import type { Metadata } from "next";
import { SITE } from "@/content/site";
import { LOCALES, LOCALE_TAG, OG_LOCALE, localePath, normalizePath, type Locale } from "./i18n";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || SITE.url).replace(/\/$/, "");

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${normalizePath(path)}`;
}

/** hreflang map for a page: en, zh-Hant and x-default (→ English). */
export function languageAlternates(path: string): Record<string, string> {
  const map: Record<string, string> = {};
  for (const l of LOCALES) map[LOCALE_TAG[l]] = absoluteUrl(localePath(l, path));
  map["x-default"] = absoluteUrl(localePath("en", path));
  return map;
}

interface BuildMetadataArgs {
  locale: Locale;
  /** English (unprefixed) path of the page, e.g. "/services/asset-allocation". */
  path: string;
  /** Keyword-first title; the site name is appended. */
  title: string;
  description: string;
  type?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  locale,
  path,
  title,
  description,
  type = "website",
  publishedTime,
  noIndex,
}: BuildMetadataArgs): Metadata {
  // shortName, not name: the full "GloryToGlory Tax Strategy & Wealth Advisory"
  // is 45 characters of suffix, which pushed every page past the ~60 characters
  // search results show and truncated the part that actually describes the page.
  // og:site_name below still carries the full legal name.
  const fullTitle = `${title} | ${SITE.shortName}`;
  const canonical = absoluteUrl(localePath(locale, path));

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
      languages: languageAlternates(path),
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE.name,
      locale: OG_LOCALE[locale],
      alternateLocale: LOCALES.filter((l) => l !== locale).map((l) => OG_LOCALE[l]),
      type,
      ...(publishedTime ? { publishedTime } : {}),
      images: [{ url: absoluteUrl(SITE.ogImage), width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(SITE.ogImage)],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
