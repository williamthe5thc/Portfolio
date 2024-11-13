// src/components/shared/loading/SkeletonLoader.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePageLoad } from './usePageLoad';
console.log("preloading..")
const textVariants = {
  animate: {
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const CombinedLoader = () => {
  const isLoading = usePageLoad();
  const [progress, setProgress] = useState(0);
  const [showLoaded, setShowLoaded] = useState(false);

  
  return (
    <AnimatePresence>
      {(isLoading || !showLoaded) && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Elegant Circle */}
          <motion.div
            className="relative w-24 h-24"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 blur-md opacity-20" />
            <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-primary-600 border-l-primary-600" />
          </motion.div>

          {/* Progress Text */}
          <motion.div
            variants={textVariants}
            animate="animate"
            className="mt-8 text-lg text-gray-600 font-light tracking-wider"
          >
            <span className="font-normal">
              {progress === 100 ? "WELCOME" : "LOADING"}
            </span>
          </motion.div>

          

          
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CombinedLoader;
