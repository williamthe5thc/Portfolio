// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/shared/Navigation';
import LoadingScreen from './components/shared/LoadingScreen';
import ErrorBoundary from './components/shared/ErrorBoundary';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

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
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle 404 redirects from static page
    const redirect = localStorage.getItem('404-redirect');
    if (redirect) {
      localStorage.removeItem('404-redirect');
      navigate(redirect);
    }

    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background-light">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
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
      </div>
    </ErrorBoundary>
  );
};

export default App;