// test/content/llms-txt.test.ts
//
// public/llms.txt is what AI assistants read for the whole portfolio. It is
// a copy of src/content, so this fails when content changes and it doesn't.
// The static copy of each page is checked in prerender.test.tsx.
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
