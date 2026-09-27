/**
 * @file vite.config.ts
 * @description Vite configuration for development, staging and production builds
 *
 * The mode picks the base path: production deploys to
 * williamthe5thc.github.io/Portfolio/, staging to /Portfolio-Staging/, and the
 * dev server serves from /.
 *
 * @example
 * ```bash
 * npm run dev            # dev server on localhost:3000
 * npm run build          # production build into dist/
 * npm run build:staging  # staging build into dist/
 * npm run preview        # serve the last build locally
 * ```
 */

import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

/**
 * Staging is a public copy of the site at a different URL. Without this,
 * search engines can index it as a duplicate of the live portfolio and send
 * visitors to unreviewed changes. index.html is shared by both builds, so the
 * tag is injected here, for the staging build only.
 */
const noindexStaging = (mode: string): Plugin => ({
  name: 'noindex-staging',
  transformIndexHtml: () =>
    mode === 'staging'
      ? [
          {
            tag: 'meta',
            attrs: { name: 'robots', content: 'noindex, nofollow' },
            injectTo: 'head'
          }
        ]
      : []
});

export default defineConfig(({ mode }) => {
  const base = mode === 'production'
    ? '/Portfolio/'
    : mode === 'staging'
      ? '/Portfolio-Staging/'
      : '/';

  return {
    plugins: [react(), noindexStaging(mode)],
    base,
    build: {
      outDir: 'dist',
      // Off for both public builds: staging is served publicly too.
      sourcemap: mode === 'development',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'ui-vendor': ['framer-motion', 'lucide-react'],
            'form-vendor': ['@emailjs/browser']
          },
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    server: {
      port: mode === 'staging' ? 3001 : 3000,
      open: true
      // No `host: true` and no `fs.allow: ['..']`. Together they let any
      // device on the same network, or any web page open in the browser,
      // read files in the folder *above* the project. Run `npm run dev --
      // --host` for a one-off test on a phone.
    },
    publicDir: 'public'
  };
});
