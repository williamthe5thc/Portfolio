// src/App.jsx
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigation, LoadingScreen, ErrorBoundary } from './components/shared';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { siteMetadata } from './data/siteData';

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
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

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
          <AnimatePresence mode="wait">
            <Routes>
              <Route 
                path="/" 
                element={<PageTransition><HomePage /></PageTransition>} 
              />
              <Route 
                path="/about" 
                element={<PageTransition><AboutPage /></PageTransition>} 
              />
              <Route 
                path="/portfolio" 
                element={<PageTransition><PortfolioPage /></PageTransition>} 
              />
              <Route 
                path="/contact" 
                element={<PageTransition><ContactPage /></PageTransition>} 
              />
              <Route 
                path="*" 
                element={<PageTransition><NotFoundPage /></PageTransition>} 
              />
            </Routes>
          </AnimatePresence>
          <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
            <div className="max-w-6xl mx-auto px-4 text-center text-text-secondary">
              <p>© {new Date().getFullYear()} {siteMetadata.author}. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;