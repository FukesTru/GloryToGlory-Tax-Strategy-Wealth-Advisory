import type { L } from "../types";

export interface ContactContent {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  heroSub: string;
  bookNow: { title: string; body: string; cta: string };
  formTitle: string;
  formIntro: string;
  details: {
    title: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hours: string;
    virtualTitle: string;
    virtualBody: string;
    mailingLabel: string;
    mailingNote: string;
  };
  expect: { title: string; steps: string[] };
}

export const contactPage: L<ContactContent> = {
  en: {
    metaTitle: "Free Consultation – Tax & Wealth Advisory",
    metaDescription:
      "Book a free consultation with GloryToGlory Tax Strategy & Wealth Advisory. Bilingual virtual meetings for tech professionals nationwide. Call (949) 742-1604.",
    eyebrow: "Contact",
    h1: "Book a Free Consultation",
    heroSub: "Book a complimentary 15-minute strategy session straight from the calendar, or send a note first. Either way we speak in English or Mandarin.",
    bookNow: {
      title: "Book straight into the calendar",
      body: "A complimentary 15-minute strategy session, by video. Pick any open slot.",
      cta: "See available times",
    },
    formTitle: "Or send a note first",
    formIntro: "There is no obligation and no sales pitch. If we are not the right fit, we will tell you and point you in a better direction.",
    details: {
      title: "Other ways to reach Grace",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Hours",
      hours: "Monday – Friday, 9am – 6pm Pacific. Evening and weekend calls available by appointment.",
      virtualTitle: "Virtual consultations available nationwide",
      virtualBody: "Meetings take place by secure video call, with encrypted document sharing and e-signature. Clients in the Bay Area and Southern California may request an in-person meeting by appointment.",
      mailingLabel: "Mailing address",
      mailingNote: "Mailing address only, not a walk-in office.",
    },
    expect: {
      title: "What happens next",
      steps: [
        "We confirm your request within one business day and send a scheduling link.",
        "Before the call, you may share a recent grant summary or pay stub so we can prepare (optional).",
        "On the call we discuss your goals, your equity and your tax picture, and outline what we would do first.",
        "You receive a short written summary. If it makes sense to work together, we explain the engagement and fees clearly.",
      ],
    },
  },
  "zh-hant": {
    metaTitle: "免費諮詢 – 稅務與財富顧問",
    metaDescription:
      "預約 GloryToGlory 稅務策略與財富顧問的免費諮詢。為全美科技業專業人士提供雙語視訊會議。電話 (949) 742-1604。",
    eyebrow: "聯絡我們",
    h1: "預約免費諮詢",
    heroSub: "您可以直接在行事曆上預約 15 分鐘的免費策略諮詢，或先留言給我們。中文或英文皆可。",
    bookNow: {
      title: "直接在行事曆上預約",
      body: "15 分鐘的免費策略諮詢，以視訊進行。選擇任何一個空檔即可。",
      cta: "查看可預約時段",
    },
    formTitle: "或先留言給我們",
    formIntro: "沒有任何義務，也沒有推銷。如果我們不是最適合您的顧問，我們會坦白告訴您，並為您指出更好的方向。",
    details: {
      title: "其他聯繫 Grace 的方式",
      phoneLabel: "電話",
      emailLabel: "電子郵件",
      hoursLabel: "服務時間",
      hours: "週一至週五，太平洋時間上午 9 點至下午 6 點。晚間與週末可另行預約。",
      virtualTitle: "全美線上諮詢",
      virtualBody: "會談透過安全的視訊通話進行，並提供加密文件分享與電子簽名。灣區與南加州的客戶可預約面談。",
      mailingLabel: "通訊地址",
      mailingNote: "僅供郵寄，非實體辦公室。",
    },
    expect: {
      title: "接下來會發生什麼",
      steps: [
        "我們會在一個工作天內確認您的申請，並寄送預約連結。",
        "通話前，您可以選擇分享近期的股票授予摘要或薪資單，讓我們預先準備（選填）。",
        "通話中我們會討論您的目標、股權與稅務狀況，並說明我們建議優先處理的事項。",
        "您會收到一份簡短的書面摘要。若適合合作，我們會清楚說明服務內容與收費。",
      ],
    },
  },
};
