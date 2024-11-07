// src/providers/AnalyticsProvider.tsx
import React, { createContext, useContext, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface AnalyticsContextType {
  trackEvent: (eventName: string, eventParams?: Record<string, any>) => void;
  trackEngagement: (elementId: string, elementType: string, action: string, additionalParams?: Record<string, any>) => void;
  trackFormSubmission: (formName: string, status: 'success' | 'error', errorMessage?: string) => void;
}

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const location = useLocation();

  const trackEvent = useCallback((
    eventName: string,
    eventParams?: Record<string, any>
  ) => {
    try {
      if (window.gtag) {
        window.gtag('event', eventName, eventParams);
      }
    } catch (error) {
      console.debug('Error tracking event:', error);
    }
  }, []);

  const trackEngagement = useCallback((
    elementId: string,
    elementType: string,
    action: string,
    additionalParams?: Record<string, any>
  ) => {
    try {
      if (window.gtag) {
        window.gtag('event', 'user_engagement', {
          element_id: elementId,
          element_type: elementType,
          action: action,
          page_path: location.pathname,
          ...additionalParams,
        });
      }
    } catch (error) {
      console.debug('Error tracking engagement:', error);
    }
  }, [location]);

  const trackFormSubmission = useCallback((
    formName: string,
    status: 'success' | 'error',
    errorMessage?: string
  ) => {
    try {
      if (window.gtag) {
        window.gtag('event', 'form_submission', {
          form_name: formName,
          status: status,
          error_message: errorMessage,
        });
      }
    } catch (error) {
      console.debug('Error tracking form submission:', error);
    }
  }, []);

  const value = {
    trackEvent,
    trackEngagement,
    trackFormSubmission,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};