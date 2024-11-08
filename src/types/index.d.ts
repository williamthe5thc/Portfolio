// src/types/index.ts
import { ElementType, ComponentProps, ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

// Base Types
export interface WithClassName {
  className?: string;
}

export interface WithChildren {
  children: ReactNode;
}

// Project Types
export type ProjectCategory = 
  | 'elearning'
  | 'photoshop'
  | 'premier'
  | 'id'
  | 'development'
  | 'research';

export type ProjectStatus = 'in-progress' | 'completed' | 'planned';

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

// Professional Info Types
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

// Site Configuration
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

// Component Types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonBaseProps extends WithClassName {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isDisabled?: boolean;
  icon?: LucideIcon;
  onClick?: () => void;
}

export interface ContainerBaseProps extends WithClassName, WithChildren {
  animate?: boolean;
}

export interface SectionProps extends ContainerBaseProps {
  background?: 'light' | 'dark' | 'primary' | 'none';
  paddingY?: 'none' | 'sm' | 'md' | 'lg';
}

export interface GridContainerProps extends ContainerBaseProps {
  cols?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg';
}

// Form Types
export interface FormState<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
}

export interface FormField {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
}

// Navigation Types
export interface NavigationItem {
  path: string;
  label: string;
  icon: keyof typeof import('lucide-react');
  end?: boolean;
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

// FAQ Types
export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

// Analytics Types
export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}