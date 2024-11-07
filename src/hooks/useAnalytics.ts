// src/hooks/useAnalytics.ts
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AnalyticsContext } from '../providers/AnalyticsProvider';

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  const location = useLocation();

  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }

  return {
    trackEvent: context.trackEvent,
    trackEngagement: context.trackEngagement,
    trackFormSubmission: context.trackFormSubmission
  };
};

export default useAnalytics;