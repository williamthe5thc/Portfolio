// src/hooks/useIntersectionObserver.ts
import { useState, useEffect, useCallback } from 'react';

export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
): [(element: Element | null) => void, boolean] => {
  const [ref, setRef] = useState<Element | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      setIsVisible(entry.isIntersecting);
    },
    []
  );

  useEffect(() => {
    if (ref) {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(ref);
      return () => observer.disconnect();
    }
  }, [ref, options, callback]);

  return [setRef, isVisible];
};