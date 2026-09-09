import type { ProcessStep } from "@/content/types";
import { Reveal } from "./Reveal";

export function ProcessTimeline({ steps, title }: { steps: ProcessStep[]; title: string }) {
  if (!steps.length) return null;
  return (
    <div>
      <Reveal>
        <h2 className="gold-underline text-3xl text-cream-50">{title}</h2>
      </Reveal>
      <ol className="relative mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal as="li" key={i} delay={i * 0.1} className="relative rounded-2xl border border-cream-100/10 bg-navy-800/50 p-7">
            <span className="font-heading text-4xl text-gold-500/90">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 text-xl text-cream-50">{s.title}</h3>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-cream-100/70">{s.body}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}
