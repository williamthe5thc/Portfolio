// src/components/shared/animations.ts
import { TargetAndTransition, Variants } from 'framer-motion';

interface StaggerDelay {
  transition: {
    delay: number;
  };
}

// Basic fade animations
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

// ... (keeping other animations with proper types)

export const getStaggerDelay = (index: number, baseDelay: number = 0.1): StaggerDelay => ({
  transition: { delay: index * baseDelay }
});