/**
 * @file paths.ts
 * @description Path utilities for handling base URL in different environments
 * @module utils
 */

/**
 * Get the base URL for the application (vite.config.ts `base`)
 * In production: /Portfolio/
 * In staging: /Portfolio-Staging/
 * In development: /
 */
export const getBaseUrl = (): string => {
  return import.meta.env.BASE_URL || '/';
};

/**
 * Convert a relative image path to an absolute path with correct base URL
 * @param path - Image path starting with /images/...
 * @returns Full path including base URL
 * 
 * @example
 * // In production
 * getImagePath('/images/logo.png') // => '/Portfolio/images/logo.png'
 *
 * // In staging
 * getImagePath('/images/logo.png') // => '/Portfolio-Staging/images/logo.png'
 * 
 * // In dev
 * getImagePath('/images/logo.png') // => '/images/logo.png'
 */
export const getImagePath = (path: string): string => {
  const baseUrl = getBaseUrl();
  
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Ensure baseUrl ends with /
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  
  return `${normalizedBase}${cleanPath}`;
};

/**
 * Get asset path (for any public asset, not just images)
 */
export const getAssetPath = (path: string): string => {
  return getImagePath(path);
};

/**
 * An in-app route in the form every page URL takes: with a trailing slash.
 * Each page is built as <route>/index.html, which GitHub Pages serves at
 * "/Portfolio/about/" and reaches from "/Portfolio/about" only by a redirect,
 * so links, canonical URLs and the sitemap all use the slash form. The router
 * matches both.
 *
 * @example
 * routePath('/about')                  // => '/about/'
 * routePath('/about#design-process')   // => '/about/#design-process'
 * routePath('/portfolio?category=id')  // => '/portfolio/?category=id'
 * routePath('/')                       // => '/'
 */
export const routePath = (to: string): string => {
  const [, path, rest] = /^([^?#]*)(.*)$/s.exec(to) ?? ['', to, ''];
  // Leave alone: bare "?x"/"#x", paths that already end in "/", and files.
  if (!path || path.endsWith('/') || /\.[a-z0-9]+$/i.test(path)) return to;
  return `${path}/${rest}`;
};

/** True when two router paths name the same page, with or without the slash. */
export const isSamePath = (a: string, b: string): boolean =>
  a.replace(/\/+$/, '') === b.replace(/\/+$/, '');
