/**
 * @file vite.config.ts
 * @description Vite configuration for development, staging and production builds
 *
 * The mode picks the base path: production deploys to
 * williamthe5thc.github.io/Portfolio/, staging to /Portfolio-Staging/, and the
 * dev server serves from /. Builds also write a static copy of every page
 * (prerenderPages below).
 *
 * @example
 * ```bash
 * npm run dev            # dev server on localhost:3000
 * npm run build          # production build into dist/
 * npm run build:staging  # staging build into dist/
 * npm run preview        # serve the last build locally
 * ```
 */

import { createServer, defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
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

/**
 * After the build, writes a static copy of every page: dist/about/index.html,
 * dist/portfolio/<id>/index.html and so on, plus dist/404.html. GitHub Pages
 * serves these files at the page URLs, so crawlers and AI tools that don't run
 * JavaScript get each page's own title, description, canonical URL and text.
 * The page text comes from src/content via scripts/prerender.ts, loaded
 * through Vite the same way scripts/build-llms-txt.mjs loads it.
 */
const prerenderPages = (mode: string): Plugin => {
  let root = '';
  let outDir = '';
  return {
    name: 'prerender-pages',
    apply: 'build',
    configResolved(config) {
      root = config.root;
      outDir = path.resolve(config.root, config.build.outDir);
    },
    async closeBundle() {
      const shellFile = path.join(outDir, 'index.html');
      // closeBundle also runs after a failed build.
      if (!fs.existsSync(shellFile)) return;
      const shell = fs.readFileSync(shellFile, 'utf8');
      const server = await createServer({
        root,
        mode,
        logLevel: 'error',
        server: { middlewareMode: true, hmr: false },
        appType: 'custom',
        // ssrLoadModule needs no pre-bundled deps. Without this the server
        // starts an esbuild dependency scan in the background that can still
        // be running when the process exits, and esbuild then crashes with a
        // "goroutine deadlock" dump in the terminal.
        optimizeDeps: { noDiscovery: true, include: [] }
      });
      try {
        const content = await server.ssrLoadModule('/src/content/index.ts');
        const { resumes } = await server.ssrLoadModule('/src/content/resumes.ts');
        const { buildPages, renderPage, renderNotFound } = await server.ssrLoadModule('/scripts/prerender.ts');
        const base = server.config.base;
        const pages = buildPages({ ...content, resumes }, base);
        for (const page of pages) {
          const file = path.join(outDir, page.route, 'index.html');
          fs.mkdirSync(path.dirname(file), { recursive: true });
          fs.writeFileSync(file, renderPage(shell, page, content.siteConfig.siteUrl));
        }
        fs.writeFileSync(path.join(outDir, '404.html'), renderNotFound(shell, content.siteConfig.author, base));
        console.log(`prerendered ${pages.length} pages and 404.html`);
      } finally {
        await server.close();
      }
    }
  };
};

export default defineConfig(({ mode }) => {
  const base = mode === 'production'
    ? '/Portfolio/'
    : mode === 'staging'
      ? '/Portfolio-Staging/'
      : '/';

  return {
    plugins: [react(), noindexStaging(mode), prerenderPages(mode)],
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
