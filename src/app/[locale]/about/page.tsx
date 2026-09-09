import type { Metadata } from "next";
import Image from "next/image";
import { CtaSection } from "@/components/CtaSection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { PlaceholderBadge, PlaceholderNote } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { aboutPage } from "@/content/pages/about";
import { SITE } from "@/content/site";
import { STATIC_PAGE_NAMES } from "@/lib/content";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { personSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const c = aboutPage[locale];
  return buildMetadata({ locale, path: "/about", title: c.metaTitle, description: c.metaDescription });
}

export default async function AboutPage({ params }: { params: LocaleParams }) {
  const locale = await resolveLocale(params);
  const c = aboutPage[locale];

  return (
    <>
      <JsonLd data={personSchema(locale, c.schemaDescription)} />
      <Hero
        locale={locale}
        eyebrow={c.eyebrow}
        title={c.h1}
        sub={c.heroSub}
        crumbs={[{ name: STATIC_PAGE_NAMES["/about"][locale], path: "/about" }]}
        aside={
          <Reveal delay={0.15} className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-gold-500/30" aria-hidden="true" />
            <Image
              src={SITE.owner.headshot}
              alt={c.photoAlt}
              width={600}
              height={720}
              loading="lazy"
              className="w-full rounded-[1.5rem] object-cover shadow-[var(--shadow-card-dark)]"
            />
            <div className="absolute bottom-4 left-4">
              <PlaceholderBadge locale={locale} label={locale === "en" ? "Photo placeholder" : "照片待補"} />
            </div>
          </Reveal>
        }
      />

      <Section tone="cream">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal>
            <h2 className="gold-underline text-3xl text-navy-900">{c.bio.title}</h2>
            <div className="prose-site mt-10">
              {c.bio.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="rounded-2xl border border-cream-300 bg-cream-50 p-7 shadow-[var(--shadow-card)]">
              {c.quickFacts.map((f, i) => (
                <div key={i} className={`py-4 ${i > 0 ? "border-t border-cream-300" : ""}`}>
                  <dt className="eyebrow text-emerald-700">{f.label}</dt>
                  <dd className="mt-1.5 text-base font-medium text-navy-900">{f.value}</dd>
                </div>
              ))}
              <div className="border-t border-cream-300 pt-4">
                <a
                  href={SITE.owner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-emerald-700 underline decoration-gold-500 underline-offset-4 hover:text-navy-900"
                >
                  LinkedIn →
                </a>
              </div>
            </dl>
          </Reveal>
        </div>
      </Section>

      <Section tone="navy">
        <Reveal>
          <SectionHeading title={c.philosophy.title} tone="dark" />
        </Reveal>
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {c.philosophy.items.map((item, i) => (
            <Reveal as="li" key={i} delay={i * 0.08} className="rounded-2xl border border-cream-100/10 bg-navy-800/50 p-7">
              <span className="font-heading text-3xl text-gold-500/90">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-lg text-cream-50">{item.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-cream-100/70">{item.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section tone="cream">
        <Reveal className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="gold-underline text-3xl text-navy-900">{c.credentials.title}</h2>
            <PlaceholderBadge locale={locale} />
          </div>
          <p className="mt-8 text-lg leading-relaxed text-ink-700">{c.credentials.intro}</p>
          <ul className="mt-6 space-y-3">
            {c.credentials.items.map((item, i) => (
              <li key={i} className="rounded-lg border border-dashed border-gold-600/40 bg-cream-50 px-4 py-3 text-sm text-ink-700">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <PlaceholderNote locale={locale} text={c.credentials.note} />
          </div>
        </Reveal>
      </Section>

      <Section tone="emerald">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="gold-underline text-3xl text-navy-900">{c.bilingual.title}</h2>
          <div className="prose-site mt-10">
            {c.bilingual.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </Section>

      <CtaSection locale={locale} />
    </>
  );
}
