//tests/hooks/useAnimationPresence.test.ts

import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useAnimationPresence } from '@/hooks/useAnimationPresence';

describe('useAnimationPresence', () => {
  // Mock timers for animation durations
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe('Initial State', () => {
    it('starts with isPresent true', () => {
      const { result } = renderHook(() => useAnimationPresence());
      expect(result.current.isPresent).toBe(true);
    });
  });

  describe('Safe Unmount', () => {
    it('executes callback after animation duration', () => {
      const callback = vi.fn();
      const { result } = renderHook(() => useAnimationPresence());

      act(() => {
        result.current.safeUnmount(callback);
      });

      expect(result.current.isPresent).toBe(false);
      expect(callback).not.toHaveBeenCalled();

      // Fast-forward animation duration
      act(() => {
        vi.advanceTimersByTime(300);
      });

      expect(callback).toHaveBeenCalledTimes(1);
    });

    it('handles multiple unmount calls', () => {
      const callback1 = vi.fn();
      const callback2 = vi.fn();
      const { result } = renderHook(() => useAnimationPresence());

      act(() => {
        result.current.safeUnmount(callback1);
      });

      act(() => {
        result.current.safeUnmount(callback2);
      });

      act(() => {
        vi.advanceTimersByTime(300);
      });

      // Only the last callback should be executed
      expect(callback1).not.toHaveBeenCalled();
      expect(callback2).toHaveBeenCalledTimes(1);
    });
  });

  describe('Animation States', () => {
    it('handles animation states correctly', () => {
      const { result } = renderHook(() => useAnimationPresence());
      const callback = vi.fn();

      // Test enter state
      expect(result.current.isPresent).toBe(true);

      // Test exit state
      act(() => {
        result.current.safeUnmount(callback);
      });
      expect(result.current.isPresent).toBe(false);

      // Test completion
      act(() => {
        vi.advanceTimersByTime(300);
      });
      expect(callback).toHaveBeenCalled();
    });
  });

  describe('Cleanup', () => {
    it('cleans up timeouts on unmount', () => {
      const { result, unmount } = renderHook(() => useAnimationPresence());
      const callback = vi.fn();

      act(() => {
        result.current.safeUnmount(callback);
      });

      unmount();

      act(() => {
        vi.advanceTimersByTime(300);
      });

      // Callback should not be called after unmount
      expect(callback).not.toHaveBeenCalled();
    });
  });

  describe('Edge Cases', () => {
    it('handles null callback', () => {
      const { result } = renderHook(() => useAnimationPresence());

      act(() => {
        // @ts-ignore - Testing invalid input
        result.current.safeUnmount(null);
      });

      expect(result.current.isPresent).toBe(false);
      
      act(() => {
        vi.advanceTimersByTime(300);
      });
      // Should not throw
    });

    it('handles rapid mount/unmount cycles', () => {
      const callback = vi.fn();
      const { result, rerender } = renderHook(() => useAnimationPresence());

      act(() => {
        result.current.safeUnmount(callback);
      });

      rerender();

      act(() => {
        vi.advanceTimersByTime(150); // Half animation duration
      });

      rerender();

      act(() => {
        vi.advanceTimersByTime(300);
      });

      // Callback should still only be called once
      expect(callback).toHaveBeenCalledTimes(1);
    });
  });

  describe('Performance', () => {
    it('memoizes safeUnmount function', () => {
      const { result, rerender } = renderHook(() => useAnimationPresence());
      const initialSafeUnmount = result.current.safeUnmount;

      rerender();

      expect(result.current.safeUnmount).toBe(initialSafeUnmount);
    });
  });
});