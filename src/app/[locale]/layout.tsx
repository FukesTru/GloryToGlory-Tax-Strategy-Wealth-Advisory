import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Analytics } from "@/components/Analytics";
import { ChatWidget } from "@/components/ChatWidget";
import { FloatingCta } from "@/components/FloatingCta";
import { Footer } from "@/components/Footer";
import { LocaleProvider } from "@/components/LocaleProvider";
import { Nav } from "@/components/Nav";
import { AREAS, PARENT_SERVICES } from "@/lib/content";
import { SITE, UI } from "@/content/site";
import { LOCALES, LOCALE_TAG, isLocale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo";
import "../globals.css";

/* Headline: Fraunces (EN) / Noto Serif TC (ZH). Body: Manrope (EN) / Noto Sans TC (ZH). */
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
const notoSerifTC = Noto_Serif_TC({
  weight: "variable",
  variable: "--font-noto-serif-tc",
  display: "swap",
  preload: false,
});
const notoSansTC = Noto_Sans_TC({
  weight: "variable",
  variable: "--font-noto-sans-tc",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE.name,
  authors: [{ name: SITE.owner.legalName, url: SITE.owner.linkedin }],
  creator: SITE.owner.legalName,
  formatDetection: { telephone: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#0B1E3D",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/** Unknown locales do not match any route, so global-not-found.tsx renders. */
export const dynamicParams = false;


export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  // Built here, not in Nav: Nav is a client component, so importing the content
  // registry there would ship every service and area page to the browser.
  const menus = {
    services: PARENT_SERVICES.map((s) => ({ path: s.path, label: s.name[locale] })),
    areas: AREAS.map((a) => ({ path: a.path, label: a.region[locale] })),
  };

  return (
    <html
      lang={LOCALE_TAG[locale]}
      className={`${fraunces.variable} ${manrope.variable} ${notoSerifTC.variable} ${notoSansTC.variable}`}
    >
      <head>
        <Analytics />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-screen antialiased">
        <LocaleProvider locale={locale}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-navy-900"
          >
            {UI[locale].skipToContent}
          </a>
          <Nav menus={menus} />
          <main id="main">{children}</main>
          <Footer locale={locale} />
          <FloatingCta />
          <ChatWidget />
        </LocaleProvider>
      </body>
    </html>
  );
}
