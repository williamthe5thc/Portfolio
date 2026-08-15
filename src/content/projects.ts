// src/content/projects.ts
/**
 * @file projects.ts
 * @description Curated 6-project instructional design portfolio
 * @module content
 *
 * Sizing rationale (see ./projects/archived/README.md):
 * ID hiring managers review 3-6 projects and judge by the best piece, not the
 * total. A curated set outperforms a catalog, so everything else lives in
 * archived/ rather than shipping.
 *
 * Ordering is deliberate:
 * - CATEGORY 1 (Lead): Instructional Design - pure ID work, flagship first
 * - CATEGORY 2: Learning Technology - ID + technical skills combined
 * - CATEGORY 3: Technical Projects - pure coding demonstrations
 */

import { ProjectBase } from '@/types/content';

// ========================================
// CATEGORY 1: INSTRUCTIONAL DESIGN
// ========================================
import chartwayFicepEnhanced from './projects/chartway-ficep-enhanced';
import professionalCommunicationTraining from './projects/professional-communication-training';
import aiLawCourse from './projects/ai-law-course';
import waltzCourse from './projects/course-waltz';

// ========================================
// CATEGORY 2: LEARNING TECHNOLOGY
// ========================================
import variableTimer from './projects/variable-timer';

// ========================================
// CATEGORY 3: TECHNICAL PROJECTS
// ========================================
import nacvaAutomation from './projects/nacva-automation';

/**
 * All projects organized by strategic categories
 * Order matters - this is the sequence hiring managers see
 */
export const projects: ProjectBase[] = [
  // CATEGORY 1: Instructional Design (Lead with these)
  chartwayFicepEnhanced,               // FLAGSHIP - real client, real data
  professionalCommunicationTraining,   // Articulate Storyline 360 - the baseline screen
  aiLawCourse,                         // Graduate curriculum design + AI subject matter
  waltzCourse,                         // Canvas LMS comprehensive course

  // CATEGORY 2: Learning Technology (Bridge ID + Tech)
  variableTimer,                       // Behavioral learning technology for ABA

  // CATEGORY 3: Technical Projects (Pure coding)
  nacvaAutomation                      // Backend automation for LMS
];

// Export project IDs for type safety
export type ProjectId = typeof projects[number]['id'];

/**
 * Featured projects for homepage - the three that carry the most hiring weight.
 * Rendered as a visible grid, not a carousel: a flagship behind a click is a
 * flagship nobody sees.
 */
export const featuredProjects: ProjectBase[] = [
  chartwayFicepEnhanced,               // Real client engagement with quantified findings
  professionalCommunicationTraining,   // Advanced Articulate Storyline 360
  aiLawCourse                          // Graduate curriculum design excellence
];

/**
 * Projects organized by strategic categories
 */
export const projectsByCategory = {
  'id': [
    chartwayFicepEnhanced,
    professionalCommunicationTraining,
    aiLawCourse,
    waltzCourse
  ],
  'learning-tech': [
    variableTimer
  ],
  'technical': [
    nacvaAutomation
  ]
};

/**
 * Tiered project organization for progressive disclosure
 */
export const projectTiers = {
  // Top 3 for immediate hiring manager impact
  featured: featuredProjects,

  // Core instructional design work
  instructionalDesign: projectsByCategory['id'],

  // Learning technology bridge
  learningTechnology: projectsByCategory['learning-tech'],

  // Technical demonstrations
  technical: projectsByCategory['technical']
};
