import { onCLS, onFID, onLCP, onTTFB } from 'web-vitals';

export function reportWebVitals(metric: any) {
  console.log(metric);
  // Send to analytics
  if (window.gtag) {
    window.gtag('event', metric.name, {
      value: metric.value,
      event_category: 'Web Vitals'
    });
  }
}

export function initWebVitals() {
  onCLS(reportWebVitals);
  onFID(reportWebVitals);
  onLCP(reportWebVitals);
  onTTFB(reportWebVitals);
}
