import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/Vue3-practice/', // 跟你的 repo 名稱完全一致，注意大小寫
})
