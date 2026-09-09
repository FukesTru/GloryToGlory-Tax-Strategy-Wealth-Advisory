import { notFound } from "next/navigation";
import { isLocale, type Locale } from "./i18n";

export type LocaleParams = Promise<{ locale: string }>;

/** Await and validate the [locale] segment for pages and generateMetadata. */
export async function resolveLocale(params: LocaleParams): Promise<Locale> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return locale;
}
