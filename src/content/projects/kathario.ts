// src/content/projects/kathario.ts
import { ProjectBase } from '@/types/content';

const kathario: ProjectBase = {
  detailPage: true,
  id: 'kathario',
  title: 'Kathario - Dance Knowledge Crossword',
  description: 'Team-developed crossword puzzle application to enhance knowledge of dancing terminology and concepts',
  longDescription: `Collaborated with a team to develop Kathario, an educational crossword puzzle application 
  designed to increase users' knowledge of dancing. The project was created for a client to make learning dance 
  terminology more engaging and interactive.`,
  image: "./images/thumbnails/coming_soon.png", // Awaiting actual image
  category: 'development',
  tags: [
    'Team Development',
    'Educational Software',
    'Game Design',
    'Client Project',
    'Dance Education'
  ],
  status: 'completed',
  date: 'May 2015 - Jul 2015',
  tools: [
    'Development Framework',
    'Version Control',
    'Project Management Tools',
    'Educational Design Tools'
  ],
  methodology: 'Team-based Development',
  learningObjectives: [
    'Create educational games',
    'Work effectively in a team',
    'Implement client requirements',
    'Design engaging user experiences'
  ],
  challenges: [
    'Coordinating team efforts',
    'Creating engaging puzzles',
    'Implementing educational content',
    'Meeting client specifications'
  ],
  solutions: [
    'Established clear team roles',
    'Developed puzzle generation system',
    'Integrated dance terminology database',
    'Regular client communication'
  ],
  results: [
    'Successfully delivered to client',
    'Enhanced dance education',
    'Improved team development skills',
    'Created reusable framework'
  ]
};

export default kathario;