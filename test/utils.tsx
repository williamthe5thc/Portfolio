// tests/utils.tsx
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppProviders } from '@/providers/AppProviders';

interface WrapperProps {
  children: React.ReactNode;
}

interface CustomRenderOptions {
  route?: string;
  providerProps?: Record<string, any>;
}

// Create a wrapper with all required providers
const AllTheProviders: React.FC<WrapperProps> = ({ children }) => {
  return (
    <HelmetProvider>
      <HashRouter>
        <AppProviders>
          {children}
        </AppProviders>
      </HashRouter>
    </HelmetProvider>
  );
};

// Custom render method
function render(ui: React.ReactElement, { route = '/', ...renderOptions }: CustomRenderOptions = {}) {
  // Set initial route
  window.history.pushState({}, 'Test page', route);

  const Wrapper: React.FC<WrapperProps> = ({ children }) => (
    <AllTheProviders>{children}</AllTheProviders>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// Helper function to wait for animations
export const waitForAnimation = (ms = 300) => new Promise(resolve => setTimeout(resolve, ms));

// Helper for mocking API responses
export const mockApiResponse = (data: any) => {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};

// Helper for testing responsive designs
export const setViewport = (width: number, height: number) => {
  Object.defineProperty(window, 'innerWidth', { value: width, writable: true });
  Object.defineProperty(window, 'innerHeight', { value: height, writable: true });
  window.dispatchEvent(new Event('resize'));
};

// Common test data
export const mockProject = {
  id: 'test-project',
  title: 'Test Project',
  description: 'Test Description',
  image: '/test-image.jpg',
  category: 'development' as const,
  tags: ['React', 'TypeScript'],
  status: 'completed' as const,
  date: '2024',
  detailPage: true
};

// Re-export everything from testing library
export * from '@testing-library/react';

// Override render method
export { render };