// src/components/shared/loading/LoadingDots.tsx
import React from 'react';
import { motion } from 'framer-motion';

const LoadingDots = () => {
  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.2,
            repeatType: "reverse"
          }}
        >
          .
        </motion.span>
      ))}
    </div>
  );
};

export default LoadingDots;
