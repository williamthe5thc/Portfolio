// src/content/professional/competencies.ts
/**
 * @file competencies.ts
 * @description Core competency definitions and metadata
 * @module content/professional
 * 
 * Features:
 * - Skill categorization
 * - Icon associations
 * - Detailed descriptions
 * - Color theming
 * 
 * @example
 * ```tsx
 * import { competencies } from '@/content/professional';
 * 
 * // Render competencies list
 * {competencies.map(comp => (
 *   <CompetencyCard key={comp.title} {...comp} />
 * ))}
 * ```
 */
import { CoreCompetency } from '@/types/content';

export const competencies: CoreCompetency[] = [
  {
    icon: "BookOpen",
    title: "Instructional Design",
    description: "Creating engaging learning experiences using ADDIE and SAM models, with focus on learner-centered design",
    color: "text-blue-600"
  },
  {
    icon: "Code",
    title: "E-Learning Development",
    description: "Proficient in Articulate Storyline, Camtasia, Canvas LMS, and various authoring tools",
    color: "text-purple-600"
  },
  {
    icon: "Layout",
    title: "LMS Implementation",
    description: "Experience with Canvas LMS setup, configuration, and content development",
    color: "text-green-600"
  },
  {
    icon: "PenTool",
    title: "Content Creation",
    description: "Development of engaging educational content, storyboards, and assessments",
    color: "text-orange-600"
  },
  {
    icon: "Target",
    title: "Performance Analysis",
    description: "Data-driven approach to identifying learning needs and measuring effectiveness",
    color: "text-red-600"
  },
  {
    icon: "Users",
    title: "Collaboration",
    description: "Effective work with SMEs, stakeholders, and cross-functional teams",
    color: "text-teal-600"
  }
];