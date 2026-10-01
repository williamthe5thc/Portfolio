// test/content/llms-txt.test.ts
//
// public/llms.txt and the <noscript> summary in index.html are what AI
// assistants and non-JavaScript crawlers read. Both are copies of
// src/content, so these checks fail when content changes and they don't.
import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { siteConfig, projects, experience, education } from '@/content';
import { buildLlmsTxt } from '../../scripts/llms-txt';

const root = path.resolve(__dirname, '../..');

describe('llms.txt', () => {
  it('matches the current content (run: node scripts/build-llms-txt.mjs)', () => {
    const committed = fs.readFileSync(path.join(root, 'public/llms.txt'), 'utf8');
    expect(committed).toBe(buildLlmsTxt({ siteConfig, projects, experience, education } as never));
  });
});

describe('index.html <noscript> summary', () => {
  it('carries the current bio', () => {
    const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
    const noscript = html.match(/<noscript>([\s\S]*?)<\/noscript>/)?.[1] ?? '';
    const decode = (s: string) => s.replace(/&amp;/g, '&').replace(/&#39;|&rsquo;/g, "'");
    expect(decode(noscript)).toContain(siteConfig.bio);
  });
});
