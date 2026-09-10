import type { L } from "../types";

/**
 * Advisory tiers, taken from Grace's own 2026 pricing deck. Prices, tier names,
 * hero deliverables and the Concierge Membership are verbatim from that deck;
 * only the connecting sentences are written for the web.
 */

export interface Tier {
  /** Stable key, used for React keys and anchors. */
  id: string;
  name: string;
  /** Short positioning line under the tier name. */
  subtitle: string;
  price: string;
  /** Who the tier is designed for. */
  who: string;
  /** The headline deliverable, called the "hero deliverable" in her deck. */
  hero: string;
  includes: string[];
  /** Draws the eye to the tier most people start with. */
  featured?: boolean;
}

export interface PricingContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroSub: string;
  intro: string[];
  tiersTitle: string;
  tiers: Tier[];
  priceNote: string;
  concierge: {
    title: string;
    intro: string;
    items: { title: string; body: string }[];
  };
  chooseTitle: string;
  chooseSub: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
}

export const pricingPage: L<PricingContent> = {
  en: {
    metaTitle: "Advisory Pricing & Tiers",
    metaDescription:
      "Flat-fee tax strategy and wealth advisory tiers from $500. Compare Essential, Elite, Platinum and Titanium, each including Concierge Membership.",
    eyebrow: "Pricing",
    h1: "Advisory Tiers & Pricing",
    heroSub:
      "Four levels of support, priced as flat programs rather than a percentage of your assets. You know the cost before you start.",
    intro: [
      "Most advisory relationships price on assets under management, which quietly ties the fee to the size of your portfolio rather than the work involved. We price the work. Each tier is a flat program fee for a defined set of deliverables, so you can weigh what you are paying against what you receive.",
      "Where you start depends on how complicated your year looks, not on how much you have. A single professional wanting a clear plan and a second opinion belongs somewhere different from a family holding equity compensation, a rental property and accounts in two countries. Every tier includes the Concierge Membership, and you can move up a tier at any point.",
    ],
    tiersTitle: "Choose the level of support",
    tiers: [
      {
        id: "essential",
        name: "Essential",
        subtitle: "Clarity & foundation",
        price: "$500",
        who: "For individuals and busy working professionals who want clarity and a base strategy for tax savings, asset allocation, retirement or college funding.",
        hero: "One comprehensive two-hour strategy session with a structural review",
        includes: [
          "Asset allocation: a deep look at your current exposures and the opportunities in them",
          "Tactical overview of cash flow, liquidity and tax diversification",
          "One year of Concierge Membership included",
        ],
      },
      {
        id: "elite",
        name: "Elite",
        subtitle: "Managing complexity",
        price: "$1,200",
        who: "For individuals and families with equity compensation (RSU, RSA, ISO, NSO, ESPP), rental property or a side business.",
        hero: "Three strategy sessions across the year, six hours in total, with a structural review",
        includes: [
          "Everything in Essential",
          "Two semi-annual checkpoints to keep the plan aligned as the year moves",
          "Specialised review of non-traditional income to reduce tax exposure",
        ],
        featured: true,
      },
      {
        id: "platinum",
        name: "Platinum",
        subtitle: "Execution support",
        price: "$1,500",
        who: "For busy professionals and business owners who want the plan carried out, not just written.",
        hero: "Done-for-you tactical implementation",
        includes: [
          "Everything in Elite",
          "Documentation prepared to support carrying out your strategies",
          "Guided oversight through to full follow-through",
        ],
      },
      {
        id: "titanium",
        name: "Titanium",
        subtitle: "Two-year partnership",
        price: "$2,500",
        who: "For committed builders who want long-term strategy and someone alongside them for the whole arc.",
        hero: "Everything in Platinum, with two years of structural alignment",
        includes: [
          "High-execution support across complex equity compensation, rental property and small business",
          "Continuing oversight of tax exposure, market volatility and asset allocation against your goals",
          "Two years of Concierge Membership included",
        ],
      },
    ],
    priceNote:
      "Program fees are flat and quoted before any work begins. They cover strategy, analysis and planning. They are not investment management fees, and we do not take a percentage of your assets or a commission on any product.",
    concierge: {
      title: "Concierge Membership",
      intro: "Included in every tier. Whichever level you choose, you get the ongoing side of the relationship, not just the sessions.",
      items: [
        { title: "Financial literacy", body: "On-demand material that makes complex wealth and tax concepts usable rather than abstract." },
        { title: "Private community", body: "Access to a vetted group of peers facing the same decisions." },
        { title: "Direct access", body: "An open line to active CPAs and asset strategists." },
        { title: "Updates", body: "Timely alerts and guides when tax law shifts under your plan." },
      ],
    },
    chooseTitle: "Not sure which tier fits?",
    chooseSub:
      "That is what the complimentary session is for. Bring your situation, and we will tell you which tier is right, including when the answer is the smallest one.",
    faqTitle: "Questions about pricing",
    faqs: [
      {
        q: "Is this a subscription or a one-time fee?",
        a: "Essential, Elite and Platinum are flat program fees for the deliverables listed. Titanium is a two-year partnership. None of them bills as a percentage of your assets, and none renews without you agreeing to it.",
      },
      {
        q: "Do you manage my investments for this fee?",
        a: "No. We do strategy, analysis and planning, and your accounts stay where they are, whether that is Fidelity, Schwab, Vanguard, Morgan Stanley or your employer's plan. Our work is designed to sit alongside your existing advisor and your CPA rather than replace them.",
      },
      {
        q: "Does the fee include preparing my tax return?",
        a: "No. Tax preparation reports what already happened; our work shapes what happens next. We coordinate closely with your CPA, and we can introduce one who understands equity compensation if you do not have that today.",
      },
      {
        q: "Which tier suits someone with equity compensation?",
        a: "Elite is the tier built for that situation. Once RSUs, options, a rental or a side business are in the picture, one session a year is rarely enough, because the decisions arrive on a vesting calendar rather than in April.",
      },
      {
        q: "Can I move up a tier later?",
        a: "Yes. People often begin at Essential, then move up when a liquidity event, an IPO or a new grant makes the year more complicated. You pay the difference rather than starting over.",
      },
      {
        q: "What happens in the free session before I commit?",
        a: "Fifteen minutes by video, at no cost, to understand your situation and tell you plainly which tier fits and what it would cover. If we are not the right fit, we will say so and point you somewhere better.",
      },
    ],
  },
  "zh-hant": {
    metaTitle: "顧問服務方案與收費",
    metaDescription:
      "固定收費的稅務策略與財富顧問方案，自 $500 起。比較基礎、菁英、白金與鈦金四種方案，皆含尊榮會員服務。",
    eyebrow: "服務方案",
    h1: "顧問方案與收費",
    heroSub: "四種支援層級，以固定方案收費，而非依資產比例計費。開始之前，您就清楚知道費用。",
    intro: [
      "多數顧問關係以管理資產的比例收費，等於把費用悄悄綁在您的投資組合規模上，而不是實際的工作量。我們則是為工作本身定價。每個方案都是固定費用，對應一組明確的交付內容，讓您能清楚衡量所付與所得。",
      "從哪個方案開始，取決於您這一年的複雜程度，而不是您擁有多少。一位希望釐清方向、想要第二意見的專業人士，和一個同時持有股權獎酬、出租房產以及跨兩國帳戶的家庭，起點自然不同。所有方案都包含尊榮會員服務，您也可以隨時升級。",
    ],
    tiersTitle: "選擇適合您的支援層級",
    tiers: [
      {
        id: "essential",
        name: "基礎方案 Essential",
        subtitle: "釐清方向，打好基礎",
        price: "$500",
        who: "適合希望在節稅、資產配置、退休或教育基金上獲得清晰方向與基礎策略的個人與忙碌的上班族。",
        hero: "一次兩小時的完整策略諮詢，並進行結構性檢視",
        includes: [
          "資產配置：深入檢視您目前的曝險部位與其中的機會",
          "現金流、流動性與稅務分散的戰術總覽",
          "含一年尊榮會員服務",
        ],
      },
      {
        id: "elite",
        name: "菁英方案 Elite",
        subtitle: "處理複雜度",
        price: "$1,200",
        who: "適合擁有股權獎酬（RSU、RSA、ISO、NSO、ESPP）、出租房產或副業的個人與家庭。",
        hero: "全年三次策略諮詢，合計六小時，並進行結構性檢視",
        includes: [
          "包含基礎方案的所有內容",
          "兩次半年度檢查點，讓計畫隨年度變化保持一致",
          "針對非典型收入的專項檢視，降低稅務曝險",
        ],
        featured: true,
      },
      {
        id: "platinum",
        name: "白金方案 Platinum",
        subtitle: "執行支援",
        price: "$1,500",
        who: "適合希望計畫被真正執行、而不只是被寫下來的忙碌專業人士與企業主。",
        hero: "全程代辦式的策略執行支援",
        includes: [
          "包含菁英方案的所有內容",
          "為策略執行準備所需文件",
          "全程引導與監督，直到確實完成",
        ],
      },
      {
        id: "titanium",
        name: "鈦金方案 Titanium",
        subtitle: "兩年夥伴關係",
        price: "$2,500",
        who: "適合長期投入、希望有人一路同行的穩健建構者。",
        hero: "包含白金方案的所有內容，並提供兩年的結構性同行支援",
        includes: [
          "針對複雜股權獎酬、出租房產與小型企業的高強度執行支援",
          "持續監督稅務曝險、市場波動與資產配置，並對齊您的目標",
          "含兩年尊榮會員服務",
        ],
      },
    ],
    priceNote:
      "方案費用為固定金額，並在工作開始前先行報價，涵蓋策略、分析與規劃。這不是投資管理費，我們不收取資產比例費用，也不從任何產品賺取佣金。",
    concierge: {
      title: "尊榮會員服務",
      intro: "所有方案皆包含。無論您選擇哪一個層級，都能獲得諮詢之外的長期陪伴。",
      items: [
        { title: "財務知識", body: "隨時可取用的內容，把複雜的財富與稅務概念變成真正用得上的知識。" },
        { title: "私密社群", body: "與面對相同決定的同儕交流，成員皆經過篩選。" },
        { title: "直接聯繫", body: "與執業會計師及資產策略顧問保持暢通的溝通管道。" },
        { title: "即時更新", body: "當稅法改變、影響到您的計畫時，及時收到提醒與說明。" },
      ],
    },
    chooseTitle: "不確定哪個方案適合您？",
    chooseSub: "這正是免費諮詢的用途。把您的情況帶來，我們會告訴您哪一個方案合適——包括答案是最小的那一個的時候。",
    faqTitle: "關於收費的常見問題",
    faqs: [
      {
        q: "這是訂閱制還是一次性收費？",
        a: "基礎、菁英與白金方案皆為固定方案費用，對應列出的交付內容；鈦金方案則是為期兩年的夥伴關係。三者都不以資產比例計費，也不會在您未同意的情況下自動續約。",
      },
      {
        q: "這個費用包含代為管理投資嗎？",
        a: "不包含。我們提供策略、分析與規劃，您的帳戶仍留在原處，無論是 Fidelity、Schwab、Vanguard、Morgan Stanley 或公司的員工計畫。我們的工作是與您現有的顧問和會計師並肩合作，而非取代他們。",
      },
      {
        q: "費用包含報稅嗎？",
        a: "不包含。報稅是申報已經發生的事，我們的工作是形塑接下來會發生的事。我們與您的會計師密切協調；若您目前沒有熟悉股權獎酬的會計師，我們也可以為您引介。",
      },
      {
        q: "有股權獎酬的人適合哪個方案？",
        a: "菁英方案正是為這種情況設計的。一旦有了 RSU、選擇權、出租房產或副業，一年一次的諮詢通常不夠，因為這些決定是跟著歸屬時程來的，而不是等到四月。",
      },
      {
        q: "之後可以升級方案嗎？",
        a: "可以。許多人先從基礎方案開始，等到出現變現事件、公司上市或新的授予讓當年度變複雜時再升級。您只需補上差額，不必重新開始。",
      },
      {
        q: "在正式合作前的免費諮詢會談些什麼？",
        a: "15 分鐘的視訊，完全免費，用來了解您的情況，並坦白告訴您哪個方案合適、涵蓋哪些內容。如果我們不是最適合您的人選，我們也會直說，並為您指出更好的方向。",
      },
    ],
  },
};
