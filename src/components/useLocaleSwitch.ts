"use client";

import { usePathname, useRouter } from "next/navigation";
import { LOCALE_COOKIE, localePath, splitLocale, type Locale } from "@/lib/i18n";

/**
 * Returns a function that switches the site to `next`, remembering the choice
 * (cookie for proxy.ts, localStorage as a courtesy) and navigating to the
 * counterpart URL client-side — no full page reload.
 *
 * Shared by the header toggle and the home-page language banner so both
 * persist the choice the same way.
 */
export function useLocaleSwitch() {
  const pathname = usePathname();
  const router = useRouter();
  const { path } = splitLocale(pathname);

  return function switchTo(next: Locale) {
    try {
      document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
      window.localStorage.setItem(LOCALE_COOKIE, next);
    } catch {
      /* storage unavailable — navigation still works */
    }
    router.push(localePath(next, path));
  };
}
