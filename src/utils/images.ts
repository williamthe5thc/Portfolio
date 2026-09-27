/**
 * @file images.ts
 * @description Loading hints for <img> elements
 * @module utils
 */
import type { ImgHTMLAttributes } from 'react';

/**
 * How the browser should fetch an image.
 *
 * - priority: the page's first visible image (the LCP candidate). Loaded
 *   eagerly at high fetch priority, so it does not queue behind the others.
 * - otherwise: lazy, so images below the fold are fetched only as the
 *   visitor scrolls near them instead of competing with the first one.
 *
 * React 18 does not know the fetchPriority prop and warns about it, so the
 * lowercase HTML attribute is passed straight through instead.
 */
export const imageLoading = (priority = false): ImgHTMLAttributes<HTMLImageElement> =>
  ({
    loading: priority ? 'eager' : 'lazy',
    decoding: 'async',
    ...(priority ? { fetchpriority: 'high' } : {})
  }) as ImgHTMLAttributes<HTMLImageElement>;
