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
      "Applied evidence-based ADDIE framework to redesign FiCEP curriculum helping financial counselors pass America's Credit Unions (ACU) professional examinations",
      "Conducted systematic needs analysis through learner interviews and stakeholder consultations to improve exam preparation effectiveness",
      "Applied adult learning theory and UX design principles to create accessible financial education experiences for diverse learner populations",
      "Collaborated with financial wellness team and subject matter experts to ensure curriculum alignment with certification requirements",
      "Implemented WCAG 2.1 AA compliance standards for inclusive curriculum design and accessibility",
      "Gained hands-on experience in professional instructional design implementation and evaluation frameworks"
    ]
  },
  {
    title: "Learning Technology Specialist (Contract)",
    company: "National Association of Certified Valuators and Analysts (NACVA)",
    location: "Sandy, UT",
    period: "Mar 2023 - Aug 2023",
    highlights: [
      "Optimized continuing education content delivery workflows by converting legacy video content and streamlining backend processing systems",
      "Applied technical skills to reduce course deployment time from weeks to days for professional development member base",
      "Collaborated with subject matter experts to maintain content quality while implementing scalable learning technology solutions",
      "Developed understanding of professional certification compliance requirements and continuing education standards",
      "Contributed to learning technology infrastructure supporting organizational growth and efficiency improvements"
    ]
  }
];