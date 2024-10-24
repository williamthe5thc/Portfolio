import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/EDPS_WilliamCharles/',
  build: {
    outDir: 'dist',
  },
  server: {
    headers: {
      'Content-Type': 'application/javascript',
    },
  },
})
