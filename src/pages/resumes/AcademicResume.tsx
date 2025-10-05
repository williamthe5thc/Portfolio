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
    ],
    projects: [
      {
        title: "Ego Depletion Research - Evidence-Based Learning Foundation",
        description: "Psychological experiment based educational intervention designed to reduce bias and enhance empathy. Research presented at BYU-Idaho Research and Creative Works Conference, earning 1st place recognition.",
        url: "/portfolio/ego-depletion"
      },
      {
        title: "Empathy & Socioeconomic Research - Diversity Foundation",
        description: "Conducted behavioral research examining how economic contexts influence empathy and prosocial behaviors, providing evidence-based foundation for diversity education program design.",
        url: "/portfolio/empathy-research"
      },
      {
        title: "Applied Psychology for Bias Reduction Education",
        description: "Psychology experiment based educational intervention designed for bias reduction and empathy enhancement in learning environments.",
        url: "/portfolio/bias-reduction-psychology"
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