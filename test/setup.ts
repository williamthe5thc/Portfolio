import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import { mockResizeObserver } from './__mocks__/resizeObserver';

// Extend vitest's expect with testing-library matchers
expect.extend(matchers);

// Clean up after each test
afterEach(() => {
  cleanup();
});

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock ResizeObserver
window.ResizeObserver = mockResizeObserver;

// Mock window.scrollTo
window.scrollTo = vi.fn();

// Mock window.fs for file reading tests
window.fs = {
  readFile: vi.fn(),
  readFileSync: vi.fn(),
  writeFile: vi.fn(),
  writeFileSync: vi.fn(),
};

// Mock matchMedia
window.matchMedia = vi.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

// Mock window.gtag for analytics
window.gtag = vi.fn();

// Mock document.createRange for selection tests
document.createRange = () => ({
  setStart: vi.fn(),
  setEnd: vi.fn(),
  commonAncestorContainer: document.createElement('div'),
  getBoundingClientRect: () => ({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    toJSON: vi.fn(),
  }),
  getClientRects: () => [],
}) as any;

// Global test timeout
vi.setConfig({ testTimeout: 10000 });