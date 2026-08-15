// src/content/projects/yahtzee-game.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const yahtzeeGame: ProjectBase = {
  detailPage: true,
  id: 'yahtzee-command-line',
  title: 'Command Line Yahtzee - Technical Programming Demonstration',
  description: 'Developed comprehensive command line Yahtzee game in C++ demonstrating advanced programming capabilities including game logic implementation, file I/O, error handling, and user experience design',
  longDescription: `Developed fully functional command line implementation of the classic Yahtzee dice game using C++, showcasing strong programming fundamentals and attention to user experience. The project features comprehensive game logic implementation, robust save/load functionality using file I/O operations, extensive error checking and input validation, and intuitive command line interface design.

This technical project demonstrates programming proficiency applicable to learning technology development, educational game creation, and technical tool building for instructional designers. The systematic approach to game logic, state management, and user interaction design parallels skills needed for developing custom learning tools, interactive assessments, and educational technology solutions.`,
  image: getImagePath('/images/thumbnails/Yahtzee.png'),
  category: 'technical',
  tags: [
    'C++ Programming',
    'Game Development',
    'Command Line Interface',
    'File I/O Operations',
    'Error Handling',
    'User Experience Design',
    'Object-Oriented Programming'
  ],
  status: 'completed',
  date: 'Apr 2015 - May 2015',
  
  tools: [
    'C++',
    'Visual Studio',
    'Git Version Control',
    'File System Operations',
    'Command Line Development'
  ],
  
  methodology: 'Object-Oriented Programming with Systematic Development Process',
  
  technicalDetails: {
    programmingConcepts: [
      'Object-Oriented Design: Classes, encapsulation, and modular code structure',
      'Game State Management: Tracking complex game states and turn progression',
      'File I/O Operations: Binary file reading/writing for save/load functionality',
      'Error Handling: Comprehensive input validation and exception management',
      'Algorithm Implementation: Scoring logic and rule enforcement systems',
      'User Interface Design: Intuitive command line interaction patterns'
    ],
    
    technicalChallenges: [
      'Implementing complex Yahtzee scoring rules with all category options and bonuses',
      'Creating reliable save/load system using binary file operations',
      'Handling diverse user input scenarios with robust error checking',
      'Managing game state across multiple turns and saving sessions',
      'Designing clear, user-friendly command line interface for complex game interactions'
    ],
    
    implementationHighlights: [
      'Comprehensive scoring system accurately implementing all Yahtzee rules and bonuses',
      'Robust binary file I/O enabling reliable game state persistence across sessions',
      'Extensive input validation preventing crashes and guiding users through errors',
      'Clean object-oriented architecture making code maintainable and extensible',
      'Intuitive user interface maximizing usability within command line constraints'
    ]
  },
  
  learningObjectives: [
    'Implement complex game logic following established rule systems',
    'Create reliable file I/O operations for data persistence',
    'Handle user input safely with comprehensive error checking',
    'Design clear, usable interface within technical constraints',
    'Apply object-oriented programming principles to complex project'
  ],
  
  challenges: [
    'Accurately implementing intricate Yahtzee scoring rules with multiple categories and bonus calculations',
    'Creating robust save system that reliably preserves all game state information',
    'Handling invalid user input gracefully without crashes or confusion',
    'Managing complex game state across turns, categories, and multiple play sessions',
    'Designing intuitive command line experience for game with many interaction options'
  ],
  
  solutions: [
    'Developed systematic scoring system with modular functions for each Yahtzee category',
    'Implemented binary file operations with error checking for reliable save/load functionality',
    'Created comprehensive input validation with helpful error messages guiding user corrections',
    'Designed clear game state tracking system managing all necessary information efficiently',
    'Built intuitive command line interface with clear prompts and feedback for all user actions'
  ],
  
  results: [
    'Successfully created fully functional Yahtzee game implementing all official rules',
    'Delivered reliable save/load system enabling game persistence across sessions',
    'Achieved error-free gameplay experience through comprehensive input validation',
    'Demonstrated strong C++ programming proficiency and software development skills',
    'Created polished user experience within technical constraints of command line interface'
  ],
  
  technicalSkillsShowcased: [
    'Advanced C++ Programming: Classes, objects, functions, and modern C++ practices',
    'File System Operations: Binary file reading/writing and error handling',
    'Algorithm Development: Complex game logic and scoring calculations',
    'Input Validation: Robust error checking and user input handling',
    'Software Architecture: Modular, maintainable code structure',
    'User Experience Design: Creating usable interfaces within technical constraints',
    'Version Control: Git for code management and project versioning',
    'Testing & Debugging: Ensuring reliable, error-free operation'
  ],
  
  relevanceToLearningTechnology: {
    applicableSkills: [
      'Game Mechanics Understanding: Foundation for educational game development and gamification',
      'State Management: Skills applicable to learning progress tracking and assessment systems',
      'Error Handling: Critical for educational software ensuring smooth learner experience',
      'File Operations: Useful for learning data persistence and user progress saving',
      'User Experience: Principles transferable to learner interface design'
    ],
    
    learningToolDevelopment: [
      'Custom learning tools and educational games for training programs',
      'Interactive assessment systems with complex scoring logic',
      'Progress tracking and learner data management systems',
      'Educational technology prototypes and proof-of-concept development',
      'Technical collaboration with developers on learning platform features'
    ]
  },
  
  features: [
    'Complete Game Implementation: All Yahtzee rules, categories, and scoring accurately implemented',
    'Save/Load Functionality: Reliable binary file operations for game state persistence',
    'Comprehensive Error Handling: Extensive input validation preventing crashes and guiding users',
    'Intuitive Interface: User-friendly command line design maximizing usability',
    'Object-Oriented Architecture: Clean, maintainable code structure following best practices',
    'Professional Development: Version control, testing, and documentation practices'
  ]
};

export default yahtzeeGame;
