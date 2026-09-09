import type { Locale } from "@/lib/i18n";
import { pageBlurb, pageName } from "@/lib/content";
import { LLink } from "./LLink";
import { Reveal } from "./Reveal";

/** Internal-linking block: 2–3 related pages as cards. */
export function RelatedLinks({ paths, locale, title, tone = "light" }: { paths: string[]; locale: Locale; title: string; tone?: "light" | "dark" }) {
  if (!paths.length) return null;
  const dark = tone === "dark";
  return (
    <div>
      <Reveal>
        <h2 className={`gold-underline text-2xl ${dark ? "text-cream-50" : "text-navy-900"}`}>{title}</h2>
      </Reveal>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {paths.map((p, i) => (
          <Reveal as="li" key={p} delay={i * 0.08}>
            <LLink
              href={p}
              className={`group block h-full rounded-xl border p-5 transition-colors ${
                dark
                  ? "border-cream-100/10 bg-navy-800/50 hover:border-gold-500/50"
                  : "border-cream-300 bg-cream-50 hover:border-gold-500/60"
              }`}
            >
              <span className={`text-lg font-medium ${dark ? "text-cream-50" : "text-navy-900"}`}>{pageName(p, locale)}</span>
              {pageBlurb(p, locale) && (
                <span className={`mt-2 block text-sm leading-relaxed ${dark ? "text-cream-100/65" : "text-ink-700"}`}>
                  {pageBlurb(p, locale)}
                </span>
              )}
              <span className={`mt-3 inline-block text-sm font-semibold ${dark ? "text-gold-400" : "text-emerald-700"}`}>
                <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </LLink>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
