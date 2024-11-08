// src/content/projects/sacrament-macro.ts
import { ProjectBase } from '@/types/content';

const sacramentMacro: ProjectBase = {   detailPage: true,
  id: 'sacrament-macro',
  title: 'Sacrament Meeting Program Generator',
  description: 'Developed VBA macro to automate weekly program creation for over 100 attendees',
  longDescription: `Created an efficient automation solution using VBA (Visual Basic for Applications) 
  to streamline the creation of weekly meeting programs for bulletin board specialists. The macro 
  automated the process of generating formatted programs for meetings with over one hundred attendees, 
  significantly reducing manual effort and ensuring consistency.`,
  image: "./images/thumbnails/coming_soon.png", // Awaiting actual image
  category: 'development',
  tags: [
    'VBA',
    'Automation',
    'Microsoft Office',
    'Process Improvement',
    'Document Generation'
  ],
  status: 'completed',
  date: '2015',
  tools: [
    'Microsoft Excel',
    'VBA',
    'Office Automation',
    'Document Templates'
  ],
  methodology: 'Process Automation',
  learningObjectives: [
    'Implement VBA automation',
    'Create efficient document generation',
    'Improve workflow processes',
    'Design user-friendly solutions'
  ],
  challenges: [
    'Managing large attendee lists',
    'Ensuring format consistency',
    'Creating user-friendly interface',
    'Handling various program types'
  ],
  solutions: [
    'Developed template-based system',
    'Implemented error checking',
    'Created intuitive user controls',
    'Built flexible formatting options'
  ],
  results: [
    'Reduced program creation time',
    'Improved format consistency',
    'Streamlined weekly workflow',
    'Positive user feedback'
  ]
};

export default sacramentMacro;