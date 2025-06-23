# Vue 3 練習專案

> 使用 **Vue 3、Vite 與 Composition API** 在 **Ubuntu WSL** 環境逐步打造的學習專案。
>
> ‼️在原生 Windows 遇到 `npx`／`EPERM` 等莫名錯誤，所以在Vue專案中改用 **WSL 2 + Ubuntu** ，以下指令皆以 Linux 環境為主。

---

## 🚀 快速開始

```bash
# 1. 安裝相依套件
npm install

# 2. 啟動開發伺服器 ( http://localhost:5173 )
npm run dev
```

### 工具版本

| 工具   | 版本     |
| ---- | ------ |
| Node | v20.19.2|
| npm  | 10.8.2|

---

## 🔧 技術棧

| 層級  | 工具 / 函式庫                 |
| --- | ------------------------ |
| 打包器 | Vite 5                   |
| 框架  | Vue 3（Composition API）   |
| 版面  | Tailwind CSS ✧ *開發中*     |
| 狀態  | `ref / reactive / props` |

---

## 📂 專案結構（目前）

```text
src/
 ├─ components/
 │   ├─ Counter.vue        # Day 3 事件示範
 │   ├─ TodoInput.vue      # Day 4 列表示範
 │   ├─ TodoItem.vue       # —〃—
 │   └─ ...
 ├─ App.vue                # 根元件
 └─ main.js                # 掛載入口
```

> 後續可新增 `pages/`、`stores/`、`composables/` 等資料夾，以配合成長需求。

---

## ✨ 已完成里程碑

| Day | 主題                        | 狀態      |
| --- | ------------------------- | ------- |
| 1   | 環境建置與 Vite 腳手架            | ✅ 已完成   |
| 2   | 模板語法與資料綁定                 | ✅ 已完成   |
| 3   | 事件、methods、computed       | ✅ 已完成   |
| 4   | 條件 / 列表渲染                 | ✅ 已完成   |
| 5   | 元件拆分與 props/emit          | 🔜 即將開始 |
| 6   | 生命週期 & Composition API 重構 | 🔜      |
| 7   | 迷你成品 + Tailwind 美化        | 🔜      |


---

## 📝 學習筆記（HackMD）

1. [Day 7](https://hackmd.io/@Shiki9029/r1pBZ6I4ll)
2. [Day 8](https://hackmd.io/@Shiki9029/Sky1SaIVle)
3. [Day 9](https://hackmd.io/@Shiki9029/ry50yC84lg)
4. [Day 10](https://hackmd.io/@Shiki9029/BkU5ZJwVgg)


---

## 🙌 網站：
