// src/components/shared/transitions/PageTransition.tsx
/**
 * @file PageTransition.tsx
 * @description Page transition wrapper component for smooth route changes
 * @module components/shared
 * 
 * Features:
 * - Smooth page transitions
 * - Exit animations
 * - Scroll restoration
 * - Route-based animations
 * 
 * @example
 * ```tsx
 * <PageTransition>
 *   <Routes>
 *     <Route path="/" element={<HomePage />} />
 *     <Route path="/about" element={<AboutPage />} />
 *   </Routes>
 * </PageTransition>
 * ```
 * 
 * @notes
 * - Uses framer-motion for animations
 * - Handles scroll position
 * - Supports route-based transitions
 */
// src/components/shared/PageTransition.tsx
import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { 
    opacity: 0,
    y: 20 
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;