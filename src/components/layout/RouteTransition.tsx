// src/components/layout/RouteTransition.tsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface RouteTransitionProps {
  children: React.ReactNode;
}

export const RouteTransition: React.FC<RouteTransitionProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Only scroll to top if there's no hash
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    /*
      Plain fragment, not a fading motion.div. Every page also wraps itself in
      PageTransition, which fades opacity 0 -> 1. Two nested fades multiply, so
      mid-flight the page rendered at the product of both - around a quarter
      opacity - and read as washed out or blank. One fade is enough; this
      component still exists for the scroll-to-top behaviour above.
    */
    <>{children}</>
  );
};