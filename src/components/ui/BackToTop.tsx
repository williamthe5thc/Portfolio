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
 * - Smooth scroll behavior (instant with prefers-reduced-motion)
 * - Hides itself when it would cover the focused element
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

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { scrollWindowTo } from '@/hooks/useScrollManager';

export interface BackToTopProps {
  threshold?: number;
  className?: string;
}

// With a few px to spare, so a focus ring just outside the element counts too.
const overlaps = (a: DOMRect, b: DOMRect, margin = 4) =>
  a.left - margin < b.right && b.left < a.right + margin &&
  a.top - margin < b.bottom && b.top < a.bottom + margin;

export const BackToTop: React.FC<BackToTopProps> = ({
  threshold = 400,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coversFocus, setCoversFocus] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  /*
    The button is fixed over the bottom-right corner, where resume rows keep
    their links. When keyboard focus lands on something underneath it, hide
    the button (visibility only, so it keeps its box for the next check)
    until focus moves elsewhere, so the focused element is never covered.
    Programmatic focus targets (tabindex="-1", such as <main> after a route
    change or an anchored section) are containers, not controls: they would
    always "overlap" the button, so they don't count.
  */
  const checkFocus = useCallback(() => {
    const button = buttonRef.current;
    const focused = document.activeElement;
    if (
      !button ||
      !focused ||
      focused === button ||
      focused === document.body ||
      focused.getAttribute('tabindex') === '-1'
    ) {
      setCoversFocus(false);
      return;
    }
    setCoversFocus(overlaps(button.getBoundingClientRect(), focused.getBoundingClientRect()));
  }, []);

  useEffect(() => {
    document.addEventListener('focusin', checkFocus);
    window.addEventListener('scroll', checkFocus, { passive: true });
    return () => {
      document.removeEventListener('focusin', checkFocus);
      window.removeEventListener('scroll', checkFocus);
    };
  }, [checkFocus]);

  // The button can also appear on top of an element that already has focus.
  useEffect(() => {
    if (isVisible) checkFocus();
  }, [isVisible, checkFocus]);

  const scrollToTop = () => {
    // Smooth unless the visitor prefers reduced motion.
    scrollWindowTo(0, true);
    // The button disappears near the top; hand focus to the page content so
    // keyboard users are not left focused on nothing.
    document.getElementById('main-content')?.focus({ preventScroll: true });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          ref={buttonRef}
          type="button"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onAnimationComplete={checkFocus}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors z-50 ${coversFocus ? 'invisible' : ''} ${className}`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
