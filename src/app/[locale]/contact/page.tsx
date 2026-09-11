import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { Hero } from "@/components/Hero";
import { IMAGES } from "@/content/images";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/Section";
import { contactPage } from "@/content/pages/contact";
import { SITE, UI } from "@/content/site";
import { STATIC_PAGE_NAMES } from "@/lib/content";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const c = contactPage[locale];
  return buildMetadata({ locale, path: "/contact", title: c.metaTitle, description: c.metaDescription });
}

export default async function ContactPage({ params }: { params: LocaleParams }) {
  const locale = await resolveLocale(params);
  const c = contactPage[locale];

  return (
    <>
      <Hero
        locale={locale}
        eyebrow={c.eyebrow}
        title={c.h1}
        sub={c.heroSub}
        crumbs={[{ name: STATIC_PAGE_NAMES["/contact"][locale], path: "/contact" }]}
        image={IMAGES.heroContact}
        primary={{ label: UI[locale].hero.callGrace, href: SITE.phoneHref }}
      />

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          <Reveal>
            <div className="mb-6 rounded-2xl border border-gold-500/50 bg-navy-900 p-7 text-cream-100 sm:p-9">
              <h2 className="text-2xl text-cream-50">{c.bookNow.title}</h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-cream-100/80">{c.bookNow.body}</p>
              <a
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:bg-gold-400"
              >
                {c.bookNow.cta}
                <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="rounded-2xl border border-cream-300 bg-cream-50 p-7 shadow-[var(--shadow-card)] sm:p-9">
              <h2 className="text-2xl text-navy-900">{c.formTitle}</h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-700">{c.formIntro}</p>
              <div className="relative mt-8">
                <LeadForm />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-8">
            <div>
              <h2 className="text-2xl text-navy-900">{c.details.title}</h2>
              <dl className="mt-5 space-y-4 text-[0.95rem]">
                <div>
                  <dt className="eyebrow text-emerald-700">{c.details.phoneLabel}</dt>
                  <dd className="mt-1">
                    <a href={SITE.phoneHref} className="font-medium text-navy-900 hover:text-emerald-700">
                      {SITE.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-emerald-700">{c.details.emailLabel}</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${SITE.email}`} className="font-medium text-navy-900 hover:text-emerald-700">
                      {SITE.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-emerald-700">{c.details.hoursLabel}</dt>
                  <dd className="mt-1 text-ink-700">{c.details.hours}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-emerald-700">{c.details.mailingLabel}</dt>
                  <dd className="mt-1 text-ink-700">
                    {SITE.mailing.poBox}, {SITE.mailing.city}, {SITE.mailing.region} {SITE.mailing.postalCode}
                    <span className="block text-sm text-ink-500">{c.details.mailingNote}</span>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl bg-navy-900 p-7 text-cream-100">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/40 text-gold-400">
                <Icon name="video" className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl text-cream-50">{c.details.virtualTitle}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-cream-100/75">{c.details.virtualBody}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <Reveal>
          <SectionHeading title={c.expect.title} />
        </Reveal>
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {c.expect.steps.map((s, i) => (
            <Reveal as="li" key={i} delay={i * 0.08} className="rounded-2xl border border-cream-300 bg-cream-50 p-6">
              <span className="font-heading text-3xl text-gold-600">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-700">{s}</p>
            </Reveal>
          ))}
        </ol>
      </Section>
    </>
  );
}
