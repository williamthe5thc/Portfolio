// src/components/shared/transitions/PageTransition.tsx
/**
 * @file PageTransition.tsx
 * @description Page transition wrapper component for smooth route changes
 * @module components/shared
 * 
 * Features:
 * - Smooth page transitions
 * - Only the outermost instance animates
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
 * - Scroll position is handled by useScrollManager, not here
 */
// src/components/shared/PageTransition.tsx
import React, { createContext, useContext } from 'react';
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

/*
  Only the outermost PageTransition animates. App wraps every route in one,
  and several pages wrap themselves in another; nested fades multiply, so
  mid-transition the page rendered at the product of both opacities and read
  as washed out. An inner PageTransition renders its children unchanged.
*/
const InsidePageTransition = createContext(false);

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const isNested = useContext(InsidePageTransition);

  if (isNested) {
    return <>{children}</>;
  }

  return (
    <InsidePageTransition.Provider value={true}>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </InsidePageTransition.Provider>
  );
};

export default PageTransition;
