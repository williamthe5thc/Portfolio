// src/content/projects/dating-course.ts
import { ProjectBase } from '@/types/content';

const datingCourse: ProjectBase = {
  id: 'dating-course',
  title: 'Intro to Online Dating',
  description: 'Designed a comprehensive module in Articulate for introduction to online dating, incorporating modern learning principles and interactive elements',
  longDescription: 'Created an engaging e-learning module focused on effective online dating strategies, incorporating interactive scenarios, assessments, and practical guidance',
  methodology: 'ADDIE',
  learningObjectives: [
    'Understand effective online communication strategies',
    'Develop safe online dating practices',
    'Create engaging profile content'
  ],
  tools: ['Articulate Storyline', 'Articulate 360'],
  tags: ['Articulate Storyline', 'Articulate 360', 'ADDIE', 'Artificial Intelligence'],
  image: './images/projects/online-dating.jpg',
  status: 'inProgress',
  date: 'May 2024 - Jul 2024',
  category: 'elearning',
  projectUrl: 'https://360.articulate.com/review/content/2cd611c0-132c-439a-82e9-b883037d6385/review'
};

export default datingCourse;