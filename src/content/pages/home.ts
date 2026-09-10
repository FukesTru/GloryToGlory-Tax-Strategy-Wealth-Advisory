import type { L } from "../types";

export interface HomeContent {
  metaTitle: string;
  metaDescription: string;
  hero: { eyebrow: string; h1: string; sub: string; primary: string; secondary: string };
  trust: { label: string; value: string; placeholder?: boolean; linkedin?: boolean; path?: string }[];
  services: { eyebrow: string; title: string; sub: string; allLink: string };
  whoWeServe: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: { title: string; body: string }[];
  };
  cities: { title: string; sub: string };
  blog: { eyebrow: string; title: string; sub: string; cta: string };
}

export const homePage: L<HomeContent> = {
  en: {
    metaTitle: "Tax Strategy & Wealth Advisor for Tech Employees",
    metaDescription:
      "Bilingual tax strategy and wealth advisory for tech professionals with RSUs, ISOs and NSOs. Virtual planning for the Bay Area, Los Angeles and nationwide.",
    hero: {
      eyebrow: "Independent · Bilingual · Virtual-first",
      h1: "Tax Strategy & Wealth Advisory for Tech Professionals",
      sub: "Equity compensation, taxes, retirement and family goals, planned as one system. Guidance in English or Mandarin from an independent advisor who understands RSUs, ISOs and the first-generation immigrant journey.",
      primary: "Book a Free Consultation",
      secondary: "Explore services",
    },
    trust: [
      { label: "Focus", value: "Equity compensation & tax strategy", path: "/services" },
      { label: "Meetings", value: "By video, nationwide", path: "/remote-advisory" },
      { label: "Languages", value: "English · 繁體中文" },
      { label: "Connect", value: "LinkedIn profile", linkedin: true },
    ],
    services: {
      eyebrow: "What we do",
      title: "Six services. One coordinated plan.",
      sub: "Every piece of your financial life affects the others. We plan them together so a decision about your stock never creates a surprise on your tax return or a gap in your retirement.",
      allLink: "See all services",
    },
    whoWeServe: {
      eyebrow: "Who we serve",
      title: "Built for people whose paycheck comes with a vesting schedule",
      intro: "Our clients are engineers, product managers, designers, researchers and the families who support them. Most receive a meaningful part of their compensation as equity, and many are navigating American finances for the first time.",
      groups: [
        {
          title: "Tech employees with RSU, ISO or NSO grants",
          body: "From your first grant at a public company to a pre-IPO option package, we help you decide what to hold, what to sell, when to exercise and how to keep the tax bill predictable.",
        },
        {
          title: "First-generation Taiwanese-American families",
          body: "Planning that respects how your family thinks about saving, education, property and supporting parents, explained in the language you are most comfortable with.",
        },
        {
          title: "H-1B, green card and newly naturalized professionals",
          body: "Immigration status shapes retirement accounts, tax residency and how flexible your plan needs to be. We build that flexibility in from the start.",
        },
        {
          title: "Dual-income households and growing families",
          body: "Two equity packages, a home purchase, childcare, a 529 for the kids and retirement targets, balanced with a plan you can actually follow.",
        },
      ],
    },
    cities: {
      title: "Serving tech hubs, virtually and in person",
      sub: "We meet clients by video across the country. If you are near the Bay Area or Southern California, in-person meetings are available by appointment.",
    },
    blog: {
      eyebrow: "Insights",
      title: "Plain-English guides to equity and taxes",
      sub: "Short reads on the decisions tech employees face most often, in English and Traditional Chinese.",
      cta: "Browse all insights",
    },
  },
  "zh-hant": {
    metaTitle: "科技業員工的稅務策略與財富顧問",
    metaDescription:
      "為持有 RSU、ISO 與 NSO 的科技業專業人士提供雙語稅務策略與財富顧問服務。線上規劃，服務灣區、洛杉磯與全美各地。",
    hero: {
      eyebrow: "獨立 · 雙語 · 線上優先",
      h1: "科技業專業人士的稅務策略與財富顧問",
      sub: "股權獎酬、稅務、退休與家庭目標，以完整的系統一併規劃。由熟悉 RSU、ISO 與第一代移民歷程的獨立顧問，以中文或英文為您提供指引。",
      primary: "預約免費諮詢",
      secondary: "瀏覽服務項目",
    },
    trust: [
      { label: "專長領域", value: "股權獎酬與稅務策略", path: "/services" },
      { label: "會談方式", value: "全美視訊會談", path: "/remote-advisory" },
      { label: "服務語言", value: "English · 繁體中文" },
      { label: "聯繫", value: "LinkedIn 個人檔案", linkedin: true },
    ],
    services: {
      eyebrow: "服務範疇",
      title: "六項服務，一套協調一致的計畫。",
      sub: "財務生活的每一環節都會相互影響。我們將它們一起規劃，讓您關於股票的決定不會在報稅時帶來意外，也不會在退休準備上留下缺口。",
      allLink: "查看所有服務",
    },
    whoWeServe: {
      eyebrow: "服務對象",
      title: "為薪資附帶歸屬時程的人而設計",
      intro: "我們的客戶是工程師、產品經理、設計師、研究人員，以及支持他們的家庭。多數人有相當比例的薪酬來自股權，也有許多人是第一次面對美國的財務體系。",
      groups: [
        {
          title: "持有 RSU、ISO 或 NSO 的科技業員工",
          body: "從上市公司的第一筆授予，到上市前的選擇權方案，我們協助您決定該持有什麼、出售什麼、何時行權，並讓稅務支出維持可預期。",
        },
        {
          title: "台裔美國人第一代移民家庭",
          body: "尊重您的家庭對儲蓄、教育、房產與奉養父母的思考方式，並以您最自在的語言清楚說明。",
        },
        {
          title: "H-1B、綠卡與新入籍的專業人士",
          body: "移民身分會影響退休帳戶、稅務居民身分，以及計畫需要保留多少彈性。我們從一開始就把彈性納入設計。",
        },
        {
          title: "雙薪家庭與成長中的家庭",
          body: "兩份股權方案、購屋、托育、孩子的 529 計畫與退休目標，用一套您真正做得到的計畫來平衡。",
        },
      ],
    },
    cities: {
      title: "服務各大科技重鎮，線上與面談皆可",
      sub: "我們透過視訊服務全美客戶。若您位於灣區或南加州，也可預約面談。",
    },
    blog: {
      eyebrow: "理財觀點",
      title: "用白話文解析股權與稅務",
      sub: "針對科技業員工最常面對的決定，提供簡短易讀的中英文指南。",
      cta: "瀏覽所有文章",
    },
  },
};
