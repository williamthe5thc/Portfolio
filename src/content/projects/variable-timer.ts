// src/content/projects/variable-timer.ts
import { ProjectBase } from '@/types/content';

const variableTimer: ProjectBase = {
  detailPage: true,
  id: 'variable-timer',
  title: 'Spaced Learning & Habit Formation Mobile App',
  description: 'Developed a mobile learning reinforcement tool that applies spaced repetition principles to support habit formation and microlearning delivery in corporate training environments',
  longDescription: `Created an innovative mobile application that leverages behavioral psychology principles to support learning retention and habit formation. The app generates scientifically-optimized variable intervals based on spaced repetition research, helping users develop consistent learning behaviors and reinforcing key concepts over time. Originally developed to address a specific client need, this solution demonstrates the application of learning science to create practical tools that support ongoing professional development and skill reinforcement.`,
  image: "./images/projects/variable_timer.png",
  category: 'development',
  tags: [
    'Spaced Learning',
    'Behavioral Psychology',
    'Mobile Learning',
    'Habit Formation',
    'Microlearning',
    'Learning Reinforcement'
  ],
  status: 'completed',
  date: 'May 2019 - Aug 2019',
  tools: [
    'Android Studio',
    'Java',
    'Android SDK',
    'Git'
  ],
  methodology: 'Learning Science Application & Agile Development',
  learningObjectives: [
    'Apply spaced repetition principles to support long-term retention',
    'Create habit formation tools based on behavioral psychology research',
    'Develop mobile learning solutions for just-in-time training delivery',
    'Enable consistent learning behavior reinforcement for busy professionals'
  ],
  challenges: [
    'Translating spaced repetition research into practical mobile application',
    'Creating optimal interval algorithms that support learning retention without overwhelming users',
    'Designing intuitive user experience for habit formation and learning reinforcement',
    'Balancing learning science principles with technical implementation constraints'
  ],
  solutions: [
    'Applied evidence-based spaced repetition algorithms from cognitive psychology research',
    'Implemented adaptive interval generation that responds to user behavior patterns',
    'Created user-centered design focused on habit formation and sustained engagement',
    'Developed efficient background processing to support consistent learning reinforcement'
  ],
  results: [
    'Successfully deployed mobile learning tool supporting spaced repetition for professional development',
    'Created practical application of learning science principles for habit formation',
    'Demonstrated ability to bridge instructional design theory with technical implementation',
    'Provided scalable solution for microlearning and just-in-time training delivery'
  ]
};

export default variableTimer;