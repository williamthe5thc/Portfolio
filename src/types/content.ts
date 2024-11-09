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
}

export type ProjectStatus = 'in-progress' | 'completed' | 'planned';

export type ProjectCategory = 
  | 'elearning'
  | 'photoshop'
  | 'premier'
  | 'id'
  | 'development'
  | 'research';

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