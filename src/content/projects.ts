// src/content/projects.ts
/**
 * @file projects.ts
 * @description Central export for all project data
 * @module content
 */

import { ProjectBase } from '@/types/content';

// Import only verified working project files first
import nacvaAutomation from './projects/nacva-automation';
import waltzCourse from './projects/course-waltz';
import variableTimer from './projects/variable-timer';

// Create minimal projects array with only working files
export const projects: ProjectBase[] = [
  nacvaAutomation,      // NACVA learning technology optimization
  waltzCourse,          // Waltz course - comprehensive ID project
  variableTimer         // Variable timer - learning technology innovation
];

// Export project IDs for type safety
export type ProjectId = typeof projects[number]['id'];
