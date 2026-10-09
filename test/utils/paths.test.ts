// test/utils/paths.test.ts
import { describe, it, expect } from 'vitest';
import { routePath, isSamePath } from '@/utils/paths';

describe('routePath', () => {
  it.each([
    ['/', '/'],
    ['/about', '/about/'],
    ['/about/', '/about/'],
    ['/about#design-process', '/about/#design-process'],
    ['/portfolio?category=id', '/portfolio/?category=id'],
    ['/portfolio/ai-law-course', '/portfolio/ai-law-course/'],
    // Files and bare fragments are not routes.
    ['/documents/Instructional_Design_Resume.pdf', '/documents/Instructional_Design_Resume.pdf'],
    ['#main-content', '#main-content']
  ])('%s -> %s', (input, expected) => {
    expect(routePath(input)).toBe(expected);
  });
});

describe('isSamePath', () => {
  it('ignores a trailing slash', () => {
    expect(isSamePath('/about', '/about/')).toBe(true);
    expect(isSamePath('/', '/')).toBe(true);
    expect(isSamePath('/about/', '/contact/')).toBe(false);
  });
});
