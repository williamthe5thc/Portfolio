// src/components/ui/BaseCard.jsx
import React from 'react';
import { motion } from 'framer-motion';

const BaseCard = ({ 
  children, 
  className = '', 
  animate = true,
  hover = true,
  ...props 
}) => {
  const baseClass = 'bg-white rounded-xl shadow-lg overflow-hidden p-6';
  const hoverAnimation = hover ? {
    whileHover: { y: -5, transition: { duration: 0.2 } },
    whileTap: { y: 0 }
  } : {};

  if (!animate) {
    return (
      <div className={`${baseClass} ${className}`} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`${baseClass} ${className}`}
      {...hoverAnimation}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Use named export instead of default export
export { BaseCard };