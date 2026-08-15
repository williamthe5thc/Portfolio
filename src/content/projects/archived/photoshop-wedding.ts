// src/content/projects/photoshop-wedding.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const weddingEdit: ProjectBase = {   detailPage: true,
  id: "wedding-photo-edit",
  title: "Wedding Photo Enhancement Project",
  description: "Digital enhancement and retouching of engagement photographs using professional editing software",
  longDescription: "Personal project focusing on photo enhancement and blemish removal for engagement photographs, utilizing professional editing techniques and tools",
  image: "./images/thumbnails/coming_soon.png", // Awaiting actual image
  category: "Digital Art",
  tags: ["Photo Editing", "Digital Enhancement", "Photography", "Wedding"],
  status: "Completed",
  date: "March 2024",
  tools: ["Photoshop", "Illustrator"],
  methodology: "Tutorial-based learning with goal-oriented editing approach",
  learningObjectives: null,
  challenges: [
    "Learning professional photo editing techniques",
    "Maintaining natural appearance while removing blemishes",
    "Mastering new software tools"
  ],
  solutions: [
    "Utilized online tutorials for technique learning",
    "Applied professional retouching methods",
    "Developed systematic editing workflow"
  ],
  results: [
    "Successfully enhanced engagement photos",
    "Improved photo editing skills",
    "Created polished final images"
  ]
};

export default weddingEdit;