// src/App.tsx 
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AppProviders } from './providers/AppProviders';
import { Navigation, Footer } from '@/components/layout';
import { BackToTop } from '@/components/ui';
import { PageTransition, LoadingScreen } from '@/components/shared/';

// Lazy load pages
const HomePage = React.lazy(() => import('@/pages/HomePage'));
const AboutPage = React.lazy(() => import('@/pages/AboutPage'));
const PortfolioPage = React.lazy(() => import('@/pages/PortfolioPage'));
const ContactPage = React.lazy(() => import('@/pages/ContactPage'));
const ProjectDetailPage = React.lazy(() => import('@/pages/ProjectDetailPage'));
const NotFoundPage = React.lazy(() => import('@/pages/NotFoundPage'));

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <AppProviders>
      <div className="min-h-screen bg-background-light flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <React.Suspense fallback={<LoadingScreen />}>
            <Routes location={location} key={location.pathname}>
              <Route 
                path="/" 
                element={
                  <PageTransition>
                    <HomePage />
                  </PageTransition>
                } 
              />
              <Route 
                path="/about" 
                element={
                  <PageTransition>
                    <AboutPage />
                  </PageTransition>
                } 
              />
              <Route 
                path="/portfolio" 
                element={
                  <PageTransition>
                    <PortfolioPage />
                  </PageTransition>
                } 
              />
              <Route 
                path="/portfolio/:projectId" 
                element={
                  <PageTransition>
                    <ProjectDetailPage />
                  </PageTransition>
                } 
              />
              <Route 
                path="/contact" 
                element={
                  <PageTransition>
                    <ContactPage />
                  </PageTransition>
                } 
              />
              <Route 
                path="*" 
                element={
                  <PageTransition>
                    <NotFoundPage />
                  </PageTransition>
                } 
              />
            </Routes>
          </React.Suspense>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </AppProviders>
  );
};

export default App;