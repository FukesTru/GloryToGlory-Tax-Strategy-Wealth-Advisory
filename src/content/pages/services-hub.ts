import type { L } from "../types";

export interface ServicesHubContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroSub: string;
  /** 150–200 words framing the eight services as one system. */
  intro: string[];
  gridTitle: string;
  equityNote: { title: string; body: string; links: { path: string; label: string }[] };
}

export const servicesHubPage: L<ServicesHubContent> = {
  en: {
    metaTitle: "Financial Planning & Tax Strategy Services",
    metaDescription:
      "Eight coordinated services for tech professionals: financial planning, tax strategy, equity compensation, cross-border filings and estate planning.",
    eyebrow: "Services",
    h1: "Financial Planning & Tax Strategy Services",
    heroSub: "Eight services that work as one system, so every decision about your equity, taxes and savings supports the others.",
    intro: [
      "Most financial problems for tech employees are not caused by a single bad decision. They come from good decisions made in isolation. Holding vested RSUs feels prudent until you realize they are seventy percent of your net worth. Maxing a 401(k) is wise until a large option exercise pushes you into AMT the same year. Funding a 529 is generous until it crowds out the retirement contributions that only you can make.",
      "That is why we do not sell services one at a time. Holistic financial planning is the frame. Tax strategy sets the calendar, and cross-border filings keep an account left open in Taipei from becoming a problem here. Equity compensation planning decides what you hold and sell. Retirement and education planning define what the money is for. Asset allocation turns it all into a portfolio you can live with, and estate and trust planning settles where it goes afterwards. Start with the service that matches today's question, and we will show you how it connects to the rest.",
    ],
    gridTitle: "Choose where to start",
    equityNote: {
      title: "Deeper dives on equity compensation",
      body: "RSUs and stock options follow different tax rules and deserve their own playbooks. Explore the dedicated guides.",
      links: [
        { path: "/services/equity-compensation/rsu-rsa-planning", label: "RSU & RSA planning" },
        { path: "/services/equity-compensation/stock-options-iso-nso", label: "ISO & NSO stock options" },
      ],
    },
  },
  "zh-hant": {
    metaTitle: "財務規劃與稅務策略服務",
    metaDescription:
      "為科技業專業人士提供八項協調一致的服務：財務規劃、稅務策略、跨境申報、股權獎酬、退休規劃、教育基金、資產配置與財富傳承。",
    eyebrow: "服務項目",
    h1: "財務規劃與稅務策略服務",
    heroSub: "八項服務如同一個系統運作，讓您在股權、稅務與儲蓄上的每個決定都能相互支持。",
    intro: [
      "科技業員工的財務問題，多半不是單一錯誤決定造成的，而是來自各自為政的好決定。持有已歸屬的 RSU 看似穩健，直到您發現它佔了淨資產的七成。把 401(k) 提滿是明智之舉，直到同一年一筆大額行權把您推進 AMT。為 529 計畫存錢很慷慨，直到它排擠了只有您自己才能完成的退休提撥。",
      "這就是為什麼我們不會逐項販售服務。全方位財務規劃是整體框架，稅務策略排定時程，跨境稅務申報讓您留在台灣的帳戶不會在美國成為麻煩，股權獎酬規劃決定該持有與出售什麼，退休與教育規劃定義金錢的用途，資產配置把一切變成一個您能安心持有的投資組合，而財富傳承規劃則安排這一切最終如何交付下一代。從最符合您當下問題的服務開始，我們會告訴您它如何與其他環節相連。",
    ],
    gridTitle: "選擇您的起點",
    equityNote: {
      title: "深入了解股權獎酬",
      body: "RSU 與股票選擇權適用不同的稅務規則，各自需要專屬的策略。歡迎瀏覽專題指南。",
      links: [
        { path: "/services/equity-compensation/rsu-rsa-planning", label: "RSU 與 RSA 規劃" },
        { path: "/services/equity-compensation/stock-options-iso-nso", label: "ISO 與 NSO 股票選擇權" },
      ],
    },
  },
};
