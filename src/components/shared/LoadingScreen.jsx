// src/components/shared/LoadingScreen.jsx

import React from 'react';
import { motion } from 'framer-motion';

const LoadingLogo = () => {
  // Shorter animation duration
  const animationDuration = 0.6;
  
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      initial="start"
      animate="end"
    >
      {/* Outer circle */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        stroke="#0284c7"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: animationDuration, ease: "easeInOut" }}
      />
      
      {/* "WJC" combined path for faster animation */}
      <motion.path
        d="M30 30 L40 60 L50 30 L60 60 L70 30 M45 70 Q50 70 50 65 L50 50 M65 50 Q55 50 55 60 Q55 70 65 70"
        stroke="#0284c7"
        strokeWidth="3"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: animationDuration, delay: 0.1, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

// Alternative simpler version that might work better for quick loading:
const SimpleLoadingLogo = () => {
  return (
    <motion.div 
      className="relative w-20 h-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 border-4 border-primary-600 rounded-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-primary-600"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        WJC
      </motion.div>
    </motion.div>
  );
};

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background-light flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center"
      >
        {/* Choose either LoadingLogo or SimpleLoadingLogo */}
        <SimpleLoadingLogo />
        
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          className="text-2xl font-bold text-text-primary mt-4"
        >
          W. Jordan Charles
        </motion.h1>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.3 }}
          className="h-0.5 w-48 bg-primary-600 mt-2"
        />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          className="text-text-secondary mt-2"
        >
          Instructional Designer
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;