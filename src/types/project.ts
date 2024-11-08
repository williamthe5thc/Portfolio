// File: src/types/project.ts

import { LucideIcon } from 'lucide-react';

// Project Data Types
export interface ProjectBase {
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

export type ProjectCategory = 
  | 'elearning'
  | 'instructional-design'
  | 'development'
  | 'research';

export type ProjectStatus = 
  | 'in-progress'
  | 'completed'
  | 'planned';

// Professional Info Types
export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Education {
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

export interface CoreCompetency {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
  skills?: string[];
}

// Site Configuration Types
export interface SiteMetadata {
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

export interface NavigationItem {
  path: string;
  label: string;
  icon: LucideIcon;
  end?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

// SEO Types
export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
  keywords?: string[];
  noindex?: boolean;
}

// Animation Types
export interface AnimationProps {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: {
    duration?: number;
    delay?: number;
    ease?: string | number[];
  };
  variants?: {
    [key: string]: object;
  };
}