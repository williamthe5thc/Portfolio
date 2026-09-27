// src/hooks/useScrollManager.ts
/**
 * @file useScrollManager.ts
 * @description The one place that decides where the window scrolls on navigation
 * @module hooks
 *
 * Rules, applied on every location change:
 * - URL has a hash (#/about#design-process -> location.hash "#design-process"):
 *   scroll to the element with that id, retrying while lazy content mounts.
 * - Back/forward (POP): restore the position the visitor left that entry at.
 * - PUSH/REPLACE to a different page: jump to the top.
 * - Same page, only the query changed (portfolio filters use
 *   setSearchParams with replace): leave the scroll position alone.
 *
 * Pages must not scroll the window on mount themselves. Before this existed,
 * only the pages wrapped in RouteTransition reset scroll, so a project opened
 * from far down a resume page kept the resume's scroll offset and landed in
 * the middle of the case study.
 */
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const RETRY_MS = 1500;
const STORAGE_KEY = 'scroll-positions';

export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Scroll the window. 'instant' is explicit because the stylesheet sets
 * `scroll-behavior: smooth` on html, which a plain scrollTo(0, 0) would
 * inherit and turn every page change into a long animated scroll.
 */
export const scrollWindowTo = (top: number, smooth = false) => {
  window.scrollTo({
    top,
    left: 0,
    behavior: smooth && !prefersReducedMotion() ? 'smooth' : 'instant'
  });
};

/**
 * Gap to leave above an anchored element: clear of the sticky site header,
 * or the element's own scroll-margin-top (e.g. scroll-mt-24) if larger.
 */
const topOffset = (element: Element): number => {
  const header = document.getElementById('site-header');
  const headerSpace = (header?.getBoundingClientRect().height ?? 0) + 16;
  const scrollMargin = parseFloat(getComputedStyle(element).scrollMarginTop) || 0;
  return Math.max(headerSpace, scrollMargin);
};

/**
 * Document position from offsetTop, which ignores CSS transforms. The page is
 * usually still sliding in (translateY) when this runs, and a
 * getBoundingClientRect() reading would be off by the remaining slide.
 */
const documentTop = (element: Element): number => {
  if (!(element instanceof HTMLElement)) {
    return element.getBoundingClientRect().top + window.scrollY;
  }
  let top = 0;
  let node: HTMLElement | null = element;
  while (node) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return top;
};

/** Scroll so the element sits just below the sticky header. */
export const scrollToElement = (element: Element, smooth = true) => {
  const top = documentTop(element) - topOffset(element);
  scrollWindowTo(Math.max(0, top), smooth);
};

const loadPositions = (): Record<string, number> => {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
};

const savePositions = (positions: Record<string, number>) => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  } catch {
    // Private mode or storage full: restoration just falls back to the top.
  }
};

/**
 * Repeats `attempt` every animation frame until it returns true, RETRY_MS
 * passes, or the visitor starts scrolling themselves. Returns a cancel function.
 */
const retryUntil = (attempt: () => boolean): (() => void) => {
  const userEvents = ['wheel', 'touchstart', 'keydown', 'mousedown'] as const;
  const started = performance.now();
  let frame = 0;
  let cancelled = false;
  const stop = () => {
    cancelled = true;
    cancelAnimationFrame(frame);
    userEvents.forEach(type => window.removeEventListener(type, stop));
  };
  userEvents.forEach(type => window.addEventListener(type, stop, { passive: true }));

  const tick = () => {
    if (cancelled) return;
    if (attempt() || performance.now() - started > RETRY_MS) {
      stop();
      return;
    }
    frame = requestAnimationFrame(tick);
  };
  tick();
  return stop;
};

export const useScrollManager = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const previous = useRef<{ pathname: string; search: string } | null>(null);
  const positions = useRef<Record<string, number>>(loadPositions());
  // Which history entry scroll events belong to. Switched in the layout
  // effect below, i.e. after the DOM has changed but before the browser can
  // dispatch another scroll event, so the scroll caused by swapping pages
  // (or by scrolling the new page to the top) is never recorded against the
  // entry being left.
  const currentKey = useRef(location.key);

  useEffect(() => {
    // The browser's own restoration runs before React has rendered the page
    // being returned to, so it restores against the wrong document height.
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const record = () => {
      positions.current[currentKey.current] = window.scrollY;
    };
    const persist = () => savePositions(positions.current);
    window.addEventListener('scroll', record, { passive: true });
    window.addEventListener('pagehide', persist);
    return () => {
      window.removeEventListener('scroll', record);
      window.removeEventListener('pagehide', persist);
    };
  }, []);

  useLayoutEffect(() => {
    const prev = previous.current;
    previous.current = { pathname: location.pathname, search: location.search };
    currentKey.current = location.key;
    savePositions(positions.current);

    if (location.hash) {
      let id = location.hash.slice(1);
      try {
        id = decodeURIComponent(id);
      } catch {
        // Malformed escape: look the id up as written.
      }
      // Start the new page at the top, so a missing target never leaves the
      // visitor at the previous page's offset.
      if (navigationType !== 'POP' && prev !== null && prev.pathname !== location.pathname) {
        scrollWindowTo(0);
      }
      return retryUntil(() => {
        const target = document.getElementById(id);
        if (!target) return false;
        scrollToElement(target);
        // Move keyboard focus with the view, so Tab continues from the
        // section rather than from the link that was activated. Not on a
        // fresh load, where focus should start at the top of the document.
        if (prev !== null) {
          if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
          (target as HTMLElement).focus({ preventScroll: true });
        }
        return true;
      });
    }

    if (navigationType === 'POP') {
      const saved = positions.current[location.key];
      if (saved === undefined) return;
      return retryUntil(() => {
        scrollWindowTo(saved);
        return Math.abs(window.scrollY - saved) < 2;
      });
    }

    const onlyQueryChanged =
      prev !== null && prev.pathname === location.pathname && prev.search !== location.search;
    if (!onlyQueryChanged) {
      scrollWindowTo(0);
    }
    // pathname/search/hash as well as key: an edited URL or a plain
    // href="#/..." link arrives with no history state, so every such entry
    // shares the key "default" and a key-only dependency would miss it.
  }, [location.key, location.pathname, location.search, location.hash]); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useScrollManager;
