// src/content/config.ts
import { SiteConfig } from '@/types/content';

export const siteConfig: SiteConfig = {
  title: "Jordan Charles - Learning Technology Specialist",
  author: "W. Jordan Charles Portfolio",
  // Leads with the work, not the credential. The M.Ed. is on the About page
  // and both resumes; opening every page footer with it framed the degree as
  // the headline when the projects are the stronger claim.
  description: "Instructional Design · Learning Experience Design · Learning Technology",
  slogan: "Research-Informed Learning Solutions",
  tagline: "Instructional designer who takes learning programs from analysis through delivery: needs analysis to find what is actually broken, evidence-based design to fix it, and the platform work to get it in front of learners. Currently running the LMS and curriculum implementation for a youth nonprofit; previously redesigned certification training for a credit union, where pass rates recovered after the changes went in. Psychology research background, M.Ed. from the University of Utah.",
  siteUrl: "https://williamthe5thc.github.io/Portfolio",
  defaultImage: "/path/to/default-og-image.jpg",
  social: {
    linkedin: "https://linkedin.com/in/jordan-charles",
    github: "https://github.com/williamthe5thc"
  },
  contactInfo: {
    email: "williamthe5thc@gmail.com",
    phone: "208.779.2406",
    linkedin: "linkedin.com/in/jordan-charles",
    // Matches LinkedIn. Recruiters cross-reference the two.
    location: "Salt Lake City, Utah"
  }
};