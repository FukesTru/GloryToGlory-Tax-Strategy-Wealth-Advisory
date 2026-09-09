import type { Metadata } from "next";
import { CtaSection } from "@/components/CtaSection";
import { GoogleReviewsSlot } from "@/components/GoogleReviewsSlot";
import { Hero } from "@/components/Hero";
import { PlaceholderNote } from "@/components/Placeholder";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonialsPage } from "@/content/pages/meta";
import { testimonials } from "@/content/pages/testimonials";
import { STATIC_PAGE_NAMES } from "@/lib/content";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const c = testimonialsPage[locale];
  return buildMetadata({ locale, path: "/testimonials", title: c.metaTitle, description: c.metaDescription });
}

export default async function TestimonialsPage({ params }: { params: LocaleParams }) {
  const locale = await resolveLocale(params);
  const c = testimonialsPage[locale];

  return (
    <>
      <Hero
        locale={locale}
        eyebrow={c.eyebrow}
        title={c.h1}
        sub={c.heroSub}
        crumbs={[{ name: STATIC_PAGE_NAMES["/testimonials"][locale], path: "/testimonials" }]}
      />

      <Section tone="cream">
        <Reveal className="mx-auto max-w-3xl">
          <p className="text-lg leading-relaxed text-ink-700">{c.intro}</p>
          <div className="mt-6">
            <PlaceholderNote locale={locale} text={c.placeholderNotice} />
          </div>
        </Reveal>
        <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} t={t} locale={locale} index={i} />
          ))}
        </ul>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading title={c.reviewsTitle} sub={c.reviewsSub} />
        </Reveal>
        <div className="mt-10">
          <GoogleReviewsSlot locale={locale} />
        </div>
      </Section>

      <CtaSection locale={locale} />
    </>
  );
}
