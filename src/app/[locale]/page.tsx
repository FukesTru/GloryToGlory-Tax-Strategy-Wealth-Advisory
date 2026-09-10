import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { CitiesStrip } from "@/components/CitiesStrip";
import { CtaSection } from "@/components/CtaSection";
import { Hero } from "@/components/Hero";
import { IMAGES } from "@/content/images";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { LLink } from "@/components/LLink";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { ServicesGrid } from "@/components/ServiceCard";
import { TrustStrip } from "@/components/TrustStrip";
import { homePage } from "@/content/pages/home";
import { SITE } from "@/content/site";
import type { IconName } from "@/content/types";
import { PARENT_SERVICES, POSTS } from "@/lib/content";
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

      <TrustStrip
        locale={locale}
        items={c.trust.map((t) => ({
          label: t.label,
          value: t.value,
          placeholder: t.placeholder,
          href: t.linkedin ? SITE.owner.linkedin : undefined,
          path: t.path,
        }))}
      />

      <Section tone="cream">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading eyebrow={c.services.eyebrow} title={c.services.title} sub={c.services.sub} />
          </Reveal>
          <Reveal delay={0.1}>
            <LLink href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-navy-900">
              {c.services.allLink} <span aria-hidden="true">→</span>
            </LLink>
          </Reveal>
        </div>
        <div className="mt-12">
          <ServicesGrid services={PARENT_SERVICES} locale={locale} />
        </div>
      </Section>

      <Section tone="navy">
        <Reveal>
          <SectionHeading eyebrow={c.whoWeServe.eyebrow} title={c.whoWeServe.title} sub={c.whoWeServe.intro} tone="dark" />
        </Reveal>
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
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

      <Section tone="cream">
        <CitiesStrip locale={locale} title={c.cities.title} sub={c.cities.sub} />
      </Section>

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

      <CtaSection locale={locale} />
    </>
  );
}
