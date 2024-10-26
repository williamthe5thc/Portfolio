// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Change this to match your repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})

// package.json modifications:
{
  "name": "william-charles-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "homepage": "https://williamthe5thc.github.io/Portfolio", // Update this
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"  // Make sure this points to your build directory
  }
}

// main.jsx update
import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // Use HashRouter instead of BrowserRouter
import App from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
