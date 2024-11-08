// src/lib/animations.ts
/**
 * @file animations.ts
 * @description Centralized animation configurations using Framer Motion
 * @module lib/animations
 * 
 * This file contains reusable animation variants and configurations for consistent
 * animations throughout the application. All animations are built using Framer Motion's
 * variant system for maintainability and reusability.
 * 
 * Features:
 * - Basic transitions (fade, slide)
 * - Complex animations (modals, cards)
 * - Stagger effects
 * - Reusable animation configs
 * - Type-safe animation variants
 * 
 * Usage:
 * import { fadeIn, slideIn, cardHover } from '@/lib/animations';
 * 
 * <motion.div variants={fadeIn}>...</motion.div>
 */

import { Variants } from 'framer-motion';

// Base configuration for consistent animations
export interface AnimationConfig {
  duration: number;
  ease: [number, number, number, number];
}

export const defaultConfig: AnimationConfig = {
  duration: 0.3,
  ease: [0.43, 0.13, 0.23, 0.96]
};

// Fade Animations
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { ...defaultConfig }
};

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { ...defaultConfig }
};

// Slide Animations
export const slideIn: Record<'left' | 'right', Variants> = {
  left: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
    transition: { ...defaultConfig }
  },
  right: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { ...defaultConfig }
  }
};

// Container Animations
export const staggerContainer: Variants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// Interactive Animations
export const cardHover: Variants = {
  initial: { scale: 1 },
  whileHover: { 
    scale: 1.02,
    transition: { duration: 0.2 }
  },
  whileTap: { scale: 0.98 }
};

// Modal Animations
export const modalVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9,
    transition: { duration: 0.2 }
  }
};

export const modalContent: Variants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 }
};

export const modalBackdrop: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 0.5 },
  exit: { opacity: 0 }
};

// List Item Animations
export const listItem: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
  transition: { ...defaultConfig }
};

/**
 * Helper function for creating staggered animation delays
 * @param index Index of the item in a list
 * @param baseDelay Base delay between items (default: 0.1)
 * @returns Object containing transition delay
 */
export const getStaggerDelay = (index: number, baseDelay: number = 0.1): { transition: { delay: number } } => ({
  transition: { delay: index * baseDelay }
});