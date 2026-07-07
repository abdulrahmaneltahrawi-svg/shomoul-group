import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    plugins: [react(), tailwindcss()],
    // إذا كنت في وضع الإنتاج (Build) استخدم المسار، وإذا كنت في وضع التطوير استخدم الجذر
    base: mode === 'production' ? '/shomoul-group/' : '/',
  }
})