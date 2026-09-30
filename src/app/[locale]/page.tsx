import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { CitiesStrip } from "@/components/CitiesStrip";
import { CtaSection } from "@/components/CtaSection";
import { Hero } from "@/components/Hero";
import { IMAGES } from "@/content/images";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { LanguageBanner } from "@/components/LanguageBanner";
import { LLink } from "@/components/LLink";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustStrip } from "@/components/TrustStrip";
import { homePage } from "@/content/pages/home";
import type { IconName } from "@/content/types";
import { getService, HAS_POSTS, PARENT_SERVICES, POSTS } from "@/lib/content";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { financialServiceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const c = homePage[locale];
  return buildMetadata({ locale, path: "/", title: c.metaTitle, description: c.metaDescription });
}

const GROUP_ICONS: IconName[] = ["layers", "globe", "compass", "spark"];

export default async function HomePage({ params }: { params: LocaleParams }) {
  const locale = await resolveLocale(params);
  const c = homePage[locale];

  return (
    <>
      <JsonLd data={financialServiceSchema(locale, PARENT_SERVICES.map((s) => ({ name: s.name[locale], path: s.path })))} />

      <Hero
        locale={locale}
        size="large"
        eyebrow={c.hero.eyebrow}
        title={c.hero.h1}
        sub={c.hero.sub}
        primary={{ label: c.hero.primary, href: "/contact" }}
        secondary={{ label: c.hero.secondary, href: "/services" }}
        image={IMAGES.heroHome}
      />

      <LanguageBanner />

      <TrustStrip
        locale={locale}
        items={c.trust.map((t) => ({
          label: t.label,
          value: t.value,
          placeholder: t.placeholder,
          path: t.path,
        }))}
      />

      <Section tone="cream">
        <Reveal>
          <SectionHeading eyebrow={c.questions.eyebrow} title={c.questions.title} sub={c.questions.sub} />
        </Reveal>
        <ul className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {c.questions.items.map((q, i) => (
            <Reveal
              as="li"
              key={i}
              delay={Math.min(i * 0.05, 0.3)}
              className="flex gap-3 rounded-2xl border border-cream-300 bg-cream-50 p-6 shadow-[var(--shadow-card)]"
            >
              <span aria-hidden="true" className="font-heading text-xl leading-none text-gold-600">
                ?
              </span>
              <p className="text-[0.95rem] leading-relaxed text-ink-900">{q}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.15} className="mt-10">
          <LLink
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-navy-900"
          >
            {c.hero.primary} <span aria-hidden="true">→</span>
          </LLink>
        </Reveal>
      </Section>

      <Section tone="navy">
        <Reveal>
          <SectionHeading eyebrow={c.whoWeServe.eyebrow} title={c.whoWeServe.title} sub={c.whoWeServe.intro} tone="dark" />
        </Reveal>
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {c.whoWeServe.groups.map((g, i) => (
            <Reveal as="li" key={i} delay={i * 0.08} className="rounded-2xl border border-cream-100/10 bg-navy-800/50 p-7">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700/30 text-emerald-100">
                <Icon name={GROUP_ICONS[i % GROUP_ICONS.length]} className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl text-cream-50">{g.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-cream-100/70">{g.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading eyebrow={c.whyUs.eyebrow} title={c.whyUs.title} />
        </Reveal>
        <ul className="mt-12 grid gap-x-10 gap-y-6 md:grid-cols-2">
          {c.whyUs.items.map((item, i) => (
            <Reveal as="li" key={i} delay={Math.min(i * 0.07, 0.35)} className="flex gap-4 border-b border-cream-300 pb-6">
              <span aria-hidden="true" className="mt-1 text-gold-600">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 5 5L20 7" />
                </svg>
              </span>
              <p className="text-[0.95rem] leading-relaxed text-ink-700">
                <span className="font-semibold text-navy-900">{item.title}:</span> {item.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="cream">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading eyebrow={c.specialties.eyebrow} title={c.specialties.title} sub={c.specialties.sub} />
          </Reveal>
          <Reveal delay={0.1}>
            <LLink href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-navy-900">
              {c.specialties.allLink} <span aria-hidden="true">→</span>
            </LLink>
          </Reveal>
        </div>
        <ul className="mt-12 grid gap-5 lg:grid-cols-3">
          {c.specialties.items.map((item, i) => {
            const service = getService(item.path);
            if (!service) return null;
            return <ServiceCard key={item.path} service={service} locale={locale} index={i} title={item.title} />;
          })}
        </ul>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-4xl text-[0.95rem] leading-relaxed text-ink-700">{c.specialties.alsoAvailable}</p>
        </Reveal>
      </Section>

      <Section tone="cream">
        <CitiesStrip locale={locale} title={c.cities.title} sub={c.cities.sub} />
      </Section>

      {HAS_POSTS && (
        <Section tone="white">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionHeading eyebrow={c.blog.eyebrow} title={c.blog.title} sub={c.blog.sub} />
            </Reveal>
            <Reveal delay={0.1}>
              <LLink href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-navy-900">
                {c.blog.cta} <span aria-hidden="true">→</span>
              </LLink>
            </Reveal>
          </div>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {POSTS.slice(0, 3).map((p, i) => (
              <BlogCard key={p.slug} post={p} locale={locale} index={i} />
            ))}
          </ul>
        </Section>
      )}

      <CtaSection locale={locale} />
    </>
  );
}
