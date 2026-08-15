// src/content/projects/deal-or-no-deal.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const dealOrNoDeal: ProjectBase = {
  detailPage: true,
  id: 'gamification-stem-education',
  title: 'Gamification for STEM Education & Student Engagement',
  description: 'Created an educational version of Deal or No Deal to inspire next generation of programmers and demonstrate practical applications of programming concepts',
  longDescription: `Developed an interactive Deal or No Deal game using Adobe Flash and ActionScript specifically as an educational tool to inspire students and demonstrate practical programming applications. The game was designed to engage students through familiar game mechanics while showcasing programming capabilities and encouraging interest in STEM careers.

This project applied gamification principles to create an engaging learning experience that bridges entertainment and education. By recreating a popular game show format, the project demonstrated how programming concepts can be applied to create interactive experiences, serving as both a learning tool and inspiration for students considering programming careers.`,
  image: getImagePath('/images/thumbnails/DOND.png'),
  category: 'learning-tech',
  tags: [
    'Gamification',
    'STEM Education',
    'Student Engagement',
    'Adobe Flash',
    'ActionScript',
    'Educational Games'
  ],
  status: 'completed',
  date: '2008',
  tools: [
    'Adobe Flash',
    'ActionScript',
    'Game Design Principles',
    'Educational Technology'
  ],
  methodology: 'Gamification for Educational Engagement',
  learningObjectives: [
    'Inspire student interest in programming careers',
    'Demonstrate practical programming applications',
    'Create engaging STEM learning experience',
    'Bridge entertainment and education'
  ],
  challenges: [
    'Recreating familiar game mechanics accurately',
    'Maintaining educational value while entertaining',
    'Technical implementation in Flash/ActionScript',
    'Balancing game complexity with learning goals'
  ],
  solutions: [
    'Developed intuitive game interface matching original format',
    'Implemented engaging gameplay that showcases programming',
    'Created clear demonstrations of coding concepts',
    'Added educational commentary and explanations'
  ],
  results: [
    'Successfully inspired students to explore programming',
    'Demonstrated practical applications of coding skills',
    'Created reusable gamification framework for education',
    'Received positive feedback from educators and students'
  ]
};

export default dealOrNoDeal;