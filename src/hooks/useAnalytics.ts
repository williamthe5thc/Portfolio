// src/hooks/useAnalytics.ts
/**
 * @file useAnalytics.ts
 * @description Custom hook for Google Analytics tracking
 * @module hooks
 * 
 * Features:
 * - Automatic page view tracking
 * - Event tracking
 * - User engagement tracking
 * - Form submission tracking
 * - Error reporting
 * 
 * @example
 * ```tsx
 * // Basic usage
 * const { trackEvent, trackEngagement } = useAnalytics();
 * 
 * // Track custom event
 * trackEvent('button_click', { 
 *   button_id: 'submit',
 *   page_location: '/contact' 
 * });
 * 
 * // Track form submission
 * trackFormSubmission('contact_form', 'success');
 * ```
 */
import { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID;

// Type definition for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const isGtagLoaded = () => {
  return typeof window.gtag !== 'undefined';
};

const safeGtag = (...args: any[]) => {
  if (isGtagLoaded()) {
    window.gtag?.(...args);
  } else {
    console.debug('Google Analytics not loaded yet', ...args);
  }
};

export const useAnalytics = () => {
  const location = useLocation();

  // Track page views
  useEffect(() => {
    const trackPageview = () => {
      try {
        safeGtag('event', 'page_view', {
          page_path: location.pathname + location.search + location.hash,
          page_title: document.title,
        });
      } catch (error) {
        console.debug('Error tracking pageview:', error);
      }
    };

    trackPageview();
  }, [location]);

  // Track events
  const trackEvent = useCallback((
    eventName: string,
    eventParams?: Record<string, any>
  ) => {
    try {
      safeGtag('event', eventName, eventParams);
    } catch (error) {
      console.debug('Error tracking event:', error);
    }
  }, []);

  // Track user engagement
  const trackEngagement = useCallback((
    elementId: string,
    elementType: string,
    action: string,
    additionalParams?: Record<string, any>
  ) => {
    try {
      safeGtag('event', 'user_engagement', {
        element_id: elementId,
        element_type: elementType,
        action: action,
        page_path: location.pathname + location.search + location.hash,
        ...additionalParams,
      });
    } catch (error) {
      console.debug('Error tracking engagement:', error);
    }
  }, [location]);

  // Track form submissions
  const trackFormSubmission = useCallback((
    formName: string,
    status: 'success' | 'error',
    errorMessage?: string
  ) => {
    try {
      safeGtag('event', 'form_submission', {
        form_name: formName,
        status: status,
        error_message: errorMessage,
      });
    } catch (error) {
      console.debug('Error tracking form submission:', error);
    }
  }, []);

  return {
    trackEvent,
    trackEngagement,
    trackFormSubmission,
  };
};