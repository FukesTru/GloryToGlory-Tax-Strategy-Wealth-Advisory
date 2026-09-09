import type { Metadata } from "next";
import { CtaSection } from "@/components/CtaSection";
import { Hero } from "@/components/Hero";
import { LLink } from "@/components/LLink";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { ServicesGrid } from "@/components/ServiceCard";
import { servicesHubPage } from "@/content/pages/services-hub";
import { PARENT_SERVICES, STATIC_PAGE_NAMES } from "@/lib/content";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const c = servicesHubPage[locale];
  return buildMetadata({ locale, path: "/services", title: c.metaTitle, description: c.metaDescription });
}

export default async function ServicesHubPage({ params }: { params: LocaleParams }) {
  const locale = await resolveLocale(params);
  const c = servicesHubPage[locale];

  return (
    <>
      <Hero
        locale={locale}
        eyebrow={c.eyebrow}
        title={c.h1}
        sub={c.heroSub}
        crumbs={[{ name: STATIC_PAGE_NAMES["/services"][locale], path: "/services" }]}
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
          <SectionHeading title={c.gridTitle} />
        </Reveal>
        <div className="mt-12">
          <ServicesGrid services={PARENT_SERVICES} locale={locale} />
        </div>
      </Section>

      <Section tone="navy" className="!py-14">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-2xl text-cream-50">{c.equityNote.title}</h2>
            <p className="mt-3 text-cream-100/75">{c.equityNote.body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {c.equityNote.links.map((l) => (
              <LLink
                key={l.path}
                href={l.path}
                className="inline-flex items-center rounded-full border border-gold-500 px-5 py-2.5 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-500 hover:text-navy-900"
              >
                {l.label}
              </LLink>
            ))}
          </div>
        </Reveal>
      </Section>

      <CtaSection locale={locale} />
    </>
  );
}
