// src/components/shared/LoadingScreen.tsx
/**
 * @file LoadingScreen.tsx
 * @description Animated loading screen component with branding
 * @module components/shared
 * 
 * @requires framer-motion - For loading animations
 * @requires @/content - For site branding configuration
 * 
 * Features:
 * - Animated logo
 * - Branded content display
 * - Smooth transitions
 * - Responsive design
 * - Configurable animation duration
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <LoadingScreen />
 * 
 * // Without branding
 * <LoadingScreen showBranding={false} />
 * 
 * // With custom animation duration
 * <LoadingScreen animationDuration={0.8} />
 * ```
 * 
 * @notes
 * - Keep animation duration under 1s for optimal UX
 * - Consider reducing motion for users with vestibular disorders
 */

import React from 'react';
import { motion, SVGMotionProps, HTMLMotionProps } from 'framer-motion';
import { siteConfig } from '@/content/';

interface LoadingLogoProps extends SVGMotionProps<SVGSVGElement> {
  animationDuration?: number;
}

interface LoadingScreenProps extends HTMLMotionProps<'div'> {
  showBranding?: boolean;
}

const LoadingLogo: React.FC<LoadingLogoProps> = ({ 
  animationDuration = 0.6,
  ...props 
}) => {
  return (
    <motion.svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      initial="start"
      animate="end"
      {...props}
    >
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

const SimpleLoadingLogo: React.FC = () => {
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

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  showBranding = true,
  ...props 
}) => {
  return (
    <div 
      className="fixed inset-0 bg-background-light flex flex-col items-center justify-center"
      {...props}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center"
      >
        <SimpleLoadingLogo />
        
        {showBranding && (
          <>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="text-2xl font-bold text-text-primary mt-4"
            >
              {siteConfig.author}
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
              {siteConfig.description}
            </motion.p>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default LoadingScreen;