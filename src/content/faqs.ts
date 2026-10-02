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
    question: "How do you approach instructional design?",
    answer: "I start with the problem: who the learners are, what they can't yet do, and what is getting in the way. My M.Ed. in Instructional Design and Educational Technology at the University of Utah, and my psychology research background, shape how I choose formats and test them. I also build and run the platforms the courses live on, so I can follow a course from the first interview through to the learner's screen."
  },
  {
    question: "What roles are you looking for?",
    answer: "I'm looking for instructional design, learning experience design and learning technology roles. I selected and now run the LMS for a youth nonprofit. During my internship at a credit union, I ran a needs analysis for their certification-prep program; they implemented the recommendations and reported better exam results afterward, though the figures stay confidential to protect employee privacy. I'm drawn to organizations that treat evaluation as part of the work rather than an afterthought."
  },
  {
    question: "What tools do you use?",
    answer: "Articulate Storyline 360 and Rise, LearnWorlds, Canvas, Moodle, Adobe Creative Suite and Camtasia. For code, Python and Selenium for automation, and HTML, CSS, JavaScript, TypeScript and React for the web. I design to WCAG 2.1 AA accessibility standards."
  },
  {
    question: "How do you approach measuring learning effectiveness?",
    answer: "I write the objectives first, then build the quizzes, activities and surveys that show whether learners met them, and I put those checks inside the course so weak spots show up while a cohort is still running. For the waltz course I ran a small-group evaluation and planned revisions from it. For the law course we ran a cognitive walkthrough, a think-aloud and a usability survey."
  }
];