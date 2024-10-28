// src/components/shared/LoadingScreen.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { LoadingSpinner } from '../ui/components';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background-light flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <LoadingSpinner 
          size="xl" 
          className="mx-auto mb-4"
        />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-text-primary"
        >
          W. Jordan Charles
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-text-secondary"
        >
          Loading portfolio...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;