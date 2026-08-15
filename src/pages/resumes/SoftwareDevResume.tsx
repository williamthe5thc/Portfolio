// src/pages/resumes/SoftwareDevResume.tsx
import React from 'react';
import BasePage from '../BasePage';
import ResumeTemplate from '@/components/shared/ResumeTemplate';
import { getImagePath } from '@/utils';

const SoftwareDevResume: React.FC = () => {
  const resumeData = {
    title: "Software Development Resume",
    subtitle: "Learning Engineer & Technical Problem Solver",
    summary: `Developer who builds the technical layer of learning programs - Python automation for LMS backends, React and TypeScript front ends, and the tooling that connects instructional design teams to engineering. Psychology and instructional design background means I can talk to both sides.`,
    downloadUrl: getImagePath('/documents/Coding_Resume.pdf'),
    experience: [
      {
        title: "Instructional Designer",
        company: "WeYouth (501(c)(3) nonprofit)",
        period: "March 2026 - Present",
        highlights: [
          "Evaluated learning management systems against organizational requirements and delivered the platform recommendation the nonprofit adopted and runs on",
          "Implemented SME-authored curriculum into the LMS: course and module architecture, assessment configuration, and cohort enrollment across three learner tracks",
          "Own technical support for the platform, from administrator onboarding to resolving learner and coach access issues"
        ]
      },
      {
        title: "Instructional Design Intern",
        company: "Chartway Federal Credit Union",
        period: "May 2025 - July 2025",
        highlights: [
          "Ran a mixed-methods needs analysis for the FiCEP certification program: 5 semi-structured interviews and a survey returning 21 responses",
          "Applied thematic analysis to identify the top barrier to certification (limited protected study time, 23 mentions)",
          "Delivered an evidence-based recommendation set covering organizational support, practice-exam alignment, and content personalization"
        ]
      },
      {
        title: "Instructional Designer - Contractor",
        company: "National Association of Certified Valuators and Analysts (NACVA)",
        period: "April 2023 - Aug. 2023",
        highlights: [
          "Wrote Python automation to streamline backend data management for the CVA and MAFF certification programs",
          "Converted and processed training video content for continuing-education delivery",
          "Migrated instructional content off legacy platforms"
        ]
      }
    ],
    projects: [
      {
        title: "NACVA Course Processing Automation",
        description: "Python scripts that automate course processing and backend data entry for professional certification programs, replacing manual repetitive work in the content delivery pipeline.",
        url: "/portfolio/nacva-automation"
      },
      {
        title: "Variable Interval Timer",
        description: "Behavioral learning technology tool built for ABA therapy applications, applying spaced-interval reinforcement principles in a modern web front end.",
        url: "/portfolio/variable-timer"
      },
      {
        title: "This Portfolio Site",
        description: "React 18 + TypeScript + Vite + Tailwind, with a typed content layer, dual staging/production deploy pipeline, and Vitest coverage."
      }
    ],
    education: [
      {
        degree: "Master of Education",
        field: "Instructional Design & Educational Technology",
        institution: "University of Utah",
        period: "2023 - 2025",
        relevantCourses: [
          "Learning Analytics",
          "Educational Technology",
          "Instructional Systems Design"
        ]
      },
      {
        degree: "Bachelor of Science",
        field: "Psychology",
        institution: "Brigham Young University - Idaho",
        period: "2012 - 2018",
        relevantCourses: [
          "Certificate in Programming",
          "Data Structures",
          "Statistical Analysis"
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