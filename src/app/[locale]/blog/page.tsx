import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { CtaSection } from "@/components/CtaSection";
import { Hero } from "@/components/Hero";
import { IMAGES } from "@/content/images";
import { Section } from "@/components/Section";
import { blogIndexPage } from "@/content/pages/meta";
import { POSTS, STATIC_PAGE_NAMES } from "@/lib/content";
import { resolveLocale, type LocaleParams } from "@/lib/params";
import { buildMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const c = blogIndexPage[locale];
  return buildMetadata({ locale, path: "/blog", title: c.metaTitle, description: c.metaDescription });
}

export default async function BlogIndexPage({ params }: { params: LocaleParams }) {
  const locale = await resolveLocale(params);
  const c = blogIndexPage[locale];

  return (
    <>
      <Hero
        locale={locale}
        eyebrow={c.eyebrow}
        title={c.h1}
        sub={c.heroSub}
        crumbs={[{ name: STATIC_PAGE_NAMES["/blog"][locale], path: "/blog" }]}
      image={IMAGES.heroBlog}
      />
      <Section tone="cream">
        {POSTS.length === 0 ? (
          <p className="text-ink-700">{c.empty}</p>
        ) : (
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p, i) => (
              <BlogCard key={p.slug} post={p} locale={locale} index={i} />
            ))}
          </ul>
        )}
      </Section>
      <CtaSection locale={locale} />
    </>
  );
}
