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
import { Competency } from '@/types/content';

export const competencies: Competency[] = [
  {
    icon: "Brain",
    title: "Cognitive Psychology & Learning Science",
    description: "Apply cognitive load theory, information processing theory, and adult learning principles to instructional design decisions based on University of Utah IDET training",
    color: "text-blue-600",
    skills: ['Cognitive Load Theory', 'Adult Learning Theory', 'Learning Science Research', 'Evidence-Based Design']
  },
  {
    icon: "Monitor",
    title: "Technology-Based Instruction",
    description: "Design and develop engaging e-learning experiences using multimedia learning principles and modern authoring tools",
    color: "text-purple-600",
    skills: ['E-Learning Development', 'Articulate Storyline', 'Learning Management Systems', 'Multimedia Learning']
  },
  {
    icon: "Users",
    title: "Human-Computer Interaction",
    description: "Create intuitive learning interfaces that optimize user experience and support effective learning outcomes",
    color: "text-green-600",
    skills: ['User Experience Design', 'Interface Design', 'Accessibility Design', 'Usability Testing']
  },
  {
    icon: "Target",
    title: "Systematic Instructional Design",
    description: "Apply ADDIE and SAM methodologies to analyze learning needs and develop effective educational solutions",
    color: "text-orange-600",
    skills: ['ADDIE Methodology', 'SAM Model', 'Needs Analysis', 'Assessment Design', 'Curriculum Development']
  },
  {
    icon: "BarChart",
    title: "Learning Assessment & Analytics",
    description: "Design formative and summative assessments that measure learning outcomes and inform instructional improvements",
    color: "text-red-600",
    skills: ['Assessment Design', 'Learning Analytics', 'Kirkpatrick Model', 'Data-Driven Decision Making']
  },
  {
    icon: "Lightbulb",
    title: "SME Collaboration & Project Management",
    description: "Work effectively with subject matter experts and stakeholders to manage instructional design projects",
    color: "text-teal-600",
    skills: ['SME Collaboration', 'Stakeholder Management', 'Project Management', 'Cross-Functional Teamwork']
  }
];