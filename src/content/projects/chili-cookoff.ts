// src/content/projects/chili-cookoff.ts
import { ProjectBase } from '@/types/content';

const chiliCookoff: ProjectBase = {
  detailPage: true,
  id: "chili-cookoff-voting",
  title: "Ward Chili Cook-off Digital Voting System",
  description: "A web-based voting application for managing and tallying votes at a community chili cook-off event",
  longDescription: "Digital solution for streamlining the voting process at a ward chili cook-off, featuring QR code access, real-time vote counting, and administrative controls",
  image: "/images/thumbnails/Voting.png",
  category: "Web Development",
  tags: ["Web Development", "Database Design", "QR Code", "Real-time Voting", "Community Event"],
  status: "Completed",
  date: "October 2024",
  tools: ["Vercel", "GitHub", "Brackets", "Claude AI"],
  methodology: "Agile development with stakeholder feedback integration",
  learningObjectives: null,
  challenges: [
    "Creating user-friendly voting interface",
    "Implementing secure vote counting system",
    "Ensuring mobile accessibility",
    "Managing real-time data updates"
  ],
  solutions: [
    "Developed QR code-based access system",
    "Created intuitive voting interface",
    "Implemented real-time vote tracking",
    "Integrated administrative controls"
  ],
  results: [
    "Successfully deployed for November 2nd, 2024 event",
    "Streamlined voting process",
    "Improved vote counting accuracy",
    "Positive stakeholder feedback"
  ]
};

export default chiliCookoff;