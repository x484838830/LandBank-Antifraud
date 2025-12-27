# 土地銀行防詐 APP (概念驗證原型) | Land Bank Anti-Fraud App (PoC)

> **結合「語境工程 (Context Engineering)」與「新擬態設計 (Neumorphism)」的下一代金融防詐教育平台。**

![Project Status](https://img.shields.io/badge/Status-Prototype-blue)
![Tech Stack](https://img.shields.io/badge/Stack-React_19_|_Tailwind_CSS_|_TypeScript-teal)

## 📖 專案簡介 (About)

這不是一個普通的銀行新聞 App。
本專案旨在解決傳統防詐宣導「資訊過載、缺乏互動」的痛點。透過 **新擬態 (Neumorphism)** 的親和介面與 **深色科技 (Dark Tech)** 的沈浸式體驗，我們將枯燥的防詐資訊轉化為可互動的「語境演練」。

核心理念引用自維根斯坦的語言哲學：「語言的意義在於使用」。詐騙不僅是資訊的誤導，更是對「對話規則」的操控。本 App 致力於幫助使用者識破這些規則。

## ✨ 核心功能 (Key Features)

### 1. 案例幻境 (Mirage System) `New!`
- **風格**：深色沈浸式 UI (Dark Tech)，模擬駭客/分析師視角。
- **功能**：
    - **TRIPO 結構拆解**：將詐騙話術解構為 T(誘餌)、R(角色)、I(資訊)、P(壓力)、O(操作)。
    - **維根斯坦提示 (Wittgenstein Hint)**：哲學視角的語境破譯。
    - **無限輪播**：流暢的卡片瀏覽體驗，附帶頁碼與導航按鈕。

### 2. KYC 3.0 防詐心理測驗
- **功能**：透過 10 道情境題，分析使用者的「語境韌性」。
- **成果**：將用戶分為「單一語境者」、「雙重語境者」等四種類型，並推薦專屬的 NPC 演練劇本。

### 3. 元宇宙中控台 (Metaverse Dashboard)
- **風格**：高科技儀表板介面。
- **功能**：
    - 視覺化數據：展示個人的防詐韌性分數趨勢。
    - 3D 連結：模擬連接至外部 Web 3D 空間（Seeulair）。
    - 任務追蹤：管理目前的演練進度。

### 4. 首頁 (Home)
- **風格**：清爽的 **新擬態 (Neumorphism)** 風格，強調觸感與層次。
- **組件**：動態新聞輪播、網格選單、底部導航。

## 🛠 技術堆疊 (Tech Stack)

- **Frontend Framework**: React 19 (Hooks, Functional Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Custom Config for Neumorphism)
- **Icons**: Lucide React
- **Build Tool**: Vite (Recommended)

## 🚀 如何執行 (Getting Started)

### 前置需求
請確保您已安裝 [Node.js](https://nodejs.org/) (建議 v16 以上)。

### 1. 安裝依賴
```bash
npm install
```

### 2. 啟動開發伺服器
```bash
npm run dev
```
打開瀏覽器訪問 `http://localhost:5173` (或終端機顯示的端口)。

### 3. 建置生產版本
```bash
npm run build
```

## 📦 部署指南 (Deployment)

本專案為純靜態 React 應用 (SPA)，非常適合部署於 Vercel、Netlify 或 GitHub Pages。

### 部署到 Vercel (推薦)
1. 將程式碼上傳至 GitHub。
2. 登入 [Vercel](https://vercel.com/) 並選擇 "Add New Project"。
3. 匯入您的 GitHub Repository。
4. Framework Preset 選擇 `Vite`。
5. 點擊 **Deploy**，約 1 分鐘即可完成。

### 部署到 GitHub Pages
如果是使用 Vite，請在 `vite.config.ts` 中設定 `base`:
```ts
export default defineConfig({
  base: '/你的-repo-名稱/',
  plugins: [react()],
})
```
然後執行 build 並將 `dist` 資料夾推送到 `gh-pages` 分支。

## 🧠 設計哲學：TRIPO 模型

我們在「案例幻境」中使用了獨創的 **TRIPO** 分析法：
- **T (Trigger)**: 觸發點（如：退款、涉案）
- **R (Role)**: 偽裝角色（如：檢察官、客服）
- **I (Information)**: 資訊不對稱（如：偵查不公開）
- **P (Pressure)**: 心理施壓（如：時間緊迫、隔離）
- **O (Operation)**: 最終操作（如：轉帳、交付）

---

Designed for **Land Bank of Taiwan** (Concept).
*此專案為概念展示，非銀行官方正式產品。*
