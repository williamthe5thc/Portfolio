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
