# 部署檢查清單 ✅

在部署您的心理集點卡 PWA 之前，請確認以下項目已完成：

## 📋 必要檔案檢查

- [x] `package.json` - 依賴項目和腳本
- [x] `vite.config.ts` - Vite 和 PWA 配置
- [x] `tsconfig.json` - TypeScript 配置
- [x] `README.md` - 專案說明文件
- [x] `.gitignore` - Git 忽略檔案

## 🎨 PWA 資源檔案

需要在 `public/` 資料夾中新增以下檔案：

- [ ] `icon-192.png` (192x192 像素，PNG 格式)
- [ ] `icon-512.png` (512x512 像素，PNG 格式)
- [ ] `favicon.ico` (可選，16x16 或 32x32 像素)

### 📱 圖示建議

- 使用簡潔的設計，在小尺寸下也要清晰可見
- 建議使用紫色或藍色漸變，符合應用程式主題
- 可以使用集點卡或印章相關的圖案
- 確保在白色和深色背景下都清晰可見

## 🚀 部署步驟

### Vercel 部署 (推薦)

1. 將程式碼推送到 GitHub
2. 在 Vercel 中連接 GitHub 倉庫
3. 確認建置設定：
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Netlify 部署

1. 執行 `npm run build` 建置專案
2. 將 `dist/` 資料夾上傳到 Netlify
3. 或連接 GitHub 進行持續部署

### 其他平台

- GitHub Pages: 需要配置 GitHub Actions
- Firebase Hosting: 使用 `firebase deploy`
- AWS S3: 上傳建置檔案並配置 CloudFront

## ⚙️ 環境變數 (可選)

如果需要設定環境變數，在根目錄建立 `.env` 檔案：

```env
VITE_APP_NAME=心理集點卡
VITE_APP_VERSION=1.0.0
# 其他配置...
```

## 🔍 部署前測試

在部署前，請先在本地測試：

```bash
# 安裝依賴
npm install

# 開發模式測試
npm run dev

# 建置測試
npm run build
npm run preview

# 類型檢查
npm run type-check

# 程式碼檢查 (如果有設定)
npm run lint
```

## 📱 PWA 功能測試

部署完成後，請測試以下 PWA 功能：

- [ ] 應用程式可以安裝到桌面/主畫面
- [ ] 離線時仍可正常使用
- [ ] 推播通知正常運作
- [ ] 在不同裝置上響應式設計正確
- [ ] Service Worker 正常運作

## 🌐 域名設定 (可選)

如果使用自訂域名：

1. 在 DNS 設定中新增 CNAME 記錄
2. 在部署平台中設定自訂域名
3. 確認 HTTPS 證書自動配置完成
4. 更新 `package.json` 中的 `homepage` 欄位

## ✅ 部署完成檢查

部署完成後，請確認：

- [ ] 網站可以正常訪問
- [ ] 所有功能運作正常
- [ ] PWA 安裝提示正確顯示
- [ ] 在手機上測試使用體驗
- [ ] Console 中沒有錯誤訊息

---

**恭喜！您的心理集點卡 PWA 已經準備好與世界分享了！🎉**