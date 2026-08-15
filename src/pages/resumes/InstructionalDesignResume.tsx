// src/pages/resumes/InstructionalDesignResume.tsx
import React from 'react';
import BasePage from '../BasePage';
import ResumeTemplate from '@/components/shared/ResumeTemplate';
import { getImagePath } from '@/utils';

const InstructionalDesignResume: React.FC = () => {
  const resumeData = {
    title: "Instructional Design Resume",
    subtitle: "Learning Experience Designer & Educational Technology Specialist",
    summary: `Innovative instructional designer with a focus on creating engaging, effective learning experiences. Skilled in educational technology and curriculum development.`,
    downloadUrl: getImagePath('/documents/Instructional_Design_Resume.pdf'),
    experience: [
      {
        title: "Instructional Designer",
        company: "WeYouth (501(c)(3) nonprofit)",
        period: "March 2026 - Present",
        highlights: [
          "Ran LMS market research against the organization's constraints and delivered the platform recommendation the nonprofit adopted",
          "Implemented SME-authored curriculum into the LMS as enrollable self-paced courses with module architecture, self-assessments, and evaluation surveys",
          "Built separate athlete, coach, and captain tracks for Mental Performance Connection Coaching, serving young people ages 12-24",
          "Collaborate with founders, a licensed clinician, and coaching staff as SMEs on restructuring curriculum for self-paced online delivery",
          "Act as the technical support function for the platform and its administrators"
        ]
      },
      {
        title: "Financial Wellness Intern",
        company: "Chartway Federal Credit Union",
        period: "May 2025 - July 2025",
        highlights: [
          "Applied evidence-based ADDIE framework to redesign FiCEP curriculum helping financial counselors pass America's Credit Unions (ACU) professional examinations",
          "Conducted systematic needs analysis through learner interviews and stakeholder consultations to improve exam preparation effectiveness",
          "Applied adult learning theory and UX design principles to create accessible financial education experiences for diverse learner populations",
          "Collaborated with financial wellness team and subject matter experts to ensure curriculum alignment with certification requirements",
          "Implemented WCAG 2.1 AA compliance standards for inclusive curriculum design and accessibility",
          "Gained hands-on experience in professional instructional design implementation and evaluation frameworks"
        ]
      },
      {
        title: "Learning Technology Specialist (Contract)",
        company: "National Association of Certified Valuators and Analysts (NACVA)",
        period: "April 2023 - Aug 2023",
        highlights: [
          "Optimized continuing education content delivery workflows by converting legacy video content and streamlining backend processing systems",
          "Applied technical skills to reduce course deployment time from weeks to days for professional development member base",
          "Collaborated with subject matter experts to maintain content quality while implementing scalable learning technology solutions",
          "Developed understanding of professional certification compliance requirements and continuing education standards",
          "Contributed to learning technology infrastructure supporting organizational growth and efficiency improvements"
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
        title: "AI & Law: Bridging Technology and Legal Expertise",
        description: "Graduate curriculum design project developing a comprehensive 10-module graduate course on AI and law, demonstrating complex content translation abilities and advanced curriculum design skills through collaboration with university faculty.",
        url: "/portfolio/ai-law-course"
      },
      {
        title: "Articulate Storyline 360 Demonstration - Interactive E-learning Course",
        description: "Graduate-level Articulate Storyline 360 project demonstrating advanced authoring capabilities through a 278-slide interactive e-learning experience showcasing complex branching scenarios and behavioral psychology application.",
        url: "/portfolio/professional-communication-training"
      },
      {
        title: "Financial Wellness Internship - FiCEP Curriculum Needs Analysis",
        description: "Internship conducting systematic needs analysis for Chartway Credit Union's Financial Counseling Examination Preparation (FiCEP) program, applying ADDIE methodology and evidence-based research to identify performance gaps.",
        url: "/portfolio/chartway-ficep-enhanced"
      },
      {
        title: "Waltz Dance Course",
        description: "Developed comprehensive online course teaching waltz fundamentals using Canvas LMS with video demonstrations, written instructions, interactive assessments, and community discussion components.",
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