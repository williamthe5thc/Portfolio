// src/App.jsx
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation, LoadingScreen, ErrorBoundary } from './components/shared';
import { BackToTop } from './components/ui/components';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { siteMetadata } from './data/siteData';
import ProjectDetailPage from './pages/ProjectDetailPage';
// Page transition wrapper component
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

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
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-background-light">
          <Navigation />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatePresence mode="wait">
              <Routes>
  <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
  <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
  <Route path="/portfolio" element={<PageTransition><PortfolioPage /></PageTransition>} />
  <Route 
    path="/portfolio/:projectId" 
    element={<PageTransition><ProjectDetailPage /></PageTransition>} 
  />
  <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
  <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
</Routes>
            </AnimatePresence>
          </main>
          <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-text-secondary">
                <p>© {new Date().getFullYear()} {siteMetadata.author}. All rights reserved.</p>
              </div>
            </div>
          </footer>
          <BackToTop />
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;