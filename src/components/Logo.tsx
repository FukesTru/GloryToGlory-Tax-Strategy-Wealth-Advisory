import Image from "next/image";
import { SITE } from "@/content/site";

/** Aspect ratio of the supplied logo artwork (882 x 200). */
const RATIO = 882 / 200;

/**
 * The firm's logo, from the brand artwork Grace supplied.
 *
 * `tone="light"` is the reversed lockup for dark backgrounds (nav, footer);
 * `tone="dark"` is the original navy lockup for light backgrounds. Both are
 * transparent PNGs derived from the same source file.
 */
export function Logo({
  tone = "light",
  compact = false,
  priority = false,
}: {
  tone?: "light" | "dark";
  compact?: boolean;
  priority?: boolean;
}) {
  const height = compact ? 28 : 38;
  return (
    <Image
      src={tone === "light" ? "/images/logo-on-dark.png" : "/images/logo-on-light.png"}
      alt={SITE.name}
      width={Math.round(height * RATIO)}
      height={height}
      priority={priority}
      className={compact ? "h-7 w-auto" : "h-8 w-auto sm:h-9"}
    />
  );
}
