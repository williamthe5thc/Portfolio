// src/content/projects/variable-timer.ts
import { ProjectBase } from '@/types/content';

const variableTimer: ProjectBase = {
  detailPage: true,
  id: 'variable-timer',
  title: 'Behavioral Learning Technology for ABA Therapy',
  description: 'Developed mobile learning reinforcement tool for Registered Behavior Technicians (RBTs) to optimize timing of behavioral interventions in ABA therapy sessions',
  longDescription: `Developed specialized mobile learning technology for Registered Behavior Technicians (RBTs) working in Applied Behavior Analysis (ABA) therapy. The application provides variable interval timing to support evidence-based behavioral reinforcement strategies, helping RBTs optimize the timing of interventions during therapy sessions with children.

This tool applies behavioral psychology principles and learning science research to create practical technology that enhances therapeutic outcomes. The variable timing functionality is based on established ABA methodology for reinforcement scheduling, demonstrating the application of learning technology to support professional practice in behavioral health settings.`,
  image: "/images/projects/variable_timer.png",
  category: 'learning-tech',
  tags: [
    'ABA Therapy',
    'Behavioral Technology',
    'RBT Tools',
    'Variable Interval Reinforcement',
    'Mobile Learning Technology',
    'Behavioral Psychology'
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