import type { Testimonial } from "../types";

/**
 * PLACEHOLDER testimonials. Every entry is `placeholder: true` and each quote
 * is prefixed "[SAMPLE]" / "【範例】" so it can never be mistaken for a real
 * client statement. Replace with real, permissioned quotes only after
 * compliance review under the SEC Marketing Rule (see the Disclaimer page).
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: {
      en: "[SAMPLE] I had been holding every RSU that vested for four years and never really understood why I owed money each April. Grace walked me through the withholding gap, helped me set up a sensible sell schedule and explained everything a second time in Mandarin for my wife. We finally feel like we have a plan instead of a pile of stock.",
      "zh-hant": "【範例】四年來我把每一批歸屬的 RSU 都留著，卻始終不明白為什麼每年四月都要補稅。Grace 帶我看清楚預扣缺口，協助我安排合理的出售時程，還用中文再為我太太解釋了一遍。我們終於覺得自己有了計畫，而不只是一堆股票。",
    },
    name: { en: "Wei-Ting L.", "zh-hant": "Wei-Ting L." },
    role: { en: "Senior Software Engineer, San Jose", "zh-hant": "資深軟體工程師，聖荷西" },
    service: "/services/equity-compensation/rsu-rsa-planning",
    placeholder: true,
  },
  {
    id: "t2",
    quote: {
      en: "[SAMPLE] My startup's options were the biggest asset I had, and I was genuinely afraid of the AMT. Grace modeled how many ISOs I could exercise each year without crossing the threshold and put the whole thing in a one-page memo my CPA could actually use. No hype, just clear numbers.",
      "zh-hant": "【範例】新創公司的選擇權是我最大的資產，而我對 AMT 真的很害怕。Grace 試算了我每年可以行使多少 ISO 而不會跨過門檻，並整理成一頁備忘錄，讓我的會計師真的能拿來用。沒有誇大，只有清楚的數字。",
    },
    name: { en: "Jason H.", "zh-hant": "Jason H." },
    role: { en: "Staff Engineer, pre-IPO startup, San Francisco", "zh-hant": "首席工程師，未上市新創公司，舊金山" },
    service: "/services/equity-compensation/stock-options-iso-nso",
    placeholder: true,
  },
  {
    id: "t3",
    quote: {
      en: "[SAMPLE] We moved from Santa Clara to Austin in the middle of a vesting schedule and had no idea how California would treat the shares. Grace explained the sourcing rules, documented the allocation for our CPA and helped us sequence the sales. Being able to do all of it over video after the kids were asleep is what made it possible.",
      "zh-hant": "【範例】我們在歸屬時程進行到一半時從聖塔克拉拉搬到奧斯汀，完全不知道加州會如何看待這些股票。Grace 解釋了來源認定規則，為我們的會計師留下分配紀錄，並協助我們安排出售的順序。能在孩子睡著後用視訊完成這一切，才讓這件事變得可行。",
    },
    name: { en: "Mei-Ling C.", "zh-hant": "Mei-Ling C." },
    role: { en: "Engineering Manager, Austin", "zh-hant": "工程經理，奧斯汀" },
    service: "/services/tax-strategy-planning",
    placeholder: true,
  },
  {
    id: "t4",
    quote: {
      en: "[SAMPLE] My parents came to the first meeting, and Grace switched between English and Mandarin without missing a beat. She pulled our RSUs, our 401(k)s, the house and my parents' gifting wishes into one plan we all understood. It is the first time our family has been on the same page about money.",
      "zh-hant": "【範例】我父母也來參加第一次會議，Grace 在英文和中文之間切換自如。她把我們的 RSU、401(k)、房子和父母的贈與意願，整合成一份全家都聽得懂的計畫。這是我們家第一次在金錢的事情上有共識。",
    },
    name: { en: "Kevin W.", "zh-hant": "Kevin W." },
    role: { en: "Product Manager, Irvine", "zh-hant": "產品經理，爾灣" },
    service: "/services/financial-planning",
    placeholder: true,
  },
  {
    id: "t5",
    quote: {
      en: "[SAMPLE] We wanted to start saving for our daughter's education but did not know whether a 529 made sense alongside our RSU sales. Grace laid out the trade-offs plainly, showed us how the pieces fit together and never once tried to sell us anything. The clarity was worth it on its own.",
      "zh-hant": "【範例】我們想開始為女兒的教育儲蓄，卻不知道 529 計畫和 RSU 出售該如何搭配。Grace 把利弊講得清清楚楚，讓我們看到各個環節如何組合，而且從頭到尾沒有推銷任何產品。光是這份清楚，就已經很值得。",
    },
    name: { en: "Yu-Chen T.", "zh-hant": "Yu-Chen T." },
    role: { en: "Data Scientist, Los Angeles", "zh-hant": "資料科學家，洛杉磯" },
    service: "/services/education-fund-planning",
    placeholder: true,
  },
  {
    id: "t6",
    quote: {
      en: "[SAMPLE] After eight years at one company, almost everything we owned was a single stock. Grace helped us think about concentration honestly, including Washington's capital gains rules, and build a diversification plan we could follow without panic. Our meetings fit around a newborn's schedule, which says a lot.",
      "zh-hant": "【範例】在同一家公司待了八年後，我們幾乎所有的資產都是同一支股票。Grace 協助我們誠實面對集中持股的問題，包括華盛頓州的資本利得規定，並擬定一份我們能安心執行的分散計畫。會議時間還能配合剛出生的寶寶，這說明了很多。",
    },
    name: { en: "Priya R.", "zh-hant": "Priya R." },
    role: { en: "Senior Product Manager, Seattle", "zh-hant": "資深產品經理，西雅圖" },
    service: "/services/asset-allocation",
    placeholder: true,
  },
];
