import type { ServiceArea } from "../types";

/**
 * Service-area page: Southern California (Los Angeles, Irvine, San Diego).
 * Los Angeles is the firm's primary market; Grace is based in Orange County.
 * EN copy is final-draft quality; ZH copy is a working draft for review.
 */
export const southernCalifornia: ServiceArea = {
  slug: "southern-california",
  path: "/southern-california",
  icon: "globe",
  region: {
    en: "Southern California",
    "zh-hant": "南加州",
  },
  cities: ["Los Angeles", "Irvine", "San Diego"],
  citiesLocalized: {
    en: ["Los Angeles", "Irvine", "San Diego"],
    "zh-hant": ["洛杉磯", "爾灣", "聖地牙哥"],
  },
  content: {
    en: {
      metaTitle: "Tax & Wealth Advisor in Southern California",
      metaDescription:
        "Bilingual tax and wealth advisory for tech employees in Los Angeles, Irvine and San Diego. RSU, stock option and retirement planning by video or in person.",
      h1: "Tax & Wealth Advisory for Tech Employees in Southern California",
      heroSub:
        "Independent, bilingual planning for tech professionals from Los Angeles to San Diego, with Grace based in Orange County for in-person meetings by appointment.",
      intro: [
        "Los Angeles is our primary market, and it is a very different tech economy from the one up north. The city's tech and entertainment-tech corridor, running through Santa Monica, Playa Vista and Culver City, employs engineers, product managers and creative technologists whose pay increasingly mirrors Silicon Valley: a base salary, a bonus and a growing stack of RSUs or options from a streaming platform, a gaming studio or an ad-tech company. Further south, Irvine has become a center for software, semiconductor and biotech employers and is home to a large, well-established Taiwanese-American community. San Diego adds a deep bench of biotech, telecom and wireless companies where equity compensation is standard and a single clinical milestone or product cycle can reshape a household's net worth.",
        "Grace is based in Orange County, with a mailing address in Irvine, so Southern California is the region where in-person meetings are easiest to arrange. Most clients still choose video for routine check-ins and meet face to face by appointment for the larger conversations: a liquidity event, a retirement decision, a plan that involves parents or adult children. Everything is available in English or Mandarin. Our advice is independent and fee-transparent, with no commissions and no products to sell, so what we recommend about your RSUs, your 401(k) or your child's 529 plan is shaped only by what fits your family.",
      ],
      relevantServices: [
        {
          path: "/services/equity-compensation/rsu-rsa-planning",
          why: "RSUs are now standard at Los Angeles tech and entertainment-tech employers, and the flat federal withholding at vest often leaves a gap for households in California's higher brackets.",
        },
        {
          path: "/services/equity-compensation/stock-options-iso-nso",
          why: "San Diego biotech and Irvine startups lean heavily on ISOs and NSOs, where exercise timing and AMT modeling matter long before any milestone or exit.",
        },
        {
          path: "/services/retirement-planning",
          why: "Many Southern California clients are mid-career professionals balancing a mortgage, parents in Taiwan or nearby, and a retirement that needs funding from more than one company's stock.",
        },
        {
          path: "/services/education-fund-planning",
          why: "Families in Irvine and greater Los Angeles often ask how a 529 plan fits alongside RSU sales and gifts from grandparents; we help sequence those decisions.",
        },
      ],
      virtualNote:
        "We are virtual-first everywhere, and Southern California is no exception: most meetings happen over secure video, with documents exchanged through an encrypted portal. Because Grace is based in Orange County, in-person meetings in Irvine, Los Angeles or San Diego are easiest to arrange here, by appointment. Our Irvine address is a mailing address only, not a walk-in office.",
      faqs: [
        {
          q: "Can we meet in person?",
          a: "Yes, by appointment. Grace is based in Orange County, so in-person meetings in Irvine, Los Angeles and San Diego are the most practical to schedule. Please note that our Irvine address is a mailing address, not an office you can drop into; we will agree on a time and place that works for you. Many clients mix the two, meeting by video for routine reviews and in person for bigger decisions.",
        },
        {
          q: "I work in entertainment-tech in Los Angeles and part of my pay is in stock options. Is that different from a Silicon Valley grant?",
          a: "The mechanics are the same wherever the employer sits. NSOs are taxed as ordinary income on the spread at exercise; ISOs are not, but the bargain element counts toward the Alternative Minimum Tax, and favorable treatment depends on holding the shares two years from grant and one year from exercise. What differs is often the company's stage and liquidity, which changes how much risk it makes sense to hold. We plan around your grant, not a template.",
        },
        {
          q: "My parents live in Irvine and want to help pay for our children's education. How should we handle that?",
          a: "This is one of the most common conversations we have with Taiwanese-American families in Orange County. A 529 plan grows tax-free when used for qualified education expenses, and grandparents can contribute directly or fund an account they own. The right structure depends on financial aid considerations, gift tax mechanics and who should control the account, so we map the options with the whole family, in Mandarin if that is easier for your parents.",
        },
        {
          q: "Do you work with biotech employees in San Diego whose company is not yet profitable?",
          a: "Yes. Early-stage biotech compensation often leans on ISOs and NSOs rather than RSUs, and the value of those grants can move sharply around trial results or regulatory decisions. We help you think through exercise timing, AMT exposure and how much concentration your household can reasonably carry, and we plan around trading windows and blackout periods so your decisions stay both sensible and compliant.",
        },
      ],
    },
    "zh-hant": {
      metaTitle: "南加州科技業員工稅務與財富顧問",
      metaDescription:
        "為洛杉磯、爾灣與聖地牙哥的科技業員工提供雙語稅務策略與財富顧問服務，涵蓋 RSU、股票選擇權與退休規劃，可視訊或預約面談。",
      h1: "南加州科技業員工的稅務與財富顧問",
      heroSub:
        "為從洛杉磯到聖地牙哥的科技業專業人士提供獨立、雙語的財務規劃；Grace 常駐橙縣，可預約面談。",
      intro: [
        "洛杉磯是我們最主要的服務市場，而它的科技產業生態與北加州截然不同。這座城市的科技與娛樂科技走廊，從聖塔莫尼卡、Playa Vista 延伸到 Culver City，聚集了工程師、產品經理與創意技術人才，他們的薪酬結構越來越像矽谷：底薪、獎金，再加上來自串流平台、遊戲工作室或廣告科技公司、日漸累積的 RSU 或選擇權。再往南，爾灣已成為軟體、半導體與生技企業的重鎮，也擁有規模龐大、根基深厚的台裔美國人社群。聖地牙哥則有豐富的生技、電信與無線通訊公司，股權獎酬在這裡是標準配備，一次臨床試驗里程碑或產品週期，就可能重塑一個家庭的淨資產。",
        "Grace 常駐橙縣，通訊地址位於爾灣，因此南加州是最容易安排面談的地區。多數客戶仍選擇以視訊進行例行檢視，並在較重大的討論時預約面談：例如變現事件、退休決策，或是需要父母或成年子女一起參與的計畫。所有服務皆可以英文或中文進行。我們的建議獨立且收費透明，不收佣金、不銷售產品，因此關於您的 RSU、401(k) 或孩子的 529 計畫，我們的建議只取決於什麼最適合您的家庭。",
      ],
      relevantServices: [
        {
          path: "/services/equity-compensation/rsu-rsa-planning",
          why: "RSU 已是洛杉磯科技與娛樂科技公司的標準獎酬，而歸屬時的固定聯邦預扣稅率，對加州較高稅率級距的家庭常留下缺口。",
        },
        {
          path: "/services/equity-compensation/stock-options-iso-nso",
          why: "聖地牙哥的生技公司與爾灣的新創企業大量使用 ISO 與 NSO，行權時點與 AMT 試算早在任何里程碑或出場之前就至關重要。",
        },
        {
          path: "/services/retirement-planning",
          why: "許多南加州客戶是職涯中期的專業人士，同時要兼顧房貸、在台灣或身邊的父母，以及一個不能只靠單一公司股票支撐的退休生活。",
        },
        {
          path: "/services/education-fund-planning",
          why: "爾灣與大洛杉磯地區的家庭常問，529 計畫如何與 RSU 出售及祖父母的贈與搭配；我們協助您安排這些決定的先後順序。",
        },
      ],
      virtualNote:
        "我們在各地都以視訊為優先，南加州也不例外：多數會議透過安全的視訊會議進行，文件則經由加密入口網站交換。由於 Grace 常駐橙縣，在爾灣、洛杉磯或聖地牙哥的面談最容易安排，請事先預約。我們的爾灣地址僅供郵寄，並非可直接到訪的辦公室。",
      faqs: [
        {
          q: "我們可以當面會談嗎？",
          a: "可以，請事先預約。Grace 常駐橙縣，因此在爾灣、洛杉磯與聖地牙哥的面談最方便安排。請注意，我們的爾灣地址是通訊地址，不是可以直接走進來的辦公室；我們會與您約定合適的時間與地點。許多客戶會兩者並用：例行檢視用視訊，重大決策則當面討論。",
        },
        {
          q: "我在洛杉磯的娛樂科技公司工作，部分薪酬是股票選擇權，這和矽谷的授予有什麼不同？",
          a: "無論雇主在哪裡，運作機制都相同。NSO 在行權時，價差以一般所得課稅；ISO 則否，但其議價要素（bargain element）會計入替代性最低稅（AMT），而且要享有優惠稅務待遇，必須持有股票至授予日起兩年且行權日起一年。真正不同的往往是公司的發展階段與流動性，這會改變值得承擔多少風險。我們依據您的實際授予來規劃，而不是套用範本。",
        },
        {
          q: "我父母住在爾灣，想幫忙支付孩子的教育費用，該怎麼安排？",
          a: "這是我們與橙縣台裔美國家庭最常有的對話之一。529 計畫用於合格教育支出時，成長部分免稅；祖父母可以直接提撥，也可以自己開設並持有帳戶。最適合的架構取決於助學金的考量、贈與稅的機制，以及帳戶應由誰掌控，因此我們會與全家人一起盤點各種選項；如果您的父母覺得中文比較自在，我們就用中文討論。",
        },
        {
          q: "你們會服務聖地牙哥、公司尚未獲利的生技業員工嗎？",
          a: "會。早期生技公司的獎酬通常以 ISO 與 NSO 為主而非 RSU，這些授予的價值可能隨著試驗結果或主管機關的決定劇烈波動。我們會協助您思考行權時點、AMT 曝險，以及您的家庭能合理承擔多少集中持股，並配合交易窗口與禁售期來規劃，讓您的決定既合理又合規。",
        },
      ],
    },
  },
};
