import { CITIES, NAME_ZH, SITE } from "@/content/site";
import { headshotImage } from "@/content/images";
import type { FAQ, ServiceArea, BlogPost } from "@/content/types";
import { LOCALE_TAG, localePath, type Locale } from "./i18n";
import { absoluteUrl } from "./seo";

type JsonLd = Record<string, unknown>;

const ALL_CITIES = [...CITIES.bayArea, ...CITIES.socal, ...CITIES.remote];

function orgName(locale: Locale) {
  return locale === "en" ? SITE.name : `${SITE.name}（${NAME_ZH.site}）`;
}

function postalAddress() {
  return {
    "@type": "PostalAddress",
    postOfficeBoxNumber: SITE.mailing.poBox.replace("PO Box ", ""),
    addressLocality: SITE.mailing.city,
    addressRegion: SITE.mailing.region,
    postalCode: SITE.mailing.postalCode,
    addressCountry: SITE.mailing.country,
  };
}

function personRef(locale: Locale): JsonLd {
  return {
    "@type": "Person",
    "@id": `${absoluteUrl("/about")}#person`,
    name: SITE.owner.legalName,
    alternateName: locale === "en" ? "Grace Chen" : NAME_ZH.owner,
    jobTitle: SITE.owner.jobTitle,
    sameAs: [SITE.owner.linkedin],
  };
}

/** Homepage — FinancialService. */
export function financialServiceSchema(locale: Locale, services: { name: string; path: string }[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${absoluteUrl("/")}#organization`,
    name: orgName(locale),
    url: absoluteUrl(localePath(locale, "/")),
    logo: absoluteUrl("/icon.svg"),
    image: absoluteUrl(SITE.ogImage),
    telephone: SITE.phoneE164,
    email: SITE.email,
    address: postalAddress(),
    founder: personRef(locale),
    employee: personRef(locale),
    sameAs: [SITE.owner.linkedin],
    knowsLanguage: ["en", "zh-Hant"],
    areaServed: [
      ...ALL_CITIES.map((city) => ({ "@type": "City", name: city })),
      { "@type": "Country", name: "United States" },
    ],
    serviceType: services.map((s) => s.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "en" ? "Advisory services" : "顧問服務",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, url: absoluteUrl(localePath(locale, s.path)) },
      })),
    },
    priceRange: "$$",
  };
}

/** About page — Person with jobTitle Financial Advisor. */
export function personSchema(locale: Locale, description: string): JsonLd {
  return {
    "@context": "https://schema.org",
    ...personRef(locale),
    url: absoluteUrl(localePath(locale, "/about")),
    image: absoluteUrl(headshotImage().image.src),
    description,
    email: SITE.email,
    telephone: SITE.phoneE164,
    knowsLanguage: ["en", "zh-Hant"],
    worksFor: { "@id": `${absoluteUrl("/")}#organization` },
  };
}

/** Service-area pages — LocalBusiness (virtual; mailing address only). */
export function localBusinessSchema(locale: Locale, area: ServiceArea, description: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FinancialService"],
    "@id": `${absoluteUrl(area.path)}#localbusiness`,
    name: `${orgName(locale)} – ${area.region[locale]}`,
    description,
    url: absoluteUrl(localePath(locale, area.path)),
    image: absoluteUrl(SITE.ogImage),
    telephone: SITE.phoneE164,
    email: SITE.email,
    address: postalAddress(),
    parentOrganization: { "@id": `${absoluteUrl("/")}#organization` },
    areaServed: area.cities.map((city) => ({ "@type": "City", name: city })),
    knowsLanguage: ["en", "zh-Hant"],
    priceRange: "$$",
  };
}

export function faqSchema(faqs: FAQ[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: stripLinks(f.a) },
    })),
  };
}

export interface Crumb {
  name: string;
  /** English (unprefixed) path. */
  path: string;
}

export function breadcrumbSchema(locale: Locale, crumbs: Crumb[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(localePath(locale, c.path)),
    })),
  };
}

export function serviceSchema(locale: Locale, name: string, description: string, path: string): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(localePath(locale, path)),
    serviceType: name,
    provider: { "@id": `${absoluteUrl("/")}#organization` },
    areaServed: { "@type": "Country", name: "United States" },
    availableLanguage: ["en", "zh-Hant"],
  };
}

export function articleSchema(locale: Locale, post: BlogPost): JsonLd {
  const path = `/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title[locale],
    description: post.metaDescription[locale],
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: LOCALE_TAG[locale],
    mainEntityOfPage: absoluteUrl(localePath(locale, path)),
    image: absoluteUrl(SITE.ogImage),
    author: personRef(locale),
    publisher: {
      "@type": "Organization",
      "@id": `${absoluteUrl("/")}#organization`,
      name: SITE.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/icon.svg") },
    },
    articleSection: post.category[locale],
  };
}

/** Remove markdown links "[text](/path)" → "text" for plain-text schema fields. */
export function stripLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}
