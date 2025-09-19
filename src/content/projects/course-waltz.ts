// src/content/projects/waltz-course.ts
import { ProjectBase } from '@/types/content';

const waltzCourse: ProjectBase = {
  detailPage: true,
  id: "teaching-waltz",
  title: "Teaching the Waltz Online Course",
  description: "A comprehensive Canvas-based course teaching the fundamentals of waltz dancing through online instruction",
  longDescription: "An online learning module designed to teach waltz dancing to beginners, including both technical dance instruction and historical context. The course features video demonstrations, written instructions, interactive assessments, and community discussion components.",
  image: "./images/thumbnails/how-to-waltz.jpg",
  category: "id",
  tags: ["Instructional Design", "Online Learning", "Dance Education", "Canvas LMS", "Curriculum Development"],
  status: "completed",
  date: "2023",
  tools: ["Canvas LMS", "Adobe Premier Pro", "Educational Design Tools"],
  methodology: "ADDIE Instructional Design Model with emphasis on universal design for learning principles",
  learningObjectives: [
  "Identify and execute the motions of the basic box step",
  "Identify and execute the motions of the basic progressive step",
  "Execute the underarm turn with a partner",
  "Describe the origin and history of the waltz",
  "Discuss the historical impact of the waltz on modern dance",
  "Identify the physical health benefits of dancing based on scientific research",
  "Identify mental health benefits of dancing based on scientific research",
  "Recognize the modern social context of the waltz"
],
  challenges: [
    "Translating physical instruction to online format",
    "Creating effective video demonstrations",
    "Designing appropriate assessment methods",
    "Maintaining student engagement in virtual environment"
  ],
  solutions: [
    "Developed multi-modal instruction methods",
    "Created custom instructional videos with professional dance instructor",
    "Implemented peer discussion and feedback systems",
    "Designed rubric-based video assessment submissions"
  ],
  results: [
    "Successfully created comprehensive online waltz course",
    "Integrated both technical and historical dance education",
    "Developed accessible learning materials for remote students",
    "Created scalable dance education platform"
  ]
};

export default waltzCourse;