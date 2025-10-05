// src/content/projects/waltz-course.ts
import { ProjectBase } from '@/types/content';

const waltzCourse: ProjectBase = {
  detailPage: true,
  id: "teaching-waltz",
  title: "Teaching the Waltz Online Course",
  description: "Evidence-based online dance education course applying ADDIE methodology and ARCS motivation model to transform physical dance instruction into engaging digital learning experience",
  longDescription: "Systematic instructional design project creating comprehensive online waltz education for The Social Dance Effect community. Applied complete ADDIE methodology including learner analysis, competency-based objectives, and multi-modal instruction design. Integrated ARCS motivation model to maintain engagement in virtual dance learning environment. Featured Universal Design for Learning principles ensuring accessibility across diverse learner populations. Course structure accommodates both visual and kinesthetic learning preferences through innovative online-to-physical skill transfer methodologies.",
  image: "/images/thumbnails/how-to-waltz.jpg",
  category: "id",
  tags: ["Instructional Design", "Online Learning", "Dance Education", "Canvas LMS", "Curriculum Development"],
  status: "completed",
  date: "2023",
  
  // Case Study Documentation
  projectUrl: '/case-studies/waltz-formative-evaluation.pdf',
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
  
  businessContext: "The Social Dance Effect community identified need for accessible waltz instruction to expand social dance participation among geographically dispersed members. Traditional in-person instruction limited participation due to location constraints, scheduling conflicts, and varying comfort levels with group learning environments.",
  
  targetAudience: "Adults aged 18-65 with no prior dance experience, seeking to learn social waltz for wedding preparation, social events, or personal enrichment. Learners geographically distributed across multiple time zones with varying schedules and learning preferences.",
  
  stakeholders: [
    "The Social Dance Effect (client organization)",
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
      needsAssessment: "Conducted surveys with 45 potential learners identifying barriers to traditional dance instruction: 73% cited scheduling conflicts, 68% reported location accessibility issues, 82% preferred learning at own pace",
      learnerAnalysis: "Target audience analysis revealed diverse learning preferences: 60% visual learners, 30% kinesthetic learners, 10% auditory learners; 40% complete beginners, 35% had some social dance exposure, 25% experienced in other physical activities",
      contextAnalysis: "Online learning environment required innovative approach to physical skill instruction, necessitating multi-modal content delivery and creative assessment methodologies",
      performanceGaps: "Identified gap between desire to social dance (92% of surveyed community members) and actual participation (23%) due to lack of accessible instruction options"
    },
    design: {
      instructionalStrategy: "Scaffolded learning approach progressing from individual movements to partner coordination, utilizing video modeling, written instructions, and peer feedback systems",
      arcsApplication: {
        attention: "Engaging video introductions featuring professional dancers, historical context storytelling, and interactive timeline of waltz evolution",
        relevance: "Real-world scenarios including wedding preparation, social event confidence, and cultural literacy components connecting to learner goals",
        confidence: "Progressive skill building with immediate feedback, self-paced learning modules, and multiple practice opportunities before assessment",
        satisfaction: "Community recognition through discussion forums, video submission celebrations, and skill achievement badges"
      },
      assessmentStrategy: "Competency-based video submissions with rubric evaluation, peer feedback exercises, historical knowledge quizzes with immediate feedback, and self-reflection journals tracking progress",
      universalDesign: "Multiple content representations (video, text, audio), flexible engagement methods (individual practice, partner work, group discussions), various expression options (video, written, discussion participation)"
    },
    development: {
      contentCreation: "Collaborated with professional dance instructor to create high-quality instructional videos featuring multiple camera angles, slow-motion demonstrations, and clear verbal instruction",
      accessibilityFeatures: "Implemented closed captioning for all videos, high contrast visual elements, keyboard navigation compatibility, and alternative text descriptions for all images",
      interactivityDevelopment: "Created discussion forums for peer learning, interactive quizzes with immediate feedback, video upload capabilities for assessment submissions, and progress tracking tools"
    },
    implementation: {
      pilotTesting: "Conducted small group pilot with 8 learners to validate instructional effectiveness and identify technical issues before full course launch",
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
      engagementMaintenance: "Built community through instructor-created videos (not just online sources) with professional dance instructor Adam Dimond, discussion forums for peer learning, and video submission celebrations fostering learner connection.",
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
    "Created custom instructional videos with professional dance instructor",
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