import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { sitemapPage } from "@/content/pages/meta";
import { ALL_SERVICES, AREAS, pageName, POSTS, STATIC_PAGE_NAMES } from "@/lib/content";
import { localePath, type Locale } from "@/lib/i18n";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const c = sitemapPage[locale];
  return buildMetadata({ locale, path: "/sitemap", title: c.metaTitle, description: c.metaDescription });
}

function Group({ title, paths, locale }: { title: string; paths: string[]; locale: Locale }) {
  const c = sitemapPage[locale];
  return (
    <Reveal>
      <h2 className="gold-underline text-2xl text-navy-900">{title}</h2>
      <ul className="mt-6 divide-y divide-cream-300 border-y border-cream-300">
        {paths.map((p) => (
          <li key={p} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between">
            <Link href={localePath(locale, p)} className="font-medium text-navy-900 hover:text-emerald-700">
              {pageName(p, locale)}
            </Link>
            <span className="flex gap-4 text-sm">
              <Link href={localePath("en", p)} hrefLang="en" className="text-emerald-700 hover:text-navy-900">
                {c.englishVersion}
              </Link>
              <Link href={localePath("zh-hant", p)} hrefLang="zh-Hant" lang="zh-Hant" className="text-emerald-700 hover:text-navy-900">
                {c.chineseVersion}
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default async function SitemapPage({ params }: { params: LocaleParams }) {
  const locale = await resolveLocale(params);
  const c = sitemapPage[locale];

  return (
    <>
      <Hero
        locale={locale}
        eyebrow={c.eyebrow}
        title={c.h1}
        sub={c.heroSub}
        crumbs={[{ name: STATIC_PAGE_NAMES["/sitemap"][locale], path: "/sitemap" }]}
      />
      <Section tone="cream">
        <p className="text-sm text-ink-500">{c.languageNote}</p>
        <div className="mt-10 grid gap-14 lg:grid-cols-2">
          <div className="space-y-14">
            <Group locale={locale} title={c.sections.core} paths={["/", "/about", "/services", "/testimonials", "/blog", "/contact"]} />
            <Group locale={locale} title={c.sections.areas} paths={AREAS.map((a) => a.path)} />
            <Group locale={locale} title={c.sections.legal} paths={["/disclaimer", "/privacy-policy", "/sitemap"]} />
          </div>
          <div className="space-y-14">
            <Group locale={locale} title={c.sections.services} paths={ALL_SERVICES.map((s) => s.path)} />
            <Group locale={locale} title={c.sections.blog} paths={POSTS.map((p) => `/blog/${p.slug}`)} />
          </div>
        </div>
      </Section>
    </>
  );
}
