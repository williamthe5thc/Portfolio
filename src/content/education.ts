// src/content/career/education.ts
/**
 * @file education.ts
 * @description Educational background and certification data
 * @module content/career
 * 
 * Degrees only: the About page shows degree, field, school, dates, GPA and
 * highlights. Anything else here would ship without being shown.
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
      period: "August 2023 - May 2025",
      gpa: "3.9",
      highlights: [
        "30 credit hours across five semesters (two academic years and a summer)",
        "Combines instructional design (identifying learner needs and goals, then building instruction to meet them) with educational technology (technology-based learning environments that support those needs)",
        "Specialized in cognitive science-based instructional design with andragogy expertise",
        "Completed capstone project (EDPS 6750) applying systematic ADDIE methodology",
        "Trained in evidence-based learning theory, cognitive load theory, and Universal Design for Learning",
        "Intensive small cohort collaborative learning environment (6 students total)"
      ]
    },
    {
      degree: "Bachelor of Science",
      field: "Psychology",
      institution: "Brigham Young University - Idaho",
      location: "Rexburg, ID",
      period: "2012 - 2018",
      highlights: [
        "Strong foundation in research methodology and statistical analysis",
        "Behavioral psychology background supports adult learning theory application"
      ],
    }
  ]
};
