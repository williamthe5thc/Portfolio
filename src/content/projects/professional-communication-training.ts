// src/content/projects/professional-communication-training.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const professionalCommunicationTraining: ProjectBase = {
  detailPage: true,
  id: "professional-communication-training",
  title: "Articulate Storyline 360 Demonstration - Interactive E-learning Course",
  cardTitle: "Branching Storyline Course",
  description: "I created a 278-slide interactive e-learning course using Articulate Storyline 360. This project showcases advanced branching scenarios, behavioral psychology application, and sophisticated interactive design techniques.",
  longDescription: "Originally developed as an academic project focused on interpersonal communication and dating relationships, this comprehensive interactive e-learning experience showcases advanced Articulate Storyline 360 development capabilities and evidence-based instructional design methodology. While the content addresses personal relationship dynamics, the underlying instructional design framework, branching scenarios, and behavioral psychology applications demonstrate transferable skills highly relevant to professional communication training, team building workshops, and workplace relationship development programs. The project exemplifies systematic ADDIE implementation, interactive scenario design, and assessment integration that could be readily adapted for corporate soft skills training, customer service communication, or leadership development initiatives.",
  image: getImagePath('/images/projects/professional-communication-training.jpg'),
  imageAlt: "Title graphic: How to Date More Effectively - From First Swipe to First Date",
  category: "id",
  tags: ["Articulate Storyline 360", "Interactive Design", "Scenario-Based Learning", "Behavioral Psychology", "Academic Project", "Advanced Features", "E-learning Development"],
  status: "completed",
  date: "2025",
  metrics: [
    { value: '278', label: 'Slides built in Articulate Storyline 360' },
    { value: '26 min', label: 'Scenario-based branching content' }
  ],
  
  // Business Context
  businessContext: "Academic project demonstrating mastery of advanced Articulate Storyline 360 authoring techniques and instructional design methodology. While the specific content focuses on interpersonal communication and dating dynamics, the underlying ID framework, interactive design patterns, and behavioral psychology applications showcase capabilities directly transferable to corporate soft skills training, customer service excellence, team dynamics, and professional relationship building programs.",

  // Instructional Design Process
  challenges: [
    "Creating complex branching scenarios with meaningful consequences in Articulate Storyline 360",
    "Implementing behavioral psychology principles within interactive e-learning constraints",
    "Designing engaging assessment methods that measure interpersonal skill development",
    "Balancing comprehensive content coverage with user engagement in a 278-slide course",
    "Ensuring accessibility and universal design principles throughout interactive elements"
  ],
  
  solutions: [
    "Developed sophisticated branching logic with 15+ decision points and multiple learning pathways",
    "Integrated evidence-based behavioral psychology research into scenario design and feedback",
    "Created interactive assessment elements including reflection activities and self-evaluation tools",
    "Applied instructional design principles to maintain engagement through varied interaction types",
    "Implemented accessibility best practices and clear navigation for diverse learner needs"
  ],
  
  // Learning Technology Innovation
  results: [
    "Successfully created 278-slide comprehensive interactive e-learning experience demonstrating advanced authoring skills",
    "Delivered 26 minutes of engaging, scenario-based content with sophisticated branching interactions",
    "Achieved high learner engagement through complex decision trees and meaningful consequence modeling",
    "Demonstrated mastery of advanced Articulate Storyline 360 features including variables, triggers, and states",
    "Created reusable instructional design framework applicable to corporate soft skills training development"
  ],

  // Technical specifications for demos
  demoUrl: getImagePath('/demos/professional-communication-training/story.html'),
  demoDescription: "The 278-slide interactive e-learning course, built in Articulate Storyline 360."
};

export default professionalCommunicationTraining;
