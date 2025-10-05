// src/types/content.ts
/**
 * @file content.ts
 * @description Type definitions for site content and configuration
 * @module types
 * 
 * Types defined:
 * - ProjectBase - Project data structure
 * - SiteConfig - Site-wide configuration
 * - Experience - Professional experience
 * - Education - Educational background
 * - Competency - Professional competencies
 * 
 * @example
 * ```typescript
 * // Project type usage
 * const project: ProjectBase = {
 *   id: 'project-1',
 *   title: 'Project Title',
 *   description: 'Project description',
 *   category: 'development',
 *   // ...other fields
 * };
 * 
 * // Site config usage
 * const config: SiteConfig = {
 *   title: 'Site Title',
 *   author: 'Author Name',
 *   // ...other fields
 * };
 * ```
 */

import type { LucideIcon } from 'lucide-react';

export interface ProjectBase {
  detailPage?: boolean;
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  projectUrl?: string;
  demoUrl?: string;
  detailPage?: boolean;
  category: ProjectCategory;
  tags: string[];
  status: ProjectStatus;
  date: string;
  tools?: string[];
  methodology?: string;
  learningObjectives?: string[];
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  
  // Enhanced instructional design fields
  businessContext?: string;
  targetAudience?: string;
  stakeholders?: string[];
  learningTheoryApplied?: string[];
  addieMethodology?: {
    analysis?: {
      process?: string;
      findings?: string;
      learnerCharacteristics?: string;
      performanceGaps?: string;
      needsAssessment?: string;
      learnerAnalysis?: string;
      contextAnalysis?: string;
    };
  samMethodology?: {
    preparation?: {
      informationGathering?: string;
      brainstorming?: string;
      collaboration?: string;
    };
    iterativeDesign?: {
      prototype?: string;
      alphaDevelopment?: string;
      reviewCycles?: string;
      rapidIteration?: string;
    };
    iterativeDevelopment?: {
      betaVersion?: string;
      pilotTesting?: string;
      stakeholderFeedback?: string;
      finalRefinement?: string;
    };
  };
    design?: {
      instructionalStrategy?: string;
      assessmentStrategy?: string;
      mediaSelection?: string;
      accessibilityDesign?: string;
      arcsApplication?: {
        attention?: string;
        relevance?: string;
        confidence?: string;
        satisfaction?: string;
      };
      universalDesign?: string;
    };
    development?: {
      contentCreation?: string;
      prototyping?: string;
      qualityAssurance?: string;
      accessibilityFeatures?: string;
      interactivityDevelopment?: string;
    };
    implementation?: {
      pilotTesting?: string;
      changeManagement?: string;
      supportSystems?: string;
      launchStrategy?: string;
    };
    evaluation?: {
      formativeAssessment?: string;
      summativeAssessment?: string;
      continuousImprovement?: string;
      kirkpatrickModel?: {
        reaction?: string;
        learning?: string;
        behavior?: string;
        results?: string;
      };
    };
  };
  designProcess?: {
    researchPhase?: string;
    stakeholderCollaboration?: string;
    iterativeDesign?: string;
    evidenceBasedDecisions?: string;
    challengesAndSolutions?: {
      [key: string]: string;
    };
    innovativeSolutions?: string[];
  };
  professionalImpact?: {
    businessValue?: string;
    scalabilityConsiderations?: string;
    industryContribution?: string;
    continuingEducation?: string;
    instructionalInnovation?: string;
    communityImpact?: string;
    scalabilityModel?: string;
  };
}

export type ProjectStatus = 'in-progress' | 'completed' | 'planned';

export type ProjectCategory = 
  | 'id'
  | 'learning-technology'
  | 'assessment';

export interface ProjectCategoryInfo {
  id: ProjectCategory;
  label: string;
  description: string;
}

export interface SiteConfig {
  title: string;
  author: string;
  description: string;
  slogan: string;
  tagline: string;
  siteUrl: string;
  defaultImage: string;
  social: {
    linkedin: string;
    github: string;
  };
  contactInfo: {
    email: string;
    phone: string;
    linkedin: string;
    location: string;
  };
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface EducationDegree {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  relevantCourses?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  credentialUrl?: string;
}

export interface Education {
  degrees: EducationDegree[];
  certifications: Certification[];
}

export interface Competency {
  icon: keyof typeof import('lucide-react');
  title: string;
  description: string;
  color?: string;
  skills?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export interface QuickLink {
  href: string;
  title: string;
  bgColor: string;
  description: string;
}

export interface HomePageContent {
  hero: {
    title: string;
    subtitle: string;
    cta: {
      primary: {
        text: string;
        href: string;
      };
      secondary: {
        text: string;
        href: string;
      };
    };
  };
  featuredProjects: {
    title: string;
    subtitle: string;
    count: number;
  };
}
// src/types/content.ts (add to existing file)

export interface MethodologyPrinciple {
  title: string;
  description: string;
}

export interface ProcessPhase {
  phase: string;
  activities: string[];
}

export interface FrameworkStep {
  name: string;
  description: string;
}

export interface Framework {
  name: string;
  description: string;
  steps?: FrameworkStep[];
  phases?: FrameworkStep[];
}

export interface ProcessExample {
  title: string;
  description: string;
  document: string;
  project: string;
  highlights: string[];
}

export interface Methodology {
  title: string;
  summary: string;
  corePrinciples: MethodologyPrinciple[];
  process: ProcessPhase[];
  processExamples?: ProcessExample[];
  frameworks: {
    addie: Framework;
    sam: Framework;
  };
  skills: {
    instructionalDesign: string[];
    technicalDesign: string[];
    research: string[];
  };
  tools: {
    design: ToolSet[];
    development: ToolSet[];
    learning: ToolSet[];
  };
}
export interface ToolSet {
  name: string;
  applications: string[];
}
