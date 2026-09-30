import type { L } from "../types";

export interface AboutContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroSub: string;
  photoAlt: string;
  bio: { title: string; paragraphs: string[] };
  philosophy: { title: string; items: { title: string; body: string }[] };
  bilingual: { title: string; paragraphs: string[] };
  quickFacts: { label: string; value: string }[];
  schemaDescription: string;
}

export const aboutPage: L<AboutContent> = {
  en: {
    metaTitle: "Grace Chen, Financial Advisor",
    metaDescription:
      "Meet Grace Chen, bilingual financial advisor and founder of GloryToGlory. Tax strategy, equity compensation and retirement planning for families.",
    eyebrow: "About Grace",
    h1: "Meet Grace Chen",
    heroSub: "The difference between overpaying taxes and keeping more of what you earn is your tax strategy.",
    photoAlt: "Grace Chen, financial advisor and founder of GloryToGlory Tax Strategy & Wealth Advisory",
    bio: {
      title: "A framework built around your dreams and goals",
      paragraphs: [
        "The difference between overpaying taxes and keeping more of what you earn is your tax strategy. As a first-generation Asian professional who built her corporate experience in the tech industry, I understand how difficult it can be for busy working professionals to navigate the changing U.S. tax laws and the complex financial system while balancing career, family, and long-term goals.",
        "At GloryToGlory Tax Strategy & Wealth Advisory, I help families build a solid financial and tax framework tailored to your dreams and goals, which includes asset allocation, equity compensation (RSU, RSA, ISO, and NSO) exercise planning, tax-reduction strategies, college funding, retirement planning, and Roth conversions — for Taiwanese and first-generation immigrant families and middle-class households across the U.S., with specialties in the tech industry.",
      ],
    },
    philosophy: {
      title: "How Grace works",
      items: [
        {
          title: "Plan the whole picture",
          body: "A stock decision is a tax decision is a retirement decision. We never look at one piece in isolation.",
        },
        {
          title: "Explain until it makes sense",
          body: "You should understand every recommendation well enough to explain it to your spouse or your parents. In English or Mandarin.",
        },
        {
          title: "Independence you can verify",
          body: "No commissions, no proprietary products, no quotas. Advice is the only thing we sell.",
        },
        {
          title: "Coordinate, do not compete",
          body: "We work alongside your CPA, attorney and employer stock plan administrator so the whole team pulls in the same direction.",
        },
      ],
    },
    bilingual: {
      title: "A note on language and culture",
      paragraphs: [
        "Many of Grace's clients grew up in Taiwan and built their careers in the United States. They are comfortable in English at work, yet when it comes to money, family and the future, Mandarin is often the language of real conversation. Grace offers every meeting, document summary and follow-up in whichever language you prefer, and she is used to conversations where a spouse or a parent joins the call.",
        "Cultural fluency matters as much as linguistic fluency. Supporting parents overseas, saving aggressively for children's education, holding property in two countries, weighing whether to stay in the US long term: these are not footnotes to a financial plan. They are the plan. Grace designs around them rather than around them being an afterthought.",
      ],
    },
    quickFacts: [
      { label: "Role", value: "Founder & Financial Advisor" },
      { label: "Languages", value: "English, Mandarin (Traditional Chinese)" },
      { label: "Based in", value: "Orange County, California" },
      { label: "Meets clients", value: "By video nationwide; in person by appointment" },
    ],
    schemaDescription:
      "Grace Chen is a bilingual (English / Traditional Chinese) financial advisor and founder of GloryToGlory Tax Strategy & Wealth Advisory, focused on tax strategy and equity compensation planning for tech professionals.",
  },
  "zh-hant": {
    metaTitle: "財務顧問 Grace Chen",
    metaDescription:
      "認識 GloryToGlory 創辦人、雙語財務顧問 Grace Chen。為專業人士與家庭提供稅務策略與股權獎酬規劃。",
    eyebrow: "認識 Grace",
    h1: "認識 Grace Chen",
    heroSub: "多繳稅與把錢留在自己口袋之間的差別，就在於您的稅務策略。",
    photoAlt: "GloryToGlory 稅務策略與財富顧問創辦人、財務顧問 Grace Chen",
    bio: {
      title: "圍繞您的夢想與目標而建立的架構",
      paragraphs: [
        "多繳稅與把錢留在自己口袋之間的差別，就在於您的稅務策略。身為在科技業累積企業經驗的第一代亞裔專業人士，我很清楚忙碌的上班族要一邊兼顧事業、家庭與長期目標，一邊面對不斷變動的美國稅法與複雜的財務制度，有多麼不容易。",
        "在 GloryToGlory 稅務策略與財富顧問，我協助家庭建立一套貼近自身夢想與目標的財務與稅務架構，內容涵蓋資產配置、股權獎酬（RSU、RSA、ISO 與 NSO）的行權規劃、節稅策略、大學教育基金、退休規劃與 Roth 轉換。服務對象為全美的台裔與第一代移民家庭，以及一般中產家庭，並在科技產業有特別專精。",
      ],
    },
    philosophy: {
      title: "Grace 的工作方式",
      items: [
        {
          title: "規劃完整的全貌",
          body: "一個股票的決定，就是一個稅務的決定，也是一個退休的決定。我們從不孤立地看待任何一環。",
        },
        {
          title: "解釋到您真正明白為止",
          body: "您應該充分理解每一項建議，足以向配偶或父母說明。中文或英文皆可。",
        },
        {
          title: "可以驗證的獨立性",
          body: "沒有佣金、沒有自家產品、沒有業績配額。我們唯一販售的是建議。",
        },
        {
          title: "協調合作，而非競爭",
          body: "我們與您的會計師、律師以及公司股票計畫管理單位並肩合作，讓整個團隊朝同一個方向前進。",
        },
      ],
    },
    bilingual: {
      title: "關於語言與文化",
      paragraphs: [
        "Grace 的許多客戶在台灣長大、在美國建立職涯。他們在工作上使用英文毫無障礙，但談到金錢、家庭與未來，中文往往才是真正交心的語言。Grace 的每一次會談、文件摘要與後續追蹤，都可以用您偏好的語言進行，她也很習慣配偶或父母一起加入會議的情況。",
        "文化上的理解與語言能力同樣重要。奉養海外的父母、積極為子女的教育儲蓄、在兩個國家持有房產、思考是否長期留在美國：這些都不是財務計畫的註腳，它們本身就是計畫。Grace 以這些現實為核心來設計，而不是事後才想到。",
      ],
    },
    quickFacts: [
      { label: "職務", value: "創辦人暨財務顧問" },
      { label: "服務語言", value: "英文、中文（繁體）" },
      { label: "所在地", value: "加州橙縣" },
      { label: "會談方式", value: "全美視訊會議；可預約面談" },
    ],
    schemaDescription:
      "Grace Chen 是雙語（英文／繁體中文）財務顧問，GloryToGlory 稅務策略與財富顧問創辦人，專注於科技業專業人士的稅務策略與股權獎酬規劃。",
  },
};
