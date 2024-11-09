// src/components/ui/BackToTop.tsx
/**
 * @file BackToTop.tsx
 * @description Animated scroll-to-top button component
 * @module components/ui
 * 
 * @requires framer-motion - For appear/disappear animations
 * @requires lucide-react - For arrow icon
 * 
 * Features:
 * - Show/hide based on scroll position
 * - Smooth scroll behavior
 * - Animated transitions
 * - Customizable threshold
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <BackToTop />
 * 
 * // Custom threshold
 * <BackToTop threshold={600} />
 * 
 * // With custom styling
 * <BackToTop className="custom-button" />
 * ```
 * 
 * @accessibility
 * - Keyboard accessible
 * - ARIA label
 * - Focus visible styles
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export interface BackToTopProps {
  threshold?: number;
  className?: string;
}

export const BackToTop: React.FC<BackToTopProps> = ({
  threshold = 400,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors z-50 ${className}`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};