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
// Reordered based on portfolio audit: Graduate Curriculum → Learning Technology → Financial Wellness → Articulate Demo → Innovation → Traditional ID → Assessment → Engagement
export const projects: ProjectBase[] = [
  aiLawCourse,                       // FLAGSHIP: Graduate curriculum design + interactive navigation (no content conflicts)
  nacvaAutomation,                   // LEARNING TECH: Learning technology optimization for professional development
  chartwayFicepEnhanced,            // CURRENT: Financial wellness curriculum modernization - target market alignment
  professionalCommunicationTraining, // ARTICULATE DEMO: Advanced Storyline 360 capabilities (now accurately positioned)
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
 * Tiered project organization optimized for hiring manager review
 * Based on 2024 research: hiring managers review maximum 3-6 projects
 */
export const projectTiers = {
  // Top 3 projects for immediate hiring manager impact
  featured: [
    aiLawCourse,           // Graduate curriculum design excellence
    nacvaAutomation,       // Learning technology optimization
    chartwayFicepEnhanced  // Current financial wellness work
  ],
  
  // Supporting projects demonstrating technical capabilities
  learningTechnology: [
    variableTimer,     // Behavioral psychology + mobile learning
    objectTracking     // Performance assessment innovation
  ],
  
  // Additional ID methodology demonstrations
  curriculumDesign: [
    professionalCommunicationTraining, // Articulate Storyline 360 mastery
    waltzCourse,                      // Traditional Canvas LMS design
    jeopardyGame                      // Gamification & engagement
  ]
};

/**
 * Legacy category structure for backward compatibility
 */
export const projectsByCategory = {
  'learning-technology': [nacvaAutomation, variableTimer, objectTracking],
  'curriculum-design': [chartwayFicepEnhanced, aiLawCourse, professionalCommunicationTraining, waltzCourse],
  'engagement-design': [jeopardyGame]
};
