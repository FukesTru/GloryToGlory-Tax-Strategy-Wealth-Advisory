import type { ServiceArea } from "../types";

/**
 * Service-area page: Remote Advisory (Austin, Seattle and nationwide by video).
 * EN copy is final-draft quality; ZH copy is a working draft for review.
 */
export const remoteAdvisory: ServiceArea = {
  slug: "remote-advisory",
  path: "/remote-advisory",
  icon: "video",
  region: {
    en: "Remote Advisory",
    "zh-hant": "遠距顧問服務",
  },
  cities: ["Austin", "Seattle"],
  citiesLocalized: {
    en: ["Austin", "Seattle"],
    "zh-hant": ["奧斯汀", "西雅圖"],
  },
  content: {
    en: {
      metaTitle: "Virtual Tax & Wealth Advisor for Tech Employees Nationwide",
      metaDescription:
        "Virtual tax strategy and wealth advisory for tech employees in Austin, Seattle and across the US. Bilingual RSU, stock option and relocation planning by video.",
      h1: "Virtual Tax & Wealth Advisory for Tech Employees Nationwide",
      heroSub:
        "Secure video meetings, encrypted document sharing and e-signature, so your advisor is wherever you are, from Austin to Seattle and every time zone in between.",
      intro: [
        "Tech careers move. An engineer hired in San Jose may be working from Austin two years later, and a product manager in Seattle may hold RSUs that began vesting in California. Our practice was built virtual-first for exactly this reason. Wherever you live, you meet with Grace over secure video, share pay stubs, grant agreements and tax returns through an encrypted client portal, and sign engagement documents electronically. The planning is the same as it would be across a desk, and it is usually easier to schedule.",
        "Austin and Seattle are two of our most common remote locations, and each has its own wrinkles. Texas and Washington do not tax wages at the state level, which makes both cities popular destinations for tech employees leaving California. Washington does, however, apply a capital gains excise tax to large long-term gains above an exemption amount, which can matter when a concentrated stock position is finally sold. And California does not let go easily: equity that vested while you worked there remains California-sourced income even after you move, so the order in which you relocate, exercise and sell deserves real planning. We serve clients in every US time zone, offer early-morning and evening slots, and advise in English or Mandarin.",
      ],
      relevantServices: [
        {
          path: "/services/tax-strategy-planning",
          why: "Relocating between California, Texas and Washington is where multi-state sourcing rules and timing produce the biggest differences, and we model them before you move rather than after.",
        },
        {
          path: "/services/equity-compensation",
          why: "RSUs and options granted in one state and vested in another need a clear allocation record; we build it and keep it current so your CPA is never guessing.",
        },
        {
          path: "/services/asset-allocation",
          why: "Selling a concentrated position after a move raises federal and, in Washington, state-level capital gains questions that belong inside a broader allocation plan.",
        },
        {
          path: "/services/financial-planning",
          why: "A holistic plan gives remote clients one place where taxes, equity, retirement and family goals stay coordinated, whichever city you call home this year.",
        },
      ],
      virtualNote:
        "Every engagement can be completed entirely online. We use secure video conferencing for meetings, an encrypted portal for documents and e-signature for agreements, so nothing sensitive travels by ordinary email. We schedule across Pacific, Mountain, Central and Eastern time, with early-morning and evening options for clients outside California, and in-person meetings remain available by appointment for clients in Southern California and the Bay Area.",
      faqs: [
        {
          q: "How does a fully virtual engagement actually work?",
          a: "It starts with a free video consultation. If we decide to work together, you sign the engagement agreement electronically and receive access to a secure client portal, where you upload documents such as pay stubs, grant agreements and prior returns instead of emailing them. Meetings happen over video at times that suit your schedule, and you receive written plans and summaries through the same portal. Nothing about the process requires you to be in California.",
        },
        {
          q: "I moved from California to Austin last year. Do I still owe California tax on my RSUs?",
          a: "Possibly, on part of them. California taxes equity compensation based on where you worked during the vesting period, not simply where you live when the shares vest or are sold. If a grant began vesting while you worked in California and finished after you moved, a portion of that income is typically treated as California-sourced. We calculate that allocation, document it for your CPA and plan future vests and sales with the rule in mind.",
        },
        {
          q: "Washington has no income tax, so why do Seattle clients still need tax planning?",
          a: "Washington does not tax wages, but it does apply a capital gains excise tax to large long-term gains above an exemption amount, with certain exclusions. For a Seattle engineer who has accumulated a concentrated position over years of vesting, a single large sale can cross that threshold. Federal tax, AMT on ISO exercises and any California-sourced income from earlier years still apply as well, so planning remains worthwhile.",
        },
        {
          q: "Which time zones do you serve, and can meetings be held in Mandarin?",
          a: "We work with clients in every US time zone and hold early-morning and evening slots for people outside the Pacific zone, so an engineer in Austin or a manager on the East Coast does not have to take a call in the middle of a workday. Every meeting is available in English or Mandarin, and family members are welcome to join from a separate location. If you are travelling for a period, we can usually accommodate that as well.",
        },
      ],
    },
    "zh-hant": {
      metaTitle: "全美科技業員工線上稅務與財富顧問",
      metaDescription:
        "為奧斯汀、西雅圖及全美各地的科技業員工提供線上稅務策略與財富顧問服務，涵蓋 RSU、股票選擇權與跨州搬遷規劃，透過安全視訊進行，中英雙語。",
      h1: "全美科技業員工線上稅務與財富顧問",
      heroSub:
        "安全視訊會議、加密文件分享與電子簽章，讓您的顧問就在您身邊，從奧斯汀到西雅圖，橫跨每一個時區。",
      intro: [
        "科技業的職涯總在移動。在聖荷西獲聘的工程師，兩年後可能已在奧斯汀工作；西雅圖的產品經理，手上的 RSU 可能是在加州開始歸屬的。我們的顧問服務正是為此而以視訊為優先設計。無論您住在哪裡，都能透過安全的視訊會議與 Grace 面談，經由加密的客戶入口網站分享薪資單、授予協議與報稅資料，並以電子簽章完成委任文件。規劃的內容與面對面時完全相同，而且通常更容易安排時間。",
        "奧斯汀與西雅圖是我們最常見的兩個遠距服務地點，各有各的細節要留意。德州與華盛頓州都不對薪資課徵州所得稅，因此成為許多離開加州的科技業員工的熱門去處。不過，華盛頓州對超過免稅額的大額長期資本利得課徵資本利得消費稅（capital gains excise tax），當集中持股終於要出售時，這一點可能很重要。而加州也不會輕易放手：在您於加州工作期間歸屬的股權，即使搬離之後仍被視為加州來源所得，因此搬遷、行權與出售的先後順序，值得認真規劃。我們服務全美各時區的客戶，提供清晨與晚間時段，並以英文或中文提供顧問服務。",
      ],
      relevantServices: [
        {
          path: "/services/tax-strategy-planning",
          why: "在加州、德州與華盛頓州之間搬遷，正是跨州來源認定規則與時點安排差異最大的地方；我們在您搬家之前就先試算，而不是事後補救。",
        },
        {
          path: "/services/equity-compensation",
          why: "在一州授予、在另一州歸屬的 RSU 與選擇權，需要一份清楚的分配紀錄；我們為您建立並持續更新，讓您的會計師不必猜測。",
        },
        {
          path: "/services/asset-allocation",
          why: "搬遷後出售集中持股，會牽涉聯邦稅以及華盛頓州的州級資本利得問題，這些都應納入更全面的資產配置計畫中。",
        },
        {
          path: "/services/financial-planning",
          why: "全方位的財務規劃讓遠距客戶有一個統整的地方，把稅務、股權、退休與家庭目標協調在一起，無論您今年以哪座城市為家。",
        },
      ],
      virtualNote:
        "每一項委任都可以完全在線上完成。我們以安全的視訊會議進行面談、以加密入口網站交換文件、以電子簽章簽署協議，確保敏感資料不經由一般電子郵件傳送。我們的排程涵蓋太平洋、山區、中部與東部時區，為加州以外的客戶提供清晨與晚間時段；南加州與灣區的客戶仍可預約面談。",
      faqs: [
        {
          q: "完全線上的顧問服務實際上是怎麼進行的？",
          a: "一切從一次免費的視訊諮詢開始。如果雙方決定合作，您會以電子簽章簽署委任協議，並取得安全客戶入口網站的存取權限，在那裡上傳薪資單、授予協議與過去的報稅資料，而不必用電子郵件寄送。會議透過視訊在您方便的時間進行，書面計畫與摘要也會經由同一個入口網站交付。整個流程沒有任何一個環節需要您人在加州。",
        },
        {
          q: "我去年從加州搬到奧斯汀，我的 RSU 還要繳加州的稅嗎？",
          a: "有可能，而且是其中一部分。加州對股權獎酬的課稅，是依據歸屬期間內您在哪裡工作，而不只是股票歸屬或出售時您住在哪裡。如果一筆授予在您於加州工作時開始歸屬、在搬離之後才完成歸屬，通常有一部分所得會被視為加州來源所得。我們會計算這個分配比例、為您的會計師留下紀錄，並在規劃未來的歸屬與出售時把這條規則納入考量。",
        },
        {
          q: "華盛頓州沒有所得稅，為什麼西雅圖的客戶還需要稅務規劃？",
          a: "華盛頓州不對薪資課稅，但對超過免稅額的大額長期資本利得課徵資本利得消費稅，並設有若干排除項目。對於多年歸屬累積了集中持股的西雅圖工程師而言，一次大額出售就可能跨過門檻。此外，聯邦稅、ISO 行權的 AMT，以及早年任何加州來源所得，依然適用，因此規劃仍然值得。",
        },
        {
          q: "你們服務哪些時區？會議可以用中文進行嗎？",
          a: "我們服務全美各時區的客戶，並為太平洋時區以外的人保留清晨與晚間時段，讓奧斯汀的工程師或東岸的主管不必在上班時間中途接電話。每一場會議都可以用英文或中文進行，家人也歡迎從不同地點一起加入。如果您有一段時間在外旅行，我們通常也能配合。",
        },
      ],
    },
  },
};
