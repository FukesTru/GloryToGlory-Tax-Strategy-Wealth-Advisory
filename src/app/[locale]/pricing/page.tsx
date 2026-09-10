import type { Metadata } from "next";
import { CtaSection } from "@/components/CtaSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { Hero } from "@/components/Hero";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { pricingPage } from "@/content/pages/pricing";
import type { IconName } from "@/content/types";
import { IMAGES } from "@/content/images";
import { SITE } from "@/content/site";
import { STATIC_PAGE_NAMES } from "@/lib/content";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { buildMetadata } from "@/lib/seo";

const CONCIERGE_ICONS: IconName[] = ["compass", "spark", "video", "chart"];

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const c = pricingPage[locale];
  return buildMetadata({ locale, path: "/pricing", title: c.metaTitle, description: c.metaDescription });
}

export default async function PricingPage({ params }: { params: LocaleParams }) {
  const locale = await resolveLocale(params);
  const c = pricingPage[locale];

  return (
    <>
      <Hero
        locale={locale}
        eyebrow={c.eyebrow}
        title={c.h1}
        sub={c.heroSub}
        crumbs={[{ name: STATIC_PAGE_NAMES["/pricing"][locale], path: "/pricing" }]}
        image={IMAGES.heroPricing}
      />

      <Section tone="cream">
        <Reveal className="mx-auto max-w-3xl">
          <div className="prose-site">
            {c.intro.map((p, i) => (
              <p key={i} className={i === 0 ? "text-xl leading-relaxed text-navy-900" : ""}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading title={c.tiersTitle} />
        </Reveal>
        <ul className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {c.tiers.map((tier, i) => (
            <Reveal as="li" key={tier.id} delay={Math.min(i * 0.08, 0.32)} className="h-full">
              <article
                className={`flex h-full flex-col rounded-2xl border bg-cream-50 p-7 shadow-[var(--shadow-card)] ${
                  tier.featured ? "border-gold-500 ring-1 ring-gold-500/40" : "border-cream-300"
                }`}
              >
                <h3 className="text-xl text-navy-900">{tier.name}</h3>
                <p className="mt-1 text-sm font-medium text-emerald-700">{tier.subtitle}</p>
                <p className="mt-5 font-heading text-4xl text-navy-900">{tier.price}</p>
                <p className="mt-4 text-[0.9rem] leading-relaxed text-ink-700">{tier.who}</p>

                <p className="mt-6 rounded-xl bg-navy-900 px-4 py-3 text-[0.9rem] leading-relaxed text-cream-100">
                  {tier.hero}
                </p>

                <ul className="mt-5 flex-1 space-y-3">
                  {tier.includes.map((item, j) => (
                    <li key={j} className="flex gap-2.5 text-[0.9rem] leading-relaxed text-ink-700">
                      <svg
                        viewBox="0 0 20 20"
                        className="mt-1 h-4 w-4 shrink-0 text-gold-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m4 10.5 4 4 8-9" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={SITE.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
                    tier.featured
                      ? "bg-gold-500 text-navy-900 hover:bg-gold-400"
                      : "border border-navy-900/20 text-navy-900 hover:border-gold-500 hover:text-emerald-700"
                  }`}
                >
                  {locale === "en" ? "Book a free session" : "預約免費諮詢"}
                </a>
              </article>
            </Reveal>
          ))}
        </ul>
        <Reveal>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-ink-500">{c.priceNote}</p>
        </Reveal>
      </Section>

      <Section tone="navy">
        <Reveal>
          <SectionHeading eyebrow={c.eyebrow} title={c.concierge.title} sub={c.concierge.intro} tone="dark" />
        </Reveal>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.concierge.items.map((item, i) => (
            <Reveal as="li" key={i} delay={i * 0.08} className="rounded-2xl border border-cream-100/10 bg-navy-800/50 p-7">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700/30 text-emerald-100">
                <Icon name={CONCIERGE_ICONS[i % CONCIERGE_ICONS.length]} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg text-cream-50">{item.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-cream-100/70">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="emerald">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading title={c.chooseTitle} align="center" />
          <p className="mt-6 text-lg leading-relaxed text-ink-700">{c.chooseSub}</p>
          <a
            href={SITE.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400"
          >
            {locale === "en" ? "See available times" : "查看可預約時段"}
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </Section>

      <Section tone="cream">
        <div className="mx-auto max-w-4xl">
          <FaqAccordion faqs={c.faqs} title={c.faqTitle} />
        </div>
      </Section>

      <CtaSection locale={locale} />
    </>
  );
}
