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
    question: "What makes your instructional design approach unique?",
    answer: "I bring a research-based foundation from the University of Utah's IDET program, specializing in cognitive science applications, evidence-based practice, and systematic evaluation methodologies. This combination of learning theory expertise and technical skills enables me to create learning solutions grounded in how people actually learn and process information."
  },
  {
    question: "What roles are you looking for?",
    answer: "I'm looking for instructional design, learning experience design, and learning technology roles where evidence-based design and measurable outcomes matter. I selected and now run the LMS for a youth nonprofit. During my internship at a credit union, I ran a needs analysis for their certification-prep program; they implemented the recommendations and reported better exam results afterward, though the figures stay confidential to protect employee privacy. I'm drawn to organizations that treat evaluation as part of the work rather than an afterthought."
  },
  {
    question: "What tools and technologies have you mastered?",
    answer: "I'm proficient in Articulate Storyline 360, Rise 360, LearnWorlds, Canvas LMS, Adobe Creative Suite, and Camtasia. My programming background includes Python for workflow automation and web development fundamentals. I also have training in accessibility compliance (WCAG standards) and learning analytics approaches."
  },
  {
    question: "How do you approach measuring learning effectiveness?",
    answer: "Through my University of Utah training, I've learned to design comprehensive evaluation frameworks that include both formative and summative assessment strategies. I focus on establishing clear learning objectives linked to specific cognitive processes and use systematic data collection methods to measure both learning outcomes and transfer of skills to real-world applications."
  }
];