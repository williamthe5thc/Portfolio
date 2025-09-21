// src/content/projects/how-to-videos.ts
import { ProjectBase } from '@/types/content';

const howToVideos: ProjectBase = {   detailPage: true,
  id: 'basic-how-to-videos',
  title: 'Basic How-to Videos with Claude',
  description: 'Created instructional video content using Adobe Express, featuring AI-assisted instruction',
  longDescription: `Produced a series of instructional videos using Adobe Express, incorporating AI assistance through Claude 
  to create clear, engaging how-to content. This project combined video editing skills with AI technology to develop 
  effective instructional materials.`,
  image: "./images/thumbnails/coming_soon.png", // Awaiting actual image
  category: 'premier',
  tags: [
    'Adobe Express',
    'Video Editing',
    'AI Integration',
    'Instructional Design',
    'Content Creation'
  ],
  status: 'completed',
  date: '2023',
  tools: [
    'Adobe Express',
    'Claude AI',
    'Video Editing Tools'
  ],
  methodology: 'Instructional Video Design',
  learningObjectives: [
    'Create clear instructional content',
    'Integrate AI assistance effectively',
    'Develop engaging video presentations',
    'Optimize video for learning'
  ],
  challenges: [
    'Balancing AI and human instruction',
    'Creating engaging visual content',
    'Maintaining consistent quality',
    'Optimizing video length'
  ],
  solutions: [
    'Developed AI-human collaboration workflow',
    'Implemented visual design principles',
    'Created content templates',
    'Optimized video pacing'
  ],
  results: [
    'Produced effective instructional videos',
    'Successfully integrated AI assistance',
    'Created reusable content framework',
    'Positive viewer feedback'
  ]
};

export default howToVideos;