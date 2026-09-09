import Image from "next/image";
import type { SiteImage } from "@/content/images";
import type { Locale } from "@/lib/i18n";

interface Props {
  image: SiteImage;
  locale: Locale;
  /** Fills its positioned parent. The parent must set the aspect ratio. */
  className?: string;
  sizes: string;
  /** Above-the-fold hero images opt out of lazy loading. */
  priority?: boolean;
  /**
   * Decorative images (hero backdrops behind an H1) render alt="" so screen
   * readers skip them. Content images keep their translated alt text.
   */
  decorative?: boolean;
}

export function Picture({ image, locale, className = "object-cover", sizes, priority = false, decorative = false }: Props) {
  return (
    <Image
      src={image.src}
      alt={decorative ? "" : image.alt[locale]}
      fill
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      placeholder="blur"
      blurDataURL={image.blurDataURL}
      className={className}
      aria-hidden={decorative || undefined}
    />
  );
}
