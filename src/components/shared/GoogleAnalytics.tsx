/**
 * @file GoogleAnalytics.tsx
 * @description Analytics integration component for tracking page views and events
 * @module components/shared
 * 
 * Features:
 * - Automatic page view tracking
 * - Route change detection
 * - Path formatting
 * - Error handling for missing GA
 * 
 * @requires react-router-dom - For location tracking
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();
  const TRACKING_ID = 'G-LG6RT04XLW';

  useEffect(() => {
    const trackPageview = () => {
      if (!window.gtag) {
        console.warn('Google Analytics not loaded');
        return;
      }

      const formattedPath = location.pathname === '/' 
        ? '/' 
        : location.pathname;

      // Track pageview
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: formattedPath,
        send_to: TRACKING_ID
      });

      // Update configuration
      window.gtag('config', TRACKING_ID, {
        page_path: formattedPath
      });
    };

    // Track pageview with a delay to ensure everything is loaded
    const timeoutId = setTimeout(trackPageview, 100);
    return () => clearTimeout(timeoutId);
  }, [location]);

  return null;
};

export default GoogleAnalytics;