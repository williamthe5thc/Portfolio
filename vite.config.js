import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/EDPS_WilliamCharles/', // This is important for GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
