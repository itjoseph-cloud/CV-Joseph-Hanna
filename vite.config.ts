import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CV-Joseph-Hanna/',
  build: { sourcemap: false, target: 'es2022' },
})
