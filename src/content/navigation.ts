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
    href: "/resume",
    title: "Resume",
    bgColor: "bg-green-500",
    description: "Professional experience & credentials"
  },
  {
    href: "/about#Professional-practice",
    title: "Design Process",
    bgColor: "bg-purple-500",
    description: "ADDIE methodology & learning theory"
  },
  {
    href: "/contact",
    title: "Get In Touch",
    bgColor: "bg-orange-500",
    description: "Let's discuss your training needs"
  }
];
