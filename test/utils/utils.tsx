import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppProviders } from '@/providers/AppProviders';

// Custom render function that includes providers
function render(ui: React.ReactElement, { route = '/' } = {}) {
  window.history.pushState({}, 'Test page', route);

  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <HelmetProvider>
        <HashRouter>
          <AppProviders>{children}</AppProviders>
        </HashRouter>
      </HelmetProvider>
    ),
  });
}

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { render };