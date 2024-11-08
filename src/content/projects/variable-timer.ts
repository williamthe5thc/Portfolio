// src/content/projects/variable-timer.ts
import { ProjectBase } from '@/types/content';

const variableTimer: ProjectBase = {   detailPage: true,
  id: 'variable-timer',
  title: 'Variable Timer Android App',
  description: 'Developed an Android application that generates random time intervals and notifies users',
  longDescription: `Created an Android application in response to a client's need for a random interval timer. 
  The app generates true random intervals and notifies users when the time has elapsed. This project was developed 
  to fill a gap in available applications on the Google Play store.`,
  image: "./images/thumbnails/coming_soon.png", // Awaiting actual image
  category: 'development',
  tags: [
    'Android Development',
    'Java',
    'Mobile App',
    'UI Design',
    'Notification Systems'
  ],
  status: 'completed',
  date: 'May 2019 - Aug 2019',
  tools: [
    'Android Studio',
    'Java',
    'Android SDK',
    'Git'
  ],
  methodology: 'Agile Development',
  learningObjectives: [
    'Create native Android applications',
    'Implement notification systems',
    'Design user-friendly interfaces',
    'Handle background processes'
  ],
  challenges: [
    'Implementing true random number generation',
    'Managing background processes',
    'Creating reliable notifications',
    'Optimizing battery usage'
  ],
  solutions: [
    'Used hardware-based random number generation',
    'Implemented efficient background services',
    'Created robust notification system',
    'Optimized app performance'
  ],
  results: [
    'Successfully deployed to Google Play Store',
    'Met client requirements',
    'Positive user feedback',
    'Gained Android development experience'
  ]
};

export default variableTimer;