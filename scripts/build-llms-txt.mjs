// scripts/build-llms-txt.mjs
//
// Writes public/llms.txt from src/content (see scripts/llms-txt.ts).
//   node scripts/build-llms-txt.mjs
// Loads the content through Vite so the "@/..." imports resolve the same way
// they do in the app.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const server = await createServer({
  root: ROOT,
  logLevel: 'error',
  server: { middlewareMode: true, hmr: false },
  appType: 'custom',
});
try {
  const content = await server.ssrLoadModule('/src/content/index.ts');
  const { buildLlmsTxt } = await server.ssrLoadModule('/scripts/llms-txt.ts');
  const text = buildLlmsTxt(content);
  fs.writeFileSync(path.join(ROOT, 'public', 'llms.txt'), text);
  console.log(`wrote public/llms.txt (${text.length} characters)`);
} finally {
  await server.close();
}
