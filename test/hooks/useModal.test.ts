//tests/hooks/useModal.test.ts


import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useModal } from '@/hooks/useModal';

describe('useModal', () => {
  describe('Initial State', () => {
    it('starts with modal closed', () => {
      const { result } = renderHook(() => useModal());
      expect(result.current.isOpen).toBe(false);
    });
  });

  describe('Open/Close Actions', () => {
    it('opens modal', () => {
      const { result } = renderHook(() => useModal());
      
      act(() => {
        result.current.open();
      });
      
      expect(result.current.isOpen).toBe(true);
    });

    it('closes modal', () => {
      const { result } = renderHook(() => useModal());
      
      act(() => {
        result.current.open();
      });
      
      act(() => {
        result.current.close();
      });
      
      expect(result.current.isOpen).toBe(false);
    });

    it('toggles modal state', () => {
      const { result } = renderHook(() => useModal());
      
      act(() => {
        result.current.toggle();
      });
      expect(result.current.isOpen).toBe(true);
      
      act(() => {
        result.current.toggle();
      });
      expect(result.current.isOpen).toBe(false);
    });
  });

  describe('Performance', () => {
    it('memoizes action functions', () => {
      const { result, rerender } = renderHook(() => useModal());
      
      const initialOpen = result.current.open;
      const initialClose = result.current.close;
      const initialToggle = result.current.toggle;
      
      rerender();
      
      expect(result.current.open).toBe(initialOpen);
      expect(result.current.close).toBe(initialClose);
      expect(result.current.toggle).toBe(initialToggle);
    });
  });

  describe('Multiple Modals', () => {
    it('maintains separate states for multiple instances', () => {
      const { result: modal1 } = renderHook(() => useModal());
      const { result: modal2 } = renderHook(() => useModal());
      
      act(() => {
        modal1.current.open();
      });
      
      expect(modal1.current.isOpen).toBe(true);
      expect(modal2.current.isOpen).toBe(false);
    });
  });

  describe('Edge Cases', () => {
    it('handles rapid open/close toggles', () => {
      const { result } = renderHook(() => useModal());
      
      act(() => {
        result.current.toggle();
        result.current.toggle();
        result.current.toggle();
      });
      
      expect(result.current.isOpen).toBe(true);
    });

    it('handles multiple opens when already open', () => {
      const { result } = renderHook(() => useModal());
      
      act(() => {
        result.current.open();
        result.current.open();
        result.current.open();
      });
      
      expect(result.current.isOpen).toBe(true);
    });

    it('handles multiple closes when already closed', () => {
      const { result } = renderHook(() => useModal());
      
      act(() => {
        result.current.close();
        result.current.close();
        result.close();
      });
      
      expect(result.current.isOpen).toBe(false);
    });
  });

  describe('State Changes', () => {
    it('maintains consistent state through actions', () => {
      const { result } = renderHook(() => useModal());
      const actions = [
        { action: 'open', expected: true },
        { action: 'close', expected: false },
        { action: 'toggle', expected: true },
        { action: 'toggle', expected: false },
        { action: 'open', expected: true },
      ];
      
      actions.forEach(({ action, expected }) => {
        act(() => {
          result.current[action as keyof typeof result.current]();
        });
        expect(result.current.isOpen).toBe(expected);
      });
    });
  });
});