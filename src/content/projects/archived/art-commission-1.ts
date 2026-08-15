// src/content/projects/art-commission-1.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const artCommission1: ProjectBase = {
  detailPage: true,
  id: 'art-commission-1',
  title: 'Client Artwork Commission 1',
  description: 'Created custom digital artwork for client using Adobe Photoshop',
  longDescription: `Developed personalized digital artwork based on client specifications using Adobe Photoshop. 
  The project involved translating client vision into digital art while maintaining artistic quality and meeting 
  specific requirements.`,
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

export default artCommission1;