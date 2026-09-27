/**
 * @file App.tsx
 * @description Root application component managing routing and global layout
 * @module app
 * 
 * @requires react-router-dom - For application routing
 * @requires framer-motion - For page transitions
 * @requires @/components - For layout and shared components
 * 
 * Features:
 * - Dynamic route loading with code splitting
 * - Animated page transitions
 * - Global error boundary
 * - Scroll and focus management on navigation
 * - Analytics integration
 * 
 * @example
 * ```tsx
 * // In root index file
 * ReactDOM.createRoot(document.getElementById('root')).render(
 *   <React.StrictMode>
 *     <App />
 *   </React.StrictMode>
 * );
 * ```
 * 
 * @notes
 * - Uses React.lazy for route-based code splitting
 * - Implements error boundaries for route loading
 * - Scroll position is owned by useScrollManager; pages must not scroll on mount
 */
import React, { useEffect, useRef, useState, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navigation, Footer } from '@/components/layout';
import { BackToTop } from '@/components/ui';
import { ErrorBoundary, PageTransition, SEO } from '@/components/shared';
import GoogleAnalytics from '@/components/shared/GoogleAnalytics';
import { useScrollManager } from '@/hooks/useScrollManager';

// Error Fallback Component
const ErrorFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-red-600">Error Loading Page</h1>
      <p className="mt-2 text-gray-600">Please try refreshing the page</p>
    </div>
  </div>
);

const pageImports = {
  home: () => import('@/pages/Homepage'),
  about: () => import('@/pages/AboutPage'),
  portfolio: () => import('@/pages/PortfolioPage'),
  contact: () => import('@/pages/ContactPage'),
  projectDetail: () => import('@/pages/ProjectDetailPage'),
  notFound: () => import('@/pages/NotFoundPage'),
  resume: () => import('@/pages/ResumePage'),
  instructionalResume: () => import('@/pages/resumes/InstructionalDesignResume'),
  academicResume: () => import('@/pages/resumes/AcademicResume'),
  softwareResume: () => import('@/pages/resumes/SoftwareDevResume')
};

// Warm the cache for every route once the first page is up, so later
// navigations don't wait on the network.
const preloadRoutes = () => {
  Object.values(pageImports).forEach(load => {
    load().catch(() => {
      // A failed preload is retried (and handled) when the route is visited.
    });
  });
};

const RELOADED_FOR_CHUNK = 'reloaded-for-missing-chunk';

/*
  Each deploy renames every chunk, so a tab left open across a deploy asks
  for files that no longer exist. One reload fetches the new index.html and
  its chunk names. The timestamp in sessionStorage allows at most one such
  reload per 10 s, so a chunk that is genuinely broken shows the error
  message instead of reloading forever.
*/
const lazyPage = (load: () => Promise<{ default: React.ComponentType<any> }>) =>
  React.lazy(() =>
    load().catch(() => {
      try {
        const last = Number(sessionStorage.getItem(RELOADED_FOR_CHUNK) || 0);
        if (Date.now() - last > 10000) {
          sessionStorage.setItem(RELOADED_FOR_CHUNK, String(Date.now()));
          window.location.reload();
          return new Promise<never>(() => {});
        }
      } catch {
        // Storage blocked: show the error rather than risk a reload loop.
      }
      return { default: ErrorFallback };
    })
  );

const HomePage = lazyPage(pageImports.home);
const AboutPage = lazyPage(pageImports.about);
const PortfolioPage = lazyPage(pageImports.portfolio);
const ContactPage = lazyPage(pageImports.contact);
const ProjectDetailPage = lazyPage(pageImports.projectDetail);
const NotFoundPage = lazyPage(pageImports.notFound);
const ResumePage = lazyPage(pageImports.resume);
const InstructionalDesignResume = lazyPage(pageImports.instructionalResume);
const AcademicResume = lazyPage(pageImports.academicResume);
const SoftwareDevResume = lazyPage(pageImports.softwareResume);

/*
  Suspense fallback for the first visit to a route. It sits inside <main>
  and leaves the header and footer in place. The previous fallback was the
  full-screen, fixed-position LOADING splash, which covered the whole site
  for a frame on every first visit to a page.
*/
const RouteFallback = () => (
  <div className="min-h-screen" role="status">
    <span className="sr-only">Loading page</span>
  </div>
);

const renderWithLoadingState = (Component: React.ComponentType) => (
  <Suspense fallback={<RouteFallback />}>
    <PageTransition>
      <Component />
    </PageTransition>
  </Suspense>
);

const App: React.FC = () => {
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const [announcement, setAnnouncement] = useState('');
  const lastPathname = useRef(location.pathname);

  useScrollManager();

  /*
    No artificial splash. The app used to hold every visit behind an 800 ms
    full-screen loader and only then start fetching the home page, so first
    content arrived after about 1.3 s even on a fast connection.
  */
  useEffect(() => {
    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(preloadRoutes);
    } else {
      window.setTimeout(preloadRoutes, 200);
    }
  }, []);

  /*
    On a route change, move focus to the page content and announce the new
    page title. Without this, focus stayed on the link that was activated
    (often in the footer), so the next Tab continued from the old page, and
    screen readers got no sign that a new page had loaded. Skipped on the
    first render so a fresh load starts at the top of the document as usual.
  */
  useEffect(() => {
    if (lastPathname.current === location.pathname) return;
    lastPathname.current = location.pathname;
    // With a hash, useScrollManager focuses the target section instead.
    if (!location.hash) {
      mainRef.current?.focus({ preventScroll: true });
    }
    // Page titles are applied by Helmet after the page mounts.
    const timer = window.setTimeout(() => setAnnouncement(document.title), 500);
    return () => window.clearTimeout(timer);
  }, [location.pathname]);

  const skipToContent = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Under HashRouter a real "#main-content" navigation would be read as a
    // route and render the 404 page, so the skip link only moves focus.
    event.preventDefault();
    mainRef.current?.focus();
  };

  return (
    <div className="min-h-screen bg-background-light flex flex-col">
      {/* Site-wide defaults (lang, title, description). Pages override them. */}
      <SEO />
      <a
        href="#main-content"
        onClick={skipToContent}
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 rounded-md bg-white font-medium text-gray-900 shadow-lg ring-2 ring-blue-700"
      >
        Skip to main content
      </a>
      <GoogleAnalytics />
      <Navigation />
      <main
        id="main-content"
        ref={mainRef}
        tabIndex={-1}
        className="flex-grow focus:outline-none"
      >
        {/*
            No AnimatePresence here. It previously wrapped <Routes> with
            mode="wait", which holds the incoming page until the outgoing one
            reports its exit animation finished. <Routes> is not a motion
            component, so that report never arrives: the URL and document
            title update while the visible content stays frozen on the
            previous page, sometimes indefinitely. The page fades in via the
            PageTransition in renderWithLoadingState, the only one that
            animates (nested PageTransitions render as plain wrappers).

            The error boundary sits inside <main> and is keyed by path, so a
            page that throws keeps the header and footer usable and the
            boundary resets as soon as the visitor navigates elsewhere.
          */}
        <ErrorBoundary key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={renderWithLoadingState(HomePage)} />
            <Route path="/about" element={renderWithLoadingState(AboutPage)} />
            <Route path="/portfolio" element={renderWithLoadingState(PortfolioPage)} />
            <Route path="/portfolio/:projectId" element={renderWithLoadingState(ProjectDetailPage)} />
            <Route path="/contact" element={renderWithLoadingState(ContactPage)} />
            <Route path="/resume" element={renderWithLoadingState(ResumePage)} />
            <Route path="/resume/software" element={renderWithLoadingState(SoftwareDevResume)} />
            <Route path="/resume/instructional" element={renderWithLoadingState(InstructionalDesignResume)} />
            <Route path="/resume/academic" element={renderWithLoadingState(AcademicResume)} />
            <Route path="*" element={renderWithLoadingState(NotFoundPage)} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
      <BackToTop />
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcement}
      </div>
    </div>
  );
};

export default App;
