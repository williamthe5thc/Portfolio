// src/hooks/usePageLoad.ts
import { useEffect } from 'react';
import { useLoading } from '../contexts/LoadingContext';

export const usePageLoad = (minimumLoadTime = 2000) => {
  const { setIsLoading, setProgress } = useLoading();

  useEffect(() => {
    let startTime = Date.now();
    let progressInterval: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;

    const simulateProgress = () => {
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 99) return 99;
          const remaining = 100 - prev;
          const increment = remaining * 0.1;
          return Math.min(prev + increment, 99);
        });
      }, 100);
    };

    const completeLoading = () => {
      const elapsed = Date.now() - startTime;
      const remainingTime = Math.max(0, minimumLoadTime - elapsed);

      timeoutId = setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }, remainingTime);
    };

    simulateProgress();
    completeLoading();

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timeoutId);
    };
  }, [setIsLoading, setProgress, minimumLoadTime]);
};