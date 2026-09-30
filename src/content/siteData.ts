// src/content/config.ts
import { SiteConfig } from '@/types/content';

export const siteConfig: SiteConfig = {
  title: "W. Jordan Charles - Learning Technology Specialist",
  // The person's name, not a brand. It is interpolated as a name ("Learn
  // about ${author}'s journey", meta author, the copyright line), and the
  // old "W. Jordan Charles Portfolio" produced "W. Jordan Charles
  // Portfolio's journey" in every share preview.
  author: "W. Jordan Charles",
  // Leads with the work, not the credential. The M.Ed. is on the About page
  // and both resumes; opening every page footer with it framed the degree as
  // the headline when the projects are the stronger claim.
  description: "Instructional Design · Learning Experience Design · Learning Technology",
  slogan: "Research-Informed Learning Solutions",
  tagline: "Instructional designer who takes learning programs from analysis through delivery: needs analysis to find what is actually broken, evidence-based design to fix it, and the platform work to get it in front of learners. Currently implementing a youth nonprofit's curriculum on the learning platform I selected for them; previously a needs analysis and redesign recommendations for a credit union's certification training. Psychology research background, M.Ed. from the University of Utah.",
  siteUrl: "https://williamthe5thc.github.io/Portfolio",
  // Share-preview image. The 512px site icon until a dedicated 1200x630
  // image exists; "/path/to/default-og-image.jpg" was a placeholder that
  // never existed, so every preview had a broken image.
  defaultImage: "/web-app-manifest-512x512.png",
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