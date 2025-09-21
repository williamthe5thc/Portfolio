// src/content/featured.ts
import { ProjectBase } from '@/types/content';

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
    .../* nacvaAutomation project data */,
    featured: true,
    businessImpact: [
      "Reduced course deployment time from 3+ weeks to 2-3 days",
      "Enabled 5,000+ members to access timely professional development",
      "Improved SME productivity by 75% for content creation tasks",
      "Created scalable system supporting organizational growth"
    ],
    clientTestimonial: {
      quote: "Jordan's learning technology solutions transformed our entire content delivery process. The automation he created allowed our subject matter experts to focus on what they do best - creating quality educational content.",
      author: "Sarah Johnson", // Example - replace with real testimonial if available
      title: "Training Director",
      company: "NACVA"
    }
  }
];
