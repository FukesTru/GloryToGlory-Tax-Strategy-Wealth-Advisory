import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALE_COOKIE, LOCALES, isLocale } from "@/lib/i18n";

/**
 * Locale routing.
 *
 *  /about            → rewritten internally to /en/about   (URL stays /about)
 *  /en/about         → 308 redirect to /about               (one canonical EN URL)
 *  /zh-hant/about    → served as-is
 *
 * "Remembers the visitor's choice": when the language toggle has stored
 * NEXT_LOCALE=zh-hant and the visitor opens an unprefixed URL, we redirect
 * to the 繁體中文 version. Search engines never send the cookie, so they
 * always crawl the canonical URL they requested.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // 1. Collapse the explicit default-locale prefix.
  if (pathname === `/${DEFAULT_LOCALE}` || pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  // 2. Already prefixed with a non-default locale → pass through.
  const prefixed = LOCALES.some(
    (l) => l !== DEFAULT_LOCALE && (pathname === `/${l}` || pathname.startsWith(`/${l}/`)),
  );
  if (prefixed) return NextResponse.next();

  // 3. Honour a remembered non-default language preference.
  const preferred = request.cookies.get(LOCALE_COOKIE)?.value;
  if (isLocale(preferred) && preferred !== DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? `/${preferred}` : `/${preferred}${pathname}`;
    url.search = search;
    return NextResponse.redirect(url, 307);
  }

  // 4. Serve the default locale from the unprefixed URL.
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${DEFAULT_LOCALE}` : `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Everything except Next internals, API routes, metadata files and static assets.
    "/((?!api|_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml|opengraph-image|icon|apple-icon|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
