import { MirageModuleData } from '../types';

export const mirageData: MirageModuleData = {
  "module": "案例幻境",
  "version": "v1.0",
  "cards": [
    {
      "id": "mirage-001",
      "title": "退休女醫遭「假檢警」詐騙逾 7,300 萬：現金監管→房產質押",
      "source_name": "臺中市政府警察局",
      "published_date": "2025-02-12",
      "scam_type": "假檢警／權威詐騙",
      "summary_zh": "詐騙者以「涉嫌洗錢」製造恐懼，要求配合監管並交付資產，之後再把語境推進到房產質押。此類案件常以權威＋緊迫＋保密隔離，讓受害者無法求助查證。",
      "top_signals": ["權威壓力", "涉案恐嚇", "保密隔離"],
      "wittgenstein_hint_zh": "他保留「司法程序」的語詞形式，卻偷換成你必須服從與交付的規則。",
      "tripo": {
        "T": "要求配合「監管／程序」",
        "R": "假檢警／假檢察官",
        "I": "涉案、洗錢、監管說法",
        "P": "恐嚇→緊迫→隔離求助",
        "O": "資產控制與金流轉移"
      },
      "recommended_actions": ["先停（中止通話/操作）", "再查（官方管道查證）", "再求助（165/親友/銀行關懷）"],
      "cta": {
        "scan": { "label_zh": "一鍵語境掃描", "route": "/scan?case=mirage-001" },
        "train": { "label_zh": "開始 NPC 演練", "route": "/metacontext/level/fake-prosecutor-lv1" }
      },
      "source_url": "https://www.typd.gov.tw/index.php?action=view&catid=551&cid=10&id=477&pg=0"
    },
    {
      "id": "mirage-002",
      "title": "譚艾珍遭假檢警詐騙：以「秘密辦案」隔離求助，已匯款 98 萬",
      "source_name": "中央社",
      "published_date": "2024-12-12",
      "scam_type": "假檢警／道德綁架",
      "summary_zh": "詐騙者假冒檢警，利用「涉案」與「偵查不公開」讓受害者進入封閉語言世界，將懷疑改寫為違法、將服從包裝成合作。警方及時介入攔阻後續損失。",
      "top_signals": ["權威壓力", "保密隔離", "道德綁架"],
      "wittgenstein_hint_zh": "在他的語言遊戲裡：懷疑＝違法、服從＝安全；這是被設計的規則。",
      "tripo": {
        "T": "要求「配合辦案」並保密",
        "R": "假檢警／假檢察官",
        "I": "涉案、偵查不公開",
        "P": "共感→恐懼→隔離→服從",
        "O": "引導交付資金/資訊"
      },
      "recommended_actions": ["先停：不在電話內做承諾", "再查：掛斷後自行查官方電話", "再求助：165/110"],
      "cta": {
        "scan": { "label_zh": "一鍵語境掃描", "route": "/scan?case=mirage-002" },
        "train": { "label_zh": "開始 NPC 演練", "route": "/metacontext/level/fake-prosecutor-lv1" }
      },
      "source_url": "https://www.cna.com.tw/news/asoc/202412120128.aspx"
    },
    {
      "id": "mirage-003",
      "title": "解除分期詐騙轉型：從騙買家→改騙賣家，假客服要求驗證/操作",
      "source_name": "刑事警察局（CIB）",
      "published_date": "2025-03-28",
      "scam_type": "假客服／解除分期",
      "summary_zh": "詐騙者以交易平台流程為外衣，將你的「善意配合」偷換成「必須驗證」的規則，並用緊迫與責任感迫使你跟著做。關鍵不是你懂不懂平台，而是是否被拉進程序。",
      "top_signals": ["程序偽裝", "緊迫時間", "責任壓力"],
      "wittgenstein_hint_zh": "他不是在談交易，而是在建立一套你必須照做的「新規則」。",
      "tripo": {
        "T": "要求「驗證／解除設定」",
        "R": "假平台客服／假銀行專員",
        "I": "交易失敗、帳戶凍結",
        "P": "焦慮→催促立刻處理",
        "O": "引導轉出資金/交出驗證"
      },
      "recommended_actions": ["先停：不點連結不操作", "再查：用官方APP自行查客服", "再求助：165/銀行客服"],
      "cta": {
        "scan": { "label_zh": "一鍵語境掃描", "route": "/scan?case=mirage-003" },
        "train": { "label_zh": "開始 NPC 演練", "route": "/metacontext/level/fake-cs-installment-lv1" }
      },
      "source_url": "https://www.cib.npa.gov.tw/ch/app/news/view?id=1887&module=news&serno=0cdd39a8-e17a-4275-9889-ef20d0ea84d5"
    },
    {
      "id": "mirage-004",
      "title": "刑事局公布上半年假檢警分析：接到來電要核對身分就是高風險",
      "source_name": "刑事警察局（CIB）",
      "published_date": "2025-08-16",
      "scam_type": "假檢警／結構性操控",
      "summary_zh": "官方統計揭示假檢警仍為高財損類型，受害者常被要求核對身分、交付金融卡或配合監管。這類話術核心是把「查證」改寫成「你不能查」。",
      "top_signals": ["權威壓力", "核對身分", "程序綁架"],
      "wittgenstein_hint_zh": "當規則被改成「不能查證」，語言就不再是資訊，而是控制。",
      "tripo": {
        "T": "要求核對身分/配合程序",
        "R": "假政府機關/假檢警",
        "I": "涉案、監管、偵查不公開",
        "P": "恐懼→服從→隔離→交付",
        "O": "財物控制與金流移轉"
      },
      "recommended_actions": ["先停：掛斷", "再查：自己找官方電話", "再求助：165/派出所"],
      "cta": {
        "scan": { "label_zh": "一鍵語境掃描", "route": "/scan?case=mirage-004" },
        "train": { "label_zh": "開始 NPC 演練", "route": "/metacontext/level/fake-prosecutor-lv2" }
      },
      "source_url": "https://www.cib.npa.gov.tw/ch/app/news/view?id=1887&module=news&serno=5bf9ee60-3e61-4b33-bfd7-f8409c3ddee6"
    },
    {
      "id": "mirage-005",
      "title": "假投資詐騙升級：詐團開發 App 誆投資未上市股票，財損破億",
      "source_name": "公視新聞",
      "published_date": "2025-12-24",
      "scam_type": "假投資／假App",
      "summary_zh": "詐騙者用「專業 App」打造可信外觀，將你對數據的信任轉成追單行為。這類案件常結合社群引流與階段性加碼，讓人以為在做投資，實際在被導流。",
      "top_signals": ["高報酬誘惑", "專業偽裝", "群體推動"],
      "wittgenstein_hint_zh": "他讓你以為在『投資』，其實是在參與他設計的『服從流程』。",
      "tripo": {
        "T": "引導投入/加碼",
        "R": "假投資顧問/假平台",
        "I": "未上市、抽籤、內線機會",
        "P": "誘惑→同儕壓力→加碼",
        "O": "資金持續流出"
      },
      "recommended_actions": ["先停：停止加碼", "再查：查平台登記與金流", "再求助：165/銀行風控"],
      "cta": {
        "scan": { "label_zh": "一鍵語境掃描", "route": "/scan?case=mirage-005" },
        "train": { "label_zh": "開始 NPC 演練", "route": "/metacontext/level/fake-investment-app-lv1" }
      },
      "source_url": "https://news.pts.org.tw/article/787336"
    },
    {
      "id": "mirage-006",
      "title": "ATM 詐騙提款熱區公布：解除分期/假網拍誘匯後由車手提領",
      "source_name": "聯合新聞網",
      "published_date": "2025-08-10",
      "scam_type": "解除分期／假網拍",
      "summary_zh": "詐騙常先用假客服誘導匯款，再由車手提領。關鍵不是記住地點，而是看到『催你立刻操作 ATM/轉帳』就要先停。",
      "top_signals": ["緊迫時間", "操作指令", "金流驗證"],
      "wittgenstein_hint_zh": "當對話從『說明』變成『指令』，你就該把主導權拿回來。",
      "tripo": {
        "T": "要求立即操作/轉帳",
        "R": "假客服/假平台",
        "I": "重複扣款、解除設定",
        "P": "催促→焦慮→順從",
        "O": "快速金流外移"
      },
      "recommended_actions": ["先停：離開ATM", "再查：自行查官方客服", "再求助：165/銀行客服"],
      "cta": {
        "scan": { "label_zh": "一鍵語境掃描", "route": "/scan?case=mirage-006" },
        "train": { "label_zh": "開始 NPC 演練", "route": "/metacontext/level/atm-installment-lv1" }
      },
      "source_url": "https://money.udn.com/money/story/7307/8929745"
    },
    {
      "id": "mirage-007",
      "title": "AI 深偽/社交工程趨勢：視訊與語音偽冒讓『看到本人』也不可信",
      "source_name": "iThome",
      "published_date": "2025-07-11",
      "scam_type": "AI 深偽／語音偽冒",
      "summary_zh": "詐騙正在把『影像與語音』變成新的權威外觀；受害者以為已看見本人而降低警覺。防線要從辨識內容真假，升級為辨識互動規則是否可查證。",
      "top_signals": ["影像/語音偽冒", "權威外觀", "指令要求"],
      "wittgenstein_hint_zh": "意義不在畫面多真，而在你是否仍能用制度流程驗證它。",
      "tripo": {
        "T": "要求照指令處理/提供資訊",
        "R": "偽冒主管/親友/官方",
        "I": "視訊/語音作為可信證據",
        "P": "降低警覺→快速下指令",
        "O": "取得金流或敏感資訊"
      },
      "recommended_actions": ["先停：要求改用已知管道回撥", "再查：用既有方式確認", "再求助：內部稽核/165"],
      "cta": {
        "scan": { "label_zh": "一鍵語境掃描", "route": "/scan?case=mirage-007" },
        "train": { "label_zh": "開始 NPC 演練", "route": "/metacontext/level/deepfake-voice-lv1" }
      },
      "source_url": "https://www.ithome.com.tw/news/169977"
    }
  ],
  "slogans": [
    "你以為你在回話，其實你在進入他的規則。",
    "不是你笨，是規則被偷換。",
    "聽起來越官方，越要慢一秒。",
    "保密就是隔離；隔離就是失守。",
    "先停，才有選擇權。",
    "查證不是不信任，是回到正規程序。",
    "權威＋緊迫＝最常見的操控組合。",
    "當對話變成指令，你就該中止流程。",
    "無間可盜：騙子偷規則，我們守程序。",
    "無間可「道」：把恐懼還給規則，把決策還給你。",
    "語言的意義在使用；詐騙的意義在操控。",
    "你不需要勇敢配合，你需要冷靜停損。",
    "真正的程序可回撥、可查證、可中止。",
    "轉帳前先問一句：這是制度流程嗎？",
    "先停、再查、再求助——把防詐練成直覺。"
  ]
};