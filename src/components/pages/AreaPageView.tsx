import type { Locale } from "@/lib/i18n";
import type { ServiceArea } from "@/content/types";
import { UI } from "@/content/site";
import { pageName } from "@/lib/content";
import { areaImage } from "@/content/images";
import { localBusinessSchema } from "@/lib/schema";
import { CtaSection } from "../CtaSection";
import { FaqAccordion } from "../FaqAccordion";
import { Hero } from "../Hero";
import { Icon } from "../Icon";
import { JsonLd } from "../JsonLd";
import { LLink } from "../LLink";
import { Reveal } from "../Reveal";
import { RichText } from "../RichText";
import { Section, SectionHeading } from "../Section";

const COPY = {
  en: { cities: "Cities we serve", services: "Services most relevant here", virtual: "How we meet", otherAreas: "Other regions" },
  "zh-hant": { cities: "服務城市", services: "最適合此地區的服務", virtual: "會談方式", otherAreas: "其他地區" },
};

export function AreaPageView({ area, locale, otherAreas }: { area: ServiceArea; locale: Locale; otherAreas: ServiceArea[] }) {
  const c = area.content[locale];
  const t = UI[locale].common;
  const copy = COPY[locale];

  return (
    <>
      <JsonLd data={localBusinessSchema(locale, area, c.metaDescription)} />
      <Hero
        locale={locale}
        title={c.h1}
        sub={c.heroSub}
        eyebrow={area.region[locale]}
        crumbs={[{ name: area.region[locale], path: area.path }]}
        image={areaImage(area.slug)}
      >
        <ul className="mt-7 flex flex-wrap gap-2" aria-label={copy.cities}>
          {area.citiesLocalized[locale].map((city) => (
            <li key={city} className="rounded-full border border-cream-100/20 bg-cream-100/5 px-3 py-1 text-sm text-cream-100/85">
              {city}
            </li>
          ))}
        </ul>
      </Hero>

      <Section tone="cream">
        <Reveal className="mx-auto max-w-3xl">
          <div className="prose-site">
            {c.intro.map((p, i) => (
              <p key={i} className={i === 0 ? "text-xl leading-relaxed text-navy-900" : ""}>
                <RichText text={p} />
              </p>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading title={copy.services} />
        </Reveal>
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {c.relevantServices.map((s, i) => (
            <Reveal as="li" key={s.path} delay={i * 0.08}>
              <LLink
                href={s.path}
                className="group block h-full rounded-2xl border border-cream-300 bg-cream-50 p-7 shadow-[var(--shadow-card)] transition-colors hover:border-gold-500/60"
              >
                <h3 className="text-xl text-navy-900">{pageName(s.path, locale)}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-700">{s.why}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 group-hover:text-navy-900">
                  {t.learnMore} <span aria-hidden="true">→</span>
                </span>
              </LLink>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="navy">
        <Reveal className="grid items-start gap-10 lg:grid-cols-[auto_1fr]">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/40 text-gold-400">
            <Icon name="video" className="h-7 w-7" />
          </span>
          <div className="max-w-3xl">
            <h2 className="gold-underline text-3xl text-cream-50">{copy.virtual}</h2>
            <p className="mt-8 text-lg leading-relaxed text-cream-100/80">{c.virtualNote}</p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-600/50 bg-emerald-700/20 px-3 py-1 text-sm text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              {t.virtualBadge}
            </p>
          </div>
        </Reveal>
      </Section>

      {c.faqs.length > 0 && (
        <Section tone="cream">
          <div className="mx-auto max-w-4xl">
            <FaqAccordion faqs={c.faqs} title={t.faqTitle} />
          </div>
        </Section>
      )}

      <Section tone="white" className="!py-12">
        <Reveal className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <span className="eyebrow text-emerald-700">{copy.otherAreas}</span>
          {otherAreas.map((a) => (
            <LLink key={a.path} href={a.path} className="text-sm font-semibold text-navy-900 underline decoration-gold-500 underline-offset-4 hover:text-emerald-700">
              {a.region[locale]}
            </LLink>
          ))}
        </Reveal>
      </Section>

      <CtaSection locale={locale} />
    </>
  );
}
