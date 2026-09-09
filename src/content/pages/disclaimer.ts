import type { L, LegalPageContent } from "../types";

/**
 * Disclaimer page. PLACEHOLDER: every bracketed marker must be replaced with
 * the firm's confirmed registration facts and counsel-reviewed disclosures
 * before launch. The `notice` banner stays until that review is complete.
 */
export const disclaimerPage: L<LegalPageContent> = {
  en: {
    metaTitle: "Disclaimer and Important Disclosures",
    metaDescription:
      "Disclosures for GloryToGlory Tax Strategy & Wealth Advisory: educational content only, registration status, limits on tax and legal advice and investment risk.",
    h1: "Disclaimer",
    heroSub: "Please read these disclosures before relying on anything you find on this website.",
    lastUpdated: "September 2026",
    notice:
      "PLACEHOLDER — This page must be completed with the firm's actual RIA/IAR registration status, ADV Part 2 link and reviewed disclosures before launch. Do not publish as-is.",
    sections: [
      {
        heading: "General information only",
        blocks: [
          {
            type: "p",
            text: "The content on this website, including service pages, articles, examples, calculators and any downloadable material, is provided for general educational and informational purposes only. It reflects our understanding of tax and financial planning concepts as of the date it was written and may not reflect later changes in law, regulation or market conditions. Nothing on this site is individualized tax, legal, investment or financial advice, and nothing here should be read as a recommendation to buy, sell or hold any security, or to take or refrain from any particular action. Your circumstances are unique, and any decision should rest on advice tailored to them.",
          },
        ],
      },
      {
        heading: "No advisor-client relationship through this website",
        blocks: [
          {
            type: "p",
            text: "Reading this website, submitting a contact form, subscribing to updates or scheduling an introductory consultation does not create an advisor-client relationship between you and GloryToGlory Tax Strategy & Wealth Advisory. An advisory relationship is established only when both parties sign a written engagement agreement that describes the services, fees and responsibilities involved. Until that agreement is in place, please do not send confidential information beyond what is reasonably needed to schedule a conversation, and do not act on general information from this site as though it were advice given to you personally.",
          },
        ],
      },
      {
        heading: "Registration and regulatory status",
        blocks: [
          {
            type: "p",
            text: "[PLACEHOLDER — Registration status: RIA in the State of California / SEC — CONFIRM]. Yunghui \"Grace\" Chen is [PLACEHOLDER — an investment adviser representative (IAR) of the firm — CONFIRM]. Advisory services are offered only to residents of states where the firm is registered, notice-filed or exempt from registration.",
          },
          {
            type: "p",
            text: "Registration does not imply a certain level of skill or training. Our current Form ADV Part 2 brochure, which describes our services, fees, conflicts of interest and disciplinary history, is available at [PLACEHOLDER — Link to Form ADV Part 2 — INSERT] and on request, free of charge.",
          },
          {
            type: "ul",
            items: [
              "[PLACEHOLDER — CRD / IARD number — INSERT]",
              "[PLACEHOLDER — States where the firm is registered or notice-filed — LIST]",
            ],
          },
        ],
      },
      {
        heading: "Tax and legal advice",
        blocks: [
          {
            type: "p",
            text: "We provide tax strategy planning, which is forward-looking analysis intended to help you make informed decisions. We do not prepare or file tax returns, and we do not practice law. Tax outcomes depend on facts we may not have and on rules that change, and the IRS or a state tax authority may take a position different from the one we anticipate. You should confirm any tax strategy with a licensed CPA or enrolled agent, and any legal or estate matter with a licensed attorney, before acting. We are glad to coordinate with those professionals, and we can refer you to one if you need it.",
          },
        ],
      },
      {
        heading: "Investment risk and no guarantees",
        blocks: [
          {
            type: "p",
            text: "All investing involves risk, including the possible loss of principal. Past performance, whether of a security, a strategy or a market index, does not guarantee future results. Any projections, illustrations or hypothetical examples on this site are for educational purposes, rely on assumptions that may not hold and are not predictions of what will happen in your case. We do not guarantee any particular tax outcome, level of savings, investment return or financial result. Diversification and asset allocation do not ensure a profit or protect against loss in a declining market.",
          },
        ],
      },
      {
        heading: "Third-party links and content",
        blocks: [
          {
            type: "p",
            text: "This website may link to external websites, tools or resources operated by third parties, including government agencies, custodians, professional organizations and news publications. These links are provided for convenience only. We do not control, endorse or take responsibility for the content, accuracy, privacy practices or availability of third-party sites, and a link does not imply any affiliation. When you leave this site, the third party's own terms and privacy policy govern your visit.",
          },
        ],
      },
      {
        heading: "Testimonials and endorsements",
        blocks: [
          {
            type: "p",
            text: "[PLACEHOLDER — Any testimonials or endorsements displayed on this site must comply with the SEC Marketing Rule (Rule 206(4)-1 under the Investment Advisers Act of 1940) or the equivalent state rule, including required disclosures about whether the person giving the statement is a client, whether any compensation was provided and any material conflicts of interest. Confirm with compliance counsel before publishing real client statements.] Until that review is complete, every quotation on the Testimonials page is clearly labelled as a sample placeholder and does not represent a statement by an actual client. Testimonials reflect one person's experience and are not a guarantee of future performance or of any client's success.",
          },
        ],
      },
      {
        heading: "Contact",
        blocks: [
          {
            type: "p",
            text: "Questions about these disclosures, requests for our Form ADV Part 2 or concerns about anything on this site can be sent to GloryToGlory Tax Strategy & Wealth Advisory at gracela989@gmail.com, by phone at (949) 742-1604 or by mail to PO Box 60970, Irvine, CA 92602. Please note that this is a mailing address only and not a walk-in office. We aim to respond to written requests within one business day and to provide disclosure documents promptly and free of charge.",
          },
        ],
      },
    ],
  },
  "zh-hant": {
    metaTitle: "免責聲明與重要揭露",
    metaDescription:
      "GloryToGlory 稅務策略與財富顧問的重要揭露：內容僅供教育目的、註冊狀態、稅務與法律建議的界限，以及投資風險說明。",
    h1: "免責聲明",
    heroSub: "在依據本網站任何內容採取行動之前，請先閱讀以下揭露事項。",
    lastUpdated: "2026 年 9 月",
    notice:
      "【預留內容】本頁面在上線前必須補入本公司實際的 RIA／IAR 註冊狀態、Form ADV Part 2 連結，以及經審閱的揭露內容。請勿以現狀發布。",
    sections: [
      {
        heading: "僅供一般資訊參考",
        blocks: [
          {
            type: "p",
            text: "本網站的內容，包括服務頁面、文章、範例、試算工具與任何可下載的資料，僅供一般教育與資訊目的。內容反映我們在撰寫當時對稅務與財務規劃概念的理解，可能未納入其後法律、法規或市場狀況的變動。本網站的任何內容都不是針對個人的稅務、法律、投資或財務建議，也不應被解讀為買進、賣出或持有任何證券的建議，或採取或不採取任何特定行動的建議。每個人的情況都不同，任何決定都應以量身訂做的建議為依據。",
          },
        ],
      },
      {
        heading: "透過本網站不構成顧問與客戶關係",
        blocks: [
          {
            type: "p",
            text: "瀏覽本網站、送出聯絡表單、訂閱更新或預約初次諮詢，皆不會在您與 GloryToGlory 稅務策略與財富顧問之間建立顧問與客戶關係。顧問關係僅在雙方簽署書面委任協議、載明服務內容、收費與責任之後才成立。在協議生效之前，請勿提供超出安排會談所需的機密資料，也請勿把本網站的一般資訊當作專為您個人提供的建議來行動。",
          },
        ],
      },
      {
        heading: "註冊與監管狀態",
        blocks: [
          {
            type: "p",
            text: "【預留內容——註冊狀態：加州州政府註冊投資顧問（RIA）／SEC 註冊——待確認】。陳詠慧 Grace Chen 為【預留內容——上述公司之投資顧問代表（IAR）——待確認】。顧問服務僅提供給本公司已完成註冊、通知備案或符合豁免規定之州的居民。",
          },
          {
            type: "p",
            text: "註冊並不代表具備特定程度的專業技能或訓練。我們現行的 Form ADV Part 2 揭露手冊說明了我們的服務、收費、利益衝突與懲戒紀錄，可於【預留內容——Form ADV Part 2 連結——待補入】取得，亦可免費索取。",
          },
          {
            type: "ul",
            items: [
              "【預留內容——CRD／IARD 編號——待補入】",
              "【預留內容——本公司已註冊或通知備案的州別——待列出】",
            ],
          },
        ],
      },
      {
        heading: "稅務與法律建議",
        blocks: [
          {
            type: "p",
            text: "我們提供的是稅務策略規劃，也就是協助您做出明智決定的前瞻性分析。我們不代客準備或申報稅表，也不執行律師業務。稅務結果取決於我們可能無法掌握的事實以及會變動的規則，IRS 或州稅務機關也可能採取與我們預期不同的立場。在採取行動之前，任何稅務策略都應向持照會計師（CPA）或註冊稅務代理人（EA）確認，任何法律或遺產事務則應向持照律師確認。我們樂於與這些專業人士協調，如有需要也可以為您引介。",
          },
        ],
      },
      {
        heading: "投資風險與不保證結果",
        blocks: [
          {
            type: "p",
            text: "所有投資都有風險，包括可能損失本金。無論是個別證券、策略或市場指數，過去的績效都不保證未來的結果。本網站的任何預測、圖示或假設性範例僅供教育目的，其所依據的假設可能不成立，也不是對您個人情況的預測。我們不保證任何特定的稅務結果、節稅金額、投資報酬或財務成果。分散投資與資產配置無法確保獲利，也無法在市場下跌時避免損失。",
          },
        ],
      },
      {
        heading: "第三方連結與內容",
        blocks: [
          {
            type: "p",
            text: "本網站可能連結至由第三方經營的外部網站、工具或資源，包括政府機關、託管機構、專業組織與新聞媒體。這些連結僅為方便使用者而提供。我們不控制、不背書，也不對第三方網站的內容、正確性、隱私做法或可用性負責，提供連結亦不代表任何關聯。當您離開本網站後，您的瀏覽將受該第三方自身的條款與隱私權政策規範。",
          },
        ],
      },
      {
        heading: "客戶見證與推薦",
        blocks: [
          {
            type: "p",
            text: "【預留內容——本網站顯示的任何客戶見證或推薦，必須符合 SEC 行銷規則（1940 年《投資顧問法》第 206(4)-1 條）或同等的州規定，包括必須揭露發言者是否為客戶、是否收受任何報酬，以及任何重大利益衝突。發布真實客戶陳述前，請先與法遵律師確認。】在完成審閱之前，客戶見證頁面上的所有引言均明確標示為範例，並不代表實際客戶的陳述。客戶見證反映個人的經驗，不保證未來的績效或任何客戶的成果。",
          },
        ],
      },
      {
        heading: "聯絡方式",
        blocks: [
          {
            type: "p",
            text: "關於這些揭露事項的疑問、索取 Form ADV Part 2，或對本網站任何內容的疑慮，請聯絡 GloryToGlory 稅務策略與財富顧問：電子郵件 gracela989@gmail.com、電話 (949) 742-1604，或郵寄至 PO Box 60970, Irvine, CA 92602。請注意，此為通訊地址，並非可直接到訪的辦公室。我們會盡力在一個工作天內回覆書面請求，並免費、及時提供揭露文件。",
          },
        ],
      },
    ],
  },
};
