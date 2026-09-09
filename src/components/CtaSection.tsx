import type { Locale } from "@/lib/i18n";
import { SITE, UI } from "@/content/site";
import { LLink } from "./LLink";
import { Reveal } from "./Reveal";

/** Full-width closing CTA. Variant "blog" swaps in the article-specific copy. */
export function CtaSection({ locale, variant = "default" }: { locale: Locale; variant?: "default" | "blog" }) {
  const t = UI[locale].cta;
  const title = variant === "blog" ? t.blogTitle : t.title;
  const body = variant === "blog" ? t.blogBody : t.body;
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 py-20 text-cream-100 sm:py-24">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 -z-10 h-80 w-80 rounded-full bg-emerald-700/25 blur-3xl"
      />
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="gold-underline-center text-3xl leading-tight text-cream-50 sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-cream-100/80">{body}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LLink
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-gold-500 px-7 py-3.5 text-sm font-semibold text-gold-400 transition-colors duration-300 hover:bg-gold-500 hover:text-navy-900"
            >
              {t.button}
            </LLink>
            <a href={SITE.phoneHref} className="text-sm font-medium text-cream-100/75 transition-colors hover:text-cream-50">
              {t.secondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
