// src/content/projects/deal-or-no-deal.ts
import { ProjectBase } from '@/types/content';

const dealOrNoDeal: ProjectBase = {   detailPage: true,
  id: 'deal-or-no-deal',
  title: 'Deal or No Deal Educational Game',
  description: 'Created an educational version of Deal or No Deal to inspire next generation of programmers',
  longDescription: `Developed an interactive Deal or No Deal game using Adobe Flash and ActionScript to demonstrate 
  programming capabilities and inspire students. The game was created as an educational tool for teachers to show 
  practical applications of programming concepts while engaging students through familiar game mechanics.`,
  image: "./images/thumbnails/coming_soon.png", // Awaiting actual image
  category: 'development',
  tags: [
    'Game Development',
    'Educational Software',
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
    'Educational Design'
  ],
  methodology: 'Educational Game Development',
  learningObjectives: [
    'Create engaging educational game',
    'Implement game mechanics',
    'Design interactive experience',
    'Demonstrate programming concepts'
  ],
  challenges: [
    'Recreating game mechanics',
    'Maintaining student engagement',
    'Balancing entertainment and education',
    'Technical implementation'
  ],
  solutions: [
    'Developed intuitive game interface',
    'Created engaging gameplay elements',
    'Implemented scoring system',
    'Added educational components'
  ],
  results: [
    'Successfully inspired students',
    'Demonstrated programming concepts',
    'Created engaging learning tool',
    'Positive teacher feedback'
  ]
};

export default dealOrNoDeal;