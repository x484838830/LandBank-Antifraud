import { KYCQuestion, PersonaResult, PersonaType } from '../types';

export const introContent = {
  title: "開始前，先完成 10 題 KYC 3.0 防詐問卷",
  subtitle: "約 60 秒，建立你的「語境韌性檔案」。系統將依結果自動安排專屬 NPC 演練與難度。",
  disclaimer: "不蒐集個資，僅用於分型與訓練路徑推薦。",
  startBtn: "開始檢測"
};

export const kycQuestions: KYCQuestion[] = [
  {
    id: 1,
    dimensionTag: "保密隔離",
    questionText: "當對方要求你「不要告訴任何人，這是機密」並催你立刻照做時，你會？",
    options: [
      { key: "A", text: "先照做再說，避免出事", score: 0 },
      { key: "B", text: "不告訴別人，但我會盡快處理完", score: 1 },
      { key: "C", text: "先停一下，改用官方管道查證對方身分", score: 2 },
      { key: "D", text: "立刻停損：掛斷／停止操作，並找親友或 165 共同確認", score: 3 }
    ]
  },
  {
    id: 2,
    dimensionTag: "權威角色",
    questionText: "對方自稱公務/金融單位，語氣很正式，要求你配合處理，你會先看什麼來判斷？",
    options: [
      { key: "A", text: "對方說得很像、很專業，我就相信", score: 0 },
      { key: "B", text: "有頭銜或文件看起來像，我就先配合", score: 1 },
      { key: "C", text: "我會要求可回撥的官方代表號，並自行查詢後回撥確認", score: 2 },
      { key: "D", text: "一律先停、先查、再做", score: 3 }
    ]
  },
  {
    id: 3,
    dimensionTag: "緊迫時間壓力",
    questionText: "對方說「現在不處理就來不及」要你立刻決定時，你會？",
    options: [
      { key: "A", text: "立刻照做，先度過眼前危機", score: 0 },
      { key: "B", text: "先做一部分，之後再補查證", score: 1 },
      { key: "C", text: "先把節奏放慢：要求給我時間，並先做基本查證", score: 2 },
      { key: "D", text: "視為高風險訊號：先停損離線，再用官方管道核實", score: 3 }
    ]
  },
  {
    id: 4,
    dimensionTag: "非官方管道",
    questionText: "對方要求你「不要打官方客服」而是用他提供的聯絡方式處理，你會？",
    options: [
      { key: "A", text: "依他提供方式處理比較快", score: 0 },
      { key: "B", text: "先用他的方法，之後再看看", score: 1 },
      { key: "C", text: "我只信官方管道：自行查到官方電話/網站再聯繫", score: 2 },
      { key: "D", text: "直接判定風險極高：停止互動、求助 165", score: 3 }
    ]
  },
  {
    id: 5,
    dimensionTag: "裝置控制",
    questionText: "對方要求你下載某個工具或開啟分享畫面/遠端協助，說要幫你處理問題，你會？",
    options: [
      { key: "A", text: "依指示操作，讓他幫我解決", score: 0 },
      { key: "B", text: "我會邊操作邊觀察，不對勁再停", score: 1 },
      { key: "C", text: "我不會開分享或遠端；改用官方門市流程處理", score: 2 },
      { key: "D", text: "立即停損：拒絕操作、結束通話、改走官方管道", score: 3 }
    ]
  },
  {
    id: 6,
    dimensionTag: "投資誘惑",
    questionText: "有人邀你加入投資群組，展示「收益截圖」並鼓勵你跟單，你會？",
    options: [
      { key: "A", text: "看到很多人賺錢，我也想試試", score: 0 },
      { key: "B", text: "我會先小額試水溫", score: 1 },
      { key: "C", text: "我會查證平台合法性、風險揭露與金流規則", score: 2 },
      { key: "D", text: "不因群體情緒做決策：催促入金/保密/拉人一律退出", score: 3 }
    ]
  },
  {
    id: 7,
    dimensionTag: "情感操控",
    questionText: "網路上熟識的人突然以急難理由向你借錢或要你協助處理付款，你會？",
    options: [
      { key: "A", text: "先幫再說，關係最重要", score: 0 },
      { key: "B", text: "我會先幫一部分，避免他出事", score: 1 },
      { key: "C", text: "我會用另一個已知管道（電話/視訊）確認真的是他", score: 2 },
      { key: "D", text: "不在壓力下轉帳：先停、先確認", score: 3 }
    ]
  },
  {
    id: 8,
    dimensionTag: "帳戶恐嚇",
    questionText: "收到訊息說你的帳戶/交易異常，要求你立即點連結或按指示處理，你會？",
    options: [
      { key: "A", text: "立刻點連結處理，避免損失", score: 0 },
      { key: "B", text: "先點開看看內容再說", score: 1 },
      { key: "C", text: "不點連結：自己打開官方 App 或官方網站查詢通知", score: 2 },
      { key: "D", text: "視為高風險：截圖保存、用官方管道確認", score: 3 }
    ]
  },
  {
    id: 9,
    dimensionTag: "親友急難",
    questionText: "你收到「自稱家人」的急難訊息，要你立刻協助處理金錢或帳務，你會？",
    options: [
      { key: "A", text: "先匯/先付，救急最重要", score: 0 },
      { key: "B", text: "先做一部分，之後再核實", score: 1 },
      { key: "C", text: "先用你熟悉的方式回撥給家人或其他家屬交叉確認", score: 2 },
      { key: "D", text: "先停損：不轉帳；確認到「真人＋多方一致」才行動", score: 3 }
    ]
  },
  {
    id: 10,
    dimensionTag: "沉沒成本",
    questionText: "你被告知「再補一筆費用就能把損失拿回來」並催你快點處理，你會？",
    options: [
      { key: "A", text: "我想把錢拿回來，願意再試一次", score: 0 },
      { key: "B", text: "先付小額看看能不能拿回", score: 1 },
      { key: "C", text: "先停下來，找親友/銀行/165 協助判斷", score: 2 },
      { key: "D", text: "立即停損：不再支付費用，改走正式報案/銀行流程", score: 3 }
    ]
  }
];

export const personaResults: Record<PersonaType, PersonaResult> = {
  'Single': {
    type: 'Single',
    title: '單一語境者',
    definition: '你容易被單一敘事帶走（權威、緊迫或恐懼），需要先建立「停損程序」。',
    triggers: ['權威壓力', '緊迫時間', '保密隔離'],
    recommendedTrack: {
      level: 'Lv.1',
      title: '假檢警／假客服：權威＋緊迫',
      goal: '先停、再查、再求助（讓停損變成本能）'
    },
    cta: '開始我的第一個 NPC 演練'
  },
  'Double': {
    type: 'Double',
    title: '雙重語境者',
    definition: '你在多數情境能查證，但遇到「親密關係或權威」時更容易破防。',
    triggers: ['親友急難', '權威壓力', '人情壓力'],
    recommendedTrack: {
      level: 'Lv.1',
      title: '親友急難：情感＋時間壓力',
      goal: '建立「交叉驗證」反射（改用已知管道確認）'
    },
    cta: '開始我的第一個 NPC 演練'
  },
  'Fused': {
    type: 'Fused',
    title: '融合語境者',
    definition: '你能看見多重語境並嘗試查證，但缺少一致的停損節奏。',
    triggers: ['資訊過載', '群體壓力', '高報酬誘惑'],
    recommendedTrack: {
      level: 'Lv.1',
      title: '投資群組：利益＋同儕壓力',
      goal: '從「查證」進化到「程序化停損與退出」'
    },
    cta: '開始我的第一個 NPC 演練'
  },
  'Detached': {
    type: 'Detached',
    title: '跳脫語境者',
    definition: '你多以行動程序判斷（停損/查證/求助），具備高語境韌性，可進階對抗。',
    triggers: ['深偽語音', '多角色切換', '二次詐騙'],
    recommendedTrack: {
      level: 'Lv.1',
      title: '深偽與變形劇本：恐懼＋權威混合',
      goal: '提升對「新型態詐騙」的泛化能力'
    },
    cta: '開始我的第一個 NPC 演練'
  }
};