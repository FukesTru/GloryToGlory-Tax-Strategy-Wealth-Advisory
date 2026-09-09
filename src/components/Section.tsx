import type { ReactNode } from "react";

type Tone = "cream" | "white" | "navy" | "emerald";

const tones: Record<Tone, string> = {
  cream: "bg-cream-100 text-ink-900",
  white: "bg-cream-50 text-ink-900",
  navy: "bg-navy-900 text-cream-100",
  emerald: "bg-emerald-50 text-ink-900",
};

export function Section({
  tone = "cream",
  className = "",
  id,
  children,
  narrow = false,
}: {
  tone?: Tone;
  className?: string;
  id?: string;
  children: ReactNode;
  narrow?: boolean;
}) {
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className={`container-x ${narrow ? "max-w-3xl" : ""}`}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  tone = "light",
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}) {
  const eyebrowCls = tone === "dark" ? "text-gold-400" : "text-emerald-700";
  const titleCls = tone === "dark" ? "text-cream-50" : "text-navy-900";
  const subCls = tone === "dark" ? "text-cream-100/75" : "text-ink-700";
  const alignCls = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && <p className={`eyebrow mb-3 ${eyebrowCls}`}>{eyebrow}</p>}
      <Tag className={`text-3xl leading-tight sm:text-4xl ${titleCls}`}>{title}</Tag>
      {sub && <p className={`mt-4 text-lg leading-relaxed ${subCls}`}>{sub}</p>}
    </div>
  );
}
