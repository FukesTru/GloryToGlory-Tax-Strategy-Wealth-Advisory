import type { ServiceArea } from "../types";

/**
 * Service-area page: Bay Area (San Jose, Cupertino, Santa Clara, Milpitas,
 * San Francisco). EN copy is final-draft quality; ZH copy is a working draft
 * for a professional translator to review.
 */
export const bayArea: ServiceArea = {
  slug: "bay-area",
  path: "/bay-area",
  icon: "map",
  region: {
    en: "Bay Area",
    "zh-hant": "灣區",
  },
  cities: ["San Jose", "Cupertino", "Santa Clara", "Milpitas", "San Francisco"],
  citiesLocalized: {
    en: ["San Jose", "Cupertino", "Santa Clara", "Milpitas", "San Francisco"],
    "zh-hant": ["聖荷西", "庫比蒂諾", "聖塔克拉拉", "苗必達", "舊金山"],
  },
  content: {
    en: {
      metaTitle: "Bay Area Tax & Wealth Advisor for Tech Employees",
      metaDescription:
        "Bilingual tax strategy and wealth advisory for tech employees in San Jose, Cupertino, Santa Clara, Milpitas and San Francisco. RSU and stock option planning.",
      h1: "Tax & Wealth Advisory for Tech Employees in the Bay Area",
      heroSub:
        "Bilingual, fee-transparent planning for engineers, product managers and their families across Silicon Valley and San Francisco, in English or Mandarin.",
      intro: [
        "The Bay Area is where equity compensation stops being an abstract line on an offer letter and becomes the largest part of a household's balance sheet. If you are an engineer or product manager at a large public tech company in Cupertino, Santa Clara or San Jose, a meaningful share of your pay likely arrives as RSUs that vest on a schedule you did not choose. If you work at a pre-IPO startup in San Francisco or Milpitas, you may be holding ISOs or NSOs whose value, and whose tax consequences, depend on decisions you have not yet made. Either way, the questions are the same: how much tax is really owed, when to sell, what to keep, and how it all fits into a longer plan for your family.",
        "We work with tech professionals across the South Bay and San Francisco, including the dense Taiwanese-American community in Cupertino and Milpitas, many of whom are first-generation immigrants building wealth in a second language. Grace advises in both English and Mandarin, so you can discuss a 401(k), a backdoor Roth or an AMT projection in whichever language feels natural, and bring a spouse or parent into the conversation without translation. Our planning is independent and fee-transparent: we do not sell products or earn commissions, and every recommendation has to stand on its own merits.",
      ],
      relevantServices: [
        {
          path: "/services/equity-compensation/rsu-rsa-planning",
          why: "Most Bay Area tech pay arrives as RSUs, and the flat 22% federal withholding at vest rarely matches a Silicon Valley household's actual bracket.",
        },
        {
          path: "/services/equity-compensation/stock-options-iso-nso",
          why: "Pre-IPO startups in San Francisco and the South Bay grant ISOs and NSOs, where exercise timing and AMT exposure are decided long before any liquidity event.",
        },
        {
          path: "/services/tax-strategy-planning",
          why: "High California income tax, mid-year vesting and the possibility of relocation make year-round tax projection more valuable here than almost anywhere else.",
        },
        {
          path: "/services/financial-planning",
          why: "When one employer's stock is your salary, your bonus and your net worth, a holistic plan helps you decide how much concentration in a single company is reasonable for your family.",
        },
      ],
      virtualNote:
        "We are a virtual-first practice, so most Bay Area clients meet with Grace over secure video and share documents through an encrypted portal, with no drive on 101 or 280 required. If you would prefer to meet in person, that can be arranged by appointment for Bay Area clients. Please note that we do not maintain a walk-in office.",
      faqs: [
        {
          q: "Do I need to live in San Jose or San Francisco to work with you?",
          a: "No. We serve the whole Bay Area, from San Francisco down the Peninsula to Santa Clara, Cupertino, Milpitas and San Jose, and most of that work happens over secure video. If you would like to meet in person, we can arrange it by appointment. Location matters less than fit: what we look for is a client with equity compensation and real questions about it.",
        },
        {
          q: "My company is still pre-IPO. Is it too early to start planning?",
          a: "Usually it is the best time. Decisions about when to exercise ISOs, whether an early exercise makes sense and how much AMT exposure you can absorb are made years before any liquidity event, and they are hard to undo. A conversation now, while the numbers are small and the options are open, tends to be far more valuable than one after the S-1 is filed.",
        },
        {
          q: "I'm on an H-1B visa in San Jose. Does that change how you plan?",
          a: "It changes the questions, not the quality of the plan. Visa status can affect how long you expect to stay in the United States, which in turn shapes how you think about a 401(k), a concentrated stock position or a home purchase. We are not immigration attorneys and do not advise on visa matters, but we build plans that hold up whether you stay for three years or thirty, and we can coordinate with your immigration counsel where timing overlaps.",
        },
        {
          q: "Can my spouse or parents join our meetings in Mandarin?",
          a: "Yes, and we encourage it. Many of our clients in Cupertino and Milpitas are first-generation immigrants from Taiwan whose parents or spouses are more comfortable in Mandarin. Grace advises fluently in both languages, so everyone at the table hears the same explanation and no one has to translate a term like AMT or backdoor Roth over dinner.",
        },
      ],
    },
    "zh-hant": {
      metaTitle: "灣區科技業員工稅務與財富顧問",
      metaDescription:
        "為聖荷西、庫比蒂諾、聖塔克拉拉、苗必達與舊金山的科技業員工提供雙語稅務策略與財富顧問服務，專精 RSU 與股票選擇權規劃，以視訊諮詢為主。",
      h1: "灣區科技業員工的稅務與財富顧問",
      heroSub:
        "為矽谷與舊金山的工程師、產品經理及其家庭提供雙語、收費透明的財務規劃，中英文皆可。",
      intro: [
        "在灣區，股權獎酬不再只是錄取通知書上的一行數字，而往往成為一個家庭資產負債表中最大的一塊。如果您是庫比蒂諾、聖塔克拉拉或聖荷西大型上市科技公司的工程師或產品經理，您有相當比例的薪酬很可能是依照您無法選擇的時程歸屬的 RSU。如果您任職於舊金山或苗必達的未上市新創公司，您手上可能握有 ISO 或 NSO，而它們的價值與稅務後果，取決於您尚未做出的決定。無論是哪一種情況，問題都一樣：實際要繳多少稅、何時該出售、該保留多少，以及這一切如何融入家庭更長遠的計畫。",
        "我們服務南灣與舊金山各地的科技業專業人士，包括庫比蒂諾與苗必達密集的台裔美國人社群，其中許多人是第一代移民，正在用第二語言累積財富。Grace 能以英文或中文提供顧問服務，您可以用最自在的語言討論 401(k)、backdoor Roth 或 AMT 試算，也可以讓配偶或父母一起參與，不需要有人在旁翻譯。我們的規劃獨立且收費透明：不銷售產品、不賺取佣金，每一項建議都必須憑自身的價值站得住腳。",
      ],
      relevantServices: [
        {
          path: "/services/equity-compensation/rsu-rsa-planning",
          why: "灣區科技業的薪酬大多以 RSU 形式發放，而歸屬時 22% 的固定聯邦預扣稅率，很少與矽谷家庭實際的邊際稅率相符。",
        },
        {
          path: "/services/equity-compensation/stock-options-iso-nso",
          why: "舊金山與南灣的未上市新創公司多以 ISO 與 NSO 作為獎酬，行權時點與 AMT 曝險，早在任何變現事件之前就已決定。",
        },
        {
          path: "/services/tax-strategy-planning",
          why: "加州的高所得稅、年中歸屬的股票，以及可能的跨州搬遷，讓全年稅務預測在這裡比在其他任何地方都更有價值。",
        },
        {
          path: "/services/financial-planning",
          why: "當同一家公司的股票既是您的薪水、獎金，也是您的淨資產時，全方位的財務規劃能幫助您判斷，把多少資產集中在單一公司對您的家庭而言才合理。",
        },
      ],
      virtualNote:
        "我們是以視訊為主的顧問團隊，多數灣區客戶透過安全的視訊會議與 Grace 面談，並經由加密入口網站分享文件，不必在 101 或 280 公路上奔波。若您希望當面會談，灣區客戶可另行預約安排；請注意我們並未設置可直接到訪的辦公室。",
      faqs: [
        {
          q: "我一定要住在聖荷西或舊金山才能與你們合作嗎？",
          a: "不需要。我們服務整個灣區，從舊金山沿半島往南到聖塔克拉拉、庫比蒂諾、苗必達與聖荷西，而且大部分工作都透過安全的視訊會議進行。如果您想當面會談，我們可以另行預約安排。地點其實沒有那麼重要，重要的是契合度：我們希望服務的是持有股權獎酬、並且對它有真實疑問的客戶。",
        },
        {
          q: "我的公司還沒上市，現在開始規劃會不會太早？",
          a: "通常這正是最好的時機。何時行使 ISO、提早行權是否合理、能承受多少 AMT 曝險，這些決定往往在任何變現事件發生的好幾年前就已做出，而且很難回頭。趁數字還小、選擇還多的時候先談一次，往往比等到 S-1 申報之後才談有價值得多。",
        },
        {
          q: "我持 H-1B 簽證在聖荷西工作，這會影響你們的規劃方式嗎？",
          a: "會改變問題，但不會改變規劃的品質。簽證身分可能影響您預期在美國停留多久，進而影響您看待 401(k)、集中持股或購屋的方式。我們不是移民律師，也不提供簽證相關建議，但我們擬定的計畫，無論您停留三年還是三十年都站得住腳；在時程重疊的地方，我們也可以與您的移民律師協調。",
        },
        {
          q: "我的配偶或父母可以用中文一起參加會議嗎？",
          a: "可以，而且我們非常鼓勵。許多庫比蒂諾與苗必達的客戶是來自台灣的第一代移民，他們的父母或配偶用中文溝通更自在。Grace 能以中英雙語流利地提供顧問服務，讓在座每個人聽到的都是同一套說明，不必有人在晚餐桌上翻譯 AMT 或 backdoor Roth 這類名詞。",
        },
      ],
    },
  },
};
