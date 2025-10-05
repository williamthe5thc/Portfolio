// src/content/projects.ts
/**
 * @file projects.ts
 * @description Strategic 3-category instructional design portfolio
 * @module content
 * 
 * Based on Jordan's positioning strategy:
 * - CATEGORY 1 (Lead): Instructional Design - pure ID work
 * - CATEGORY 2: Learning Technology - ID + technical skills combined
 * - CATEGORY 3: Technical Projects - pure coding demonstrations
 */

import { ProjectBase } from '@/types/content';

// ========================================
// CATEGORY 1: INSTRUCTIONAL DESIGN
// ========================================
import aiLawCourse from './projects/ai-law-course';
import professionalCommunicationTraining from './projects/professional-communication-training';
import chartwayFicepEnhanced from './projects/chartway-ficep-enhanced';
import waltzCourse from './projects/course-waltz';
import howToVideos from './projects/how-to-videos';
import egoDepletion from './projects/ego-depletion';
import empathyResearch from './projects/empathy-research';

// ========================================
// CATEGORY 2: LEARNING TECHNOLOGY
// ========================================
import biasReductionPsychology from './projects/bias-reduction-psychology';
import variableTimer from './projects/variable-timer';
import gamificationStemEducation from './projects/gamification-stem-education';
import stakeholderDigitalEngagement from './projects/stakeholder-digital-engagement';

// ========================================
// CATEGORY 3: TECHNICAL PROJECTS
// ========================================
import nacvaAutomation from './projects/nacva-automation';
import objectTracking from './projects/object-tracking';
import jeopardyGame from './projects/jeopardy-game';
import yahtzeeGame from './projects/yahtzee-game';

/**
 * All projects organized by strategic categories
 * Order matters - this is the sequence hiring managers see
 */
export const projects: ProjectBase[] = [
  // CATEGORY 1: Instructional Design (Lead with these)
  aiLawCourse,                         // Graduate curriculum design
  professionalCommunicationTraining,   // Articulate Storyline 360 mastery
  chartwayFicepEnhanced,              // Current financial wellness internship
  waltzCourse,                         // Canvas LMS comprehensive course
  howToVideos,                         // AI-enhanced video development
  egoDepletion,                        // Research methodology foundation
  empathyResearch,                     // DEI training research foundation
  
  // CATEGORY 2: Learning Technology (Bridge ID + Tech)
  biasReductionPsychology,            // Psychology experiment for education
  variableTimer,                       // Behavioral learning technology for ABA
  gamificationStemEducation,           // Deal or No Deal for STEM engagement
  stakeholderDigitalEngagement,        // Chili cookoff voting platform
  
  // CATEGORY 3: Technical Projects (Pure coding)
  nacvaAutomation,                     // Backend automation for LMS
  objectTracking,                      // Computer vision project
  jeopardyGame,                        // Cultural learning game
  yahtzeeGame                          // Command line game development
];

// Export project IDs for type safety
export type ProjectId = typeof projects[number]['id'];

/**
 * Featured projects for homepage - Top 3 that best represent capabilities
 */
export const featuredProjects: ProjectBase[] = [
  aiLawCourse,                         // Graduate curriculum design excellence
  professionalCommunicationTraining,   // Advanced Articulate Storyline 360
  chartwayFicepEnhanced               // Current financial wellness internship
];

/**
 * Projects organized by strategic categories
 */
export const projectsByCategory = {
  'id': [
    aiLawCourse,
    professionalCommunicationTraining,
    chartwayFicepEnhanced,
    waltzCourse,
    howToVideos,
    egoDepletion,
    empathyResearch
  ],
  'learning-tech': [
    biasReductionPsychology,
    variableTimer,
    gamificationStemEducation,
    stakeholderDigitalEngagement
  ],
  'technical': [
    nacvaAutomation,
    objectTracking,
    jeopardyGame,
    yahtzeeGame
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
