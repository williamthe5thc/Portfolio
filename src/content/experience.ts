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
    title: "Financial Wellness Intern",
    company: "Chartway Federal Credit Union",
    location: "South Jordan, UT", 
    period: "May 2025 - July 2025",
    highlights: [
      "Leading comprehensive modernization of FiCEP curriculum serving 10,000+ credit union members using evidence-based ADDIE framework",
      "Conducting systematic needs analysis through learner interviews and stakeholder consultations to identify financial wellness barriers",
      "Applying adult learning theory and UX design principles to create accessible financial education experiences",
      "Implementing agile instructional design workflows enabling rapid curriculum iteration and improvement",
      "Ensuring WCAG 2.1 AA compliance for inclusive financial literacy education across diverse member populations",
      "Collaborating with financial wellness team and subject matter experts to align curriculum with community empowerment mission"
    ]
  },
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
      "Transformed professional development content delivery for 5,000+ finance professionals using Camtasia and Articulate",
      "Designed learning technology workflows that reduced course deployment time from weeks to days",
      "Created scalable content development processes enabling efficient SME collaboration",
      "Managed continuing education course processing for professional certification compliance",
      "Applied instructional design principles to optimize learning outcomes for complex financial concepts"
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