// src/content/featured-case-studies.ts
import { ProjectBase } from '@/types/content';
import nacvaAutomation from './projects/nacva-automation';
import chartwayFicepEnhanced from './projects/chartway-ficep-enhanced';
import variableTimer from './projects/variable-timer';

export interface CaseStudy extends ProjectBase {
  featured: true;
  businessImpact: string[];
  clientTestimonial?: {
    quote: string;
    author: string;
    title: string;
    company: string;
  };
  detailedProcess: {
    analysis: string;
    design: string;
    development: string;
    implementation: string;
    evaluation: string;
  };
}

export const featuredCaseStudies: CaseStudy[] = [
  {
    ...nacvaAutomation,
    featured: true,
    businessImpact: [
      "Reduced course deployment time from 3+ weeks to 2-3 days",
      "Enabled 5,000+ members to access timely professional development",
      "Improved SME productivity by 75% for content creation tasks",
      "Created scalable system supporting organizational growth"
    ],
    detailedProcess: {
      analysis: "Conducted comprehensive workflow analysis identifying bottlenecks in content processing and SME collaboration inefficiencies",
      design: "Designed automated learning technology solutions maintaining quality standards while dramatically improving efficiency",
      development: "Implemented scalable automation systems using modern development practices and quality assurance protocols",
      implementation: "Collaborated with SMEs and stakeholders to ensure smooth transition and adoption of new workflows",
      evaluation: "Measured significant improvements in deployment speed, content quality, and SME satisfaction metrics"
    }
  },
  {
    ...chartwayFicepEnhanced,
    featured: true,
    businessImpact: [
      "Serving 10,000+ credit union members with modernized financial literacy curriculum",
      "Implemented evidence-based design ensuring WCAG 2.1 AA accessibility compliance",
      "Created systematic needs analysis framework for ongoing curriculum improvement",
      "Positioned for measurable behavior change in member financial wellness outcomes"
    ],
    detailedProcess: {
      analysis: "Conducted systematic needs analysis through member interviews and stakeholder consultations to identify financial wellness barriers",
      design: "Applied ADDIE framework with adult learning theory to create accessible, engaging financial education experiences",
      development: "Implementing modular curriculum design with UX principles ensuring intuitive navigation and member engagement",
      implementation: "Collaborating with financial wellness team for seamless integration with existing member services",
      evaluation: "Establishing measurement protocols for tracking financial behavior change and learning outcome effectiveness"
    }
  }
];

export default featuredCaseStudies;