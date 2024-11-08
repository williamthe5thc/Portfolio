// src/content/projects/nacva-automation.ts
import { ProjectBase } from '@/types/content';

const nacvaAutomation: ProjectBase = {   detailPage: true,
  id: 'nacva-automation',
  title: 'NACVA Course Processing Automation',
  description: 'Developed Python automation scripts to streamline course processing and data entry at NACVA',
  longDescription: `Created efficient automation solutions at the National Association of Certified Valuators and 
  Analysts (NACVA) to streamline course processing workflows. Developed Python scripts to automate manual data entry 
  for course additions to the website and implemented document conversion tools for Word and Excel files, significantly 
  improving operational efficiency.`,
  image: "./images/thumbnails/coming_soon.png", // Awaiting actual image
  category: 'development',
  tags: [
    'Python',
    'Automation',
    'Process Improvement',
    'Data Processing',
    'Document Conversion'
  ],
  status: 'completed',
  date: 'Apr 2023 - Aug 2023',
  tools: [
    'Python',
    'Automation Scripts',
    'Document Processing',
    'Database Management'
  ],
  methodology: 'Process Automation',
  learningObjectives: [
    'Create efficient automation solutions',
    'Streamline business processes',
    'Implement document conversion',
    'Improve operational efficiency'
  ],
  challenges: [
    'Complex data entry requirements',
    'Multiple document formats',
    'System integration needs',
    'Maintaining data accuracy'
  ],
  solutions: [
    'Developed custom Python scripts',
    'Created automated workflow systems',
    'Implemented error checking',
    'Built conversion tools'
  ],
  results: [
    'Reduced manual data entry time',
    'Improved process efficiency',
    'Enhanced data accuracy',
    'Streamlined course processing'
  ]
};

export default nacvaAutomation;