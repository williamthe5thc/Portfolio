// src/content/professional/methodology.ts
import { Methodology } from '@/types/content';

// src/content/professional/methodology.ts

export const methodology = {
  title: "Design Philosophy & Methodology",
  summary: "As a graduate student in Instructional Design and Educational Technology, I combine learning theory with evidence-based practices to create effective learning experiences. My approach integrates key principles from cognitive science, human-computer interaction, and multimedia learning.",

  corePrinciples: [
    {
      title: "Theory-Informed Design",
      description: "Applying foundational learning theories and cognitive principles to create research-backed solutions"
    },
    {
      title: "Human-Centered Approach", 
      description: "Focusing on learner needs, contexts, and experiences through systematic analysis and iterative design"
    },
    {
      title: "Evidence-Based Practice",
      description: "Using research findings and established frameworks while staying current with emerging technologies and methods"
    },
    {
      title: "Continuous Learning",  
      description: "Developing expertise through coursework, projects, and collaboration with experienced practitioners"
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
        name: "Adobe Creative Suite",
        applications: [
          "Photoshop - Image editing & user personas",
          "Premiere Pro - Video production & demonstrations",
          "Illustrator - Vector graphics & interface elements"
        ]
      },
      {
        name: "Prototyping",
        applications: [
          "Figma - Interface design",
          "Adobe XD - UX prototyping",
          "InVision - Interactive prototypes"
        ]
      }
    ],
    development: [
      {
        name: "Web Technologies",
        applications: [
          "HTML5 - Structure & content",
          "CSS3 - Styling & responsiveness",
          "Bootstrap - UI framework"
        ]
      },
      {
        name: "Version Control",
        applications: [
          "Git - Code versioning",
          "GitHub - Project hosting"
        ]
      }
    ],
    learning: [
      {
        name: "Learning Platforms",
        applications: [
          "Canvas LMS - Course management",
          "Articulate - E-learning development",
          "Captivate - Interactive content"
        ]
      },
      {
        name: "Collaboration",
        applications: [
          "Microsoft 365 - Documentation",
          "Google Workspace - Team collaboration",
          "Zoom - Virtual instruction"
        ]
      }
    ]
  }
};

export default methodology;