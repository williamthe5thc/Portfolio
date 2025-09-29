// src/content/featured.ts
import { ProjectBase } from '@/types/content';
import professionalCommunicationTraining from './projects/professional-communication-training';
import chartwayFicepEnhanced from './projects/chartway-ficep-enhanced';
import aiLawCourse from './projects/ai-law-course';

export interface FeaturedProject extends ProjectBase {
  featured: true;
  businessImpact: string[];
  clientTestimonial?: {
    quote: string;
    author: string;
    title: string;
    company: string;
  };
}

export const featuredProjects: FeaturedProject[] = [
  {
    ...professionalCommunicationTraining,
    featured: true,
    businessImpact: [
      "Demonstrated mastery of advanced Articulate Storyline 360 authoring capabilities",
      "Created 278-slide interactive experience with 15+ branching decision points",
      "Applied behavioral psychology principles to scenario-based learning design",
      "Showcased ID competencies transferable to corporate soft skills training"
    ]
  },
  {
    ...chartwayFicepEnhanced,
    featured: true,
    businessImpact: [
      "Identified critical organizational barriers affecting certification pass rates",
      "Delivered evidence-based recommendations addressing 23 time allocation challenges",
      "Created systematic approach to professional development program improvement",
      "Applied ADDIE methodology to real-world corporate training challenges"
    ]
  },
  {
    ...aiLawCourse,
    featured: true,
    businessImpact: [
      "Successfully translated complex AI concepts for legal professionals",
      "Created 10-module graduate-level curriculum with systematic progression",
      "Applied competency-based design principles for professional education",
      "Demonstrated ability to collaborate with university faculty and SMEs"
    ]
  }
];
