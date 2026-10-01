import type { L } from "../types";

export interface HomeContent {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
    primary: string;
    secondary: string;
    /** Right-hand card in the hero. Specialty names come from the service pages. */
    card: { eyebrow: string; title: string; body: string };
  };
  trust: { label: string; value: string; placeholder?: boolean; path?: string }[];
  /** "Does this sound like you?" — the questions clients actually arrive with. */
  questions: { eyebrow: string; title: string; sub: string; items: string[] };
  whoWeServe: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: { title: string; body: string }[];
  };
  whyUs: { eyebrow: string; title: string; items: { title: string; body: string }[] };
  /** Three headline specialties; `path` points at the full service page. */
  specialties: {
    eyebrow: string;
    title: string;
    sub: string;
    /** Paths only — the names come from the service pages themselves. */
    paths: string[];
    alsoAvailable: string;
    allLink: string;
  };
  cities: { title: string; sub: string };
  blog: { eyebrow: string; title: string; sub: string; cta: string };
}

export const homePage: L<HomeContent> = {
  en: {
    metaTitle: "Equity, Tax & Retirement Planning in One Plan",
    metaDescription:
      "Bilingual tax strategy, equity compensation and retirement planning coordinated in one plan. RSUs, stock options and Roth conversions, nationwide by video.",
    hero: {
      eyebrow: "Tax strategy · Equity compensation · Retirement planning",
      h1: "One plan for your equity, taxes and retirement.",
      sub: "Bilingual tax, equity and retirement planning for professionals and first-generation families, nationwide by video.",
      primary: "Book a Free Consultation",
      secondary: "Explore services",
      card: {
        eyebrow: "Complimentary · No obligation",
        title: "Start with a conversation",
        body: "Book a complimentary, no-obligation appointment to start the introductory conversation, discuss your concerns, and find solutions.",
      },
    },
    trust: [
      { label: "Focus", value: "Equity compensation & tax strategy", path: "/services" },
      { label: "Meetings", value: "Virtual, nationwide", path: "/remote-advisory" },
      { label: "Languages", value: "English · 繁體中文" },
      { label: "Fees", value: "Fixed-fee tiers", path: "/pricing" },
    ],
    questions: {
      eyebrow: "Sound familiar?",
      title: "The questions our clients bring us",
      sub: "If any of these have been sitting on your mind, they are exactly what a first conversation is for.",
      items: [
        "Should I sell my RSUs when they vest or continue holding them?",
        "How much additional tax should I set aside when 22% withholding is not enough?",
        "When should I exercise my ISOs, and could the exercise trigger AMT?",
        "Should I perform Roth conversions before Social Security and RMD begin?",
        "How can I create retirement income that lasts throughout my lifetime?",
        "How should I coordinate U.S. planning with accounts, property, insurance, or family responsibilities in Taiwan?",
        "How do I reduce my taxes now, and keep them low through retirement?",
        "Is my family prepared if anyone needs long-term care?",
        "How do I prepare for my kids' college costs without delaying my retirement?",
      ],
    },
    whoWeServe: {
      eyebrow: "Who we serve",
      title: "Built for people with more than one thing to balance",
      intro:
        "GloryToGlory provides unbiased, bilingual guidance for busy tech professionals, Taiwanese-American families, and many middle-class Americans. Meet with us in your preferred language, virtually nationwide.",
      groups: [
        {
          title: "Tech professionals with equity compensation",
          body: "You receive RSUs, RSAs, ISOs, NSOs, or ESPP benefits and need help coordinating vesting, exercises, sales, withholding, estimated taxes, diversification, and long-term goals.",
        },
        {
          title: "First-generation and Taiwanese-American families",
          body: "You are building your career, family, and wealth in the U.S. with assets and parents in Taiwan, or making financial decisions across two countries and two financial and tax systems.",
        },
        {
          title: "Professionals approaching retirement or planning to retire within 10 years",
          body: "You need a coordinated strategy to manage sequence-of-returns risk and the order of withdrawals from Roth or tax-free accounts, Social Security benefits, brokerage accounts, tax-deferred accounts, lifetime income, taxes, and long-term care planning.",
        },
      ],
    },
    whyUs: {
      eyebrow: "Why GloryToGlory",
      title: "Why work with GloryToGlory?",
      items: [
        { title: "Specialized", body: "For RSUs, stock options (ISO, NSO), tax strategy, and retirement." },
        { title: "Culturally fluent", body: "Guidance for Taiwanese-American and first-generation families." },
        { title: "Bilingual", body: "Meetings and explanations in English or Mandarin." },
        { title: "Holistic", body: "Tax, equity, retirement, and family decisions considered together." },
        { title: "Transparent", body: "Clearly defined services and fixed-fee engagement options." },
      ],
    },
    specialties: {
      eyebrow: "What we do",
      title: "Three Signature Specialties",
      sub: "We help high-achieving individuals and families navigate complex tax laws and build lasting wealth for generations. We coordinate your equity compensation, like RSUs and stock options, optimize tax-saving strategies, and structure worry-free retirement through one integrated plan.",
      paths: ["/services/equity-compensation", "/services/tax-strategy-planning", "/services/retirement-planning"],
      alsoAvailable:
        "Also available as part of a coordinated plan: holistic financial planning, asset allocation, education funding, cross-border tax coordination (FBAR, FATCA, PFIC), and estate-planning coordination.",
      allLink: "See all services",
    },
    cities: {
      title: "Serving clients across the country, virtually and in person",
      sub: "We meet clients by video across the country. If you are near the Bay Area or Southern California, in-person meetings are available by appointment.",
    },
    blog: {
      eyebrow: "Insights",
      title: "Plain-English guides to equity and taxes",
      sub: "Short reads on the decisions our clients face most often, in English and Traditional Chinese.",
      cta: "Browse all insights",
    },
  },
  "zh-hant": {
    metaTitle: "股權、稅務與退休，整合為一套計畫",
    metaDescription:
      "將稅務策略、股權獎酬與退休規劃整合為同一套計畫：RSU、股票選擇權與 Roth 轉換，全美雙語線上服務。",
    hero: {
      eyebrow: "稅務策略 · 股權獎酬 · 退休規劃",
      h1: "一套計畫，整合您的股權、稅務與退休。",
      sub: "為全美的專業人士與第一代移民家庭，提供雙語的稅務、股權與退休規劃，線上會談。",
      primary: "預約免費諮詢",
      secondary: "瀏覽服務項目",
      card: {
        eyebrow: "免費諮詢 · 無任何義務",
        title: "從一場對話開始",
        body: "歡迎預約免費、無任何義務的諮詢，從一場初步對話開始，聊聊您的顧慮，一起找出解方。",
      },
    },
    trust: [
      { label: "專長領域", value: "股權獎酬與稅務策略", path: "/services" },
      { label: "會談方式", value: "全美線上會談", path: "/remote-advisory" },
      { label: "服務語言", value: "English · 繁體中文" },
      { label: "收費方式", value: "固定費用方案", path: "/pricing" },
    ],
    questions: {
      eyebrow: "您是否也在想這些問題？",
      title: "客戶最常帶來的問題",
      sub: "如果以下任何一題正放在您心上，那正是第一次諮詢最適合談的內容。",
      items: [
        "我的 RSU 歸屬後，應該賣掉還是繼續持有？",
        "當 22% 的預扣稅率不夠時，我該額外準備多少稅金？",
        "我的 ISO 應該在什麼時候行權？行權會不會觸發 AMT？",
        "在開始領取社會安全福利與 RMD 之前，我應該先做 Roth 轉換嗎？",
        "我要如何建立足以支撐一輩子的退休現金流？",
        "我在台灣的帳戶、房產、保單或家庭責任，該如何與美國這邊的規劃互相搭配？",
        "我該如何現在就降低稅負，並且在退休後也維持低稅？",
        "萬一家中有人需要長期照護，我們準備好了嗎？",
        "我要如何準備孩子的大學學費，又不讓自己的退休計畫被延後？",
      ],
    },
    whoWeServe: {
      eyebrow: "服務對象",
      title: "為同時要兼顧許多事情的人而設計",
      intro: "GloryToGlory 為忙碌的科技業專業人士、台裔美國家庭，以及許多中產家庭提供中立、雙語的專業建議。以您最自在的語言會談，全美線上服務。",
      groups: [
        {
          title: "持有股權獎酬的科技業專業人士",
          body: "您領有 RSU、RSA、ISO、NSO 或 ESPP，需要有人協助整合歸屬時程、行權、出售、預扣稅、預估稅、分散風險與長期目標。",
        },
        {
          title: "第一代移民與台裔美國家庭",
          body: "您在美國建立事業、家庭與財富，同時在台灣仍有資產與父母需要照顧，或必須在兩個國家、兩套財務與稅務制度之間做決定。",
        },
        {
          title: "接近退休，或計畫十年內退休的專業人士",
          body: "您需要一套整合的策略，來管理報酬順序風險，並安排 Roth 或免稅帳戶、社會安全福利、券商帳戶與延稅帳戶的提領順序，以及終身收入、稅務與長期照護規劃。",
        },
      ],
    },
    whyUs: {
      eyebrow: "選擇我們的理由",
      title: "為什麼選擇 GloryToGlory？",
      items: [
        { title: "專精", body: "專注於 RSU、股票選擇權（ISO、NSO）、稅務策略與退休規劃。" },
        { title: "文化相通", body: "深入理解台裔美國人與第一代移民家庭的處境。" },
        { title: "雙語服務", body: "會談與說明皆可使用中文或英文。" },
        { title: "全方位", body: "稅務、股權、退休與家庭決策一併考量。" },
        { title: "透明", body: "服務內容清楚界定，並提供固定費用的合作方案。" },
      ],
    },
    specialties: {
      eyebrow: "服務範疇",
      title: "三大核心專長",
      sub: "我們協助認真打拼的個人與家庭，在複雜的稅法中找到方向，累積能傳承世代的財富。我們整合您的股權獎酬（如 RSU 與股票選擇權）、優化節稅策略，並為您規劃無後顧之憂的退休生活——全部納入同一套計畫。",
      paths: ["/services/equity-compensation", "/services/tax-strategy-planning", "/services/retirement-planning"],
      alsoAvailable:
        "同時可納入整體規劃的服務還包括：全方位財務規劃、資產配置、教育基金、跨境稅務協調（FBAR、FATCA、PFIC），以及財富傳承規劃的協調。",
      allLink: "查看所有服務",
    },
    cities: {
      title: "服務全美客戶，線上與面談皆可",
      sub: "我們透過視訊服務全美客戶。若您位於灣區或南加州，也可預約面談。",
    },
    blog: {
      eyebrow: "理財觀點",
      title: "用白話文解析股權與稅務",
      sub: "針對客戶最常面對的決定，提供簡短易讀的中英文指南。",
      cta: "瀏覽所有文章",
    },
  },
};
