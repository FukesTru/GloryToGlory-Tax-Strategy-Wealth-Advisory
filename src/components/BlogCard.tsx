import type { Locale } from "@/lib/i18n";
import type { BlogPost } from "@/content/types";
import { UI } from "@/content/site";
import { postImage } from "@/content/images";
import { LLink } from "./LLink";
import { Picture } from "./Picture";
import { Reveal } from "./Reveal";

export function formatDate(date: string, locale: Locale): string {
  const d = new Date(`${date}T00:00:00Z`);
  return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "zh-Hant-TW", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(d);
}

export function BlogCard({ post, locale, index = 0 }: { post: BlogPost; locale: Locale; index?: number }) {
  const path = `/blog/${post.slug}`;
  const image = postImage(post.slug);
  return (
    <Reveal as="li" delay={Math.min(index * 0.08, 0.4)} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream-300 bg-cream-50 shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-0.5 hover:border-gold-500/60">
        {image && (
          <LLink href={path} tabIndex={-1} aria-hidden="true" className="relative block aspect-[16/9] overflow-hidden bg-navy-900">
            <Picture
              image={image}
              locale={locale}
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </LLink>
        )}
        <div className="flex flex-1 flex-col p-7">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 font-medium text-emerald-700">{post.category[locale]}</span>
          <span className="whitespace-nowrap text-ink-500">
            <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
            <span className="mx-1.5" aria-hidden="true">
              ·
            </span>
            {post.readingMinutes} {UI[locale].common.minRead}
          </span>
        </div>
        <h3 className="mt-4 text-xl leading-snug text-navy-900">
          <LLink href={path} className="hover:text-emerald-700">
            {post.title[locale]}
          </LLink>
        </h3>
        <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink-700">{post.excerpt[locale]}</p>
        <LLink href={path} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-navy-900">
          {UI[locale].common.readMore}
          <span aria-hidden="true">→</span>
        </LLink>
        </div>
      </article>
    </Reveal>
  );
}
