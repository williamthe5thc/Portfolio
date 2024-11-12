// src/pages/resumes/InstructionalDesignResume.tsx
import React from 'react';
import BasePage from '../BasePage';
import ResumeTemplate from '@/components/shared/ResumeTemplate';

const InstructionalDesignResume: React.FC = () => {
  const resumeData = {
    title: "Instructional Design Resume",
    subtitle: "Learning Experience Designer & Educational Technology Specialist",
    summary: `Innovative instructional designer with a focus on creating engaging, effective learning experiences. 
    Skilled in educational technology and curriculum development.`,
    downloadUrl: "/documents/Instructional-Design-Resume.pdf",
    experience: [
      {
        title: "Instructional Designer",
        company: "NACVA",
        period: "2023",
        highlights: [
          "Transitioned instructional content using Camtasia and Articulate",
          "Collaborated with SMEs to ensure content accuracy",
          "Processed courses for continuing education credits"
        ]
      }
    ],
    education: [
      {
        degree: "Master of Education",
        field: "Instructional Design",
        institution: "University of Utah",
        period: "2023 - 2025 (expected)",
        relevantCourses: [
          "Learning Theory",
          "Instructional Design Models",
          "E-Learning Development"
        ]
      }
    ],
    skills: [
      {
        category: "Design Tools",
        skills: ["Articulate Storyline", "Camtasia", "Adobe Creative Suite"]
      },
      {
        category: "LMS Platforms",
        skills: ["Canvas", "Moodle", "Blackboard"]
      },
      {
        category: "Methodologies",
        skills: ["ADDIE", "SAM", "Agile Learning Design"]
      }
    ],
    projects: [
      {
        title: "Waltz Dance Course",
        description: "Developed comprehensive online course teaching waltz fundamentals using Canvas LMS.",
        url: "/portfolio/teaching-waltz"
      }
    ]
  };

  return (
    <BasePage
      seo={{
        title: "Instructional Design Resume",
        description: "My experience in instructional design and e-learning"
      }}
    >
      <ResumeTemplate {...resumeData} />
    </BasePage>
  );
};

export default InstructionalDesignResume;