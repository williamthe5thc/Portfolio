// src/content/projects/object-tracking.ts
import { ProjectBase } from '@/types/content';

const objectTracking: ProjectBase = {   detailPage: true,
  id: 'object-tracking-video',
  title: 'Video Object Tracking',
  description: 'Advanced video editing project demonstrating object tracking on phone screens and faces using Adobe Premiere',
  longDescription: `Created sophisticated video effects using Adobe Premiere's object tracking capabilities. The project 
  showcased two distinct tracking scenarios: tracking content on a mobile phone screen and facial tracking. This demonstrated 
  proficiency in advanced video editing techniques and precise motion tracking implementation.`,
  image: "./images/thumbnails/coming_soon.png", // Awaiting actual image
  category: 'premier',
  tags: [
    'Adobe Premiere',
    'Motion Tracking',
    'Video Editing',
    'Visual Effects',
    'Post-Production'
  ],
  status: 'completed',
  date: '2023',
  tools: [
    'Adobe Premiere Pro',
    'Motion Tracking Tools',
    'Video Effects',
    'Color Grading Tools'
  ],
  methodology: 'Advanced Video Editing',
  learningObjectives: [
    'Master object tracking techniques',
    'Apply tracking to different scenarios',
    'Create seamless visual effects',
    'Maintain tracking accuracy'
  ],
  challenges: [
    'Maintaining tracking accuracy during motion',
    'Handling different tracking scenarios',
    'Creating natural-looking effects',
    'Managing processing requirements'
  ],
  solutions: [
    'Used advanced tracking algorithms',
    'Implemented scene-specific tracking techniques',
    'Optimized tracking points selection',
    'Applied smoothing techniques'
  ],
  results: [
    'Successfully tracked objects in multiple scenarios',
    'Created professional-looking effects',
    'Demonstrated advanced editing capabilities',
    'Built reusable tracking templates'
  ]
};

export default objectTracking;