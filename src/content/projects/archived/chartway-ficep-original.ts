// src/content/projects/chartway-ficep.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const chartwayFicep: ProjectBase = {
  detailPage: true,
  id: 'chartway-ficep',
  title: 'Financial Wellness Curriculum Redesign - Chartway Credit Union',
  description: 'Leading evidence-based redesign of FiCEP certification curriculum using comprehensive needs analysis and ADDIE framework to improve financial literacy outcomes for credit union members',
  longDescription: `Currently leading a comprehensive redesign of the Financial Information Counseling and Education Program (FiCEP) curriculum at Chartway Credit Union, focusing on creating accessible, engaging financial literacy experiences for diverse learner populations. Applied systematic needs analysis including learner interviews and stakeholder consultations to identify performance gaps and design requirements. Implementing ADDIE framework within agile workflow structure to ensure data-driven curriculum development that addresses real-world financial wellness challenges faced by credit union members.`,
  image: "./images/thumbnails/coming_soon.png", // Awaiting actual image
  category: 'id',
  tags: [
    'Financial Literacy',
    'Curriculum Redesign',
    'Needs Analysis',
    'Adult Learning',
    'Evidence-Based Design',
    'Behavior Change'
  ],
  status: 'in-progress',
  date: 'May 2025 - July 2025',
  tools: [
    'ADDIE Framework',
    'Needs Analysis Tools',
    'Learner Interview Protocols',
    'Curriculum Design Templates',
    'Assessment Design Tools'
  ],
  methodology: 'ADDIE Framework with Agile Implementation',
  learningObjectives: [
    'Develop comprehensive financial literacy skills for credit union members',
    'Create accessible learning experiences for diverse adult learner populations',
    'Enable practical application of financial wellness concepts in real-world scenarios',
    'Support behavior change toward healthier financial decision-making'
  ],
  challenges: [
    'Diverse learner populations with varying financial literacy backgrounds',
    'Need to update curriculum to meet 6th Edition FiCEP standards',
    'Balancing comprehensive content with accessible delivery methods',
    'Addressing real-world application barriers in financial decision-making'
  ],
  solutions: [
    'Conducted systematic learner analysis through interviews and surveys',
    'Applied evidence-based instructional design principles for adult learning',
    'Implemented iterative design process allowing for continuous improvement',
    'Focused on practical application and behavior change strategies'
  ],
  results: [
    'Developed data-driven curriculum enhancement recommendations',
    'Created learner-centered design approach addressing diverse needs',
    'Implemented systematic design process ensuring quality and consistency',
    'Positioned for measurable improvement in financial literacy outcomes'
  ]
};

export default chartwayFicep;