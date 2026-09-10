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
  credentials: { title: string; intro: string; items: string[]; note: string };
  bilingual: { title: string; paragraphs: string[] };
  quickFacts: { label: string; value: string }[];
  schemaDescription: string;
}

export const aboutPage: L<AboutContent> = {
  en: {
    metaTitle: "Grace Chen, Financial Advisor",
    metaDescription:
      "Meet Grace Chen, bilingual financial advisor and founder of GloryToGlory. Tax strategy and equity compensation planning for tech professionals.",
    eyebrow: "About Grace",
    h1: "Meet Grace Chen",
    heroSub: "An independent advisor who speaks your language, literally and financially, and who has spent her career helping tech families turn equity into security.",
    photoAlt: "Grace Chen, financial advisor and founder of GloryToGlory Tax Strategy & Wealth Advisory",
    bio: {
      title: "From spreadsheets at the kitchen table to a practice built for tech families",
      paragraphs: [
        "Grace founded GloryToGlory Tax Strategy & Wealth Advisory after years of watching smart, hard-working people make expensive mistakes with equity compensation, not because they lacked intelligence, but because nobody had explained the rules in a way that fit their lives. Engineers would exercise options without modeling AMT. Families would hold every vested share out of loyalty and end up with most of their net worth in one stock. Immigrant parents would delay retirement saving while helping children and relatives, then discover how much a decade of missed contributions had cost.",
        "She built this practice to be the advisor those families deserved: independent, fee-transparent, patient with questions and fluent in both the tax code and the cultural context her clients bring to the table. Today she works with tech professionals across the Bay Area, Los Angeles, Orange County, San Diego, Austin and Seattle, almost entirely by video, with a planning process that treats taxes, equity, retirement and family goals as one connected system.",
        "The name GloryToGlory reflects her belief that good planning is a journey, not a single transaction. Each stage of your career and family life builds on the last, and the job of an advisor is to make sure every step moves you forward.",
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
    credentials: {
      title: "Credentials & licensing",
      intro: "The exact designations, licenses and registration status will be listed here once confirmed by Grace. Nothing below should be treated as a credential claim until it is finalized.",
      items: [
        "[PLACEHOLDER] Professional designation(s), e.g. CFP®, EA, CPA, to be confirmed",
        "[PLACEHOLDER] Investment adviser registration (RIA / IAR) and state(s) of registration",
        "[PLACEHOLDER] Education and prior firm experience",
        "[PLACEHOLDER] Professional memberships and continuing education",
      ],
      note: "Client to confirm exact designations before publishing. Until then this section is clearly marked as a placeholder.",
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
      "認識 GloryToGlory 創辦人、雙語財務顧問 Grace Chen。專為科技業專業人士提供稅務策略與股權獎酬規劃。",
    eyebrow: "認識 Grace",
    h1: "認識 Grace Chen",
    heroSub: "一位真正懂您語言的獨立顧問——不只是中文與英文，更是財務的語言。她的職涯致力於協助科技業家庭把股權變成安穩的未來。",
    photoAlt: "GloryToGlory 稅務策略與財富顧問創辦人、財務顧問 Grace Chen",
    bio: {
      title: "從餐桌上的試算表，到專為科技業家庭打造的顧問事業",
      paragraphs: [
        "Grace 創立 GloryToGlory 稅務策略與財富顧問之前，多年來看著聰明又努力的人在股權獎酬上犯下代價高昂的錯誤。不是因為他們不夠聰明，而是從來沒有人用貼近他們生活的方式解釋規則。工程師在沒有試算 AMT 的情況下行權；家庭出於對公司的忠誠而持有每一股已歸屬的股票，最後大部分身家都押在同一支股票上；移民父母為了幫助子女與親人而延後退休儲蓄，多年後才發現錯過提撥的代價有多高。",
        "她創立這個事業，是為了成為這些家庭值得擁有的顧問：獨立、收費透明、耐心回答每一個問題，並且同時精通稅法與客戶帶來的文化背景。如今她服務灣區、洛杉磯、橙縣、聖地牙哥、奧斯汀與西雅圖的科技業專業人士，幾乎全部透過視訊進行，規劃流程把稅務、股權、退休與家庭目標視為一個相互連結的系統。",
        "GloryToGlory 這個名字，反映她的信念：好的規劃是一段旅程，而不是一次交易。職涯與家庭生活的每個階段都建立在前一階段之上，顧問的工作就是確保每一步都讓您往前走。",
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
    credentials: {
      title: "專業資格與執照",
      intro: "確切的專業認證、執照與註冊狀態，將在 Grace 確認後列於此處。在定稿之前，以下內容均不應視為任何資格聲明。",
      items: [
        "【待確認】專業認證，例如 CFP®、EA、CPA",
        "【待確認】投資顧問註冊（RIA / IAR）與註冊州別",
        "【待確認】學歷與過往任職經歷",
        "【待確認】專業組織會籍與持續進修",
      ],
      note: "上線前須由客戶確認確切的專業認證。在此之前，本區塊明確標示為預留內容。",
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
