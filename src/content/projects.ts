// src/content/projects.ts
/**
 * @file projects.ts
 * @description Central export for all project data
 * @module content
 */

import { ProjectBase } from '@/types/content';

// Import all project files
import artCommission1 from './projects/art-commission-1';
import artCommission2 from './projects/art-commission-2';
import chiliCookoff from './projects/chili-cookoff';
import waltzCourse from './projects/course-waltz';
import dealOrNoDeal from './projects/deal-or-no-deal';
import egoDepletion from './projects/ego-depletion';
import empathyResearch from './projects/empathy-research';
import howToVideos from './projects/how-to-videos';
import jeopardyGame from './projects/jeopardy-game';
import kathario from './projects/kathario';
import nacvaAutomation from './projects/nacva-automation';
import napkinDesign from './projects/napkin-design';
import objectTracking from './projects/object-tracking';
import photoshopWedding from './projects/photoshop-wedding';
import sacramentMacro from './projects/sacrament-macro';
import sdeWebsite from './projects/sde-website';
import undergradProgramming from './projects/undergrad-programming';
import variableTimer from './projects/variable-timer';
import vegasEdit from './projects/vegas-edit';
import yahtzeeGame from './projects/yahtzee-game';

// Create projects array
export const projects: ProjectBase[] = [
  nacvaAutomation,      // Lead with strongest ID work
  waltzCourse,          // Comprehensive ID project
  variableTimer,        // Learning technology innovation
  artCommission1,
  artCommission2,
  chiliCookoff,
  dealOrNoDeal,
  egoDepletion,
  empathyResearch,
  howToVideos,
  jeopardyGame,
  kathario,
  napkinDesign,
  objectTracking,
  photoshopWedding,
  sacramentMacro,
  sdeWebsite,
  undergradProgramming,
  vegasEdit,
  yahtzeeGame
];

// Export project IDs for type safety
export type ProjectId = typeof projects[number]['id'];
