// src/pages/resumes/SoftwareDevResume.tsx
import React from 'react';
import BasePage from '../BasePage';
import ResumeTemplate from '@/components/shared/ResumeTemplate';

const SoftwareDevResume: React.FC = () => {
  const resumeData = {
    title: "Software Development Resume",
    subtitle: "Full-Stack Developer & Technical Problem Solver",
    summary: `Results-driven software developer with expertise in React, Python, and full-stack development. 
    Passionate about creating efficient, user-friendly solutions and automating complex processes.`,
    downloadUrl: "/documents/Software-Dev-Resume.pdf",
    experience: [
      {
        title: "Software Developer",
        company: "NACVA",
        period: "2023",
        highlights: [
          "Developed Python automation scripts for data processing",
          "Created efficient document conversion tools",
          "Streamlined course processing workflows"
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Science",
        field: "Psychology",
        institution: "Brigham Young University - Idaho",
        period: "2012 - 2018",
        relevantCourses: [
          "Data Structures",
          "Algorithms",
          "Web Development"
        ]
      }
    ],
    skills: [
      {
        category: "Programming Languages",
        skills: ["Python", "JavaScript", "TypeScript", "C++", "HTML/CSS"]
      },
      {
        category: "Frameworks & Libraries",
        skills: ["React", "Node.js", "Express", "Tailwind CSS"]
      },
      {
        category: "Tools & Platforms",
        skills: ["Git", "VS Code", "AWS", "Docker"]
      }
    ],
    projects: [
      {
        title: "NACVA Course Processing Automation",
        description: "Developed Python scripts to automate course processing and data entry, significantly improving workflow efficiency.",
        url: "https://github.com/yourusername/nacva-automation"
      }
    ]
  };

  return (
    <BasePage
      seo={{
        title: "Software Development Resume",
        description: "My experience and skills in software development"
      }}
    >
      <ResumeTemplate {...resumeData} />
    </BasePage>
  );
};

export default SoftwareDevResume;