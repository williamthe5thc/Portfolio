// src/hooks/useAnimationPresence.ts
/**
 * @file useAnimationPresence.ts - Animation presence hook
 * @module hooks
 * @description Custom hook for managing animation presence states
 * and safe unmounting of animated components.
 * 
 * Features:
 * - Presence state management
 * - Safe unmounting
 * - Animation timing coordination
 */
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