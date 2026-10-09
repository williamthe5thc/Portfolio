// src/content/config.ts
import { SiteConfig } from '@/types/content';

export const siteConfig: SiteConfig = {
  title: "W. Jordan Charles - Instructional Designer & Learning Technologist",
  // The person's name, not a brand. It is interpolated as a name ("Learn
  // about ${author}'s journey", meta author, the copyright line), and the
  // old "W. Jordan Charles Portfolio" produced "W. Jordan Charles
  // Portfolio's journey" in every share preview.
  author: "W. Jordan Charles",
  // Leads with the work, not the credential. The M.Ed. is on the About page
  // and both resumes; opening every page footer with it framed the degree as
  // the headline when the projects are the stronger claim.
  description: "Instructional Design · Learning Experience Design · Learning Technology",
  // The About page opens with this. Facts only; each one is on a project
  // page or the resumes.
  bio: "I'm an instructional designer who works on both the learning design and the technology that delivers it. At WeYouth, a youth nonprofit, I chose the learning platform and build and run its courses. Before that I ran a needs analysis for Chartway Credit Union's certification program, automated course setup at NACVA, and helped build a graduate AI and law course in Canvas. I have a psychology research background and an M.Ed. in Instructional Design and Educational Technology from the University of Utah.",
  siteUrl: "https://williamthe5thc.github.io/Portfolio",
  // Share-preview image, 1200x630 (LinkedIn, Slack, iMessage). SEO.tsx and
  // the static tags in index.html give its size and alt text; update both if
  // it changes.
  defaultImage: "/og-image.jpg",
  social: {
    linkedin: "https://linkedin.com/in/jordan-charles",
    github: "https://github.com/williamthe5thc"
  },
  contactInfo: {
    email: "williamthe5thc@yahoo.com",
    phone: "208.779.2406",
    linkedin: "linkedin.com/in/jordan-charles",
    // Matches LinkedIn. Recruiters cross-reference the two.
    location: "Salt Lake City, Utah"
  }
};