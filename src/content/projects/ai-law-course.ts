// src/content/projects/ai-law-course.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

/*
  Team attribution is deliberate. This was a three-person capstone and we did
  not log individual ownership as we went, so the honest description is "we
  built it", plus the specifics I can stand behind (most of the Canvas build,
  and the Week 5 assessment design).

  The course was designed and built but never taught while Jordan was in the
  program (no students enrolled). Describe it as designed, not delivered: the
  grading numbers come from the syllabus, not from a course that ran. People
  (Jordan, Oct 2026): a law professor, a separate subject matter expert, a
  two-person capstone committee, and three student designers. Don't name them.
*/
const aiLawCourse: ProjectBase = {
  detailPage: true,
  id: 'ai-law-course',
  title: 'Graduate Curriculum Design Project - AI & Law Course',
  cardTitle: 'AI & Law Graduate Course',
  description: 'A three-person graduate capstone team designed and built this ten-module AI and Law course for Master of Legal Studies students, built in Canvas. We ran a client interview with the faculty sponsor, developed personas, ran a cognitive walkthrough on our own design, and validated it with a stakeholder review before handover. The course was not taught while I was in the program.',
  longDescription: `A graduate capstone, built by a team of three for the University of Utah's S.J. Quinney College of Law. The job was to teach artificial intelligence to Master of Legal Studies students without technical backgrounds, working with a faculty sponsor as our client, a separate subject matter expert, and a two-person capstone committee. We used a competency-based design to build ten modules for a 13-week online course, covering AI foundations, prompt engineering, legal research, media, and professional ethics. The syllabus assesses learners through five quizzes, five discussions, four assignments, a midterm project and a final project. The course was built in Canvas but not taught while I was in the program.`,
  image: getImagePath('/images/thumbnails/ai-law-course.webp'),
  imageAlt: 'Title graphic: Graduate Course Overview - AI & Law: Bridging Technology and Legal Expertise',
  category: 'id',
  tags: [
    'Canvas LMS',
    'Graduate Course Design',
    'Assessment Design',
    'AI Literacy',
    'SME Collaboration',
    'Usability Testing',
    'Universal Design for Learning'
  ],
  role: 'One of three designers on a graduate capstone team. I did most of the Canvas build and wrote the assessment design for the advanced prompting week.',
  status: 'completed',
  date: 'Fall 2024 - Spring 2025',
  metrics: [
    { value: '10', label: 'Graduate modules designed' },
    { value: '16', label: 'Graded pieces in the course syllabus' }
  ],

  // Demo URL for interactive preview
  demoUrl: getImagePath('/demos/ai-law-course/index.html'),
  // The course lives in Canvas and cannot be linked publicly, so this opens
  // the design record. Calling that an "interactive demo" would oversell it.
  demoLabel: 'View design record',
  demoDescription: 'The course lives in Canvas and cannot be linked publicly, so this opens the design record instead.',

  // From Student View in the Canvas course, Oct 2026; no names in any crop.
  screenshots: [
    {
      src: '/images/projects/ai-law-module1-welcome.jpg',
      alt: 'Module 1 Welcome Page in Canvas: a "Welcome to Module 1" banner, the heading "The Evolution of AI - Foundations and Fundamentals" and an introduction to the module.',
      caption: 'Each module opens with a welcome page that sets out what it covers.',
      width: 1016,
      height: 466
    },
    {
      src: '/images/projects/ai-law-module2-objectives.jpg',
      alt: 'Module 2 page listing learning objectives for prompt engineering, such as creating zero-shot, one-shot and few-shot prompts, followed by the learning activities that meet them.',
      caption: 'Objectives first, then the activities that meet them (Module 2, basic prompting).',
      width: 1016,
      height: 547
    },
    {
      src: '/images/projects/ai-law-module-structure.jpg',
      alt: 'Canvas modules list showing the end of Module 5, with Practice and Assess sections, and the start of Module 6, Advanced Prompting for Working Professionals, with a welcome page and a Learn section.',
      caption: 'Every module follows the same Learn, Practice, Assess pattern.',
      width: 738,
      height: 636
    },
    {
      src: '/images/projects/ai-law-rise-lesson.jpg',
      alt: 'Opening screen of an interactive lesson: "After this learning, you will be able to: define advanced prompting strategies, identify when to use advanced prompting techniques, create advanced prompts for specific tasks."',
      caption: 'An interactive lesson embedded in Canvas for the advanced prompting week.',
      width: 880,
      height: 240
    }
  ],

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
      label: 'Assessment design, advanced prompting week',
      href: '/case-studies/advanced-prompting-assessment-design.pdf',
      description: 'My own assessment plan for the advanced prompting week: a table of specifications mapped to cognitive levels, rubrics, an AI usage policy built on disclosure rather than prohibition, and item difficulty and discrimination indices for reviewing the questions afterwards.'
    }
  ],

  businessContext: 'The faculty sponsor already taught this material to Master of Legal Studies students and wanted it as an online, asynchronous course in Canvas. The learners are legal professionals without technical training. At the client interview the sponsor\'s brief was plain: keep it simple and not too technical, teach strategies rather than platforms, use cheap or free tools, and don\'t make learners create accounts on a long list of AI sites.',

  challenges: [
    'Learners with legal backgrounds and no technical training, who would lose interest if the course went too deep',
    'Every new AI tool meant another account to create, so the course had to lean on strategies more than tools',
    'AI tools change quickly, so anything tied to one platform would date fast',
    'Online and asynchronous, so every instruction had to work without a live class'
  ],

  solutions: [
    'Sequenced prompting from basic (Module 2) to advanced (Module 6), then applied it to ethics (Module 7) and legal tools (Modules 5 and 8)',
    'In my assessment plan for the advanced prompting week, an AI use policy that asks learners to name the tool and submit their prompt, instead of banning AI',
    'A syllabus with low-stakes quizzes about every other week and the lowest score dropped, so most of the grade (80%) rests on applied work: assignments, a midterm project and a final portfolio',
    'A final portfolio learners build across the semester, with assignments in Modules 4, 7, 8 and 9 feeding into it',
    'I set up a test module in Canvas to try embeds (video, iFrames, JavaScript, an AI chatbot) before adding them to the course',
    'Checked the content and design with the faculty sponsor, from the client interview through a stakeholder review before handover'
  ],

  results: [
    'Built ten modules in Canvas for an online, asynchronous MLS course. It had not been taught by the time I finished the program',
    'Tested the prototype with a cognitive walkthrough, a think-aloud session and a 10-question usability survey, then built four high-priority recommendations into the revision plan',
    'Wrote the assessment design for the advanced prompting week myself: specifications by cognitive level, rubrics and item analysis (see the work below)',
    'At the final stakeholder review, the faculty sponsor said the course covered the learning goals and liked the layout. Their suggestions: fewer overlapping quizzes, more scholarly readings, quicker feedback than essays allow, and a more readable banner font'
  ],

  lessonsLearned: 'The AI content dated faster than the design did. Anything naming a specific model or tool needed revising within months, while the module sequence and the assessment mix held up. Next time I would keep tool-specific material separate from the core lessons so it can be swapped without redesigning the course, and I would cut the overlap the sponsor pointed out between quizzes and matching activities.'
};

export default aiLawCourse;
