// scripts/build-resume-pdfs.mjs
//
// Prints the downloadable resume PDFs from src/content/resumes.ts, the same
// data the resume pages render, so the PDFs and the site cannot drift apart.
//
//   npm i -D playwright && npx playwright install chromium   (once)
//   node --experimental-strip-types scripts/build-resume-pdfs.mjs
//
// Writes public/documents/<resume.pdf> for each resume, plus copies under the
// old file names (Coding_Resume.pdf, Academic_Resume.pdf) so links that were
// already sent out keep working. Output is tagged (accessible) PDF with a
// document title and clickable links.
//
// Optional: RESUME_FONT_DIR=/path/with/Carlito-*.ttf embeds Carlito (a
// Calibri-metric font) when Calibri is not installed.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public', 'documents');
const SITE = 'https://williamthe5thc.github.io/Portfolio/';
const LEGACY_COPIES = { technology: 'Coding_Resume.pdf', instructional: 'Academic_Resume.pdf' };

const { resumes, resumeContact: c } = await import(pathToFileURL(path.join(ROOT, 'src/content/resumes.ts')).href);

let chromium;
try {
  ({ chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright'));
} catch {
  console.error('Playwright is not installed. Run: npm i -D playwright && npx playwright install chromium');
  process.exit(1);
}

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const href = url => (url.startsWith('/') ? `${SITE}#${url}` : url);

function fontFaces() {
  const dir = process.env.RESUME_FONT_DIR;
  if (!dir) return '';
  const faces = [];
  for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.ttf'))) {
    const lower = file.toLowerCase();
    const weight = lower.includes('bold') ? 700 : 400;
    const style = lower.includes('italic') ? 'italic' : 'normal';
    // Inlined: a page built with setContent cannot load file:// fonts.
    const data = fs.readFileSync(path.join(dir, file)).toString('base64');
    faces.push(`@font-face{font-family:"Carlito";src:url(data:font/ttf;base64,${data}) format("truetype");font-weight:${weight};font-style:${style}}`);
  }
  return faces.join('\n');
}

function entries(list) {
  return list.map(e => `
    <div class="entry">
      <div class="entry-head"><span class="entry-title">${esc(e.title)}</span><span class="period">${esc(e.period)}</span></div>
      <div class="org">${esc(e.org)}${e.location ? `, ${esc(e.location)}` : ''}</div>
      <ul>${e.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>
    </div>`).join('');
}

function render(r) {
  // Short sections move to the next page whole rather than leaving their heading behind.
  const section = (title, body, keep = true) => `<section${keep ? ' class="keep"' : ''}><h2>${esc(title)}</h2>${body}</section>`;
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>${esc(c.name)}: ${esc(r.title)}</title>
<style>
${fontFaces()}
@page { size: Letter; margin: 0.45in 0.6in; }
* { box-sizing: border-box; }
body { margin: 0; font-family: Calibri, "Carlito", "Helvetica Neue", Arial, sans-serif; font-size: 10pt; line-height: 1.28; color: #111827; }
a { color: #1e40af; text-decoration: none; }
header { border-bottom: 1.5pt solid #1e40af; padding-bottom: 6pt; margin-bottom: 8pt; }
h1 { font-size: 21pt; margin: 0 0 2pt; letter-spacing: 0.2pt; }
.contact { font-size: 9.4pt; color: #374151; }
.contact span + span::before { content: "  |  "; white-space: pre; color: #9ca3af; }
.headline { margin-top: 4pt; font-size: 9pt; font-weight: 700; letter-spacing: 1.2pt; text-transform: uppercase; color: #1e40af; }
.summary { margin: 0 0 6pt; }
section { margin-top: 7pt; }
section.keep { break-inside: avoid; }
h2 { break-after: avoid; font-size: 10.4pt; text-transform: uppercase; letter-spacing: 1pt; color: #1e40af; border-bottom: 0.6pt solid #cbd5e1; padding-bottom: 1.5pt; margin: 0 0 4pt; }
.entry { margin-bottom: 5pt; break-inside: avoid; }
.entry-head { display: flex; justify-content: space-between; gap: 12pt; }
.entry-title { font-weight: 700; }
.period { white-space: nowrap; color: #374151; }
.org { font-style: italic; color: #374151; }
ul { margin: 2pt 0 0; padding-left: 13pt; }
li { margin: 1pt 0; }
.line { margin: 1.5pt 0; break-inside: avoid; }
.line b { font-weight: 700; }
.muted { color: #374151; }
</style></head>
<body>
<header>
  <h1>${esc(c.name)}</h1>
  <div class="contact"><span>${esc(c.location)}</span><span>${esc(c.phone)}</span><span><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></span></div>
  <div class="contact"><span><a href="https://${esc(c.linkedin)}">${esc(c.linkedin)}</a></span><span><a href="https://${esc(c.portfolio)}/">${esc(c.portfolio)}</a></span></div>
  <div class="headline">${esc(r.headline)}</div>
</header>
<p class="summary">${esc(r.summary)}</p>
${section('Experience', entries(r.experience), false)}
${r.research ? section('Research Experience', entries(r.research), false) : ''}
${section('Education', r.education.map(e => `<div class="line"><b>${esc(e.degree)}, ${esc(e.field)}</b>: ${esc(e.school)}, ${esc(e.period)}.${e.details ? ` <span class="muted">${esc(e.details)}</span>` : ''}</div>`).join(''))}
${section(r.projectsHeading, r.projects.map(p => `<div class="line"><b>${p.url ? `<a href="${esc(href(p.url))}">${esc(p.title)}</a>` : esc(p.title)}</b>: ${esc(p.description)}</div>`).join(''))}
${section('Skills', r.skills.map(g => `<div class="line"><b>${esc(g.label)}:</b> ${g.items.map(esc).join(', ')}</div>`).join(''))}
${r.presentations ? section('Presentations', r.presentations.map(p => `<div class="line">${esc(p)}</div>`).join('')) : ''}
${r.honors ? section('Honors', r.honors.map(h => `<div class="line">${esc(h)}</div>`).join('')) : ''}
</body></html>`;
}

const browser = await chromium.launch(process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
const page = await browser.newPage();
for (const r of resumes) {
  await page.setContent(render(r), { waitUntil: 'load' });
  const target = path.join(OUT_DIR, r.pdf);
  await page.pdf({ path: target, format: 'Letter', printBackground: true, tagged: true, outline: true, preferCSSPageSize: true });
  console.log('wrote', path.relative(ROOT, target));
  if (LEGACY_COPIES[r.slug]) {
    fs.copyFileSync(target, path.join(OUT_DIR, LEGACY_COPIES[r.slug]));
    console.log('copied to', path.join('public/documents', LEGACY_COPIES[r.slug]));
  }
}
await browser.close();
