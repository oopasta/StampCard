# 心理集點卡 PWA 🎯

一個幫助您追蹤目標進度的現代化 PWA 應用程式，讓您通過集點的方式培養良好習慣並獲得獎勵。

## ✨ 功能特色

- 📱 **PWA 支援** - 可安裝為原生應用程式
- 🎨 **8 種顏色主題** - 個性化您的集點卡
- ⏰ **智慧時間管理** - 不同點數對應不同時間限制
- 🔔 **推播通知** - 每日打卡提醒和目標完成通知
- 📱 **完全響應式** - 完美適配手機和桌面
- 💾 **離線支援** - 數據本地保存，離線也能使用
- 🌙 **深色模式** - 自動適應系統主題

## 🚀 快速開始

### 環境需求

- Node.js 16.0+
- npm 或 yarn

### 安裝步驟

1. **下載程式碼**
   ```bash
   # 如果有 Git 倉庫
   git clone https://github.com/yourusername/punch-card-pwa.git
   cd punch-card-pwa
   
   # 或者直接解壓縮下載的檔案
   ```

2. **安裝依賴**
   ```bash
   npm install
   # 或者
   yarn install
   ```

3. **🎨 新增 PWA 圖示 (重要！)**
   
   有兩種方式新增圖示：

   #### 方式一：使用轉換工具 (推薦)
   ```bash
   # 開啟轉換工具
   open convert-icons.html
   # 或在瀏覽器中開啟 convert-icons.html
   ```
   - 點擊按鈕產生不同尺寸的圖示
   - 右鍵儲存圖片到 `public/` 資料夾
   - 重新命名為：`icon-192.png`、`icon-512.png`

   #### 方式二：使用現成的 SVG
   - 將 `public/icon.svg` 轉換為 PNG 格式
   - 使用任何 SVG 轉 PNG 工具（如 Inkscape、線上轉換器等）
   - 產生 192×192 和 512×512 兩種尺寸

   **必要檔案：**
   ```
   public/
   ├── icon-192.png (192×192 像素)
   ├── icon-512.png (512×512 像素)
   └── favicon.ico (可選，32×32 像素)
   ```

4. **開發模式運行**
   ```bash
   npm run dev
   # 或者
   yarn dev
   ```

5. **打開瀏覽器**
   訪問 `http://localhost:3000`

## 📦 部署

### Vercel 部署 (推薦)

1. 將程式碼推送到 GitHub
2. 在 [Vercel](https://vercel.com) 中導入專案
3. 自動部署完成！

### Netlify 部署

1. 建置專案
   ```bash
   npm run build
   ```

2. 將 `dist/` 資料夾拖放到 [Netlify](https://netlify.com)

### 其他平台

任何支援靜態檔案託管的平台都可以：
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 🎯 使用說明

### 基本功能

1. **建立集點卡**
   - 點擊「新增集點卡」按鈕
   - 設定目標名稱和獎勵
   - 選擇集點數量 (5/8/14 點)
   - 選擇喜歡的顏色主題

2. **打卡集點**
   - 點擊閃爍的圓圈進行打卡
   - 完成後會顯示彩色印章
   - 達成目標時會收到慶祝通知

3. **管理集點卡**
   - 完成的集點卡可以選擇重新開始
   - 過期的集點卡會自動變成灰階
   - 可以隨時刪除不需要的集點卡

### PWA 功能

- **安裝應用程式**：在支援的瀏覽器中會自動提示安裝
- **離線使用**：沒有網路時也能正常使用
- **推播通知**：需要授權後才會發送提醒

## 🛠️ 技術架構

- **前端框架**：React 18 + TypeScript
- **樣式系統**：Tailwind CSS v4
- **UI 組件**：Radix UI + shadcn/ui
- **圖示庫**：Lucide React
- **建置工具**：Vite
- **PWA 功能**：Vite PWA Plugin

## 📱 支援的瀏覽器

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

## 🔧 自訂設定

### 修改顏色主題

編輯 `/types/PunchCard.ts` 中的 `COLOR_THEMES` 對象來新增或修改顏色主題。

### 修改時間限制

在 `/App.tsx` 中的 `getDaysForPoints` 函數可以調整不同點數對應的天數。

### 修改通知內容

在 `/App.tsx` 中搜尋 `sendNotification` 來修改推播通知的內容。

## 🎨 圖示設計說明

PWA 圖示採用以下設計原則：
- **主色調**：紫色到藍色漸變 (#8b5cf6 → #3b82f6)
- **核心元素**：集點卡與印章圖案
- **視覺風格**：現代簡潔，在小尺寸下清晰可辨
- **兼容性**：支援不同平台的遮罩需求

## 🤔 常見問題

**Q: 為什麼在預覽環境中無法安裝 PWA？**
A: Figma Make 等預覽環境不支援完整的 PWA 功能，需要部署到真實環境。

**Q: 資料會遺失嗎？**
A: 資料保存在瀏覽器的 localStorage 中，除非清除瀏覽器資料否則不會遺失。

**Q: 可以同步到雲端嗎？**
A: 目前版本使用本地存儲，未來可以考慮整合 Supabase 等後端服務。

**Q: 圖示無法正常顯示怎麼辦？**
A: 確認 `public/` 資料夾中有正確的 PNG 圖示檔案，檔名必須完全符合要求。

## 📄 授權

MIT License - 您可以自由使用、修改和分發此專案。

## 🙏 致謝

- [Tailwind CSS](https://tailwindcss.com) - 樣式框架
- [Radix UI](https://radix-ui.com) - 無障礙 UI 組件
- [Lucide](https://lucide.dev) - 精美圖示庫
- [Vite](https://vitejs.dev) - 快速建置工具

---

**享受您的目標追蹤之旅！🎉**