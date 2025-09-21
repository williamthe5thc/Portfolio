// src/content/projects/ego-depletion.ts
import { ProjectBase } from '@/types/content';

const egoDepletion: ProjectBase = {   detailPage: true,
  id: 'ego-depletion',
  title: 'Ego Depletion in Test Performance',
  description: 'Research project examining the effects of ego depletion on academic test performance',
  longDescription: `Conducted research presented at the Brigham Young University - Idaho Research and Creative Works 
  Conference, investigating ego depletion's impact on academic assessments. The study analyzed performance patterns 
  in 80-90 item tests, comparing success rates between early and late test items to understand cognitive fatigue effects.`,
  image: "./images/thumbnails/coming_soon.png", // Awaiting actual image
  category: 'research',
  tags: [
    'Academic Research',
    'Statistical Analysis',
    'Psychology',
    'Educational Assessment',
    'Data Analysis'
  ],
  status: 'completed',
  date: 'Sep 2013 - Dec 2013',
  tools: [
    'Statistical Software',
    'Research Methods',
    'Data Analysis Tools',
    'Presentation Software'
  ],
  methodology: 'Academic Research',
  learningObjectives: [
    'Design research methodology',
    'Analyze test performance data',
    'Apply statistical methods',
    'Present research findings'
  ],
  challenges: [
    'Developing testing methodology',
    'Collecting sufficient data',
    'Controlling variables',
    'Statistical analysis'
  ],
  solutions: [
    'Implemented controlled testing environment',
    'Gathered comprehensive dataset',
    'Applied rigorous statistical methods',
    'Developed clear presentation'
  ],
  results: [
    'Presented at academic conference',
    'Analyzed relationship between ego depletion and performance',
    'Found non-significant results (p=.115)',
    'Gained valuable research experience'
  ]
};

export default egoDepletion;