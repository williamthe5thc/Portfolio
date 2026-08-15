// src/content/projects/undergrad-programming.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const undergradProgramming: ProjectBase = {   detailPage: true,
  id: 'undergrad-programming',
  title: 'Undergraduate Programming Group Project',
  description: 'Collaborative programming project completed as part of undergraduate studies, demonstrating team development skills',
  longDescription: `Participated in a team-based programming project during undergraduate studies that focused on developing 
  software solutions through collaborative effort. The project emphasized version control, team coordination, and software 
  development best practices while delivering functional solutions to real-world problems.`,
  image: getImagePath('/images/thumbnails/coming_soon.png'),
  category: 'development',
  tags: [
    'Team Development',
    'Version Control',
    'Software Engineering',
    'Project Management',
    'Problem Solving'
  ],
  status: 'completed',
  date: '2018',
  tools: [
    'Programming Languages',
    'Version Control Systems',
    'Project Management Tools',
    'Development Frameworks'
  ],
  methodology: 'Agile Development',
  learningObjectives: [
    'Apply software development principles',
    'Practice team collaboration',
    'Implement version control',
    'Deliver working software solutions'
  ],
  challenges: [
    'Coordinating team efforts',
    'Managing code integration',
    'Meeting project deadlines',
    'Ensuring code quality'
  ],
  solutions: [
    'Implemented regular team meetings',
    'Used version control effectively',
    'Created clear documentation',
    'Established code review process'
  ],
  results: [
    'Successfully delivered project',
    'Gained team development experience',
    'Improved technical skills',
    'Learned project management practices'
  ]
};

export default undergradProgramming;