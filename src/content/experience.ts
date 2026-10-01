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
    period: "February 2026 - Present",
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
      "Recommended WCAG 2.1 AA accessibility standards for the curriculum",
      "Chartway implemented the redesigned program and reported improved exam results (figures withheld to protect employee privacy)"
    ]
  },
  {
    title: "Learning Technology Specialist (Contract)",
    company: "National Association of Certified Valuators and Analysts (NACVA), via Robert Half",
    location: "Sandy, UT",
    period: "March 2023 - August 2023",
    // Same facts as the resumes (src/content/resumes.ts).
    highlights: [
      "Turned 50+ recorded webinars into on-demand continuing-education courses in Camtasia, published as SCORM packages with Articulate Presenter",
      "Wrote Python and Selenium scripts that set up each course in the learning platform and online store, automating about 80 hand steps per course",
      "Wrote a converter that imported each exam's questions from Word instead of retyping them"
    ]
  }
];