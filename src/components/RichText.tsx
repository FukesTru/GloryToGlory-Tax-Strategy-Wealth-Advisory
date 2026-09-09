import type { ReactNode } from "react";
import type { Block } from "@/content/types";
import { LLink } from "./LLink";

const LINK_RE = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Renders a string with markdown-style links [text](/path) as locale-aware links. */
export function RichText({ text }: { text: string }): ReactNode {
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK_RE)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    const [, label, href] = match;
    nodes.push(
      <LLink key={`${index}-${href}`} href={href}>
        {label}
      </LLink>,
    );
    last = index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}

/** Renders an array of content blocks (blog posts, legal pages). */
export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return <h2 key={i}>{b.text}</h2>;
          case "h3":
            return <h3 key={i}>{b.text}</h3>;
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((item, j) => (
                  <li key={j}>
                    <RichText text={item} />
                  </li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <aside
                key={i}
                className="rounded-xl border-l-4 border-gold-500 bg-cream-200/70 px-5 py-4 text-navy-900"
              >
                <RichText text={b.text} />
              </aside>
            );
          default:
            return (
              <p key={i}>
                <RichText text={b.text} />
              </p>
            );
        }
      })}
    </>
  );
}
