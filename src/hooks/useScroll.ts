// src/hooks/useScroll.ts
import { useState, useEffect, useCallback } from 'react';

interface ScrollState {
  y: number;
  direction: 'up' | 'down' | null;
  isAtTop: boolean;
  isAtBottom: boolean;
  progress: number;
}

export const useScroll = (threshold = 50) => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    y: 0,
    direction: null,
    isAtTop: true,
    isAtBottom: false,
    progress: 0,
  });

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (currentY / maxScroll) * 100;

    setScrollState(prev => ({
      y: currentY,
      direction: currentY > prev.y ? 'down' : 'up',
      isAtTop: currentY < threshold,
      isAtBottom: Math.abs(maxScroll - currentY) < threshold,
      progress: progress
    }));
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return scrollState;
};

