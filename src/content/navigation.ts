// src/content/navigation.ts
import { QuickLink } from '@/types/content';

export const quickLinks: QuickLink[] = [
  {
    href: "/portfolio",
    title: "Portfolio",
    bgColor: "bg-primary-500",
    description: "Interactive demos & case studies"
  },
  {
    href: "/portfolio?demo=true",
    title: "Live Demos",
    bgColor: "bg-blue-500",
    description: "Articulate Storyline & interactive projects"
  },
  {
    href: "/resume",
    title: "Resume",
    bgColor: "bg-green-500",
    description: "Professional experience & credentials"
  },
  {
    href: "/about",
    title: "Design Process",
    bgColor: "bg-purple-500",
    description: "ADDIE methodology & learning theory"
  },
  {
    href: "/contact",
    title: "Work With Me",
    bgColor: "bg-orange-500",
    description: "Corporate training & financial wellness"
  },
  {
    href: "/contact",
    title: "Free Consultation",
    bgColor: "bg-red-500",
    description: "Discuss your learning objectives"
  }
];
