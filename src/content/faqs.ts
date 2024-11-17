// src/content/support/faqs.ts
/**
 * @file faqs.ts
 * @description Frequently asked questions and answers
 * @module content/support
 * 
 * Features:
 * - Categorized questions
 * - Detailed answers
 * - SEO-friendly content
 * - Support information
 * 
 * @example
 * ```tsx
 * import { faqs } from '@/content/support';
 * 
 * // Display FAQ accordion
 * <FAQSection questions={faqs} />
 * ```
 */
// src/content/support/faqs.ts

import { FAQ } from '@/types/content';

export const faqs: FAQ[] = [
  {
    question: "What is your approach to instructional design?",
    answer: "I follow established methodologies like ADDIE and SAM while incorporating UX design principles to create engaging, user-centered learning experiences. My approach emphasizes evidence-based practices from cognitive science and learning theory, ensuring solutions that are both pedagogically sound and technologically effective."
  },
  {
    question: "What types of projects have you worked on?",
    answer: "As a graduate student in Instructional Design & Educational Technology, I've developed various projects including e-learning modules, interactive learning experiences, and multimedia content. Notable projects include developing cognitive walkthroughs for UX evaluation, creating multimedia learning modules, and implementing HCI principles in educational technology."
  },
  {
    question: "What tools and technologies do you use?",
    answer: "I work with industry-standard tools including Adobe Creative Suite (Photoshop, Premiere Pro, Illustrator) for multimedia content creation, learning management systems like Canvas, and web development technologies (HTML, CSS, Bootstrap). I also use prototyping tools like Figma and Adobe XD for UX/UI design."
  },
  {
    question: "How do you measure the success of learning solutions?",
    answer: "I implement a comprehensive evaluation strategy that includes both formative and summative assessments. This involves usability testing, learning outcome measurements, user feedback collection, and performance analytics to ensure the solution effectively meets both learning objectives and user needs."
  },
  {
    question: "What makes your instructional design approach unique?",
    answer: "My approach combines traditional instructional design principles with modern UX/UI practices. Having studied both learning theory and human-computer interaction, I create solutions that are not only pedagogically sound but also highly usable and engaging. I emphasize user research and iterative design to ensure solutions truly meet learner needs."
  },
  {
    question: "How do you handle accessibility in your designs?",
    answer: "Accessibility is a core consideration in my design process. I follow WCAG guidelines and universal design principles to ensure learning materials are accessible to all users. This includes proper color contrast, screen reader compatibility, keyboard navigation, and providing alternative formats for content."
  },
  {
    question: "What is your experience with multimedia development?",
    answer: "Through my graduate coursework in Multimedia Learning, I've developed skills in creating effective multimedia content using Adobe Creative Suite. This includes video production, graphic design, and interactive content development, all guided by multimedia learning principles to optimize cognitive load and learning effectiveness."
  },
  {
    question: "How do you stay current with emerging technologies and best practices?",
    answer: "I actively engage with current research through my graduate studies, participate in the instructional design community, and continually explore new tools and technologies. My coursework in emerging technologies keeps me informed about the latest developments in educational technology and their practical applications."
  }
];