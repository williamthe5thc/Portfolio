// src/hooks/useModal.ts
/**
 * @file useModal.ts - Modal state management hook
 * @module hooks
 * @description Custom hook for managing modal state and providing
 * consistent modal control methods.
 * 
 * Features:
 * - Open/close state management
 * - Toggle functionality
 * - Memoized handlers
 */
import { useState, useCallback } from 'react';

interface UseModalReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

export const useModal = (): UseModalReturn => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  return {
    isOpen,
    open,
    close,
    toggle
  };
};