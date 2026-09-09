import type { Locale } from "@/lib/i18n";
import type { Service } from "@/content/types";
import { UI } from "@/content/site";
import { getService, STATIC_PAGE_NAMES } from "@/lib/content";
import { serviceSchema, stripLinks, type Crumb } from "@/lib/schema";
import { CtaSection } from "../CtaSection";
import { FaqAccordion } from "../FaqAccordion";
import { Hero } from "../Hero";
import { Icon } from "../Icon";
import { JsonLd } from "../JsonLd";
import { LLink } from "../LLink";
import { ProcessTimeline } from "../ProcessTimeline";
import { RelatedLinks } from "../RelatedLinks";
import { Reveal } from "../Reveal";
import { RichText } from "../RichText";
import { Section, SectionHeading } from "../Section";

export function serviceCrumbs(service: Service, locale: Locale): Crumb[] {
  const crumbs: Crumb[] = [{ name: STATIC_PAGE_NAMES["/services"][locale], path: "/services" }];
  if (service.parent) {
    const parent = getService(service.parent);
    if (parent) crumbs.push({ name: parent.name[locale], path: parent.path });
  }
  crumbs.push({ name: service.name[locale], path: service.path });
  return crumbs;
}

export function ServicePageView({ service, locale }: { service: Service; locale: Locale }) {
  const c = service.content[locale];
  const t = UI[locale].common;
  const isSub = Boolean(service.parent);

  return (
    <>
      <JsonLd data={serviceSchema(locale, service.name[locale], stripLinks(c.metaDescription), service.path)} />
      <Hero locale={locale} title={c.h1} sub={c.heroSub} crumbs={serviceCrumbs(service, locale)} eyebrow={isSub ? getService(service.parent!)?.name[locale] : STATIC_PAGE_NAMES["/services"][locale]} />

      {/* Intro + covers */}
      <Section tone="cream">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal>
            <div className="prose-site">
              {c.intro.map((p, i) => (
                <p key={i} className={i === 0 ? "text-xl leading-relaxed text-navy-900" : ""}>
                  <RichText text={p} />
                </p>
              ))}
            </div>
            {isSub && (
              <LLink
                href={service.parent!}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-navy-900"
              >
                <span aria-hidden="true">←</span> {t.backToHub}
              </LLink>
            )}
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-cream-300 bg-cream-50 p-8 shadow-[var(--shadow-card)]">
              <h2 className="flex items-center gap-3 text-2xl text-navy-900">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                {c.coversTitle}
              </h2>
              <ul className="mt-6 space-y-3.5">
                {c.covers.map((item, i) => (
                  <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-700">
                    <svg viewBox="0 0 20 20" className="mt-1 h-4 w-4 shrink-0 text-gold-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="m4 10.5 4 4 8-9" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {c.process.length > 0 && (
        <Section tone="navy">
          <ProcessTimeline steps={c.process} title={t.processTitle} />
        </Section>
      )}

      <Section tone="emerald">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading title={t.whyIndependentTitle} align="center" />
          <p className="mt-6 text-lg leading-relaxed text-ink-700">{c.whyIndependent}</p>
        </Reveal>
      </Section>

      {c.faqs.length > 0 && (
        <Section tone="cream">
          <div className="mx-auto max-w-4xl">
            <FaqAccordion faqs={c.faqs} title={t.faqTitle} />
          </div>
        </Section>
      )}

      <Section tone="white">
        <RelatedLinks paths={service.related} locale={locale} title={t.relatedServices} />
      </Section>

      <CtaSection locale={locale} />
    </>
  );
}
