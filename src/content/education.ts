// src/content/career/education.ts
/**
 * @file education.ts
 * @description Educational background and certification data
 * @module content/career
 * 
 * Categories:
 * - Formal education
 * - Certifications
 * - Professional training
 * - Relevant coursework
 * 
 * @example
 * ```tsx
 * import { education } from '@/content/career';
 * 
 * // Display education timeline
 * <Timeline events={education.degrees} />
 * ```
 */
import { Education } from '@/types/content';

export const education: Education = {
  degrees: [
    {
      degree: "Master of Education (M.Ed.)",
      field: "Instructional Design and Educational Technology (IDET)",
      institution: "University of Utah",
      location: "Salt Lake City, Utah",
      period: "2023 - 2025 (Completed May 2025)",
      gpa: "4.0",
      relevantCourses: [
        "Cognitive Foundations of Learning and Instruction",
        "Multimedia Learning and Cognitive Load Theory",
        "Assessment and Evaluation in Educational Technology",
        "Human-Computer Interaction for Learning",
        "Research Methods in Educational Technology",
        "Learning Analytics and Data-Driven Design",
        "Accessibility and Universal Design for Learning"
      ],
      highlights: [
        "Specialized in cognitive science-based instructional design with andragogy expertise",
        "Completed capstone project (EDPS 6750) applying systematic ADDIE methodology",
        "Trained in evidence-based learning theory, cognitive load theory, and Universal Design for Learning",
        "Intensive small cohort collaborative learning environment (6 students total)",
        "Ready to contribute research-backed design solutions to corporate instructional design teams"
      ]
    },
    {
      degree: "Bachelor of Science",
      field: "Psychology",
      institution: "Brigham Young University - Idaho",
      location: "Rexburg, ID",
      period: "2012 - 2018",
      highlights: [
        "Earned Bachelor's degree in Psychology",
        "Strong foundation in research methodology and statistical analysis",
        "Behavioral psychology background supports adult learning theory application"
      ],
      relevantCourses: [
        "Research Methods",
        "Statistical Analysis",
        "Cognitive Psychology"
      ]
    }
  ],
  certifications: [
    {
      title: "Agile Instructional Design",
      issuer: "LinkedIn",
      date: "Mar 2023"
    },
    {
      title: "Instructional Design Essentials: Models of ID",
      issuer: "LinkedIn",
      date: "Mar 2023"
    },
    {
      title: "Elearning Essentials: Storyboarding",
      issuer: "LinkedIn",
      date: "Mar 2023"
    }
    // Add other certifications as needed
  ]
};