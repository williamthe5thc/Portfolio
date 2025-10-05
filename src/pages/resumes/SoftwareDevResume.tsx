// src/pages/resumes/SoftwareDevResume.tsx
import React from 'react';
import BasePage from '../BasePage';
import ResumeTemplate from '@/components/shared/ResumeTemplate';

const SoftwareDevResume: React.FC = () => {
  const resumeData = {
    title: "Software Development Resume",
    subtitle: "Full-Stack Developer & Technical Problem Solver",
    summary: `Results-driven software developer with expertise in React, Python, and full-stack development. Passionate about creating efficient, user-friendly solutions and automating complex processes.`,
    downloadUrl: "/documents/Software-Dev-Resume.pdf",
    projects: [
      {
        title: "NACVA Course Processing Automation",
        description: "Developed Python scripts to automate course processing and data entry, significantly improving workflow efficiency. Reduced processing time by 75% for professional development content delivery.",
        url: "/portfolio/nacva-automation"
      },
      {
        title: "Object Tracking - Computer Vision",
        description: "Developed fully functional command line implementation of the classic Yahtzee dice game in C++, demonstrating advanced programming fundamentals and attention to user experience.",
        url: "/portfolio/object-tracking"
      },
      {
        title: "Command Line Yahtzee Game",
        description: "Created command line Yahtzee game in C++ showcasing strong programming fundamentals, game logic implementation, and user interaction design.",
        url: "/portfolio/yahtzee-command-line"
      },
      {
        title: "Gamification & Cultural Learning",
        description: "Designed and implemented Jeopardy-style game for gamification and cultural learning using web technologies.",
        url: "/portfolio/jeopardy-game"
      },
      {
        title: "Variable Interval Timer",
        description: "Built behavioral learning technology tool for ABA therapy applications using modern web development frameworks.",
        url: "/portfolio/variable-timer"
      },
      {
        title: "Stakeholder Digital Engagement Platform",
        description: "Developed chili cookoff voting platform demonstrating full-stack development capabilities and user engagement design.",
        url: "/portfolio/stakeholder-digital-engagement"
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