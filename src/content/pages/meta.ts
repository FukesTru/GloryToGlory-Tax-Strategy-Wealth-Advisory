import type { L } from "../types";

interface SimplePage {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroSub: string;
}

export const blogIndexPage: L<SimplePage & { empty: string }> = {
  en: {
    metaTitle: "Tax & Equity Compensation Tips for Tech Employees",
    metaDescription:
      "Plain-English articles on RSUs, stock options, tax planning, 529 plans and financial planning for tech employees and Taiwanese-American families in the US.",
    eyebrow: "Insights",
    h1: "Tax & Equity Compensation Tips for Tech Employees",
    heroSub: "Short, practical reads on the decisions that come with a vesting schedule. Available in English and Traditional Chinese.",
    empty: "New articles are on the way.",
  },
  "zh-hant": {
    metaTitle: "科技業員工的稅務與股權獎酬指南",
    metaDescription: "以白話文解析 RSU、股票選擇權、稅務規劃、529 計畫與財務規劃，專為科技業員工與台裔美國人家庭撰寫。",
    eyebrow: "理財觀點",
    h1: "科技業員工的稅務與股權獎酬指南",
    heroSub: "針對伴隨歸屬時程而來的各種決定，提供簡短實用的文章。提供英文與繁體中文版本。",
    empty: "新文章即將推出。",
  },
};

export const testimonialsPage: L<
  SimplePage & { intro: string; placeholderNotice: string; reviewsTitle: string; reviewsSub: string }
> = {
  en: {
    metaTitle: "GloryToGlory Client Reviews",
    metaDescription:
      "Client reviews and testimonials for GloryToGlory Tax Strategy & Wealth Advisory. Bilingual tax and equity compensation planning for tech professionals.",
    eyebrow: "Testimonials",
    h1: "GloryToGlory Client Reviews",
    heroSub: "Stories from tech professionals and families who wanted their equity, taxes and future planned together.",
    intro: "Every testimonial on this page will be a real, permissioned quote from a client, published in line with advertising rules for investment advisers.",
    placeholderNotice:
      "The cards below are sample placeholders. Before launch, replace each with a real client quote (with written permission) or remove it. Do not publish sample testimonials.",
    reviewsTitle: "Google reviews",
    reviewsSub: "Once the Google Business Profile is live, verified reviews will appear here.",
  },
  "zh-hant": {
    metaTitle: "GloryToGlory 客戶評價",
    metaDescription: "GloryToGlory 稅務策略與財富顧問的客戶評價與見證。為科技業專業人士提供雙語稅務與股權獎酬規劃。",
    eyebrow: "客戶見證",
    h1: "GloryToGlory 客戶評價",
    heroSub: "來自科技業專業人士與家庭的故事，他們希望把股權、稅務與未來一併規劃。",
    intro: "本頁的每一則見證，都將是客戶授權的真實回饋，並依投資顧問的廣告規範刊登。",
    placeholderNotice: "以下卡片為範例預留內容。上線前請以取得書面授權的真實客戶回饋取代，或予以移除。請勿刊登範例見證。",
    reviewsTitle: "Google 評論",
    reviewsSub: "Google 商家檔案上線後，經驗證的評論將顯示於此。",
  },
};

export const sitemapPage: L<
  SimplePage & {
    sections: { core: string; services: string; areas: string; blog: string; legal: string };
    languageNote: string;
    englishVersion: string;
    chineseVersion: string;
  }
> = {
  en: {
    metaTitle: "Sitemap",
    metaDescription:
      "HTML sitemap for GloryToGlory Tax Strategy & Wealth Advisory: every page in English and Traditional Chinese, including services, service areas and insights.",
    eyebrow: "Sitemap",
    h1: "Sitemap",
    heroSub: "Every page on the site, in both languages.",
    sections: { core: "Main pages", services: "Services", areas: "Where we serve", blog: "Insights", legal: "Legal" },
    languageNote: "Each page is available in English and Traditional Chinese.",
    englishVersion: "English",
    chineseVersion: "繁體中文",
  },
  "zh-hant": {
    metaTitle: "網站地圖",
    metaDescription: "GloryToGlory 稅務策略與財富顧問的 HTML 網站地圖：包含英文與繁體中文的所有頁面，涵蓋服務項目、服務地區與理財觀點。",
    eyebrow: "網站地圖",
    h1: "網站地圖",
    heroSub: "本站所有頁面，提供兩種語言。",
    sections: { core: "主要頁面", services: "服務項目", areas: "服務地區", blog: "理財觀點", legal: "法律資訊" },
    languageNote: "每個頁面皆提供英文與繁體中文版本。",
    englishVersion: "English",
    chineseVersion: "繁體中文",
  },
};
