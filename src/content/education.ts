// src/content/career/education.ts
import { Education } from '@/types/content';

export const education: Education = {
  degrees: [
    {
      degree: "Master of Education",
      field: "Instructional Design",
      institution: "University of Utah",
      location: "Salt Lake City, Utah",
      period: "2023 - 2025 (expected)",
      gpa: "4.0",
      relevantCourses: [
        "Learning Theory",
        "Instructional Design Models",
        "E-Learning Development"
      ]
    },
    {
      degree: "Bachelor of Science",
      field: "Psychology",
      institution: "Brigham Young University - Idaho",
      location: "Rexburg, ID",
      period: "2012 - 2018",
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