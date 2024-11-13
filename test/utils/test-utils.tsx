// test/utils/test-utils.tsx
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

interface WrapperProps {
  children: React.ReactNode;
}

interface CustomRenderOptions {
  route?: string;
}

// Simple wrapper that doesn't depend on AppProviders
const AllTheProviders: React.FC<WrapperProps> = ({ children }) => {
  return (
    <HelmetProvider>
      <HashRouter>
        {children}
      </HashRouter>
    </HelmetProvider>
  );
};

// Custom render function
function render(
  ui: React.ReactElement,
  { route = '/' }: CustomRenderOptions = {}
) {
  window.history.pushState({}, 'Test page', route);

  return {
    ...rtlRender(ui, {
      wrapper: ({ children }) => <AllTheProviders>{children}</AllTheProviders>,
    }),
  };
}

// Viewport helper
export const setViewport = (width: number, height: number) => {
  Object.defineProperty(window, 'innerWidth', { 
    writable: true, 
    configurable: true, 
    value: width 
  });
  Object.defineProperty(window, 'innerHeight', { 
    writable: true, 
    configurable: true, 
    value: height 
  });
  window.dispatchEvent(new Event('resize'));
};

// Re-export everything
export * from '@testing-library/react';
export { render };