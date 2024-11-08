// src/hooks/useAnimationPresence.ts
import { useState, useCallback } from 'react';

interface UseAnimationPresenceReturn {
  isPresent: boolean;
  safeUnmount: (callback: () => void) => void;
}

export const useAnimationPresence = (): UseAnimationPresenceReturn => {
  const [isPresent, setIsPresent] = useState(true);

  const safeUnmount = useCallback((callback: () => void) => {
    setIsPresent(false);
    setTimeout(callback, 300); // Match this with your animation duration
  }, []);

  return { isPresent, safeUnmount };
};