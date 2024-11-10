// src/main.tsx
/**
 * @file main.tsx
 * @description Application entry point setting up React root and providers
 * @module root
 * 
 * @requires react-dom - For rendering React application
 * @requires react-router-dom - For routing setup
 * @requires react-helmet-async - For document head management
 * 
 * Features:
 * - React 18 setup with Strict Mode
 * - Router configuration
 * - Global error boundary
 * - Meta tag management
 * 
 * Providers:
 * - HashRouter for GitHub Pages compatibility
 * - HelmetProvider for meta tags
 * - ErrorBoundary for global error handling
 * 
 * @notes
 * - Uses HashRouter for static hosting compatibility
 * - Implements Strict Mode for development best practices
 * - Provides global error handling
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from '@/components/shared';
import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>
);