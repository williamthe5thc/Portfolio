// src/components/shared/ScrollReveal.tsx
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: React.ReactNode;
  threshold?: number;
  animation?: 'fade' | 'slide' | 'scale';
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  threshold = 0.1,
  animation = 'fade' 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const variants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slide: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      variants={variants[animation]}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

// Example usage in a component:
const ExampleUsage = () => {
  const { direction, progress, isAtBottom } = useScroll();

  return (
    <>
      <ScrollProgress />
      
      <ScrollReveal animation="slide">
        <h1>This will slide up when scrolled into view</h1>
      </ScrollReveal>

      <ScrollReveal animation="fade">
        <p>This will fade in when scrolled into view</p>
      </ScrollReveal>

      <ScrollToTopButton />

      {/* Progress indicator */}
      <div className="fixed bottom-4 left-4">
        Scroll Progress: {Math.round(progress)}%
      </div>
    </>
  );
};