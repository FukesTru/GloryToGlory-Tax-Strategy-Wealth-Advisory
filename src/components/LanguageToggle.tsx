"use client";

import { LOCALES, LOCALE_LABEL, LOCALE_NAME, type Locale } from "@/lib/i18n";
import { UI } from "@/content/site";
import { useLocale } from "./LocaleProvider";
import { useLocaleSwitch } from "./useLocaleSwitch";

/**
 * EN / 繁中 toggle. Persists the choice (cookie for the server proxy,
 * localStorage as a courtesy) and performs a client-side navigation to the
 * counterpart URL — no full page reload.
 */
export function LanguageToggle({ tone = "light" }: { tone?: "light" | "dark" }) {
  const locale = useLocale();
  const switchTo = useLocaleSwitch();

  function choose(next: Locale) {
    if (next !== locale) switchTo(next);
  }

  const base = tone === "light" ? "border-cream-100/25 text-cream-100" : "border-navy-900/20 text-navy-900";
  const active = tone === "light" ? "bg-cream-100 text-navy-900" : "bg-navy-900 text-cream-50";

  return (
    <div
      role="group"
      aria-label={UI[locale].toggle.label}
      className={`inline-flex items-center rounded-full border p-0.5 text-xs font-semibold tracking-wide ${base}`}
    >
      {LOCALES.map((l) => (
        <button
          key={l}
          type="button"
          lang={l === "en" ? "en" : "zh-Hant"}
          aria-pressed={l === locale}
          aria-label={LOCALE_NAME[l]}
          onClick={() => choose(l)}
          className={`rounded-full px-2.5 py-1 transition-colors duration-300 ${
            l === locale ? active : "opacity-80 hover:opacity-100"
          }`}
        >
          {LOCALE_LABEL[l]}
        </button>
      ))}
    </div>
  );
}
