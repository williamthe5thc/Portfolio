// src/hooks/useRouteLoading.ts
import { useState, useEffect } from 'react';

interface RouteStatus {
  name: string;
  loaded: boolean;
}

export const useRouteLoading = (routes: string[]) => {
  const [routeStatuses, setRouteStatuses] = useState<RouteStatus[]>(
    routes.map(route => ({ name: route, loaded: false }))
  );
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const updateRouteStatus = (routeName: string) => {
    setRouteStatuses(prev => {
      const newStatuses = prev.map(status =>
        status.name === routeName ? { ...status, loaded: true } : status
      );
      
      // Calculate new progress
      const loadedCount = newStatuses.filter(s => s.loaded).length;
      const newProgress = (loadedCount / newStatuses.length) * 100;
      setProgress(newProgress);
      
      // Check if all routes are loaded
      if (loadedCount === newStatuses.length) {
        setIsComplete(true);
      }
      
      return newStatuses;
    });
  };

  return {
    routeStatuses,
    updateRouteStatus,
    progress,
    isComplete
  };
};
