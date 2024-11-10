//tests/hooks/useIntersectionObserver.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

describe('useIntersectionObserver', () => {
  let mockObserverInstance: {
    observe: vi.Mock;
    unobserve: vi.Mock;
    disconnect: vi.Mock;
  };

  beforeEach(() => {
    mockObserverInstance = {
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    };

    // Reset the mock implementation for each test
    (global.IntersectionObserver as jest.Mock).mockImplementation((callback) => {
      return mockObserverInstance;
    });
  });

  describe('Hook Initialization', () => {
    it('returns setRef function and initial visibility state', () => {
      const { result } = renderHook(() => useIntersectionObserver());
      
      const [setRef, isVisible] = result.current;
      expect(typeof setRef).toBe('function');
      expect(isVisible).toBe(false);
    });

    it('accepts custom options', () => {
      const options = { threshold: 0.5, rootMargin: '10px' };
      renderHook(() => useIntersectionObserver(options));
      
      expect(IntersectionObserver).toHaveBeenCalledWith(
        expect.any(Function),
        options
      );
    });
  });

  describe('Reference Setting', () => {
    it('observes element when ref is set', () => {
      const { result } = renderHook(() => useIntersectionObserver());
      const [setRef] = result.current;
      
      const element = document.createElement('div');
      setRef(element);
      
      expect(mockObserverInstance.observe).toHaveBeenCalledWith(element);
    });

    it('does not observe when ref is null', () => {
      const { result } = renderHook(() => useIntersectionObserver());
      const [setRef] = result.current;
      
      setRef(null);
      
      expect(mockObserverInstance.observe).not.toHaveBeenCalled();
    });
  });

  describe('Visibility Updates', () => {
    it('updates visibility state when intersection changes', () => {
      let intersectionCallback: IntersectionObserverCallback;
      
      (global.IntersectionObserver as jest.Mock).mockImplementation((callback) => {
        intersectionCallback = callback;
        return mockObserverInstance;
      });

      const { result } = renderHook(() => useIntersectionObserver());
      const [setRef] = result.current;
      
      const element = document.createElement('div');
      setRef(element);

      // Simulate intersection
      intersectionCallback([
        { isIntersecting: true, target: element } as IntersectionObserverEntry
      ], {} as IntersectionObserver);
      
      expect(result.current[1]).toBe(true);

      // Simulate exit
      intersectionCallback([
        { isIntersecting: false, target: element } as IntersectionObserverEntry
      ], {} as IntersectionObserver);
      
      expect(result.current[1]).toBe(false);
    });
  });

  describe('Cleanup', () => {
    it('disconnects observer on unmount', () => {
      const { unmount } = renderHook(() => useIntersectionObserver());
      
      unmount();
      
      expect(mockObserverInstance.disconnect).toHaveBeenCalled();
    });

    it('unobserves previous element when ref changes', () => {
      const { result } = renderHook(() => useIntersectionObserver());
      const [setRef] = result.current;
      
      const element1 = document.createElement('div');
      const element2 = document.createElement('div');
      
      setRef(element1);
      setRef(element2);
      
      expect(mockObserverInstance.unobserve).toHaveBeenCalledWith(element1);
      expect(mockObserverInstance.observe).toHaveBeenCalledWith(element2);
    });
  });

  describe('Performance', () => {
    it('memoizes the callback function', () => {
      const { result, rerender } = renderHook(() => useIntersectionObserver());
      const [initialSetRef] = result.current;
      
      rerender();
      const [newSetRef] = result.current;
      
      expect(initialSetRef).toBe(newSetRef);
    });
  });

  describe('Error Handling', () => {
    it('handles observer creation failure gracefully', () => {
      const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {});
      (global.IntersectionObserver as jest.Mock).mockImplementation(() => {
        throw new Error('Observer creation failed');
      });

      const { result } = renderHook(() => useIntersectionObserver());
      const [setRef] = result.current;
      
      expect(() => setRef(document.createElement('div'))).not.toThrow();
      expect(consoleError).toHaveBeenCalled();
      
      consoleError.mockRestore();
    });
  });
});