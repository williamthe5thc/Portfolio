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
import { FAQ } from '@/types/content';

export const faqs: FAQ[] = [
  {
    question: "What types of projects do you work on?",
    answer: "I specialize in creating engaging e-learning experiences, instructional design solutions, and learning management system implementations with a focus on measurable outcomes and learner engagement."
  },
  {
    question: "What is your approach to instructional design?",
    answer: "I follow established methodologies like ADDIE and SAM, while maintaining flexibility to adapt to each project's unique needs. I emphasize learner-centered design and measurable outcomes."
  },
  {
    question: "What tools and technologies do you use?",
    answer: "I'm proficient in Articulate Storyline, Camtasia, Canvas LMS, and various authoring tools. I also have experience with programming languages for custom solutions."
  },
  {
    question: "How do you measure the success of your learning solutions?",
    answer: "I establish clear metrics at the start of each project and use various assessment methods to measure learning outcomes, engagement, and practical application of skills."
  }
];