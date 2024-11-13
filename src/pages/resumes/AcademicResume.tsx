// src/pages/resumes/AcademicResume.tsx
import React from 'react';
import BasePage from '../BasePage';
import ResumeTemplate from '@/components/shared/ResumeTemplate';

const AcademicResume: React.FC = () => {
  const resumeData = {
    title: "Academic Resume",
    subtitle: "Researcher & Academic Professional",
    summary: `Academic professional with research experience in psychology and educational technology. 
    Focus on empirical research and evidence-based learning methodologies.`,
    downloadUrl: "/documents/Academic-Resume.pdf",
    education: [
      {
        degree: "Master of Education",
        field: "Instructional Design",
        institution: "University of Utah",
        period: "2023 - 2025 (expected)",
        relevantCourses: [
          "Research Methods",
          "Learning Theory",
          "Educational Technology"
        ]
      },
      {
        degree: "Bachelor of Science",
        field: "Psychology",
        institution: "Brigham Young University - Idaho",
        period: "2012 - 2018",
        relevantCourses: [
          "Research Methods",
          "Statistical Analysis",
          "Cognitive Psychology"
        ]
      }
    ],
    skills: [
      {
        category: "Research Methods",
        skills: ["Quantitative Analysis", "Qualitative Research", "Survey Design"]
      },
      {
        category: "Analysis Tools",
        skills: ["SPSS", "R", "Research Paper Writing"]
      },
      {
        category: "Areas of Study",
        skills: ["Educational Psychology", "Cognitive Psychology", "Learning Theory"]
      }
    ],
    publications: [
      {
        title: "Ego Depletion in Test Performance",
        citation: "Research presented at BYU-Idaho Research Conference (2013)",
        url: "/portfolio/ego-depletion"
      }
    ]
  };

  return (
    <BasePage
      seo={{
        title: "Academic Resume",
        description: "My academic background and research experience"
      }}
    >
      <ResumeTemplate {...resumeData} />
    </BasePage>
  );
};

export default AcademicResume;