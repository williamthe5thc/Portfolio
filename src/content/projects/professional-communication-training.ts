// src/content/projects/professional-communication-training.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const professionalCommunicationTraining: ProjectBase = {
  detailPage: true,
  id: "professional-communication-training",
  title: "Articulate Storyline 360 Demonstration - Interactive E-learning Course",
  cardTitle: "Branching Storyline Course",
  role: "Academic project. I built the course in Articulate Storyline 360.",
  description: "A 278-slide interactive course I built in Articulate Storyline 360. Learners make choices in branching scenarios, and the scenarios and feedback draw on behavioral psychology research.",
  longDescription: "I built this as an academic project on interpersonal communication in dating, from first swipe to first date. The subject is personal, but the techniques are the ones workplace soft-skills training uses: branching scenarios where each choice has consequences, feedback on decisions, and reflection activities. The same structure would work for customer service, team communication or leadership training.",
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
  businessContext: "An academic project in advanced Storyline 360 authoring and scenario design. The topic is dating and interpersonal communication, and the design patterns carry over to soft-skills training at work, such as customer service, teamwork and professional relationships.",

  // Instructional Design Process
  challenges: [
    "Building branching scenarios in Storyline 360 where each choice leads somewhere different",
    "Applying behavioral psychology research within the limits of an e-learning course",
    "Assessing interpersonal skills in a self-paced course",
    "Covering the whole topic while keeping a 278-slide course moving",
    "Keeping the interactive elements accessible"
  ],
  
  solutions: [
    "Branching with 15+ decision points and several paths through the course",
    "Scenarios and feedback based on behavioral psychology research",
    "Reflection activities and self-evaluation checks",
    "A range of interaction types across the course",
    "Clear navigation, with accessibility practices applied to the interactions"
  ],
  
  // Learning Technology Innovation
  results: [
    "Built a 278-slide interactive course in Storyline 360",
    "26 minutes of scenario-based content with branching",
    "Tested with fellow students",
    "Built with Storyline variables, triggers and states"
  ],

  // Technical specifications for demos
  demoUrl: getImagePath('/demos/professional-communication-training/story.html'),
  demoDescription: "The 278-slide interactive e-learning course, built in Articulate Storyline 360."
};

export default professionalCommunicationTraining;
