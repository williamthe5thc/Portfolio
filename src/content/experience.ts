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
    title: "Instructional Designer",
    company: "WeYouth",
    location: "North Salt Lake, UT",
    period: "March 2026 - Present",
    highlights: [
      "Conducted market research on learning management systems scored against the organization's specific constraints, and delivered the platform recommendation the nonprofit adopted and runs on today",
      "Implemented SME-authored curriculum into the LMS as enrollable, self-paced courses: module architecture, self-assessments, evaluation surveys, and cohort enrollment",
      "Built separate learner tracks for athletes, coaches, and captains supporting Mental Performance Connection Coaching, the organization's primary program",
      "Collaborate with subject matter experts - founders, a licensed clinician, and coaching staff - on restructuring written curriculum to work without a live facilitator",
      "Serve as the technical support function for the platform, onboarding administrators and maintaining the system as cohorts move through it"
    ]
  },
  {
    title: "Instructional Design Intern",
    company: "Chartway Credit Union",
    location: "South Jordan, UT", 
    period: "May 2025 - July 2025",
    // Same facts as the resumes (src/content/resumes.ts). This was a needs
    // analysis with recommendations; Chartway ran the redesign.
    highlights: [
      "Conducted a mixed-methods needs analysis for the FiCEP certification program, which prepares employees for America's Credit Unions (ACU) financial counseling exam: five semi-structured interviews and a survey returning 21 responses",
      "Applied thematic analysis to identify limited protected study time as the top barrier to certification (23 mentions)",
      "Applied the ADDIE framework and adult learning theory to deliver evidence-based curriculum recommendations",
      "Worked with the Financial Wellness manager, the program's subject matter expert, to keep the recommendations aligned with certification requirements",
      "Implemented WCAG 2.1 AA accessibility standards in curriculum design",
      "Chartway implemented the redesigned program and reported improved exam results (figures withheld to protect employee privacy)"
    ]
  },
  {
    title: "Learning Technology Specialist (Contract)",
    company: "National Association of Certified Valuators and Analysts (NACVA), via Robert Half",
    location: "Sandy, UT",
    period: "April 2023 - August 2023",
    // Same facts as the resumes (src/content/resumes.ts).
    highlights: [
      "Converted legacy video content and streamlined backend processing for continuing education delivery",
      "Built Python automation replacing manual data entry across the course publishing workflow",
      "Collaborated with subject matter experts to maintain content quality while scaling delivery"
    ]
  }
];