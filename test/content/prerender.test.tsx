// test/content/prerender.test.tsx
//
// The build writes a static copy of every page (scripts/prerender.ts) for
// crawlers and AI tools that don't run JavaScript. These checks keep that copy
// in step with the app: same pages, same titles, descriptions and h1s, and a
// canonical URL GitHub Pages actually serves.
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import fs from 'node:fs';
import path from 'node:path';
import App from '@/App';
import * as content from '@/content';
import { resumes } from '@/content/resumes';
import type { ProjectBase } from '@/types/content';
import { buildPages, renderPage, renderNotFound } from '../../scripts/prerender';

const root = path.resolve(__dirname, '../..');
const shell = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const BASE = '/Portfolio/';
const SITE = content.siteConfig.siteUrl;
const pages = buildPages({ ...content, resumes } as never, BASE);
// Scripts dropped: happy-dom would try to fetch and run them.
const parse = (html: string) =>
  new DOMParser().parseFromString(html.replace(/<script[\s\S]*?<\/script>/g, ''), 'text/html');

describe('static page copies', () => {
  it('cover every page of the app', () => {
    expect(pages.map(page => page.route)).toEqual(expect.arrayContaining([
      '',
      'about/',
      'portfolio/',
      'contact/',
      'resume/',
      ...resumes.map(resume => `resume/${resume.slug}/`),
      ...content.projects.map(project => `portfolio/${project.id}/`)
    ]));
  });

  it('give a project page its own title, description, canonical and text', () => {
    const project = content.projects.find(p => p.id === 'ai-law-course')!;
    const page = pages.find(p => p.route === 'portfolio/ai-law-course/')!;
    const doc = parse(renderPage(shell, page, SITE));
    const url = 'https://williamthe5thc.github.io/Portfolio/portfolio/ai-law-course/';

    expect(doc.title).toBe(`${project.title} | ${content.siteConfig.author}`);
    expect(doc.querySelector('meta[name="description"]')?.getAttribute('content')).toBe(project.description);
    expect(doc.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(doc.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(url);
    expect(doc.querySelector('meta[property="og:url"]')?.getAttribute('content')).toBe(url);
    expect(doc.querySelector('meta[property="og:title"]')?.getAttribute('content')).toBe(doc.title);
    expect(doc.querySelector('meta[name="twitter:description"]')?.getAttribute('content')).toBe(project.description);

    const main = doc.querySelector('#root main')!;
    expect(main.querySelector('h1')?.textContent).toBe(project.title);
    expect(main.textContent).toContain(project.description);
    expect(main.textContent).toContain(project.role!);
    // Documents and demos link under the deploy base.
    const links = [...main.querySelectorAll('a')].map(a => a.getAttribute('href'));
    expect(links).toContain('/Portfolio/case-studies/advanced-prompting-assessment-design.pdf');
    expect(links).toContain('/Portfolio/demos/ai-law-course/index.html');
  });

  it('escape content rather than inject it', () => {
    const hostile = '<img src=x onerror=alert(1)> & "quotes"';
    const project = { ...content.projects[0], id: 'x', title: hostile, description: hostile } as ProjectBase;
    const [page] = buildPages({ ...content, projects: [project], resumes } as never, BASE)
      .filter(p => p.route === 'portfolio/x/');
    const html = renderPage(shell, page, SITE);
    expect(html).not.toContain('<img src=x');
    const doc = parse(html);
    expect(doc.querySelector('#root h1')?.textContent).toBe(hostile);
    expect(doc.querySelector('meta[name="description"]')?.getAttribute('content')).toBe(hostile);
  });

  it('give the home page the bio', () => {
    const home = parse(renderPage(shell, pages.find(p => p.route === '')!, SITE));
    expect(home.querySelector('#root')?.textContent).toContain(content.siteConfig.bio);
    expect(home.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(`${SITE}/`);
  });

  it('are all listed in the sitemap', () => {
    const sitemap = fs.readFileSync(path.join(root, 'public/sitemap.xml'), 'utf8');
    for (const page of pages) {
      expect(sitemap).toContain(`<loc>${SITE}/${page.route}</loc>`);
    }
  });

  it.each(pages.map(page => [page.route || '(home)', page] as const))(
    '%s matches the page the app renders',
    async (_, page) => {
      render(
        <HelmetProvider>
          <MemoryRouter initialEntries={[`/${page.route}`]}>
            <React.Suspense fallback={null}>
              <App />
            </React.Suspense>
          </MemoryRouter>
        </HelmetProvider>
      );

      const h1 = await screen.findByRole('heading', { level: 1 }, { timeout: 5000 });
      expect(h1.textContent).toBe(page.h1);
      await waitFor(() => {
        expect(document.title).toBe(page.title);
        expect(document.querySelector('meta[name="description"]')?.getAttribute('content'))
          .toBe(page.description);
      });
    }
  );
});

describe('404.html', () => {
  const html = renderNotFound(
    shell.replace(
      '<script type="module" src="/src/main.tsx"></script>',
      '<script type="module" crossorigin src="/Portfolio/assets/index-abc.js"></script>'
    ),
    content.siteConfig.author,
    BASE
  );
  const doc = parse(html);

  it('is not indexed and has no canonical', () => {
    expect(doc.querySelector('meta[name="robots"]')?.getAttribute('content')).toBe('noindex');
    expect(doc.querySelector('link[rel="canonical"]')).toBeNull();
  });

  it('starts the app only for paths that are not files', () => {
    expect(html).not.toContain('<script type="module"');
    expect(html).toContain('"/Portfolio/assets/index-abc.js"');
    expect(doc.querySelector('#root h1')?.textContent).toBe('Page not found');
  });
});
