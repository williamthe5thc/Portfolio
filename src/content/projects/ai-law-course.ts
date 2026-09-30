// src/content/projects/ai-law-course.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

/*
  Team attribution is deliberate. This was a three-person capstone and we did
  not log individual ownership as we went, so the honest description is "we
  built it", plus the specifics I can stand behind (most of the Canvas build,
  and the Week 5 assessment design).
*/
const aiLawCourse: ProjectBase = {
  detailPage: true,
  id: 'ai-law-course',
  title: 'Graduate Curriculum Design Project - AI & Law Course',
  cardTitle: 'AI & Law Graduate Course',
  description: 'A three-person graduate capstone team designed and built this ten-week AI and Law course for Master of Legal Studies students, delivered in Canvas. We ran a client interview with the faculty sponsor, developed personas, ran a cognitive walkthrough on our own design, and validated it with a stakeholder review before handover.',
  longDescription: `A graduate capstone, built by a team of three for the University of Utah's S.J. Quinney College of Law. The job was to teach artificial intelligence to Master of Legal Studies students without technical backgrounds, working with a faculty sponsor who was both our client and our subject matter expert. We used a competency-based design to build a ten-module course, one module a week, covering AI foundations, prompt engineering, legal research, media, and professional ethics. Students were assessed through five quizzes, four applied assignments and five discussion cycles.`,
  image: getImagePath('/images/thumbnails/ai-law-course.webp'),
  imageAlt: 'Title graphic: Graduate Course Overview - AI & Law: Bridging Technology and Legal Expertise',
  category: 'id',
  tags: [
    'Curriculum Development',
    'Graduate Course Design',
    'SME Collaboration',
    'ADDIE Methodology',
    'Competency-Based Design',
    'Adult Learning Theory',
    'Assessment Design',
    'Technology-Based Instruction'
  ],
  status: 'completed',
  date: 'Fall 2024 - Spring 2025',
  metrics: [
    { value: '10', label: 'Graduate modules designed' },
    { value: '14', label: 'Graded assessments designed across the semester' }
  ],

  // Demo URL for interactive preview
  demoUrl: getImagePath('/demos/ai-law-course/index.html'),
  // The course lives in Canvas and cannot be linked publicly, so this opens
  // the design record. Calling that an "interactive demo" would oversell it.
  demoLabel: 'View design record',
  demoDescription: 'The course lives in Canvas and cannot be linked publicly, so this opens the design record instead.',

  /*
    Coursework artifacts, converted to web pages and redacted. The faculty
    sponsor's name and contact details and both teammates' names are removed;
    the syllabus and collaboration plan are not published at all because they
    carry personal phone numbers and email addresses.
  */
  artifacts: [
    {
      label: 'Client Interview',
      href: '/case-studies/ai-law/client-interview.html',
      description: 'The scoping conversation with the faculty sponsor that set what the course had to do.'
    },
    {
      label: 'HCI Cognitive Walkthrough',
      href: '/case-studies/ai-law/cognitive-walkthrough.html',
      description: 'A usability walkthrough of our own course build, a step most course design skips.'
    },
    {
      label: 'Instructional Strategies',
      href: '/case-studies/ai-law/instructional-strategies.html',
      description: 'The instructional approach chosen for each part of the course, with the reasoning behind it.'
    },
    {
      label: 'Media Selection',
      href: '/case-studies/ai-law/media-selection.html',
      description: 'Why we chose each medium for each kind of content.'
    },
    {
      label: 'Assessment Design, Week 5 module',
      href: '/case-studies/advanced-prompting-assessment-design.pdf',
      description: 'My own assessment plan for the advanced prompting week: a table of specifications mapped to cognitive levels, rubrics, an AI usage policy built on disclosure rather than prohibition, and item difficulty and discrimination indices for reviewing the questions afterwards.'
    }
  ],

  businessContext: 'Law schools need to prepare graduates to use AI in legal practice. Students need to understand how AI works, have practical skills with it, and have a way to think through the ethics.',

  challenges: [
    'Explaining technical AI ideas to legal students without a technical background',
    'Making dense, theoretical material engaging',
    'Balancing the basics with hands-on practice',
    'Keeping the content accurate while AI, and the law around it, change quickly',
    'Assessing both understanding and practical skill',
    'Meeting different learning needs in a graduate course'
  ],

  solutions: [
    'Sequenced the course from basic concepts to advanced uses',
    'Hands-on learning activities, and module navigation built for the course',
    'Competency-based assessments built on real-world scenarios',
    'Checked the content and design with the faculty sponsor, from the client interview through a stakeholder review before handover',
    'Applied Universal Design for Learning (UDL) principles for accessibility',
    'A final portfolio the students built across the semester, with assignments in Modules 4, 7, 8 and 9 feeding into it'
  ],

  results: [
    'Built a ten-module weekly curriculum delivered asynchronously in Canvas for the Spring 2025 MLS cohort',
    'Designed the assessment mix as five quizzes, four applied assignments, and five discussion cycles across the semester',
    'Ran a cognitive walkthrough against our own build and revised the navigation and instructions from what it surfaced',
    'Wrote the assessment design for the advanced prompting week myself, including an AI usage policy that required learners to disclose the tool and submit the prompt rather than banning its use',
    'Structured the course so it could be adapted for continuing legal education',
    'Set up a way to update the curriculum as AI changes',
    'Taught Master of Legal Studies students the AI basics they need for professional practice'
  ]
};

export default aiLawCourse;
