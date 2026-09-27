// test/setup.ts
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';
import type { ReactNode } from 'react';
import { configure } from '@testing-library/dom';

// Configure testing-library
configure({
  asyncUtilTimeout: 1000,
  testIdAttribute: 'data-testid'
});

// Extend expect matchers
declare global {
  namespace Vi {
    interface JestAssertion<T = any> extends jest.Matchers<void, T> {}
  }
}

// Mock IntersectionObserver
class MockIntersectionObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver
});

// Mock match media
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock ResizeObserver
class MockResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  configurable: true,
  value: MockResizeObserver
});

// Suppress specific console errors that we expect during tests
const originalError = console.error;
console.error = (...args) => {
  if (
    /Warning.*not wrapped in act/.test(args[0]) ||
    /Warning.*Cannot update a component/.test(args[0]) ||
    /Warning.*React does not recognize the.*prop/.test(args[0])
  ) {
    return;
  }
  originalError.apply(console, args);
};

// happy-dom has no FontFaceSet; the page-load hook waits on document.fonts.ready
if (!('fonts' in document)) {
  Object.defineProperty(document, 'fonts', {
    configurable: true,
    value: { ready: Promise.resolve() }
  });
}

// Mock scroll functions
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true
});

// Add required DOM properties
Object.defineProperty(window, 'scrollY', {
  value: 0,
  writable: true
});

// Mock Framer Motion
// Every motion.<tag> renders the plain <tag> without animation props. The
// caller's own props, including data-testid, win over the default test id:
// the old mock rendered everything as a <div> and overwrote data-testid, so
// every getByTestId() query in the suite failed. Hooks and helpers that are
// not overridden here come from the real module.
vi.mock('framer-motion', async importOriginal => {
  const actual = await importOriginal<typeof import('framer-motion')>();
  const MOTION_PROPS = new Set([
    'initial', 'animate', 'exit', 'transition', 'variants', 'custom',
    'whileHover', 'whileTap', 'whileFocus', 'whileInView', 'whileDrag',
    'viewport', 'layout', 'layoutId', 'drag', 'dragConstraints',
    'onAnimationStart', 'onAnimationComplete', 'onHoverStart', 'onHoverEnd'
  ]);
  const cache = new Map<string, React.ComponentType<any>>();
  const mockMotion = (tag: string) => {
    if (!cache.has(tag)) {
      const MockMotionComponent = React.forwardRef<Element, Record<string, any>>(
        ({ children, ...props }, ref) => {
          const domProps = Object.fromEntries(
            Object.entries(props).filter(([key]) => !MOTION_PROPS.has(key))
          );
          return React.createElement(
            tag,
            { 'data-testid': 'motion-component', ...domProps, ref },
            children
          );
        }
      );
      MockMotionComponent.displayName = `motion.${tag}`;
      cache.set(tag, MockMotionComponent);
    }
    return cache.get(tag);
  };

  return {
    ...actual,
    motion: new Proxy({}, { get: (_target, tag: string) => mockMotion(tag) }),
    AnimatePresence: ({ children }: { children: ReactNode }) =>
      React.createElement(React.Fragment, null, children),
    useAnimation: () => ({
      start: vi.fn(),
      stop: vi.fn(),
      set: vi.fn()
    })
  };
});

// Initialize any required global variables
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));