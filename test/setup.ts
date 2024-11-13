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
vi.mock('framer-motion', () => {
  const MockMotionComponent = (props: { children?: ReactNode } & Record<string, any>) => 
    React.createElement('div', { ...props, 'data-testid': 'motion-component' }, props.children);

  return {
    motion: {
      div: MockMotionComponent,
      span: MockMotionComponent,
      button: MockMotionComponent
    },
    AnimatePresence: ({ children }: { children: ReactNode }) => children,
    useAnimation: () => ({
      start: vi.fn(),
      stop: vi.fn(),
      set: vi.fn()
    }),
    useInView: () => [null, false],
    useScroll: () => ({
      scrollY: { get: () => 0, onChange: vi.fn() },
      scrollYProgress: { get: () => 0, onChange: vi.fn() }
    })
  };
});

// Initialize any required global variables
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));