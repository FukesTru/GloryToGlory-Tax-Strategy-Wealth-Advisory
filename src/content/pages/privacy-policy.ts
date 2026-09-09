import type { L, LegalPageContent } from "../types";

/**
 * Privacy Policy page for a financial advisory that collects contact and
 * financial information via web forms and consultations. Bracketed markers
 * are placeholders to confirm before launch (GA4 ID, Reg S-P notice, cookie
 * consent tooling).
 */
export const privacyPolicyPage: L<LegalPageContent> = {
  en: {
    metaTitle: "Privacy Policy",
    metaDescription:
      "How we collect, use, share and protect the personal and financial information you provide through our website, forms and consultations, and your choices.",
    h1: "Privacy Policy",
    heroSub: "How we handle the personal and financial information you share with us, and the choices you have.",
    lastUpdated: "September 2026",
    sections: [
      {
        heading: "Information we collect",
        blocks: [
          {
            type: "p",
            text: "We collect information in three ways. When you use the contact form or book a consultation, you provide your name, email address, phone number (optional), the service you are interested in and a short description of your situation. During consultations and engagements, you may share financial documents such as pay stubs, equity grant agreements, vesting schedules, brokerage and retirement account statements, tax returns and details about your family and goals. Our website also collects limited technical data automatically through Google Analytics 4 (measurement ID G-XXXXXXXXXX, a placeholder until launch), such as pages viewed, approximate location, device type and referring site.",
          },
        ],
      },
      {
        heading: "How we use your information",
        blocks: [
          {
            type: "ul",
            items: [
              "To respond to your enquiry and to schedule or conduct consultations",
              "To prepare tax projections, financial plans and other deliverables you have engaged us for",
              "To communicate with you about your engagement, including reminders around vesting dates and deadlines",
              "To coordinate, with your consent, with your CPA, attorney or other professional advisers",
              "To meet our legal, regulatory and record-keeping obligations as a financial advisory firm",
              "To understand how visitors use our website and to improve its content and performance",
            ],
          },
          {
            type: "p",
            text: "We do not use your information for automated decision-making, and we do not use the financial documents you share with us for any purpose unrelated to your engagement.",
          },
        ],
      },
      {
        heading: "How we share your information",
        blocks: [
          {
            type: "p",
            text: "We never sell, rent or trade your personal information. We share it only in limited circumstances: with service providers who help us operate, such as our website host, form and scheduling tools, secure document portal, video conferencing platform and e-signature provider, each of which may use your data only to provide its service to us; with your CPA, attorney or other professional advisers when you ask us to coordinate with them; with regulators, auditors or law enforcement when required by law, subpoena or regulatory examination; and in connection with a sale or reorganization of the firm, in which case you will be notified. [Regulation S-P privacy notice link — INSERT if applicable]",
          },
        ],
      },
      {
        heading: "Data security",
        blocks: [
          {
            type: "p",
            text: "We take reasonable administrative, technical and physical measures to protect your information, including encrypted document sharing rather than email attachments, access controls on the systems that store client data, multi-factor authentication on our accounts and secure disposal of records we no longer need. No method of transmission or storage is completely secure, however, and we cannot guarantee absolute security. If we become aware of a breach affecting your personal information, we will notify you as required by applicable law.",
          },
        ],
      },
      {
        heading: "How long we keep your information",
        blocks: [
          {
            type: "p",
            text: "We keep contact form submissions for as long as needed to respond to you and for a reasonable period afterward. If you become a client, we retain engagement records, plans and supporting documents for the period required by securities and tax regulations, which is typically at least five years after the end of the engagement and longer where a specific rule requires it. Website analytics data is retained according to the settings in Google Analytics. When information is no longer needed, we delete or anonymize it.",
          },
        ],
      },
      {
        heading: "Your choices and rights",
        blocks: [
          {
            type: "p",
            text: "You may ask us to correct, update or delete the personal information we hold about you, or to stop contacting you, by emailing gracela989@gmail.com. We will honor your request unless we are required to keep certain records by law. You can opt out of analytics tracking using the browser tools described below. If you are a California resident, the California Consumer Privacy Act (CCPA) may give you additional rights to know what personal information we collect, to request its deletion and to be free from discrimination for exercising those rights. Note that information collected under federal financial privacy laws may be exempt from some CCPA provisions.",
          },
        ],
      },
      {
        heading: "Cookies and analytics",
        blocks: [
          {
            type: "p",
            text: "Our website uses Google Analytics 4 to understand how visitors find and use the site. Google Analytics sets cookies and collects information such as pages viewed, time on site, approximate location and the device and browser used. This data is aggregated and does not identify you by name. You can prevent analytics collection by installing the Google Analytics opt-out browser add-on, by blocking cookies in your browser or by using any consent controls we display. We do not use advertising cookies and we do not sell browsing data. [PLACEHOLDER — describe the cookie consent banner or any additional tools once implemented.]",
          },
        ],
      },
      {
        heading: "Children's privacy",
        blocks: [
          {
            type: "p",
            text: "Our services are intended for adults. We do not knowingly collect personal information from anyone under 18 through this website. If you are a parent or guardian and believe a child has provided us with personal information, please contact us and we will delete it promptly. Information about children that a client shares as part of planning, such as for a 529 education savings plan, is treated as part of that client's confidential file.",
          },
        ],
      },
      {
        heading: "Changes to this policy",
        blocks: [
          {
            type: "p",
            text: "We may update this privacy policy from time to time to reflect changes in our practices, technology or legal requirements. When we do, we will revise the date at the top of this page and, for material changes that affect current clients, notify you by email. Your continued use of the website after a change takes effect indicates that you have read the updated policy.",
          },
        ],
      },
      {
        heading: "Contact us",
        blocks: [
          {
            type: "p",
            text: "If you have questions about this policy or how we handle your information, please contact GloryToGlory Tax Strategy & Wealth Advisory by email at gracela989@gmail.com, by phone at (949) 742-1604, or by mail at PO Box 60970, Irvine, CA 92602. This is a mailing address only, not a walk-in office. We will do our best to respond within one business day.",
          },
        ],
      },
    ],
  },
  "zh-hant": {
    metaTitle: "隱私權政策",
    metaDescription:
      "GloryToGlory 稅務策略與財富顧問的隱私權政策：說明我們如何蒐集、使用、分享與保護您透過本網站、表單與諮詢所提供的個人與財務資料，以及您的選擇。",
    h1: "隱私權政策",
    heroSub: "我們如何處理您提供的個人與財務資料，以及您擁有哪些選擇。",
    lastUpdated: "2026 年 9 月",
    sections: [
      {
        heading: "我們蒐集的資料",
        blocks: [
          {
            type: "p",
            text: "我們透過三種方式蒐集資料。當您使用聯絡表單或預約諮詢時，您會提供姓名、電子郵件、電話（選填）、有興趣的服務項目，以及對自身情況的簡短描述。在諮詢與委任期間，您可能會分享財務文件，例如薪資單、股權授予協議、歸屬時程、券商與退休帳戶對帳單、報稅資料，以及有關家庭與目標的細節。本網站也會透過 Google Analytics 4（評估 ID G-XXXXXXXXXX，上線前為預留值）自動蒐集有限的技術資料，例如瀏覽的頁面、大致位置、裝置類型與來源網站。",
          },
        ],
      },
      {
        heading: "我們如何使用您的資料",
        blocks: [
          {
            type: "ul",
            items: [
              "回覆您的詢問，並安排或進行諮詢",
              "準備您委託我們製作的稅務預測、財務計畫與其他成果文件",
              "就您的委任事項與您聯繫，包括歸屬日與截止日的提醒",
              "在您同意的前提下，與您的會計師、律師或其他專業顧問協調",
              "履行本公司作為財務顧問機構的法律、法規與紀錄保存義務",
              "了解訪客如何使用本網站，並改善網站內容與效能",
            ],
          },
          {
            type: "p",
            text: "我們不會將您的資料用於自動化決策，也不會將您分享的財務文件用於任何與您的委任無關的目的。",
          },
        ],
      },
      {
        heading: "我們如何分享您的資料",
        blocks: [
          {
            type: "p",
            text: "我們絕不出售、出租或交易您的個人資料。我們僅在以下有限的情況下分享：與協助我們營運的服務供應商分享，例如網站主機、表單與排程工具、安全文件入口網站、視訊會議平台與電子簽章服務，這些供應商只能為了向我們提供服務而使用您的資料；在您要求我們協調時，與您的會計師、律師或其他專業顧問分享；在法律、傳票或監管檢查要求時，向主管機關、稽核人員或執法單位提供；以及在本公司出售或重組時分享，屆時我們會通知您。【Regulation S-P 隱私權通知連結——如適用請補入】",
          },
        ],
      },
      {
        heading: "資料安全",
        blocks: [
          {
            type: "p",
            text: "我們採取合理的行政、技術與實體措施保護您的資料，包括以加密方式分享文件而非使用電子郵件附件、對儲存客戶資料的系統實施存取控管、在我們的帳戶啟用多重要素驗證，以及安全銷毀不再需要的紀錄。然而，沒有任何傳輸或儲存方式是絕對安全的，我們無法保證絕對的安全。如果我們得知發生影響您個人資料的資安事件，將依適用法律的要求通知您。",
          },
        ],
      },
      {
        heading: "資料保存期限",
        blocks: [
          {
            type: "p",
            text: "聯絡表單的內容，我們會在回覆您所需的期間內保存，並在其後保留合理的一段時間。若您成為客戶，我們會依證券與稅務法規的要求保存委任紀錄、計畫與佐證文件，通常至少為委任結束後五年，若特定規定要求更長期限則依其規定。網站分析資料則依 Google Analytics 的設定保存。當資料不再需要時，我們會予以刪除或去識別化。",
          },
        ],
      },
      {
        heading: "您的選擇與權利",
        blocks: [
          {
            type: "p",
            text: "您可以來信 gracela989@gmail.com，要求我們更正、更新或刪除我們持有的您的個人資料，或要求我們停止與您聯繫。除非法律要求我們保留特定紀錄，我們都會尊重您的要求。您可以使用下文所述的瀏覽器工具選擇退出分析追蹤。如果您是加州居民，《加州消費者隱私法》（CCPA）可能賦予您額外的權利，包括知悉我們蒐集哪些個人資料、要求刪除，以及行使這些權利時不受差別待遇。請注意，依聯邦金融隱私法規蒐集的資料，可能不適用 CCPA 的部分規定。",
          },
        ],
      },
      {
        heading: "Cookie 與網站分析",
        blocks: [
          {
            type: "p",
            text: "本網站使用 Google Analytics 4 了解訪客如何找到並使用本網站。Google Analytics 會設定 Cookie 並蒐集資訊，例如瀏覽的頁面、停留時間、大致位置，以及所使用的裝置與瀏覽器。這些資料為彙總資料，不會以姓名識別您的身分。您可以安裝 Google Analytics 停用瀏覽器外掛程式、在瀏覽器中封鎖 Cookie，或使用我們顯示的任何同意控制項，來阻止分析資料的蒐集。我們不使用廣告 Cookie，也不出售瀏覽資料。【預留內容——Cookie 同意橫幅或其他工具實作完成後，請於此說明。】",
          },
        ],
      },
      {
        heading: "兒童隱私",
        blocks: [
          {
            type: "p",
            text: "我們的服務以成年人為對象。我們不會刻意透過本網站蒐集未滿 18 歲者的個人資料。如果您是家長或監護人，並認為有兒童向我們提供了個人資料，請與我們聯繫，我們會立即刪除。客戶在規劃過程中分享的兒童相關資料，例如為了 529 教育儲蓄計畫，會視為該客戶機密檔案的一部分。",
          },
        ],
      },
      {
        heading: "政策變更",
        blocks: [
          {
            type: "p",
            text: "我們可能因應實務做法、技術或法律要求的變動，不定期更新本隱私權政策。更新時，我們會修改本頁頂端的日期；若變更對現有客戶有重大影響，我們會以電子郵件通知您。變更生效後，您若繼續使用本網站，即表示您已閱讀更新後的政策。",
          },
        ],
      },
      {
        heading: "聯絡我們",
        blocks: [
          {
            type: "p",
            text: "若您對本政策或我們處理資料的方式有任何疑問，請聯絡 GloryToGlory 稅務策略與財富顧問：電子郵件 gracela989@gmail.com、電話 (949) 742-1604，或郵寄至 PO Box 60970, Irvine, CA 92602。此為通訊地址，並非可直接到訪的辦公室。我們會盡力在一個工作天內回覆。",
          },
        ],
      },
    ],
  },
};
