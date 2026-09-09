import type { Service } from "../types";

/**
 * Holistic Financial Planning — the integrating layer across all services.
 * EN copy is final-draft quality. ZH copy is a working draft for a
 * professional translator to review (mark nothing as final).
 */
export const financialPlanning: Service = {
  slug: "financial-planning",
  path: "/services/financial-planning",
  icon: "compass",
  name: {
    en: "Holistic Financial Planning",
    "zh-hant": "全方位財務規劃",
  },
  cardBlurb: {
    en: "One integrated plan that connects your cash flow, equity, taxes, insurance and family goals, on both sides of the Pacific.",
    "zh-hant": "一份整合的計畫，串起您的現金流、股權、稅務、保險與家庭目標，兼顧太平洋兩岸的考量。",
  },
  related: [
    "/services/tax-strategy-planning",
    "/services/asset-allocation",
    "/services/retirement-planning",
  ],
  content: {
    en: {
      metaTitle: "Holistic Financial Planning for Tech Professionals",
      metaDescription:
        "Holistic financial planning for tech professionals and immigrant families: cash flow, equity compensation, taxes, insurance and goals in one bilingual plan.",
      h1: "Holistic Financial Planning",
      heroSub:
        "Your RSUs, your taxes, your mortgage, your parents in Taiwan and your kids' school are not separate problems. They are one plan, and it should read that way.",
      intro: [
        "Most tech households are not short on financial tools. They have a brokerage account, a 401(k), a few grants of RSUs, a mortgage, and maybe a life insurance policy someone sold them years ago. What they are missing is the layer that connects those pieces. Should you sell vested shares to pay down the house or fund a backdoor Roth? How much cash is enough when your pay swings with the stock price? What happens to the plan if a visa status changes, or a parent in Taiwan needs support?",
        "Holistic financial planning is that connecting layer. We start with your cash flow and balance sheet, then bring in the pieces that usually live in silos: equity compensation, tax strategy, insurance, retirement and education savings, estate basics, and the cross-border realities that many first-generation families carry. The result is a single written plan with clear priorities and a sequence of actions, reviewed as your life changes. You do not need to have everything figured out to start. You need someone who can see the whole picture with you.",
      ],
      coversTitle: "What this covers",
      covers: [
        "Cash flow and balance sheet review, including a right-sized emergency reserve for variable equity income",
        "Equity compensation integration: how vesting, exercises and sales fit into the rest of the plan",
        "Tax strategy coordination across the year, in partnership with your CPA",
        "Insurance review: employer life and disability coverage, gaps, and policies you already own",
        "Goal planning: home purchase, career changes, sabbaticals, supporting parents, and giving",
        "Retirement and education savings prioritized alongside near-term needs",
        "Family and immigration considerations: H-1B and green card timelines, assets in two countries, and what a move would change",
        "Estate basics: beneficiary designations, account titling and when a trust conversation makes sense",
      ],
      process: [
        {
          title: "Discovery",
          body: "We talk through where you are and where you want to go, then gather statements, grant documents, insurance policies and recent tax returns. Bilingual conversations are welcome, and spouses or partners are encouraged to join.",
        },
        {
          title: "Analysis",
          body: "We build your current picture: net worth, cash flow, concentration in employer stock, projected taxes and insurance gaps. You see the trade-offs plainly, in one place, before any recommendation is made.",
        },
        {
          title: "Your written plan",
          body: "You receive a prioritized plan with a clear sequence: what to do this quarter, this year and over the next several years, and how each piece connects to the others.",
        },
        {
          title: "Ongoing partnership",
          body: "Life changes, and so does the plan. We revisit it at vesting dates, job changes, new grants, family milestones and year-end, adjusting as your circumstances evolve.",
        },
      ],
      whyIndependent:
        "A holistic plan only works if every recommendation inside it is chosen for you, not for a commission. We do not sell insurance, funds or annuities, and we are not paid by any product provider. Our fees are transparent and agreed in advance. That independence lets us review a policy someone else sold you, coordinate with your CPA and attorney, and tell you plainly when the right move is to do nothing at all.",
      faqs: [
        {
          q: "What makes financial planning holistic?",
          a: "It means the plan starts from your whole life rather than a single account or product. Cash flow, equity compensation, taxes, insurance, retirement, education and family obligations all affect one another. A decision about selling RSUs, for example, changes your tax bill, your cash reserve and your concentration risk at once. We look at those effects together so the recommendations are consistent instead of contradictory.",
        },
        {
          q: "I am on an H-1B or waiting for a green card. Does that change the plan?",
          a: "Often, yes. Immigration status affects how much flexibility you have around job changes, how long you should expect to stay, and which accounts make sense if you might leave the US. We plan for the path you expect while keeping options open, so a change in status does not undo years of good decisions. We do not give immigration advice, but we plan around it.",
        },
        {
          q: "We help support parents in Taiwan and hold some assets there. Can you factor that in?",
          a: "Yes. Many of our clients send money home, hold property or bank accounts in Taiwan, or expect an inheritance there. These affect your cash flow, your US reporting obligations and sometimes your tax picture. We help you account for them in the plan and coordinate with your CPA on foreign account reporting. We do not prepare foreign filings ourselves.",
        },
        {
          q: "Do I need to have a lot of money to start?",
          a: "No. The most valuable planning often happens early, when a first large grant vests or a family is just forming. Our work is fee-based rather than tied to assets we manage, so you do not need a minimum portfolio to get a complete plan. If your situation is simple today, we will tell you so and keep the engagement proportional.",
        },
        {
          q: "How is this different from your other services?",
          a: "Tax strategy, equity compensation, retirement, education and asset allocation are each deep topics, and we offer them as focused engagements. Holistic financial planning is the integrating layer that decides how much weight each one gets in your life and in what order. Many clients begin here and then go deeper where their situation calls for it.",
        },
        {
          q: "Can my spouse or partner join, and can we meet in Mandarin?",
          a: "Please do. Money decisions are family decisions, and we find plans hold up better when both partners understand them. Meetings can be in English, Mandarin or a mix, and we can prepare summaries in either language so that a parent or family member abroad can follow along too.",
        },
      ],
    },
    "zh-hant": {
      metaTitle: "科技業專業人士全方位財務規劃",
      metaDescription:
        "為科技業專業人士與第一代移民家庭提供全方位財務規劃：現金流、股權獎酬、稅務、保險、退休與教育目標，整合成一份雙語計畫。服務灣區、南加州與全美。",
      h1: "全方位財務規劃",
      heroSub:
        "您的 RSU、稅務、房貸、在台灣的父母與孩子的教育，從來不是各自獨立的問題。它們是同一份計畫，也應該被一起看待。",
      intro: [
        "多數科技業家庭並不缺理財工具：券商帳戶、401(k)、幾批 RSU 授予、一筆房貸，或許還有多年前被推銷購買的壽險保單。真正缺少的，是把這些片段串連起來的那一層。該用已歸屬的股票還房貸，還是投入 backdoor Roth？當薪資隨股價起伏，手邊要留多少現金才夠？如果簽證身分改變，或台灣的父母需要奉養，計畫又會如何調整？",
        "全方位財務規劃就是那一層。我們從您的現金流與資產負債表出發，再把通常各自為政的部分整合進來：股權獎酬、稅務策略、保險、退休與教育儲蓄、基本的遺產安排，以及許多第一代移民家庭所面對的跨境現實。最終成果是一份書面計畫，有清楚的優先順序與行動步驟，並隨著您的人生變化持續檢視。您不需要先把一切想清楚才能開始，您需要的是一位能與您一起看見全貌的人。",
      ],
      coversTitle: "服務內容",
      covers: [
        "現金流與資產負債表檢視，並為波動的股權收入設定合適的緊急預備金",
        "股權獎酬整合：歸屬、行權與出售如何與整體計畫銜接",
        "全年稅務策略協調，與您的會計師並肩合作",
        "保險檢視：雇主提供的壽險與失能險、保障缺口，以及您已持有的保單",
        "目標規劃：購屋、轉換跑道、休假進修、奉養父母與慈善捐贈",
        "退休與教育儲蓄，與近期需求一併排定優先順序",
        "家庭與移民考量：H-1B 與綠卡時程、兩地資產，以及搬遷會帶來的改變",
        "遺產規劃基礎：受益人指定、帳戶持有方式，以及何時該考慮設立信託",
      ],
      process: [
        {
          title: "了解現況",
          body: "我們會先聊聊您現在的處境與想去的方向，再收集帳戶對帳單、股票授予文件、保單與近年報稅資料。歡迎以中文或英文進行，也鼓勵配偶或伴侶一同參與。",
        },
        {
          title: "全面分析",
          body: "建立您目前的完整輪廓：淨資產、現金流、雇主股票的集中度、預估稅負與保險缺口。在提出任何建議之前，您會先在同一個畫面裡清楚看見各種取捨。",
        },
        {
          title: "書面計畫",
          body: "您會收到一份排定優先順序的計畫，說明本季、今年以及未來幾年該做什麼，以及每個環節如何相互連動。",
        },
        {
          title: "長期夥伴",
          body: "人生會變，計畫也會跟著調整。我們會在歸屬日、轉職、新授予、家庭里程碑與年底重新檢視，隨您的處境演變而修正。",
        },
      ],
      whyIndependent:
        "全方位的計畫要能成立，前提是裡面的每一項建議都是為您而選，而不是為了佣金。我們不銷售保險、基金或年金，也不接受任何產品供應商的酬勞；費用透明，事先議定。這樣的獨立性讓我們能客觀檢視別人賣給您的保單、與您的會計師和律師協調，並在最好的選擇是「什麼都不做」時，坦白告訴您。",
      faqs: [
        {
          q: "什麼叫做「全方位」財務規劃？",
          a: "意思是計畫從您的整體人生出發，而不是從單一帳戶或產品出發。現金流、股權獎酬、稅務、保險、退休、教育與家庭責任彼此牽動。舉例來說，出售 RSU 的決定會同時改變您的稅負、現金預備金與集中度風險。我們把這些影響放在一起看，讓建議前後一致，而不是互相矛盾。",
        },
        {
          q: "我持有 H-1B 或正在等綠卡，這會影響規劃嗎？",
          a: "通常會。移民身分會影響您轉職的彈性、預期在美國停留的時間，以及若日後可能離開美國，哪些帳戶較為合適。我們會依您預期的路徑規劃，同時保留彈性，讓身分變動不會抹去多年的正確決定。我們不提供移民法律建議，但會把它納入規劃考量。",
        },
        {
          q: "我們需要奉養在台灣的父母，也在台灣持有一些資產，可以納入考量嗎？",
          a: "可以。我們許多客戶會匯款回台灣、在台灣持有房產或銀行帳戶，或預期在台灣繼承財產。這些都會影響您的現金流、美國的申報義務，有時也會影響稅務。我們會協助您把這些納入計畫，並就海外帳戶申報與您的會計師協調；海外的申報文件本身不由我們準備。",
        },
        {
          q: "需要有很多資產才能開始嗎？",
          a: "不需要。最有價值的規劃往往發生在早期，例如第一批大額授予歸屬時，或家庭剛成形的階段。我們採收費制，而非依管理資產計價，因此不需要達到最低資產門檻就能取得完整的計畫。如果您目前的狀況相對單純，我們會坦白告訴您，並讓合作範圍維持在合理的比例。",
        },
        {
          q: "這和你們的其他服務有什麼不同？",
          a: "稅務策略、股權獎酬、退休、教育與資產配置各自都是深入的主題，我們也提供聚焦的單項服務。全方位財務規劃則是整合的那一層，決定每個主題在您的人生中該有多少比重、按什麼順序進行。許多客戶從這裡開始，再依自身情況往需要的方向深入。",
        },
        {
          q: "配偶或伴侶可以一起參加嗎？可以用中文開會嗎？",
          a: "非常歡迎。金錢決定就是家庭決定，我們也發現當雙方都理解計畫時，計畫更能被落實。會議可以用英文、中文或中英夾雜進行，我們也可以用任一語言準備摘要，讓身在海外的父母或家人也能了解。",
        },
      ],
    },
  },
};
