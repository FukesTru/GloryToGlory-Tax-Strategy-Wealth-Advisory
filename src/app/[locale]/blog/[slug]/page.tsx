import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatDate } from "@/components/BlogCard";
import { CtaSection } from "@/components/CtaSection";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { LLink } from "@/components/LLink";
import { RelatedLinks } from "@/components/RelatedLinks";
import { Reveal } from "@/components/Reveal";
import { Blocks } from "@/components/RichText";
import { Section } from "@/components/Section";
import { SITE, UI } from "@/content/site";
import { getPost, POSTS, STATIC_PAGE_NAMES } from "@/lib/content";
import { LOCALES } from "@/lib/i18n";
import { resolveLocale } from "@/lib/params";
import { articleSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => POSTS.map((p) => ({ locale, slug: p.slug })));
}

export const dynamicParams = false;


export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    locale,
    path: `/blog/${post.slug}`,
    title: post.title[locale],
    description: post.metaDescription[locale],
    type: "article",
    publishedTime: post.date,
  });
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const locale = await resolveLocale(params);
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const t = UI[locale].common;
  const path = `/blog/${post.slug}`;
  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd data={articleSchema(locale, post)} />
      <Hero
        locale={locale}
        eyebrow={post.category[locale]}
        title={post.title[locale]}
        crumbs={[
          { name: STATIC_PAGE_NAMES["/blog"][locale], path: "/blog" },
          { name: post.title[locale], path },
        ]}
        primary={{ label: t.backToBlog, href: "/blog" }}
      >
        <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-cream-100/70">
          <span>{SITE.owner.displayName}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
          <span aria-hidden="true">·</span>
          <span>
            {post.readingMinutes} {t.minRead}
          </span>
        </p>
      </Hero>

      <Section tone="cream">
        <Reveal className="mx-auto max-w-3xl">
          <article className="prose-site">
            <p className="text-lg font-medium text-navy-900">{post.excerpt[locale]}</p>
            <Blocks blocks={post.body[locale]} />
          </article>
          <p className="mt-10 text-sm text-ink-500">
            {t.postedIn}{" "}
            <LLink href="/blog" className="font-semibold text-emerald-700 hover:text-navy-900">
              {post.category[locale]}
            </LLink>
          </p>
        </Reveal>
      </Section>

      <Section tone="white">
        <RelatedLinks paths={post.relatedServices} locale={locale} title={t.relatedServices} />
        {others.length > 0 && (
          <div className="mt-16">
            <RelatedLinks paths={others.map((p) => `/blog/${p.slug}`)} locale={locale} title={t.relatedReading} />
          </div>
        )}
      </Section>

      <CtaSection locale={locale} variant="blog" />
    </>
  );
}
