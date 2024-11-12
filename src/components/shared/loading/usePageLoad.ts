
// src/hooks/usePageLoad.ts
import { useState, useEffect } from 'react';

export const usePageLoad = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const handleLoad = () => {
      // Add a small delay for smoother transition
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    // Track resource loading
    Promise.all([
      // Wait for document
      new Promise(resolve => {
        if (document.readyState === 'complete') {
          resolve(true);
        } else {
          window.addEventListener('load', () => resolve(true), { once: true });
        }
      }),
      // Wait for fonts
      document.fonts.ready,
      // Add artificial minimum time for smoother UX
      new Promise(resolve => setTimeout(resolve, 1000))
    ]).then(handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return isLoading;
};