# Vue 3 練習專案

> 使用 **Vue 3、Vite 與 Composition API** 在 **Ubuntu WSL** 環境逐步打造的學習專案。
>
> ⚠️ 原生 Windows 環境遇到 `npx`／`EPERM` 權限問題，已改用 **WSL 2 + Ubuntu** 進行開發，以下指令以 Linux 為主。

---

## 🚀 快速開始

```bash
# 1. 安裝相依套件
npm install

# 2. 啟動開發伺服器 ( http://localhost:5173 )
npm run dev
```

### 工具版本

| 工具   | 版本       |
| ---- | -------- |
| Node | v20.19.2 |
| npm  | 10.8.2   |

---

## 🔧 技術棧

| 層級  | 工具 / 函式庫                                    |
| --- | ------------------------------------------- |
| 打包器 | Vite 5                                      |
| 框架  | Vue 3（Composition API）                      |
| 版面  | 原生 CSS（已捨棄 Tailwind CSS）                    |
| 狀態  | `ref / reactive / props / computed / watch` |

---

## 📂 專案結構（目前）

```text
src/
 ├─ components/
 │   ├─ TodoItem.vue       # 元件拆分
 │   └─ ...
 ├─ App.vue                # 根元件
 └─ main.js                # 掛載入口
```

> 目前所有基礎練習（變數綁定、事件、條件、列表、元件、ref/reactive/computed/watch）皆集中於 App.vue，可視情況拆分 components/ 擴充。

---

## ✨ 已完成學習里程碑

| 主題                                | 狀態    |
| --------------------------------- | ----- |
| 環境建置與 Vite 腳手架                    | ✅ 已完成 |
| 模板語法與資料綁定                         | ✅ 已完成 |
| 事件、methods、computed               | ✅ 已完成 |
| 條件 / 列表渲染                         | ✅ 已完成 |
| 元件拆分與 props/emit                  | ✅ 已完成 |
| v-show、父子溝通、雙向資料流                 | ✅ 已完成 |
| reactive / watch 與進階表單響應          | ✅ 已完成 |
| ref/reactive/computed/watch 學習 | ✅ 已完成 |
| 版面美化（原生 CSS /）               | ✅ 已完成 |

---

## 📝 學習筆記（HackMD）

1. [Day 7](https://hackmd.io/@Shiki9029/r1pBZ6I4ll)
2. [Day 8](https://hackmd.io/@Shiki9029/Sky1SaIVle)
3. [Day 9](https://hackmd.io/@Shiki9029/ry50yC84lg)
4. [Day 10](https://hackmd.io/@Shiki9029/BkU5ZJwVgg)
5. [Day 11](https://hackmd.io/@Shiki9029/H1YBGUK4gl)
6. [Day 12](https://hackmd.io/@Shiki9029/BJT14FtVlg)
7. [Day 13](https://hackmd.io/@Shiki9029/rJT7zAoNlx)

---

## 🙌 線上展示網站

* [https://shikilife.github.io/Vue3-practice/](https://shikilife.github.io/Vue3-practice/)

---

