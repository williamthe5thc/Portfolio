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
import weyouthMpcc from './projects/weyouth-mpcc';
import chartwayFicepEnhanced from './projects/chartway-ficep-enhanced';
import professionalCommunicationTraining from './projects/professional-communication-training';
import aiLawCourse from './projects/ai-law-course';
import waltzCourse from './projects/course-waltz';

// ========================================
// CATEGORY 3: TECHNICAL PROJECTS
// ========================================
import nacvaAutomation from './projects/nacva-automation';
import variableTimer from './projects/variable-timer';
import conflictTrainer from './projects/conflict-trainer';
import vrInterviewSimulator from './projects/vr-interview-simulator';

/**
 * All projects organized by strategic categories
 * Order matters - this is the sequence hiring managers see
 */
export const projects: ProjectBase[] = [
  // FLAGSHIP. Chartway leads because it is the only project that closes the
  // loop: a real client problem, a documented analysis a reader can open, and
  // a measured result afterwards. WeYouth is more current and arguably harder
  // work, but its numbers are the client's to publish, not mine - which leaves
  // it without the outcome or the artifact that make a flagship persuasive.
  chartwayFicepEnhanced,

  // Current role - platform selection and implementation. Categorised
  // learning-tech; WeYouth's SMEs authored the curriculum content.
  weyouthMpcc,

  professionalCommunicationTraining,   // Articulate Storyline 360 - the baseline screen
  aiLawCourse,                         // Graduate curriculum design + AI subject matter
  waltzCourse,                         // Canvas LMS comprehensive course
  conflictTrainer,                     // Branching scenarios, Thomas-Kilmann feedback
  vrInterviewSimulator,                // In progress: VR interview practice on Quest

  // CATEGORY 3: Technical Projects (Pure coding)
  nacvaAutomation,                     // Backend automation for LMS
  variableTimer                        // Android app for ABA reinforcement timing
];

// Export project IDs for type safety
export type ProjectId = typeof projects[number]['id'];

/**
 * Featured projects for homepage - the three that carry the most hiring weight.
 * Rendered as a visible grid, not a carousel: a flagship behind a click is a
 * flagship nobody sees.
 */
export const featuredProjects: ProjectBase[] = [
  vrInterviewSimulator,                // Playable in a browser; design and technology in one
  chartwayFicepEnhanced,               // Real client, measured outcome, openable artifact
  aiLawCourse                          // Built in Canvas (not taught), five documents to open
];

/**
 * Projects organized by strategic categories
 */
export const projectsByCategory = {
  'id': [
    chartwayFicepEnhanced,
    professionalCommunicationTraining,
    aiLawCourse,
    waltzCourse,
    conflictTrainer
  ],
  'learning-tech': [
    weyouthMpcc,
    vrInterviewSimulator
  ],
  'technical': [
    nacvaAutomation,
    variableTimer
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
