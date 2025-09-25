// src/content/projects/object-tracking.ts
import { ProjectBase } from '@/types/content';

const objectTracking: ProjectBase = {   detailPage: true,
  id: 'object-tracking-assessment',
  title: 'Performance Assessment Technology - Video Analysis',
  description: 'Developed video-based performance tracking technology for objective skills assessment, enabling data-driven evaluation of hands-on learning outcomes',
  longDescription: `Pioneered innovative video analysis technology for objective performance assessment in hands-on learning environments. Created sophisticated tracking systems capable of monitoring precise movements, tool usage, and procedural compliance during practical skills demonstrations. This technology addresses the critical challenge of objective assessment in simulation-based training and skills certification programs, providing data-driven insights into learner performance that traditional observation methods cannot capture.`,
  image: "./images/thumbnails/coming_soon.png", // Awaiting actual image
  category: 'id',
  tags: [
    'Performance Assessment',
    'Skills Evaluation',
    'Video Analysis',
    'Objective Measurement',
    'Learning Analytics',
    'Assessment Technology'
  ],
  status: 'completed',
  date: '2023',
  tools: [
    'Adobe Premiere Pro',
    'Motion Tracking Tools',
    'Video Effects',
    'Color Grading Tools'
  ],
  methodology: 'Learning Analytics & Assessment Technology Development',
  learningObjectives: [
    'Enable objective measurement of hands-on skills performance',
    'Provide data-driven insights for skills assessment and certification',
    'Support scalable evaluation in simulation-based training programs',
    'Create standardized assessment protocols for practical skills'
  ],
  challenges: [
    'Traditional skills assessment relies on subjective observation methods',
    'Difficulty in providing consistent, objective feedback for hands-on performance',
    'Need for scalable assessment solutions in high-volume training programs',
    'Capturing precise movement data for detailed performance analysis'
  ],
  solutions: [
    'Developed sophisticated video tracking algorithms for objective performance measurement',
    'Created standardized assessment protocols ensuring consistent evaluation criteria',
    'Implemented automated analysis systems reducing assessment time and increasing accuracy',
    'Built scalable technology infrastructure supporting multiple assessment scenarios'
  ],
  results: [
    'Pioneered objective assessment methodology for hands-on skills evaluation',
    'Created data-driven performance feedback systems for learner improvement',
    'Developed scalable assessment technology applicable to various training domains',
    'Demonstrated innovative approach to learning analytics and performance measurement'
  ]
};

export default objectTracking;