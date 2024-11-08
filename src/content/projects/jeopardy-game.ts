// src/content/projects/jeopardy-game.ts
import { ProjectBase } from '@/types/content';

const jeopardyGame: ProjectBase = {   detailPage: true,
  id: 'cultural-jeopardy',
  title: 'Pacific Islander Cultural Awareness Jeopardy',
  description: 'Developed interactive Jeopardy game to promote Pacific Islander cultural awareness',
  longDescription: `Created an engaging Jeopardy-style game using Adobe Flash to increase cultural awareness 
  about Pacific Islander communities. The game was designed for a school group of Pacific Islanders, combining 
  educational content with an entertaining game format to promote cultural understanding and appreciation.`,
  image: "./images/thumbnails/coming_soon.png", // Awaiting actual image
  category: 'development',
  tags: [
    'Game Development',
    'Cultural Education',
    'Adobe Flash',
    'ActionScript',
    'Interactive Learning'
  ],
  status: 'completed',
  date: '2008',
  tools: [
    'Adobe Flash',
    'ActionScript',
    'Game Design Tools',
    'Educational Content Development'
  ],
  methodology: 'Educational Game Design',
  learningObjectives: [
    'Promote cultural awareness',
    'Create engaging learning experience',
    'Implement quiz game mechanics',
    'Design cultural education content'
  ],
  challenges: [
    'Balancing education and entertainment',
    'Creating culturally accurate content',
    'Implementing game mechanics',
    'Designing engaging interface'
  ],
  solutions: [
    'Collaborated with cultural advisors',
    'Created intuitive game interface',
    'Developed engaging question format',
    'Implemented scoring system'
  ],
  results: [
    'Increased cultural awareness',
    'Created engaging educational tool',
    'Positive community feedback',
    'Enhanced cultural understanding'
  ]
};

export default jeopardyGame;