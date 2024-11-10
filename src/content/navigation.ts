// src/content/navigation.ts
import { QuickLink } from '@/types/content';

export const quickLinks: QuickLink[] = [
  {
    href: "/resume",
    title: "Resume",
    bgColor: "bg-blue-500",
    description: "View my professional experience"
  },
  {
    href: "/portfolio?type=coding",
    title: "Coding Projects",
    bgColor: "bg-purple-500",
    description: "Software development portfolio"
  },
  {
    href: "/portfolio?type=instructional",
    title: "Instructional Design Projects",
    bgColor: "bg-green-500",
    description: "E-learning and course design"
  },
  {
    href: "/portfolio?type=media",
    title: "Art & Video Projects",
    bgColor: "bg-pink-500",
    description: "Digital media creations"
  }
];