// src/content/professional/methodology.ts
import { Methodology } from '@/types/content';

// src/content/professional/methodology.ts

export const methodology = {
  title: "Evidence-Based Learning Solutions That Drive Results",
  summary: "As a Learning Technology Specialist completing my M.Ed. in Instructional Design (May 2025), I combine behavioral psychology research with innovative technology to create scalable learning solutions. My approach delivers measurable business outcomes through data-driven design and strategic automation.",

  corePrinciples: [
    {
      title: "Business Impact Focus", 
      description: "Creating learning solutions that deliver measurable organizational outcomes and drive performance improvements"
    },
    {
      title: "Learning Technology Innovation",
      description: "Leveraging automation and advanced tools to scale learning delivery and optimize organizational workflows"
    },
   
    {
      title: "Evidence-Based Design",
      description: "Applying behavioral psychology research and proven instructional design principles to ensure learning effectiveness"
    },
    {
      title: "SME Collaboration Excellence",  
      description: "Partnering with subject matter experts to preserve content quality while streamlining development processes"
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
      "Learning needs analysis",
      "Course design & development",
      "Assessment planning",
      "Learning objectives development",
      "Content strategy",
      "Educational UX research"
    ],
    technicalDesign: [
      "Multimedia content creation",
      "Web development fundamentals",
      "Interface prototyping",
      "Digital accessibility",
      "Responsive design principles"
    ],
    research: [
      "User interviews",
      "Usability testing",
      "Cognitive walkthroughs",
      "Learning analytics",
      "Educational research methods"
    ]
  },

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
        name: "Financial Wellness",
        applications: [
          "Professional Development - Continuing education design",
          "Compliance Training - Certification requirement management",
          "Adult Learning - Evidence-based curriculum development"
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