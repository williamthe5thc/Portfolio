/**
 * @file documents.ts
 * @description Links to PDF documents, opened readable on the first click
 * @module utils
 */

/** True when the URL's path (ignoring any query or fragment) ends in .pdf. */
export const isPdf = (href: string): boolean => /\.pdf$/i.test(href.split(/[?#]/)[0]);

/**
 * PDFs open fitted to the window width, with the thumbnail sidebar closed,
 * so the text is readable on the first click (review feedback: "make the
 * text on the documents bigger upon first click"). In Chrome this took the
 * needs analysis from 100% to 155%. Chrome and Edge read view/navpanes,
 * Firefox's viewer reads zoom/pagemode; each ignores the other's parameters,
 * and viewers that support none of them just open the file normally.
 */
export const PDF_OPEN_PARAMS = '#view=FitH&navpanes=0&pagemode=none&zoom=page-width';

/** Adds PDF_OPEN_PARAMS to a PDF link that has no fragment of its own. */
export const documentHref = (href: string): string =>
  isPdf(href) && !href.includes('#') ? `${href}${PDF_OPEN_PARAMS}` : href;
