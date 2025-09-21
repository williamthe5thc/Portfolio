// src/content/projects/professional-communication-training.ts
import { ProjectBase } from '@/types/content';

const professionalCommunicationTraining: ProjectBase = {
  detailPage: true,
  id: "professional-communication-training",
  title: "Professional Networking & Relationship Building Skills",
  description: "An interactive Articulate Storyline 360 course developing essential workplace networking, professional relationship building, and interpersonal communication skills for career advancement",
  longDescription: "A comprehensive 26-minute interactive e-learning experience designed in Articulate Storyline 360 that teaches professionals how to build effective business relationships, network strategically, and communicate with confidence in professional environments. Originally developed as a graduate-level project exploring interpersonal dynamics, this course was adapted to focus on workplace applications, combining behavioral psychology principles with practical networking strategies to help employees develop stronger professional connections and advance their careers through relationship building.",
  image: "./images/projects/online-dating.jpg", // Reusing existing image
  category: "id",
  tags: ["Articulate Storyline 360", "Professional Networking", "Business Communication", "Career Development", "Workplace Relationships", "Behavioral Psychology"],
  status: "completed",
  date: "2025",
  tools: ["Articulate Storyline 360", "Interactive Design", "Behavioral Psychology", "Professional Development Strategy"],
  methodology: "Evidence-based instructional design combining behavioral psychology principles with professional networking best practices, delivered through interactive business scenarios and decision-making activities",
  
  // Business Context
  businessContext: "Organizations need employees who can build strategic professional relationships, network effectively for business development, and communicate confidently in professional settings. Poor networking and relationship-building skills limit career advancement opportunities and reduce organizational collaboration effectiveness.",
  
  targetAudience: "Mid-career professionals seeking career advancement, new employees building professional networks, managers developing business relationships, and sales professionals enhancing client relationship skills",
  
  learningObjectives: [
    "Develop strategic networking approaches for career advancement and business development",
    "Apply evidence-based relationship-building techniques in professional settings", 
    "Navigate professional networking events and business social situations with confidence",
    "Build and maintain effective business relationships across organizational levels and industries",
    "Recognize and adapt to different professional communication styles and cultural contexts",
    "Use authentic networking strategies that create mutual value and long-term connections",
    "Leverage digital platforms and in-person opportunities for professional relationship building",
    "Apply conflict resolution and difficult conversation techniques in professional relationships"
  ],
  
  // Instructional Design Process
  challenges: [
    "Translating interpersonal relationship dynamics into professional networking contexts",
    "Creating realistic business networking scenarios that resonate across industries",
    "Balancing authentic relationship-building with strategic career development goals",
    "Designing assessments that measure professional relationship and networking competencies",
    "Ensuring content addresses diverse professional environments and cultural sensitivities"
  ],
  
  solutions: [
    "Developed branching scenarios with realistic business networking decision points",
    "Created industry-relevant professional characters and networking situations",
    "Integrated career development theory with practical networking application",
    "Built in reflection activities and professional relationship goal-setting tools",
    "Applied universal design principles for diverse professional learning contexts"
  ],
  
  // Learning Technology Innovation
  results: [
    "Created 278-slide comprehensive interactive professional networking learning experience",
    "Delivered 26 minutes of engaging, scenario-based business relationship training content",
    "Achieved high interactivity through decision trees and realistic networking scenarios",
    "Demonstrated advanced Articulate Storyline 360 development capabilities with professional focus",
    "Built scalable professional development solution for corporate career advancement programs"
  ],
  
  lessonsLearned: "This project reinforced the importance of grounding professional development training in realistic business scenarios and evidence-based relationship psychology. The extensive use of interactive elements and decision-making activities created more engaging learning experiences than traditional networking training approaches.",
  
  // Technical specifications for demos
  demoUrl: "/demos/professional-communication-training/story.html", // Will work once Articulate files are copied
  
  // Features that showcase ID expertise
  features: [
    "Interactive Networking Scenarios: Learners navigate realistic business networking situations with multiple outcomes",
    "Behavioral Psychology Integration: Evidence-based strategies for building authentic professional relationships", 
    "Business Context Learning: Real professional networking events and workplace relationship scenarios",
    "Career Development Focus: Modules structured around strategic networking for advancement",
    "Assessment Integration: Professional relationship goal-setting and networking competency checks",
    "Mobile-Responsive Design: Accessible across all devices for busy professionals and learning environments"
  ]
};

export default professionalCommunicationTraining;