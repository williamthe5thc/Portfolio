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
 * - Loading states
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
 * - Manages global loading states
 */
 import { SkeletonLoader } from '@/components/shared/loading';
import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AppProviders } from './providers/AppProviders';
import { Navigation, Footer } from '@/components/layout';
import { BackToTop } from '@/components/ui';
import { LoadingScreen, PageTransition } from '@/components/layout';
import {ErrorBoundary} from '@/components/shared';
import GoogleAnalytics from '@/components/shared/GoogleAnalytics';

// Error Fallback Component
const ErrorFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-2xl font-bold text-red-600">Error Loading Page</h1>
      <p className="mt-2 text-gray-600">Please try refreshing the page</p>
    </div>
  </div>
);

// Preload all routes
const preloadRoutes = () => {
  const routes = [
    () => import('@/pages/HomePage'),
    () => import('@/pages/AboutPage'),
    () => import('@/pages/PortfolioPage'),
    () => import('@/pages/ContactPage'),
    () => import('@/pages/ProjectDetailPage'),
    () => import('@/pages/NotFoundPage'),
    () => import('@/pages/ResumePage'),
    () => import('@/pages/resumes/InstructionalDesignResume'),
    () => import('@/pages/resumes/AcademicResume'),
    () => import('@/pages/resumes/SoftwareDevResume')
    

  ];

  routes.forEach(route => {
    route().catch(console.error);
  });
};

// Lazy load pages with better error handling and preloading
const HomePage = React.lazy(() => 
  import('@/pages/HomePage').catch(() => ({
    default: ErrorFallback
  }))
);

const SoftwareDevResume = React.lazy(() => 
  import('@/pages/resumes/SoftwareDevResume').catch(() => ({
    default: ErrorFallback
  }))
);

const InstructionalDesignResume = React.lazy(() => 
  import('@/pages/resumes/InstructionalDesignResume').catch(() => ({
    default: ErrorFallback
  }))
);

const AcademicResume = React.lazy(() => 
  import('@/pages/resumes/AcademicResume').catch(() => ({
    default: ErrorFallback
  }))
);

const ResumePage = React.lazy(() => 
  import('@/pages/ResumePage').catch(() => ({
    default: ErrorFallback
  }))
);

const AboutPage = React.lazy(() => 
  import('@/pages/AboutPage').catch(() => ({
    default: ErrorFallback
  }))
);

const PortfolioPage = React.lazy(() => 
  import('@/pages/PortfolioPage').catch(() => ({
    default: ErrorFallback
  }))
);

const ContactPage = React.lazy(() => 
  import('@/pages/ContactPage').catch(() => ({
    default: ErrorFallback
  }))
);

const ProjectDetailPage = React.lazy(() => 
  import('@/pages/ProjectDetailPage').catch(() => ({
    default: ErrorFallback
  }))
);

const NotFoundPage = React.lazy(() => 
  import('@/pages/NotFoundPage').catch(() => ({
    default: ErrorFallback
  }))
);

const App: React.FC = () => {
   const [isInitialLoading, setIsInitialLoading] = useState(true);
  const location = useLocation();
  const navigationType = useNavigationType();

  // Initial loading and route preloading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
      // Preload routes after initial render
      preloadRoutes();
    }, 800);

    // Disable default scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    return () => clearTimeout(timer);
  }, []);

  // Handle scroll behavior
  useEffect(() => {
    const handleScrollRestoration = () => {
      // Don't scroll if there's a hash in the URL
      if (location.hash) {
        return;
      }

      // If it was a back/forward navigation (POP), let the browser handle it
      if (navigationType === 'POP') {
        return;
      }

      // For regular navigation (PUSH), scroll to top
      window.scrollTo(0, 0);
    };

    handleScrollRestoration();
  }, [location, navigationType]);

  // Debug logging
  useEffect(() => {
    console.log('Current location:', location);
    console.log('Navigation type:', navigationType);
    console.log('Environment:', import.meta.env.MODE);
  }, [location, navigationType]);

  if (isInitialLoading) {
    return <SkeletonLoader />;
  }

  const renderWithLoadingState = (Component: React.ComponentType) => (
    <Suspense 
      fallback={
        <div className="min-h-screen">
          <SkeletonLoader />
        </div>
      }
    >
      <PageTransition>
        <Component />
      </PageTransition>
    </Suspense>
  );

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background-light flex flex-col">
        <GoogleAnalytics />
        <Navigation />
        <main className="flex-grow">
          <AnimatePresence mode="sync">
            <Routes location={location} key={location.pathname}>
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
          </AnimatePresence>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ErrorBoundary>
  );
};

export default App;