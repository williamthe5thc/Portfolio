// src/components/layout/RouteTransition.tsx
import React from 'react';

interface RouteTransitionProps {
  children: React.ReactNode;
}

/*
  Kept so existing page wrappers keep compiling, but it no longer does
  anything. It used to scroll to the top on mount, which only the pages
  wrapped in it got (project and resume pages kept the previous page's
  offset), and it fought browser Back by jumping to the top. Scrolling now
  happens in one place for every route: useScrollManager, called from App.
  Its fade was removed earlier because it stacked with PageTransition.
*/
export const RouteTransition: React.FC<RouteTransitionProps> = ({ children }) => <>{children}</>;
