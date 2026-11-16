# FinStudy｜AI 財金學習筆記網站

本專案展示如何用 `AGENTS.md` 指導 AI 按同一套規則整理財金素材、建立 Wiki 筆記並發布 HTML 頁面。

## 專案結構
- `AGENTS.md`：AI 工作規範與新增 SOP
- `raw/`：原始或示範素材（保留來源）
- `wiki/`：標準化 Markdown 筆記與 `index.md` 索引
- `notes/`：公開的 HTML 筆記
- `index.html`：首頁、搜尋與分類
- `css/`、`js/`：共用樣式與互動

## 如何檢查 AI 可延伸性
原本三篇筆記為債券殖利率、ROE 杜邦分析、風險管理四種方法。第四篇「現值與終值」示範依照 `AGENTS.md` 的資料流程新增：`raw/present-future-value.md` → `wiki/present-future-value.md` → `notes/present-future-value.html`，同時更新 `wiki/index.md` 與首頁卡片。

## 本機預覽
解壓縮後打開 `index.html`，或在此資料夾執行 `python -m http.server 8000`，再開啟 `http://localhost:8000`。

## GitHub Pages 部署
1. 在 GitHub 建立公開 Repository，例如 `finstudy`。
2. 上傳本資料夾**內部**的所有檔案與資料夾，確保 `index.html` 在 Repository 根目錄。
3. Settings → Pages → Build and deployment → Deploy from a branch → `main` → `/(root)` → Save。
4. 部署完成後開啟 `https://USERNAME.github.io/finstudy/`，逐一測試四篇筆記、搜尋與分類。

## AI 新增內容指令
「請先閱讀 AGENTS.md，新增『年金現值』主題，保留 raw 原始素材、產生 wiki 與 HTML，更新兩個索引並檢查連結。」

內容為教育示例，並非投資建議。所有例題數字為假設值。
