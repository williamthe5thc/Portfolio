// src/content/professional/methodology.ts
import { Methodology } from '@/types/content';

// src/content/professional/methodology.ts

export const methodology = {
  title: "Cognitive Science-Based Instructional Design",
  summary: "I design learning programs the way the research says they should be built - systematic needs analysis first, cognitive load and adult learning theory driving the structure, and evaluation instruments built in from the start rather than added at the end. A psychology research background means I read the evidence directly, and enough technical depth means I can stand up the platform the program runs on instead of handing it off. M.Ed., University of Utah.",

  corePrinciples: [
    {
      title: "Andragogy-Centered Adult Learning", 
      description: "Applying Knowles' adult learning principles, self-directed learning strategies, and ARCS motivation model to design engaging professional development experiences"
    },
    {
      title: "Cognitive Load Theory Application",
      description: "Trained in Sweller's cognitive load theory, Mayer's multimedia learning principles, and evidence-based instructional design through University of Utah's cognitive science-focused IDET program"
    },
    {
      title: "Universal Design for Learning (UDL)",
      description: "Implementing multiple means of representation, engagement, and action/expression to create accessible and inclusive learning experiences for diverse adult learners"
    },
    {
      title: "Systematic ADDIE Methodology",  
      description: "Comprehensive training in systematic instructional design process including learner analysis, scaffolding strategies, formative evaluation, and Kirkpatrick model assessment frameworks"
    }
  ],

  process: [
    {
      phase: "Analysis & Planning",
      activities: [
        "Conduct needs assessments and learner analysis",
        "Define clear learning objectives",
        "Select appropriate instructional strategies",
        "Plan evaluation methods"
      ]
    },
    {
      phase: "Design & Development",
      activities: [
        "Create user-centered learning experiences",
        "Develop multimedia content using Adobe Creative Suite",
        "Apply UI/UX principles for engagement",
        "Ensure accessibility standards"
      ]
    },
    {
      phase: "Implementation",
      activities: [
        "Deploy learning solutions",
        "Monitor user experience",
        "Gather feedback",
        "Support learner progress"
      ]
    },
    {
      phase: "Evaluation",
      activities: [
        "Measure learning outcomes",
        "Analyze performance data",
        "Make evidence-based improvements",
        "Document lessons learned"
      ]
    }
  ],

  frameworks: {
    instructionalDesign: {
      name: "ADDIE Model",
      description: "Core framework studied in graduate coursework",
      phases: [
        { name: "Analysis", description: "Understanding learning context and needs" },
        { name: "Design", description: "Planning the learning experience" },
        { name: "Development", description: "Creating learning materials" },
        { name: "Implementation", description: "Delivering the solution" },
        { name: "Evaluation", description: "Assessing effectiveness" }
      ]
    },
    cognitiveScience: {
      name: "Cognitive Load Theory",
      description: "Managing cognitive load in multimedia learning",
      principles: [
        "Split-attention principle",
        "Modality principle", 
        "Redundancy principle",
        "Multimedia principle"
      ]
    },
    hci: {
      name: "User-Centered Design",
      description: "HCI principles for learning interfaces",
      methods: [
        "User research",
        "Usability testing",
        "Iterative prototyping",
        "Accessibility testing"
      ]
    }
  },

  skills: {
    instructionalDesign: [
      "ADDIE Framework & SAM Model Implementation",
      "Learner Analysis using Andragogy Principles",
      "Cognitive Load Theory Application",
      "Bloom's Taxonomy for Learning Objectives",
      "ARCS Motivation Model Integration",
      "Scaffolding & Zone of Proximal Development",
      "Universal Design for Learning (UDL)",
      "Kirkpatrick Model Evaluation Framework"
    ],
    learningTheory: [
      "Adult Learning Theory (Andragogy)",
      "Constructivist Learning Approaches",
      "Social Cognitive Theory Application",
      "Multimedia Learning Principles (Mayer)",
      "Authentic Assessment Design",
      "Formative & Summative Evaluation",
      "Transfer Theory & Application",
      "Cognitive Psychology Foundations"
    ],
    technicalCompetencies: [
      "Articulate Storyline 360 & Rise 360",
      "Canvas LMS Administration",
      "SCORM Packaging & Compliance",
      "Python Automation for Learning Systems",
      "Accessibility Standards (WCAG 2.1)",
      "Learning Analytics & Data Visualization",
      "Responsive eLearning Development",
      "Multimedia Content Creation"
    ]
  },

  processExamples: [
    {
      title: "Needs Analysis Documentation",
      description: "Complete needs analysis report for FiCEP curriculum redesign project, demonstrating systematic research methodology, data collection, thematic analysis, and evidence-based recommendations",
      document: "/case-studies/ficep-needs-analysis.pdf",
      project: "chartway-ficep-enhanced",
      highlights: [
        "Mixed-methods research with 5 interviews and 21 survey responses",
        "Systematic thematic analysis identifying 23 mentions of time barriers",
        "Evidence-based recommendations with implementation roadmap",
        "Demonstrates ADDIE Analysis phase in professional context"
      ]
    },
    {
      title: "Formative Evaluation Report",
      description: "Comprehensive formative evaluation of online dance course showing systematic feedback collection, user testing methodology, and data-driven revision planning",
      document: "/case-studies/waltz-formative-evaluation.pdf",
      project: "teaching-waltz",
      highlights: [
        "Small group evaluation with 4 participants and systematic feedback",
        "Multi-modal assessment approach (surveys, interviews, usability testing)",
        "Data-driven revision plan addressing video, imagery, and accessibility",
        "Demonstrates ADDIE Evaluation phase with Kirkpatrick model application"
      ]
    }
  ],

  tools: {
    design: [
      {
        name: "Articulate Suite",
        applications: [
          "Storyline 360 - Interactive e-learning development",
          "Rise 360 - Responsive course creation",
          "Review 360 - Stakeholder feedback management"
        ]
      },
      {
        name: "Learning Technology",
        applications: [
          "Canvas LMS - Course management & delivery",
          "Assessment Design - Competency-based evaluation",
          "Learning Analytics - Performance measurement"
        ]
      }
    ],
    development: [
      {
        name: "Automation & Efficiency",
        applications: [
          "Python - Workflow automation & data processing",
          "Process Optimization - Content development streamlining",
          "Quality Assurance - Validation system implementation"
        ]
      },
      {
        name: "Professional Content",
        applications: [
          "Adobe Creative Suite - Multimedia content creation",
          "Camtasia - Video production & demonstrations",
          "Microsoft 365 - Professional documentation"
        ]
      }
    ],
    learning: [
      {
        name: "Professional Certification Support",
        applications: [
          "FiCEP Curriculum Redesign - Exam preparation optimization for financial counselors",
          "Adult Learning Design - Evidence-based curriculum development for professional certifications",
          "Assessment Alignment - Learning objectives matched to certification requirements"
        ]
      },
      {
        name: "Learning Measurement",
        applications: [
          "Impact Assessment - Business outcome evaluation",
          "Data Analysis - Learning effectiveness measurement",
          "Stakeholder Reporting - Results communication"
        ]
      }
    ]
  }
};

export default methodology;