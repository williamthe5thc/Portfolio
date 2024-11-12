// src/components/shared/loading/LoadingTransition.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingDots from './LoadingDots.tsx';
import { usePageLoad } from '@/hooks/usePageLoad';

const LoadingTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isPageLoading = usePageLoad();
  const [showLoaded, setShowLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!isPageLoading) {
      setShowLoaded(true);
      
      const loadedTimer = setTimeout(() => {
        setShowLoaded(false);
      }, 1000);

      const contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 1500);

      return () => {
        clearTimeout(loadedTimer);
        clearTimeout(contentTimer);
      };
    }
  }, [isPageLoading]);

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {(isPageLoading || showLoaded) && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
          >
            <motion.div 
              className="relative"
              animate={!showLoaded ? {
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              } : {
                scale: 1,
                opacity: 1
              }}
              transition={{
                duration: 1.5,
                repeat: !showLoaded ? Infinity : 0,
                ease: "easeInOut"
              }}
            >
              <div className="w-16 h-16 rounded-full bg-gray-200" />
            </motion.div>
            
            <motion.div 
              className="mt-6 flex items-center text-lg text-gray-600"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {showLoaded ? (
                "Loaded!"
              ) : (
                <>
                  Loading Jordan's Portfolio
                  <LoadingDots />
                </>
              )}
            </motion.div>
          </motion.div>
        )}

        {showContent && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoadingTransition;