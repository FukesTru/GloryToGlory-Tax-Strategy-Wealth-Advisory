"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { localePath } from "@/lib/i18n";
import { useLocale } from "./LocaleProvider";

type Props = Omit<LinkProps, "href"> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    /** English (unprefixed) path, e.g. "/services". External URLs pass through untouched. */
    href: string;
    children: ReactNode;
  };

/** Locale-aware <Link>: prefixes /zh-hant automatically. */
export function LLink({ href, children, ...rest }: Props) {
  const locale = useLocale();
  const isExternal = /^(https?:|mailto:|tel:)/.test(href) || href.startsWith("#");
  const target = isExternal ? href : localePath(locale, href);
  return (
    <Link href={target} {...rest}>
      {children}
    </Link>
  );
}
