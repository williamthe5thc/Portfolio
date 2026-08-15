// src/pages/resumes/AcademicResume.tsx
import React from 'react';
import BasePage from '../BasePage';
import ResumeTemplate from '@/components/shared/ResumeTemplate';
import { getImagePath } from '@/utils';

const AcademicResume: React.FC = () => {
  const resumeData = {
    title: "Academic Resume",
    subtitle: "Researcher & Academic Professional",
    summary: `Academic professional with research experience in psychology and educational technology. 
    Focus on empirical research and evidence-based learning methodologies.`,
    downloadUrl: getImagePath('/documents/Academic_Resume.pdf'),
    education: [
      {
        degree: "Master of Education",
        field: "Instructional Design & Educational Technology",
        institution: "University of Utah",
        period: "2023 - 2025",
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
    /*
     * These research pieces no longer have portfolio detail pages - they were
     * archived so the portfolio leads with applied ID work. The descriptions
     * stay because they are real credentials; the dead `url` links were removed
     * rather than pointed at pages that would 404.
     */
    publications: [
      {
        title: "Ego Depletion in Test Performance",
        citation: "Research presented at BYU-Idaho Research Conference (2013)"
      },
      {
        title: "Does Money Inequality Affect Empathy and Compassion?",
        citation: "Charles, W.J. (2014, Dec). Poster session, Research & Creative Works Conference, Rexburg, ID"
      }
    ],
    projects: [
      {
        title: "FiCEP Curriculum Needs Analysis - Chartway Federal Credit Union",
        description: "Applied mixed-methods research in an organizational setting: 5 semi-structured interviews and a 21-response survey, analyzed thematically to identify performance barriers in a professional certification program.",
        url: "/portfolio/chartway-ficep-enhanced"
      },
      {
        title: "Ego Depletion Research - Evidence-Based Learning Foundation",
        description: "Psychological experiment based educational intervention designed to reduce bias and enhance empathy. Research presented at BYU-Idaho Research and Creative Works Conference, earning 1st place recognition."
      },
      {
        title: "Empathy & Socioeconomic Research - Diversity Foundation",
        description: "Conducted behavioral research examining how economic contexts influence empathy and prosocial behaviors, providing evidence-based foundation for diversity education program design."
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