// src/content/projects/art-commission-2.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const artCommission2: ProjectBase = {
  detailPage: true,
  id: 'art-commission-2',
  title: 'Client Artwork Commission 2',
  description: 'Developed custom digital artwork for client using Adobe Photoshop',
  longDescription: `Created custom digital artwork meeting specific client requirements using Adobe Photoshop. 
  This project showcased the ability to translate client requirements into digital art while maintaining artistic 
  integrity and professional quality.`,
  image: "./images/thumbnails/coming_soon.png", // Awaiting actual image
  category: 'photoshop',
  tags: [
    'Digital Art',
    'Adobe Photoshop',
    'Client Work',
    'Custom Design',
    'Digital Illustration'
  ],
  status: 'completed',
  date: '2023',
  tools: [
    'Adobe Photoshop',
    'Digital Drawing Tools',
    'Color Theory',
    'Digital Effects'
  ],
  methodology: 'Client-Focused Design',
  learningObjectives: [
    'Create client-specific artwork',
    'Apply digital art techniques',
    'Meet client requirements',
    'Deliver professional results'
  ],
  challenges: [
    'Interpreting client vision',
    'Meeting design specifications',
    'Maintaining artistic quality',
    'Managing revisions'
  ],
  solutions: [
    'Regular client communication',
    'Iterative design process',
    'Applied advanced techniques',
    'Thorough quality review'
  ],
  results: [
    'Delivered client-approved artwork',
    'Met all project requirements',
    'Positive client feedback',
    'Built portfolio piece'
  ]
};

export default artCommission2;