// src/content/projects/waltz-course.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const waltzCourse: ProjectBase = {
  detailPage: true,
  id: "teaching-waltz",
  title: "Teaching the Waltz Online Course",
  description: "I created this online dance education course for teaching waltz to beginners. This project involved applying ADDIE methodology and ARCS motivation model to transform physical dance instruction into an engaging digital learning experience.",
  longDescription: "Graduate final project, co-designed with a classmate, taking a physical skill - the waltz box step and progressive basic - and building it into a self-paced Canvas course for complete beginners. The interesting constraint is that dance is kinesthetic and the delivery is not: learners cannot be corrected in the moment, so the design has to anticipate the mistakes instead. We worked from a written needs assessment through a full module blueprint, then assessment design, then a small-group formative evaluation. Instruction was filmed rather than sourced from existing video so that demonstrations could deliberately show the common errors as well as the correct form.",
  image: getImagePath('/images/thumbnails/how-to-waltz.jpg'),
  category: "id",
  tags: ["Instructional Design", "Online Learning", "Dance Education", "Canvas LMS", "Curriculum Development"],
  status: "completed",
  date: "2023",
  metrics: [
    { value: '4', label: 'Participants in small-group formative evaluation' }
  ],
  
  // Case Study Documentation
  projectUrl: getImagePath('/case-studies/waltz-formative-evaluation.pdf'),
  artifacts: [
    {
      label: 'Module Blueprint & Storyboard',
      href: '/case-studies/waltz-blueprint-storyboard.pdf',
      description:
        '17-page curriculum map: instructional goals mapped to learning objectives, assessments, and learning experiences, module by module'
    },
    {
      label: 'Assessment & Evaluation Plan',
      href: '/case-studies/waltz-formative-evaluation.pdf',
      description:
        'Assessment design and the small-group formative evaluation that validated the course with four participants'
    }
  ],
  tools: ["Canvas LMS", "Adobe Premier Pro", "Educational Design Tools"],
  methodology: "Comprehensive ADDIE Framework with ARCS Motivation Model Integration and Universal Design for Learning Implementation",
  learningObjectives: [
  "Identify and execute the motions of the basic box step",
  "Identify and execute the motions of the basic progressive step",
  "Execute the underarm turn with a partner",
  "Describe the origin and history of the waltz",
  "Discuss the historical impact of the waltz on modern dance",
  "Identify the physical health benefits of dancing based on scientific research",
  "Identify mental health benefits of dancing based on scientific research",
  "Recognize the modern social context of the waltz"
],
  challenges: [
    "Translating physical instruction to online format",
    "Creating effective video demonstrations",
    "Designing appropriate assessment methods",
    "Maintaining student engagement in virtual environment"
  ],
  
  businessContext: "Coursework brief with a real design problem inside it: teach a physical, partnered skill to absolute beginners through an asynchronous online course. Learners had no dance background, no instructor present to correct their form, and no partner guaranteed. Our own constraints were a fixed end-of-semester deadline and limited access to the instructor we were filming.",
  
  targetAudience: "Able-bodied adults from a wide range of backgrounds with little to no dancing experience, motivated by personal interest rather than any requirement. Defined in the needs assessment as learners who can walk and stand without major difficulty and who can watch, read, and listen to instruction - which set the accessibility floor for the media choices.",
  
  stakeholders: [
    "Course instructor as evaluator and client stand-in",
    "Adult learners (primary users)", 
    "Professional dance instructor (subject matter expert)",
    "Canvas LMS administrators (technical support)",
    "Community moderators (ongoing support)"
  ],
  
  learningTheoryApplied: [
    "ARCS Model (Attention, Relevance, Confidence, Satisfaction)",
    "Cognitive Load Theory for skill acquisition",
    "Social Learning Theory for peer interaction",
    "Constructivist Learning for knowledge building",
    "Universal Design for Learning (UDL)",
    "Adult Learning Theory (Andragogy)"
  ],
  
  // COMPREHENSIVE ADDIE METHODOLOGY DOCUMENTATION
  addieMethodology: {
    analysis: {
      needsAssessment: "Worked from a written needs assessment rather than collected data. No survey of prospective learners was run for this project - the instructional need was established by defining the target learner and the skill gap directly.",
      learnerAnalysis: "Learners were defined in the needs assessment as able-bodied adults from a wide range of backgrounds with little to no dancing experience, able to watch, read, and listen to instruction. That last condition set the accessibility floor for media choices, since a purely visual demonstration would have excluded part of the intended audience.",
      contextAnalysis: "Online learning environment required innovative approach to physical skill instruction, necessitating multi-modal content delivery and creative assessment methodologies",
      performanceGaps: "Beginners could not perform the box step or progressive basic, alone or with a partner, and could not combine individual movements into a continuous step. No survey was run for this project - the need was established from the written needs assessment rather than from collected data."
    },
    design: {
      instructionalStrategy: "Scaffolded learning approach progressing from individual movements to partner coordination, utilizing video modeling, written instructions, and peer feedback systems",
      arcsApplication: {
        attention: "Engaging video introductions featuring professional dancers, historical context storytelling, and interactive timeline of waltz evolution",
        relevance: "Real-world scenarios including wedding preparation, social event confidence, and cultural literacy components connecting to learner goals",
        confidence: "Progressive skill building with immediate feedback, self-paced learning modules, and multiple practice opportunities before assessment",
        satisfaction: "Discussion forums for peer feedback and video submissions so learners could see their own progress"
      },
      assessmentStrategy: "Competency-based video submissions with rubric evaluation, peer feedback exercises, historical knowledge quizzes with immediate feedback, and self-reflection journals tracking progress",
      universalDesign: "Multiple content representations (video, text, audio), flexible engagement methods (individual practice, partner work, group discussions), various expression options (video, written, discussion participation)"
    },
    development: {
      contentCreation: "Filmed a dancer who volunteered his time, rather than sourcing existing footage, so demonstrations could show the common mistakes alongside the correct form - something stock video cannot do. Scheduling around his availability was one of the real production constraints on the project",
      accessibilityFeatures: "Implemented closed captioning for all videos, high contrast visual elements, keyboard navigation compatibility, and alternative text descriptions for all images",
      interactivityDevelopment: "Created discussion forums for peer learning, interactive quizzes with immediate feedback, video upload capabilities for assessment submissions, and progress tracking tools"
    },
    implementation: {
      pilotTesting: "Ran a small-group formative evaluation with four participants to validate course organization and clarity before wider use",
      launchStrategy: "Phased enrollment approach with instructor presence for first cohort to address questions and refine content based on real-time learner feedback",
      supportSystems: "Established weekly office hours, peer mentoring program, and comprehensive FAQ resources based on pilot testing insights"
    },
    evaluation: {
      kirkpatrickModel: {
        reaction: "Small group evaluation with 4 participants showed positive response to course organization, clarity, and accessibility. Participants agreed modules were well organized, clear, sufficient for learning objectives, and easy to access (responses ranging from somewhat agree to completely agree).",
        learning: "Participants reported feeling at least somewhat competent in topics after modules. Module completion times ranged 5-30 minutes (first module average: 10.75 minutes, second module average: 14.75 minutes), indicating appropriate cognitive load management.",
        behavior: "Feedback revealed successful online-to-physical skill transfer, with participants able to identify common mistakes and execute dance steps. Survey comments indicated improved learner comprehension through multi-modal instruction approach.",
        results: "Course design validation through systematic user testing identified specific improvement areas: video content enhancement, diagram clarification, and accessibility optimization. Feedback-driven iteration demonstrates responsive instructional design methodology."
      },
      continuousImprovement: "Implemented systematic feedback collection and quarterly course updates based on learner suggestions and emerging best practices in online physical skill instruction"
    }
  },
  
  designProcess: {
    challengesAndSolutions: {
      physicalToDigitalTranslation: "Major challenge translating partner-based, in-person instruction to online module. Addressed through multiple camera angles, slow-motion demonstrations, written instructions with diagrams, and innovative practice exercise design enabling effective online motor skill development.",
      engagementMaintenance: "Purpose-filmed demonstrations rather than stock footage, discussion forums for peer learning, and video submissions so learners could show progress and get feedback without an instructor present.",
      assessmentAuthenticity: "Developed video submission protocols with detailed rubrics enabling objective evaluation of dance technique. Created alternative assessment option for learners without available partners, ensuring inclusive participation.",
      accessibilityCompliance: "Implemented closed captioning for all videos, high contrast visual elements, keyboard navigation compatibility, alternative text descriptions for all images, and multiple content modalities accommodating diverse learning preferences."
    },
    innovativeSolutions: [
      "Created 'practice partner' simulation exercises for individual skill development before partner work",
      "Developed rhythm training modules using visual metronome and counting systems",
      "Implemented peer review system enabling collaborative learning in virtual environment",
      "Designed historical context integration connecting cultural significance to technical instruction"
    ]
  },
  
  professionalImpact: {
    instructionalInnovation: "Developed systematic approach to online physical skill instruction that addresses fundamental challenge of kinesthetic learning in virtual environments. Created replicable methodology for translating partner-based, hands-on instruction to accessible digital format.",
    evidenceBasedRevision: "Formative evaluation identified specific enhancement priorities: video content improvements, diagram clarification with highlighted starting positions, and accessibility optimization. Systematic feedback collection drives continuous improvement cycle.",
    scalabilityModel: "Framework applicable to various physical skills training including corporate team-building programs, therapeutic movement instruction, and cultural education initiatives. Design accommodates geographic distribution, scheduling flexibility, and diverse comfort levels.",
    industryContribution: "Demonstrates effective online-to-physical skill transfer methodology valuable for corporate training environments requiring hands-on skill development in virtual or hybrid delivery models."
  },
  solutions: [
    "Developed multi-modal instruction methods",
    "Filmed purpose-built demonstrations that deliberately modelled common mistakes, not just correct form",
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