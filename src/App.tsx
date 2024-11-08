import React, { useState, useEffect, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { AppProviders } from './providers/AppProviders';
import { Navigation, Footer } from '@/components/layout';
import { BackToTop } from '@/components/ui';
import { LoadingScreen, ErrorBoundary, PageTransition } from '@/components/shared';
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
    () => import('@/pages/NotFoundPage')
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

  // Initial loading and route preloading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoading(false);
      // Preload routes after initial render
      preloadRoutes();
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Debug logging
  useEffect(() => {
    console.log('Current location:', location);
    console.log('Environment:', import.meta.env.MODE);
  }, [location]);

  if (isInitialLoading) {
    return <LoadingScreen />;
  }

  const renderWithLoadingState = (Component: React.ComponentType) => (
    <Suspense 
      fallback={
        <div className="min-h-screen">
          <LoadingScreen />
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
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={renderWithLoadingState(HomePage)} />
              <Route path="/about" element={renderWithLoadingState(AboutPage)} />
              <Route path="/portfolio" element={renderWithLoadingState(PortfolioPage)} />
              <Route path="/portfolio/:projectId" element={renderWithLoadingState(ProjectDetailPage)} />
              <Route path="/contact" element={renderWithLoadingState(ContactPage)} />
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