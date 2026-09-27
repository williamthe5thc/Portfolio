/**
 * @file GoogleAnalytics.tsx
 * @description The single source of GA4 page_view events
 * @module components/shared
 * 
 * Features:
 * - One page_view per route change (pathname), including the first page
 * - Virtual page URLs, so GA4 reports can tell routes apart
 * - Error handling for missing GA
 * 
 * @requires react-router-dom - For location tracking
 *
 * @notes
 * - index.html configures gtag with send_page_view: false, so its config
 *   call sends nothing and this component sends the first page view too.
 * - Nothing else may send page_view. useAnalytics used to send one from every
 *   Button instance, and this component also re-ran gtag('config'), which
 *   GA4 counts as another page view: about 10 page views per visit.
 */
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { getBaseUrl } from '@/utils/paths';

const TRACKING_ID = 'G-LG6RT04XLW';

/**
 * GA4 builds its page path from page_location and ignores the #fragment,
 * where HashRouter keeps the route, so every route reported as "/Portfolio/".
 * Send the route as a path instead (e.g. /Portfolio/portfolio/teaching-waltz).
 * The URL is only a label inside GA, not a link anyone follows.
 */
const virtualPageLocation = (pathname: string, search: string) =>
  `${window.location.origin}${getBaseUrl().replace(/\/$/, '')}${pathname}${search}`;

const GoogleAnalytics = () => {
  const location = useLocation();
  const lastSent = useRef<string | null>(null);

  useEffect(() => {
    const pageLocation = virtualPageLocation(location.pathname, location.search);
    const entry = `${location.key}:${location.pathname}`;
    let sent = false;

    const sendPageView = () => {
      if (sent) return;
      sent = true;
      // StrictMode runs effects twice in development; count a page once.
      if (lastSent.current === entry) return;
      lastSent.current = entry;
      window.gtag?.('event', 'page_view', {
        page_title: document.title,
        page_location: pageLocation,
        page_path: location.pathname,
        send_to: TRACKING_ID
      });
    };

    // Wait briefly so the new page's <SEO> has set document.title. If the
    // visitor moves on first, send now, while the title is still this page's.
    const timeoutId = window.setTimeout(sendPageView, 300);
    return () => {
      window.clearTimeout(timeoutId);
      sendPageView();
    };
    // Query changes (portfolio filters) and in-page anchors are not new pages.
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

export default GoogleAnalytics;
