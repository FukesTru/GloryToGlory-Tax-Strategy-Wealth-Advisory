import type { FAQ } from "@/content/types";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";
import { Reveal } from "./Reveal";
import { RichText } from "./RichText";

/**
 * Accessible accordion built on <details>/<summary> (works without JS) and
 * emits FAQPage structured data for the same questions.
 */
export function FaqAccordion({ faqs, title }: { faqs: FAQ[]; title: string }) {
  if (!faqs.length) return null;
  return (
    <div>
      <JsonLd data={faqSchema(faqs)} />
      <Reveal>
        <h2 className="gold-underline text-3xl text-navy-900">{title}</h2>
      </Reveal>
      <div className="mt-10 divide-y divide-cream-300 border-y border-cream-300">
        {faqs.map((f, i) => (
          <Reveal key={i} delay={Math.min(i * 0.05, 0.3)}>
            <details className="group py-1">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left text-lg font-medium text-navy-900 [&::-webkit-details-marker]:hidden">
                <span>{f.q}</span>
                <span
                  aria-hidden="true"
                  className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-navy-900/15 text-emerald-700 transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="prose-site max-w-3xl pb-6 pr-0 sm:pr-14">
                <p>
                  <RichText text={f.a} />
                </p>
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
