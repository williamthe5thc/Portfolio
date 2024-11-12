// src/content/index.ts
/**
 * @file index.ts
 * @description Central export point for all content and configuration
 * @module content
 * 
 * Exports:
 * - Site configuration
 * - Professional data (experience, education, competencies)
 * - Project data
 * - Content types
 * 
 * Features:
 * - Centralized content management
 * - Type-safe exports
 * - Organized content categories
 * 
 * @example
 * ```tsx
 * import { 
 *   siteConfig, 
 *   projects, 
 *   experience,
 *   education 
 * } from '@/content';
 * 
 * // Access configuration
 * const { title, author } = siteConfig;
 * 
 * // Use professional data
 * const { degrees, certifications } = education;
 * ```
 * 
 * @notes
 * - All exports are named for better tree-shaking
 * - Maintain alphabetical ordering for easy lookup
 * - Keep types in sync with implementation
 */
// Site configuration and metadata
export { siteConfig } from './siteData';  
export { stats, projectCategories } from './info';

// Professional content
export { competencies } from './competencies';
export { education } from './education';
export { experience } from './experience';

// Project data
export { projects, type ProjectId } from './projects';

// Support content
export { faqs } from './faqs';

//methodlogy content
export {methodology} from './methodology';

//Quick links in the home page
export { quickLinks } from './navigation';
