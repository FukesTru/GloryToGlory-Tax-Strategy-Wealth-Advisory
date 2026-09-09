import type { Locale } from "@/lib/i18n";
import type { LegalPageContent } from "@/content/types";
import { STATIC_PAGE_NAMES } from "@/lib/content";
import { IMAGES } from "@/content/images";
import { Blocks } from "../RichText";
import { Hero } from "../Hero";
import { Section } from "../Section";
import { LLink } from "../LLink";

const COPY = {
  en: { updated: "Last updated", contact: "Questions? Contact us" },
  "zh-hant": { updated: "最後更新", contact: "有疑問？聯絡我們" },
};

export function LegalPageView({ content, locale, path }: { content: LegalPageContent; locale: Locale; path: string }) {
  const copy = COPY[locale];
  return (
    <>
      <Hero
        locale={locale}
        title={content.h1}
        sub={content.heroSub}
        crumbs={[{ name: STATIC_PAGE_NAMES[path][locale], path }]}
        primary={{ label: copy.contact, href: "/contact" }}
        image={IMAGES.heroLegal}
      />
      <Section tone="cream" narrow>
        <p className="text-sm text-ink-500">
          {copy.updated}: {content.lastUpdated}
        </p>
        {content.notice && (
          <div role="alert" className="mt-6 rounded-xl border-2 border-dashed border-gold-600/60 bg-gold-300/20 p-5 text-sm leading-relaxed text-gold-700">
            <p className="font-semibold uppercase tracking-[0.12em]">⚠︎ {content.notice}</p>
          </div>
        )}
        <div className="prose-site mt-10">
          {content.sections.map((s, i) => (
            <section key={i}>
              <h2 id={`section-${i + 1}`}>{s.heading}</h2>
              <Blocks blocks={s.blocks} />
            </section>
          ))}
        </div>
        <p className="mt-12 text-sm text-ink-500">
          <LLink href="/contact" className="font-semibold text-emerald-700 hover:text-navy-900">
            {copy.contact} →
          </LLink>
        </p>
      </Section>
    </>
  );
}
