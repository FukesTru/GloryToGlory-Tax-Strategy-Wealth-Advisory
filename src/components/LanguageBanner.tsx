"use client";

import { UI } from "@/content/site";
import { LOCALE_LABEL, LOCALE_NAME, type Locale } from "@/lib/i18n";
import { useLocale } from "./LocaleProvider";
import { useLocaleSwitch } from "./useLocaleSwitch";

/**
 * Home-page notice that the whole site exists in the other language.
 *
 * The headline is written IN the other language on purpose: a visitor who
 * reads Chinese and lands on the English home page needs to see Chinese to
 * know there is a version for them. Clicking switches straight away and
 * remembers the choice, and the text also points at the EN / 繁中 toggle in
 * the header for anyone who lands on an inner page later.
 */
export function LanguageBanner() {
  const locale = useLocale();
  const t = UI[locale].langPromo;
  const other: Locale = locale === "en" ? "zh-hant" : "en";
  const switchTo = useLocaleSwitch();

  return (
    <aside aria-label={LOCALE_NAME[other]} className="border-y border-gold-500/25 bg-navy-900">
      <div className="container-x flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <div lang={other === "en" ? "en" : "zh-Hant"}>
          <p className="font-heading text-lg leading-snug text-cream-50 sm:text-xl">{t.title}</p>
          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-cream-100/70">{t.body}</p>
          <p lang={locale === "en" ? "en" : "zh-Hant"} className="mt-1.5 text-xs text-cream-100/65">
            {t.hint}
          </p>
        </div>
        <button
          type="button"
          onClick={() => switchTo(other)}
          lang={other === "en" ? "en" : "zh-Hant"}
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400 sm:self-auto"
        >
          <span aria-hidden="true" className="rounded-full bg-navy-900/15 px-1.5 py-0.5 text-[0.7rem] font-bold">
            {LOCALE_LABEL[other]}
          </span>
          {t.cta}
        </button>
      </div>
    </aside>
  );
}
