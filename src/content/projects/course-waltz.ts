// src/content/projects/waltz-course.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const waltzCourse: ProjectBase = {
  detailPage: true,
  id: "teaching-waltz",
  title: "Teaching the Waltz Online Course",
  description: "I co-designed this online dance education course for teaching waltz to beginners. This project involved applying ADDIE methodology and ARCS motivation model to transform physical dance instruction into an engaging digital learning experience.",
  longDescription: "Graduate final project, co-designed with a classmate, taking a physical skill - the waltz box step and progressive basic - and building it into a self-paced Canvas course for complete beginners. The interesting constraint is that dance is kinesthetic and the delivery is not: learners cannot be corrected in the moment, so the design has to anticipate the mistakes instead. We worked from a written needs assessment through a full module blueprint, then assessment design, then a small-group formative evaluation. Instruction was filmed rather than sourced from existing video so that demonstrations could deliberately show the common errors as well as the correct form.",
  image: getImagePath('/images/thumbnails/how-to-waltz.webp'),
  category: "id",
  tags: ["Instructional Design", "Online Learning", "Dance Education", "Canvas LMS", "Curriculum Development"],
  status: "completed",
  date: "2023",
  metrics: [
    { value: '4', label: 'Participants in small-group formative evaluation' }
  ],
  
  // Case Study Documentation
  projectUrl: getImagePath('/case-studies/waltz-formative-evaluation.pdf'),
  projectUrlDescription: 'The complete formative evaluation report, including the assessment design.',
  artifacts: [
    {
      label: 'Module Blueprint & Storyboard',
      href: '/case-studies/waltz-blueprint-storyboard.pdf',
      description:
        '17-page curriculum map: instructional goals mapped to learning objectives, assessments, and learning experiences, module by module.'
    },
    {
      label: 'Assessment & Evaluation Plan',
      href: '/case-studies/waltz-formative-evaluation.pdf',
      description:
        'A one-page summary, then the assessment design and the small-group formative evaluation that validated the course with four participants.'
    }
  ],
  challenges: [
    "Translating physical instruction to online format",
    "Creating effective video demonstrations",
    "Designing appropriate assessment methods",
    "Maintaining student engagement in virtual environment"
  ],
  
  businessContext: "Coursework brief with a real design problem inside it: teach a physical, partnered skill to absolute beginners through an asynchronous online course. Learners had no dance background, no instructor present to correct their form, and no partner guaranteed. Our own constraints were a fixed end-of-semester deadline and limited access to the instructor we were filming.",

  // COMPREHENSIVE ADDIE METHODOLOGY DOCUMENTATION
  addieMethodology: {
    analysis: {
      needsAssessment: "Worked from a written needs assessment rather than collected data. No survey of prospective learners was run for this project - the instructional need was established by defining the target learner and the skill gap directly.",
      learnerAnalysis: "Learners were defined in the needs assessment as able-bodied adults from a wide range of backgrounds with little to no dancing experience, able to watch, read, and listen to instruction. That last condition set the accessibility floor for media choices, since a purely visual demonstration would have excluded part of the intended audience.",
      contextAnalysis: "Online learning environment required innovative approach to physical skill instruction, necessitating multi-modal content delivery and creative assessment methodologies.",
      performanceGaps: "Beginners could not perform the box step or progressive basic, alone or with a partner, and could not combine individual movements into a continuous step. No survey was run for this project - the need was established from the written needs assessment rather than from collected data."
    },
    design: {
      instructionalStrategy: "Scaffolded learning approach progressing from individual movements to partner coordination, utilizing video modeling, written instructions, and peer feedback systems.",
      assessmentStrategy: "Competency-based video submissions with rubric evaluation, peer feedback exercises, historical knowledge quizzes with immediate feedback, and self-reflection journals tracking progress.",
      universalDesign: "Multiple content representations (video, text, audio), flexible engagement methods (individual practice, partner work, group discussions), various expression options (video, written, discussion participation)"
    },
    development: {
      contentCreation: "Filmed a dancer who volunteered his time, rather than sourcing existing footage, so demonstrations could show the common mistakes alongside the correct form - something stock video cannot do. Scheduling around his availability was one of the real production constraints on the project.",
      accessibilityFeatures: "Implemented closed captioning for all videos, high contrast visual elements, keyboard navigation compatibility, and alternative text descriptions for all images.",
      interactivityDevelopment: "Created discussion forums for peer learning, interactive quizzes with immediate feedback, video upload capabilities for assessment submissions, and progress tracking tools."
    },
    implementation: {
      pilotTesting: "Ran a small-group formative evaluation with four participants to validate course organization and clarity before wider use.",
      launchStrategy: "Phased enrollment approach with instructor presence for first cohort to address questions and refine content based on real-time learner feedback.",
      supportSystems: "Established weekly office hours, peer mentoring program, and comprehensive FAQ resources based on pilot testing insights."
    },
    evaluation: {
      continuousImprovement: "Implemented systematic feedback collection and quarterly course updates based on learner suggestions and emerging best practices in online physical skill instruction."
    }
  },

  solutions: [
    "Developed multi-modal instruction methods",
    "Filmed purpose-built demonstrations that deliberately modeled common mistakes, not just correct form",
    "Implemented peer discussion and feedback systems",
    "Designed rubric-based video assessment submissions"
  ],
  results: [
    "Small group formative evaluation (4 participants) validated course effectiveness and identified specific enhancement opportunities - [View Complete Formative Evaluation Report](/case-studies/waltz-formative-evaluation.pdf)",
    "Systematic feedback collection revealed consensus on module organization, clarity, and learning objective alignment",
    "Multi-modal instructional approach successfully addressed diverse learning preferences (visual, kinesthetic, auditory learners)",
    "Evidence-based revision plan developed addressing video content, visual aids, and accessibility improvements",
    "Course design demonstrates scalable methodology for online physical skill instruction across diverse populations",
    "Innovative solutions including 'practice partner' simulation and rhythm training modules validated through user testing"
  ]
};

export default waltzCourse;