// src/content/projects.ts
/**
 * @file projects.ts
 * @description Curated instructional design portfolio - Strategic selection of 6 high-impact projects
 * @module content
 * 
 * Based on 2024 ID portfolio research:
 * - Hiring managers review maximum 3-6 projects
 * - Focus on adult learning and corporate applications  
 * - Emphasize problem-solving and business impact
 * - Remove non-ID projects that dilute focus
 */

import { ProjectBase } from '@/types/content';

// Import only the strongest instructional design projects
import nacvaAutomation from './projects/nacva-automation';
import chartwayFicepEnhanced from './projects/chartway-ficep-enhanced';
import aiLawCourse from './projects/ai-law-course';
import professionalCommunicationTraining from './projects/professional-communication-training';
import variableTimer from './projects/variable-timer';
import waltzCourse from './projects/course-waltz';
import objectTracking from './projects/object-tracking';
import jeopardyGame from './projects/jeopardy-game';

// Strategically curated portfolio optimized for corporate instructional design positions
// Order reflects priority: Articulate Proficiency → Graduate Curriculum → Learning Technology → Financial Wellness → Innovation → Traditional ID → Assessment → Engagement
export const projects: ProjectBase[] = [
  professionalCommunicationTraining, // FLAGSHIP: Articulate Storyline 360 proficiency with working interactive demo
  aiLawCourse,                       // GRADUATE: Complex content translation for legal education with interactive navigation
  nacvaAutomation,                   // LEARNING TECH: Learning technology optimization for 5,000+ professionals
  chartwayFicepEnhanced,            // CURRENT: Financial wellness curriculum modernization - target market alignment
  variableTimer,                     // INNOVATION: Spaced learning & behavioral psychology application
  waltzCourse,                       // FOUNDATION: Comprehensive Canvas LMS course design showing traditional ID skills
  objectTracking,                    // ASSESSMENT: Performance evaluation technology for skills-based learning
  jeopardyGame                       // ENGAGEMENT: Gamification & motivation theory application
];

// Export project IDs for type safety
export type ProjectId = typeof projects[number]['id'];

/**
 * Featured project showcase for homepage
 * Top 3 projects that best represent Jordan's learning technology expertise
 */
export const featuredProjects = projects.slice(0, 3);

/**
 * Project categories optimized for instructional design career positioning
 */
export const projectsByCategory = {
  'learning-technology': [nacvaAutomation, variableTimer, objectTracking],
  'curriculum-design': [chartwayFicepEnhanced, aiLawCourse, professionalCommunicationTraining, waltzCourse],
  'engagement-design': [jeopardyGame]
};
