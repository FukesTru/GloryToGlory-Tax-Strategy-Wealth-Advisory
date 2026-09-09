/**
 * Lightweight i18n helpers.
 *
 * URL scheme:
 *   English (default)      → unprefixed   e.g. /services/tax-strategy-planning
 *   Traditional Chinese    → /zh-hant/... e.g. /zh-hant/services/tax-strategy-planning
 *
 * Internally every route lives under app/[locale]. `src/proxy.ts` rewrites
 * unprefixed requests to /en/... so the English URLs stay clean.
 */

export const LOCALES = ["en", "zh-hant"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

/** BCP-47 tag used for <html lang>, hreflang, og:locale, schema.org inLanguage. */
export const LOCALE_TAG: Record<Locale, string> = {
  en: "en",
  "zh-hant": "zh-Hant",
};

export const OG_LOCALE: Record<Locale, string> = {
  en: "en_US",
  "zh-hant": "zh_TW",
};

export const LOCALE_LABEL: Record<Locale, string> = {
  en: "EN",
  "zh-hant": "繁中",
};

export const LOCALE_NAME: Record<Locale, string> = {
  en: "English",
  "zh-hant": "繁體中文",
};

/** Cookie used to remember the visitor's language choice (read by proxy.ts). */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export function isLocale(value: string | undefined | null): value is Locale {
  return LOCALES.includes(value as Locale);
}

/** Normalize a path so it always starts with "/" and never ends with "/" (except root). */
export function normalizePath(path: string): string {
  if (!path) return "/";
  let p = path.startsWith("/") ? path : `/${path}`;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p;
}

/** Build the public URL path for a page in a given locale. */
export function localePath(locale: Locale, path: string): string {
  const p = normalizePath(path);
  if (locale === DEFAULT_LOCALE) return p;
  return p === "/" ? `/${locale}` : `/${locale}${p}`;
}

/** Strip a locale prefix from a public path, returning { locale, path }. */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const p = normalizePath(pathname);
  for (const locale of LOCALES) {
    if (locale === DEFAULT_LOCALE) continue;
    if (p === `/${locale}`) return { locale, path: "/" };
    if (p.startsWith(`/${locale}/`)) return { locale, path: p.slice(locale.length + 1) };
  }
  return { locale: DEFAULT_LOCALE, path: p };
}

/** The other locale (used by the EN / 繁中 toggle). */
export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "zh-hant" : "en";
}

/** Pick a localized value with a safe fallback to English. */
export function pick<T>(value: Record<Locale, T>, locale: Locale): T {
  return value[locale] ?? value[DEFAULT_LOCALE];
}
