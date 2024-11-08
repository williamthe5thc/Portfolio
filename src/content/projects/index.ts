// src/content/projects/index.ts
import { ProjectBase } from '@/types/content';

// Auto-import all project files
const projectModules = import.meta.glob<{ default: ProjectBase }>('./*.ts', { eager: true });

// Filter out index.ts and transform modules into projects array
export const projects = Object.values(projectModules)
  .filter(module => module.default) // Ensure the module has a default export
  .map(module => module.default);

export type ProjectId = typeof projects[number]['id'];