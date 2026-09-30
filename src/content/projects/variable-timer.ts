// src/content/projects/variable-timer.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

/*
  Written from the original 2019 project notes (a client's request, random
  intervals, notifications, a Play Store release) and what the app was for:
  timing variable-interval reinforcement in ABA sessions. An earlier version
  of this page described a spaced-repetition study app, which it never was.
*/
const variableTimer: ProjectBase = {
  detailPage: true,
  id: 'variable-timer',
  title: 'Variable-Interval Timer for ABA Therapy',
  cardTitle: 'ABA Reinforcement Timer',
  description: 'An Android app I built for a client that times variable-interval reinforcement for Registered Behavior Technicians (RBTs) during ABA therapy sessions.',
  longDescription: 'I built the app in Java with Android Studio between May and August 2019.',
  image: getImagePath('/images/projects/variable_timer.png'),
  category: 'learning-tech',
  tags: [
    'ABA Therapy',
    'Variable-Interval Reinforcement',
    'Behavioral Psychology',
    'Android',
    'Java'
  ],
  status: 'completed',
  date: 'May 2019 - Aug 2019',
  businessContext: 'In Applied Behavior Analysis (ABA) therapy, some behavior plans use a variable-interval schedule of reinforcement. After a stretch of time passes, the next target behavior is reinforced, and the length of that stretch changes every time around a set average so the learner can\'t predict it. Run by hand, that means the technician has to make up unpredictable times and keep checking a clock while running the session. My client wanted an app to handle the timing, and there wasn\'t one on the Google Play Store.',
  challenges: [
    'The intervals had to be genuinely random. If they fall into a pattern, the schedule is no longer variable.',
    'The timer had to keep running, and the alert had to arrive on time, with the phone locked or another app open.',
    'It couldn\'t drain the battery while running in the background.'
  ],
  solutions: [
    'Generated the intervals with hardware-based random number generation.',
    'Ran the timer as a background service, so it kept counting with the screen off.',
    'Sent a notification as each interval ended.',
    'Kept the background work light to save battery.'
  ],
  results: [
    'Released on the Google Play Store.',
    'Met the client\'s requirements, and the feedback from users was positive.'
  ]
};

export default variableTimer;
