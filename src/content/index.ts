// src/content/index.ts
/**
 * @file index.ts
 * @description Central export point for all content and configuration data.
 * Organizes and re-exports content from individual domain files.
 */

// Site Configuration
export { siteConfig } from './siteData';

// Content Data
export { stats, projectCategories } from './info';
export { competencies } from './competencies';
export { education } from './education';
export { experience } from './experience';
export { projects, type ProjectId } from './projects';
export { faqs } from './faqs';