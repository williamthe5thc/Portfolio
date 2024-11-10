// src/content/career/experience.ts
/**
 * @file experience.ts
 * @description Professional experience and work history
 * @module content/career
 * 
 * Features:
 * - Chronological work history
 * - Key achievements
 * - Role responsibilities
 * - Technology usage
 * 
 * @example
 * ```tsx
 * import { experience } from '@/content/career';
 * 
 * // Render experience section
 * <ExperienceTimeline experiences={experience} />
 * ```
 */
import { Experience } from '@/types/content';

export const experience: Experience[] = [
  {
    title: "Help Desk Specialist",
    company: "All Season Control Cover",
    location: "Salt Lake City Metropolitan Area",
    period: "Jan 2021 - May 2024",
    highlights: [
      "Provided technical support and problem resolution for users",
      "Implemented solutions for complex technical issues",
      "Delivered quality advice and feedback to improve user experience",
      "Maintained ongoing support relationships with clients"
    ]
  },
  {
    title: "Instructional Designer",
    company: "National Association of Certified Valuators and Analysts",
    location: "Sandy, UT",
    period: "Mar 2023 - Aug 2023",
    highlights: [
      "Transitioned instructional content using Camtasia and Articulate",
      "Developed Python automation scripts for database management",
      "Built document conversion tools for streamlined content processing",
      "Processed courses for continuing education credits",
      "Collaborated with SMEs to ensure content accuracy"
    ]
  },
  {
    title: "Accounts Payable Clerk",
    company: "The Church of Jesus Christ of Latter-day Saints",
    location: "Salt Lake City Metropolitan Area",
    period: "Dec 2022 - Mar 2023",
    highlights: [
      "Processed invoices and managed payment systems",
      "Handled mail distribution and check deposits",
      "Collaborated with team members to meet deadlines",
      "Maintained accurate financial records"
    ]
  }
];