// src/components/shared/PageTransition.tsx
/**
 * @file PageTransition.tsx - Page transition wrapper
 * @module components/shared
 * @description Provides smooth transitions between pages using
 * Framer Motion animations.
 * 
 * Features:
 * - Fade transitions
 * - Motion variants
 * - Exit animations
 * - Configurable durations
 */
 
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: ReactNode;
}

export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -20
  }
};

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;


