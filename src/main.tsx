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
 * - BrowserRouter under the deploy base (/Portfolio/, /Portfolio-Staging/, /)
 * - HelmetProvider for meta tags
 * - MotionConfig so animations honour prefers-reduced-motion
 * - ErrorBoundary for global error handling
 * 
 * @notes
 * - Every page has a real URL (/Portfolio/about/). The build writes a static
 *   copy of each one (see vite.config.ts), and index.html sends old
 *   /Portfolio/#/about links to the path URL before the app starts
 * - Implements Strict Mode for development best practices
 * - Provides global error handling
 */

// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig, MotionGlobalConfig } from 'framer-motion';
import { ErrorBoundary } from '@/components/shared';
import App from './App';
import './styles/index.css';

// Create a dedicated Suspense fallback for initial loading
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto" />
      <p className="mt-4 text-gray-600">Loading application...</p>
    </div>
  </div>
);

/*
  MotionConfig reducedMotion="user" only drops transform animations: opacity
  fades and the mobile menu's height animation still ran. For visitors who
  ask for reduced motion, skip every framer-motion animation so elements
  render in their final state, and follow the setting if it changes.
*/
if (typeof window.matchMedia === 'function') {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const applyMotionPreference = () => {
    MotionGlobalConfig.skipAnimations = reducedMotion.matches;
  };
  applyMotionPreference();
  reducedMotion.addEventListener?.('change', applyMotionPreference);
}

/*
  The deploy base with its trailing slash ("/Portfolio/"), not the usual
  "/Portfolio": with the slash, a link to "/" renders as "/Portfolio/", the
  URL GitHub Pages serves the home page at, instead of "/Portfolio", which it
  only redirects. Routes still match with or without their own slash.
*/
const basename = import.meta.env.BASE_URL || '/';

// render() replaces the static copy of the page the build put in #root.
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter basename={basename}>
          {/*
            reducedMotion="user": when the visitor's OS asks for reduced
            motion, framer-motion drops transform animations (slides, lifts,
            zooms, the spinner) site-wide and keeps only opacity fades.
          */}
          <MotionConfig reducedMotion="user">
            <React.Suspense fallback={<LoadingFallback />}>
              <App />
            </React.Suspense>
          </MotionConfig>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>
);