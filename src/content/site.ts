import type { L, IconName } from "./types";

/**
 * Business facts. Everything marked TODO must be confirmed by the client
 * before launch (see README "Pre-launch checklist").
 */
export const SITE = {
  name: "GloryToGlory Tax Strategy & Wealth Advisory",
  shortName: "GloryToGlory",
  domain: "glorytoglory.com",
  url: "https://glorytoglory.com",
  owner: {
    legalName: "Yunghui Chen",
    /** The name she goes by publicly, and the one used across the site. */
    displayName: "Grace Chen",
    firstName: "Grace",
    jobTitle: "Financial Advisor",
    linkedin: "https://www.linkedin.com/in/gracefinancial",
  },
  phone: "(949) 742-1604",
  phoneHref: "tel:+19497421604",
  phoneE164: "+1-949-742-1604",
  email: "gracela989@gmail.com",
  /** Her live booking link: a complimentary 15-minute strategy session. */
  calendly: "https://calendly.com/gracela989/15min",
  /** Mailing address only — never present it as a walk-in office. */
  mailing: {
    poBox: "PO Box 60970",
    city: "Irvine",
    region: "CA",
    postalCode: "92602",
    country: "US",
  },
  /** TODO(client): confirm founding year for the "years of experience" trust strip. */
  /** TODO(client): set the real GA4 measurement ID via NEXT_PUBLIC_GA_MEASUREMENT_ID. */
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX",
  ogImage: "/og-default.png",
} as const;

export const CITIES = {
  bayArea: ["San Jose", "Cupertino", "Santa Clara", "Milpitas", "San Francisco"],
  socal: ["Irvine", "San Diego", "Los Angeles"],
  remote: ["Austin", "Seattle"],
} as const;

export const NAME_ZH = {
  /** The firm's registered Chinese brand name, from Grace's brand sheet. */
  site: "華臻財富方舟",
  /**
   * TODO(client): confirm the Chinese characters for Grace's personal name.
   * Romanised until then rather than guess at characters.
   */
  owner: "Grace Chen",
} as const;

/** Brand lines taken verbatim from the firm's own materials. */
export const BRAND = {
  values: { en: ["Faith", "Integrity", "Excellence"], "zh-hant": ["信念", "誠信", "卓越"] },
  tagline: {
    en: "Wealth Built by Design, Not by Chance",
    "zh-hant": "專業為舵 · 信任為帆 · 財富為舟 · 承載未來",
  },
  promise: {
    en: "Strategic tax solutions. Confident financial future.",
    "zh-hant": "以專業守護財富，以策略創造價值。",
  },
} as const;

/** Site-wide UI strings. */
export const UI: L<{
  skipToContent: string;
  nav: {
    home: string;
    about: string;
    services: string;
    pricing: string;
    areas: string;
    blog: string;
    contact: string;
    menu: string;
    close: string;
    bookCta: string;
    bookCtaShort: string;
  };
  hero: { bookFree: string; learnMore: string; viewServices: string; callGrace: string };
  common: {
    readMore: string;
    learnMore: string;
    allServices: string;
    relatedServices: string;
    relatedReading: string;
    faqTitle: string;
    processTitle: string;
    whyIndependentTitle: string;
    coversTitle: string;
    minRead: string;
    backToBlog: string;
    backToHub: string;
    breadcrumbHome: string;
    postedIn: string;
    virtualBadge: string;
    placeholder: string;
    placeholderNote: string;
    languageDraftNote: string;
  };
  cta: {
    title: string;
    body: string;
    button: string;
    secondary: string;
    blogTitle: string;
    blogBody: string;
  };
  footer: {
    tagline: string;
    brandLine: string;
    quickLinks: string;
    services: string;
    areas: string;
    contact: string;
    mailingLabel: string;
    mailingNote: string;
    virtualNote: string;
    rights: string;
    disclaimer: string;
    privacy: string;
    sitemap: string;
    disclosureShort: string;
  };
  form: {
    name: string;
    email: string;
    phone: string;
    service: string;
    servicePlaceholder: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
    consent: string;
    optional: string;
  };
  toggle: { label: string; switchTo: string };
  notFound: { title: string; body: string; button: string };
}> = {
  en: {
    skipToContent: "Skip to content",
    nav: {
      home: "Home",
      about: "About Grace",
      services: "Services",
      pricing: "Pricing",
      areas: "Where We Serve",
      blog: "Insights",
      contact: "Contact",
      menu: "Open menu",
      close: "Close menu",
      bookCta: "Book a Consultation",
      bookCtaShort: "Book a Consultation",
    },
    hero: {
      bookFree: "Book a Free Consultation",
      learnMore: "Learn more",
      viewServices: "Explore Services",
      callGrace: "Call Grace",
    },
    common: {
      readMore: "Read article",
      learnMore: "Learn more",
      allServices: "All services",
      relatedServices: "Related services",
      relatedReading: "Related reading",
      faqTitle: "Frequently asked questions",
      processTitle: "How we work together",
      whyIndependentTitle: "Why work with an independent advisor",
      coversTitle: "What this covers",
      minRead: "min read",
      backToBlog: "All insights",
      backToHub: "Back to Equity Compensation",
      breadcrumbHome: "Home",
      postedIn: "Posted in",
      virtualBadge: "Virtual consultations nationwide",
      placeholder: "Placeholder",
      placeholderNote: "Placeholder content — to be confirmed by the client before launch.",
      languageDraftNote: "Traditional Chinese copy is a working draft pending professional translation review.",
    },
    cta: {
      title: "Ready to turn your equity into a plan?",
      body: "Start with a complimentary 15-minute strategy session. We will look at your grants, your tax picture and your goals, and tell you plainly what we would do next.",
      button: "Book a Free Consultation",
      secondary: "Or call (949) 742-1604",
      blogTitle: "Facing this situation?",
      blogBody: "Book a free consultation and we will walk through your specific numbers together — in English or Mandarin.",
    },
    footer: {
      tagline: "Bilingual tax strategy and wealth advisory for tech professionals and their families.",
      brandLine: "Wealth Built by Design, Not by Chance",
      quickLinks: "Explore",
      services: "Services",
      areas: "Where we serve",
      contact: "Contact",
      mailingLabel: "Mailing address",
      mailingNote: "Mailing address only. We meet virtually, with in-person meetings available for local clients by appointment.",
      virtualNote: "Serving clients nationwide by video.",
      rights: "All rights reserved.",
      disclaimer: "Disclaimer",
      privacy: "Privacy Policy",
      sitemap: "Sitemap",
      disclosureShort:
        "Content on this site is for general educational purposes and is not individualized tax, legal or investment advice. Registration status and full disclosures are provided on the Disclaimer page.",
    },
    form: {
      name: "Full name",
      email: "Email",
      phone: "Phone",
      service: "What can we help with?",
      servicePlaceholder: "Select a service",
      message: "Tell us a little about your situation",
      submit: "Request my free consultation",
      sending: "Sending…",
      success: "Thank you — your request is in. Grace will reply within one business day.",
      error: "Something went wrong. Please email gracela989@gmail.com or call (949) 742-1604.",
      consent: "By submitting, you agree to be contacted about your request. We never sell your information.",
      optional: "optional",
    },
    toggle: { label: "Language", switchTo: "切換至繁體中文" },
    notFound: {
      title: "Page not found",
      body: "The page you are looking for has moved or never existed. Let us get you back on track.",
      button: "Back to home",
    },
  },
  "zh-hant": {
    skipToContent: "跳至主要內容",
    nav: {
      home: "首頁",
      about: "認識 Grace",
      services: "服務項目",
      pricing: "服務方案",
      areas: "服務地區",
      blog: "理財觀點",
      contact: "聯絡我們",
      menu: "開啟選單",
      close: "關閉選單",
      bookCta: "預約諮詢",
      bookCtaShort: "預約諮詢",
    },
    hero: {
      bookFree: "預約免費諮詢",
      learnMore: "了解更多",
      viewServices: "瀏覽服務項目",
      callGrace: "致電 Grace",
    },
    common: {
      readMore: "閱讀全文",
      learnMore: "了解更多",
      allServices: "所有服務",
      relatedServices: "相關服務",
      relatedReading: "延伸閱讀",
      faqTitle: "常見問題",
      processTitle: "合作流程",
      whyIndependentTitle: "為什麼選擇獨立顧問",
      coversTitle: "服務內容",
      minRead: "分鐘閱讀",
      backToBlog: "所有文章",
      backToHub: "返回股權獎酬規劃",
      breadcrumbHome: "首頁",
      postedIn: "分類",
      virtualBadge: "全美線上諮詢",
      placeholder: "待補充",
      placeholderNote: "此為預留內容，上線前須由客戶確認。",
      languageDraftNote: "繁體中文內容為初稿，待專業翻譯校閱後定稿。",
    },
    cta: {
      title: "準備好把股權獎酬變成完整的財務計畫了嗎？",
      body: "從一次 15 分鐘的免費策略諮詢開始。我們會一起檢視您的股票授予、稅務狀況與人生目標，並坦白告訴您下一步該怎麼做。",
      button: "預約免費諮詢",
      secondary: "或致電 (949) 742-1604",
      blogTitle: "您也遇到類似的情況嗎？",
      blogBody: "預約免費諮詢，我們會用中文或英文，陪您一起看清楚自己的數字。",
    },
    footer: {
      tagline: "為科技業專業人士與家庭提供雙語稅務策略與財富顧問服務。",
      brandLine: "專業為舵 · 信任為帆 · 財富為舟 · 承載未來",
      quickLinks: "網站導覽",
      services: "服務項目",
      areas: "服務地區",
      contact: "聯絡方式",
      mailingLabel: "通訊地址",
      mailingNote: "僅供郵寄。我們以視訊會議為主，本地客戶可另行預約面談。",
      virtualNote: "透過視訊服務全美客戶。",
      rights: "版權所有。",
      disclaimer: "免責聲明",
      privacy: "隱私權政策",
      sitemap: "網站地圖",
      disclosureShort:
        "本網站內容僅供一般教育目的，並非針對個人的稅務、法律或投資建議。註冊狀態與完整揭露請見免責聲明頁面。",
    },
    form: {
      name: "姓名",
      email: "電子郵件",
      phone: "電話",
      service: "您想了解哪項服務？",
      servicePlaceholder: "請選擇服務",
      message: "請簡單描述您的情況",
      submit: "申請免費諮詢",
      sending: "傳送中…",
      success: "感謝您，我們已收到您的申請。Grace 將在一個工作天內回覆。",
      error: "傳送失敗，請直接寄信至 gracela989@gmail.com 或致電 (949) 742-1604。",
      consent: "送出即表示您同意我們就此申請與您聯繫。我們絕不出售您的個人資料。",
      optional: "選填",
    },
    toggle: { label: "語言", switchTo: "Switch to English" },
    notFound: {
      title: "找不到頁面",
      body: "您要找的頁面可能已移動或不存在。讓我們帶您回到正軌。",
      button: "返回首頁",
    },
  },
};

/** Top-level nav structure (paths are English; localized at render time). */
export const NAV_LINKS: { key: keyof typeof UI.en.nav; path: string }[] = [
  { key: "about", path: "/about" },
  { key: "services", path: "/services" },
  { key: "pricing", path: "/pricing" },
  { key: "areas", path: "/bay-area" },
  { key: "blog", path: "/blog" },
  { key: "contact", path: "/contact" },
];

export const AREA_ICON: Record<string, IconName> = {
  "bay-area": "map",
  "southern-california": "globe",
  "remote-advisory": "video",
};
