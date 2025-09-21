// src/content/projects/yahtzee-game.ts
import { ProjectBase } from '@/types/content';

const yahtzeeGame: ProjectBase = {   detailPage: true,
  id: 'yahtzee-game',
  title: 'Command Line Yahtzee',
  description: 'Developed a fully functional command line version of Yahtzee in C++ with save/load functionality',
  longDescription: `Created a command line implementation of the classic Yahtzee dice game using C++. The project 
  featured comprehensive error checking and the ability to save and load game states, demonstrating both programming 
  fundamentals and advanced file handling capabilities.`,
  image: "./images/thumbnails/coming_soon.png", // Awaiting actual image
  category: 'development',
  tags: [
    'C++',
    'Game Development',
    'Command Line Interface',
    'File I/O',
    'Error Handling'
  ],
  status: 'completed',
  date: 'Apr 2015 - May 2015',
  tools: [
    'C++',
    'Visual Studio',
    'Git',
    'File System Operations'
  ],
  methodology: 'Object-Oriented Programming',
  learningObjectives: [
    'Implement complex game logic',
    'Create save/load functionality',
    'Handle user input safely',
    'Design clear user interface'
  ],
  challenges: [
    'Implementing game rules accurately',
    'Creating reliable save system',
    'Handling invalid user input',
    'Managing game state'
  ],
  solutions: [
    'Developed robust scoring system',
    'Implemented binary file operations',
    'Created comprehensive error checking',
    'Designed intuitive user interface'
  ],
  results: [
    'Fully functional game implementation',
    'Successful save/load system',
    'Error-free gameplay experience',
    'Demonstrated C++ proficiency'
  ]
};

export default yahtzeeGame;