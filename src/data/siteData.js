// src/data/siteData.js

export const siteMetadata = {
  title: "W. Jordan Charles Portfolio",
  author: "W. Jordan Charles",
  description: "Instructional Designer & Learning Solutions Developer",
  slogan: "Enhancing Learning Through Design",
  tagline: "Dedicated to partnering with organizations to unlock the full potential of their target demographic through engaging, results-driven learning experiences.",
  siteUrl: "https://williamthe5thc.github.io/Portfolio",
  defaultImage: "/path/to/default-og-image.jpg",
  social: {
    linkedin: "https://linkedin.com/in/jordan-charles",
    github: "https://github.com/williamthe5thc"
  },
  contactInfo: {
    email: "williamthe5thc@gmail.com",
    phone: "208.779.2406",
    linkedin: "linkedin.com/in/jordan-charles",
    location: "Salt Lake City, Utah"
  }
};

export const professionalSummary = {
  tagline: "Instructional Designer & Learning Solutions Developer",
  mission: "Dedicated to partnering with organizations to unlock the full potential of their target demographic through engaging, results-driven learning experiences",
  expertise: [
    "Instructional design using ADDIE and SAM models",
    "E-learning development with industry-leading tools",
    "Learning management system implementation",
    "Technical automation and process improvement",
    "Data-driven learning solutions"
  ]
};



// Projects section for siteData.js

export const projects = [
  // Existing Projects
  {
    id: "dating-course",
    title: "Intro to Online Dating",
    description: "Designed a comprehensive module in Articulate for introduction to online dating, incorporating modern learning principles and interactive elements",
    longDescription: "Created an engaging e-learning module focused on effective online dating strategies, incorporating interactive scenarios, assessments, and practical guidance",
    methodology: "ADDIE",
    learningObjectives: [
      "Understand effective online communication strategies",
      "Develop safe online dating practices",
      "Create engaging profile content"
    ],
    tools: ["Articulate Storyline", "Articulate 360"],
    tags: ["Articulate Storyline", "Articulate 360", "ADDIE", "Artificial Intelligence"],
    image: "./images/projects/online-dating.jpg",
    status: "in progress",
    date: "May 2024 - Jul 2024",
    category: "elearning"
  },
  {
    id: "waltz-course",
    title: "How to Teach the Waltz",
    description: "Developed a comprehensive Canvas LMS course for 'The Social Dance Effect' using backwards design and the ADDIE model",
    longDescription: "Collaborated with dance instructors to create an effective learning path for teaching waltz fundamentals, including video content and interactive assessments",
    methodology: "ADDIE with Backwards Design",
    learningObjectives: [
      "Master basic waltz steps and timing",
      "Understand proper form and technique",
      "Develop teaching methodology for dance instruction"
    ],
    tools: ["Canvas LMS", "Video Editing Software"],
    tags: ["Canvas", "LMS", "Dance Education", "ADDIE", "SME Collaboration"],
    image: "./images/projects/how-to-waltz.jpg",
    status: "completed",
    date: "Aug 2023 - Dec 2023",
    category: "id"
  },
  {
    id: "variable-timer",
    title: "Variable Timer App",
    description: "Developed an Android application for random interval generation with user notifications",
    longDescription: "Created a custom Android application to generate true random intervals and notify users, addressing a specific client need not met by existing solutions",
    tools: ["Android Studio", "Java"],
    tags: ["Android", "Mobile Development", "User Experience"],
    image: "./images/projects/variable_timer.png",
    status: "completed",
    date: "May 2019 - Aug 2019",
    category: "development"
  },
  // Additional Projects from Documents
  {
    id: "kathario",
    title: "Kathario",
    description: "Developed a crossword puzzle application to enhance dance knowledge",
    longDescription: "Collaborated with a team to create an educational crossword puzzle application that helped users learn dance terminology and concepts",
    tools: ["Team Development", "Educational Games"],
    tags: ["Educational Games", "Dance Education", "Team Collaboration"],
    image: "./images/projects/coming_soon.png",
    status: "completed",
    date: "May 2015 - Jul 2015",
    category: "development",
    association: "BYU-Idaho"
  },
  {
    id: "money-inequality-research",
    title: "Money Inequality Research",
    description: "Research study on empathy and compassion amongst subgroups divided by money inequality",
    longDescription: "Conducted research examining the effects of money inequality on individuals' empathy and compassion levels",
    tools: ["Research Methods", "Statistical Analysis", "SPSS"],
    tags: ["Research", "Psychology", "Data Analysis"],
    image: "./images/projects/coming_soon.png",
    status: "completed",
    date: "May 2014 - Jul 2015",
    category: "research",
    association: "BYU-Idaho"
  },
  {
    id: "yahtzee",
    title: "Yahtzee",
    description: "Command line version of Yahtzee with save functionality",
    longDescription: "Designed and programmed a command line version of Yahtzee in C++ featuring error checking and game save/load capabilities",
    tools: ["C++", "Command Line Interface"],
    tags: ["Game Development", "C++", "Software Development"],
    image: "./images/projects/coming_soon.png",
    status: "completed",
    date: "Apr 2015 - May 2015",
    category: "development"
  },
  {
    id: "ego-depletion-study",
    title: "Ego Depletion in Test Performance",
    description: "Research on the effect of ego depletion on academic assessment performance",
    longDescription: "Conducted research examining the impact of ego depletion on student performance in academic assessments, analyzing probability of correct answers across test sections",
    methodology: "Quantitative Research",
    tools: ["Statistical Analysis", "Research Methods"],
    tags: ["Research", "Psychology", "Education"],
    image: "./images/projects/coming_soon.png",
    status: "completed",
    date: "Sep 2013 - Dec 2013",
    category: "research",
    association: "BYU-Idaho",
    outcomes: {
      significance: "p=.115",
      presentation: "Presented at BYU-Idaho Research and Creative Works Conference"
    }
  },
  {
    id: "bad-thoughts-game",
    title: "Bad Thoughts Game",
    description: "Educational game focusing on positive thinking",
    longDescription: "Self-taught ActionScript to create a Flash-based educational game where players identify and eliminate negative thoughts while preserving positive ones",
    tools: ["ActionScript", "Flash", "Game Development"],
    tags: ["Educational Games", "Game Development", "Self-Learning"],
    image: "./images/projects/coming_soon.png",
    status: "completed",
    date: "Feb 2008 - Apr 2008",
    category: "development",
    projectType: "High School Senior Inquiry Project"
  },
  {
    id: "python-automation-nacva",
    title: "NACVA Course Processing Automation",
    description: "Python automation for course processing and database management",
    longDescription: "Developed Python scripts to automate the manual entry of course data and streamline the process of adding courses to NACVA's website",
    tools: ["Python", "Database Management", "Process Automation"],
    tags: ["Automation", "Python", "Database"],
    image: "./images/projects/coming_soon.png",
    status: "completed",
    date: "Mar 2023 - Aug 2023",
    category: "development",
    association: "NACVA"
  }
];

// Updated project categories to reflect all types
export const projectCategories = [
  {
    id: 'elearning',
    label: 'E-Learning',
    description: 'Interactive digital learning experiences and modules'
  },
  {
    id: 'id',
    label: 'Instructional Design',
    description: 'Comprehensive learning strategy and curriculum design'
  },
  {
    id: 'development',
    label: 'Technical Development',
    description: 'Software development and automation solutions'
  },
  {
    id: 'research',
    label: 'Research',
    description: 'Academic research and analysis projects'
  },
  {
    id: 'educational-games',
    label: 'Educational Games',
    description: 'Interactive learning through game-based experiences'
  }
];

export const experience = [
  {
    title: "Help Desk Specialist",
    company: "All Season Control Cover",
    location: "Salt Lake City Metropolitan Area",
    period: "Jan 2021 - May 2024",
    highlights: [
      "Provided technical support and problem resolution for users",
      "Implemented solutions for complex technical issues",
      "Delivered quality advice and feedback to improve user experience",
      "Maintained ongoing support relationships with clients"
    ]
  },
  {
    title: "Instructional Designer",
    company: "National Association of Certified Valuators and Analysts",
    location: "Sandy, UT",
    period: "Mar 2023 - Aug 2023",
    highlights: [
      "Transitioned instructional content using Camtasia and Articulate",
      "Developed Python automation scripts for database management",
      "Built document conversion tools for streamlined content processing",
      "Processed courses for continuing education credits",
      "Collaborated with SMEs to ensure content accuracy"
    ]
  },
  {
    title: "Accounts Payable Clerk",
    company: "The Church of Jesus Christ of Latter-day Saints",
    location: "Salt Lake City Metropolitan Area",
    period: "Dec 2022 - Mar 2023",
    highlights: [
      "Processed invoices and managed payment systems",
      "Handled mail distribution and check deposits",
      "Collaborated with team members to meet deadlines",
      "Maintained accurate financial records"
    ]
  },
];

export const education = {
  degrees: [
    {
      degree: "Master of Education",
      field: "Instructional Design",
      institution: "University of Utah",
      location: "Salt Lake City, Utah",
      period: "2023 - 2025 (expected)",
      gpa: "4.0",
      relevantCourses: [
        "Learning Theory",
        "Instructional Design Models",
        "E-Learning Development"
      ]
    },
    {
      degree: "Bachelor of Science",
      field: "Psychology",
      institution: "Brigham Young University - Idaho",
      location: "Rexburg, ID",
      period: "2012 - 2018",
      relevantCourses: [
        "Research Methods",
        "Statistical Analysis",
        "Cognitive Psychology"
      ]
    }
  ],
  certifications: [
    {
      title: "Agile Instructional Design",
      issuer: "LinkedIn",
      date: "Mar 2023"
    },
    {
      title: "Instructional Design Essentials: Models of ID",
      issuer: "LinkedIn",
      date: "Mar 2023"
    },
    {
      title: "Elearning Essentials: Storyboarding",
      issuer: "LinkedIn",
      date: "Mar 2023"
    },
    {
      title: "Building Better Relationships through Listening and Validation",
      issuer: "LinkedIn",
      date: "Mar 2023"
    },
    {
      title: "Instructional Design: Adult Learners",
      issuer: "LinkedIn",
      date: "Mar 2023"
    },
    {
      title: "Instructional Design: Creating Video Training",
      issuer: "LinkedIn",
      date: "Mar 2023"
    },
    {
      title: "Instructional Design: Needs Analysis",
      issuer: "LinkedIn",
      date: "Mar 2023"
    },
    {
      title: "Measuring Learning Effectiveness",
      issuer: "LinkedIn",
      date: "Mar 2023"
    }
  ]
};

export const coreCompetencies = [
  {
    icon: "BookOpen",
    title: "Instructional Design",
    description: "Creating engaging learning experiences using ADDIE and SAM models, with focus on learner-centered design",
    color: "text-blue-600"
  },
  {
    icon: "Code",
    title: "E-Learning Development",
    description: "Proficient in Articulate Storyline, Camtasia, Canvas LMS, and various authoring tools",
    color: "text-purple-600"
  },
  {
    icon: "Layout",
    title: "LMS Implementation",
    description: "Experience with Canvas LMS setup, configuration, and content development",
    color: "text-green-600"
  },
  {
    icon: "PenTool",
    title: "Content Creation",
    description: "Development of engaging educational content, storyboards, and assessments",
    color: "text-orange-600"
  },
  {
    icon: "Target",
    title: "Performance Analysis",
    description: "Data-driven approach to identifying learning needs and measuring effectiveness",
    color: "text-red-600"
  },
  {
    icon: "Users",
    title: "Collaboration",
    description: "Effective work with SMEs, stakeholders, and cross-functional teams",
    color: "text-teal-600"
  }
];

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Certifications", value: "15+" },
  { label: "Happy Clients", value: "10+" }
];

export const academics = {
  research: [
    {
      title: "Research and Creative Works Conference",
      institution: "BYU-Idaho",
      achievements: ["1st Place", "3rd Place"]
    }
  ],
  publications: [
    {
      title: "High Five Grant: An Assessment of the City of Rexburg's School-aged Children",
      authors: "Harper, M., Charles, W.J., & Walden, M.",
      year: 2017,
      client: "City of Rexburg High Five Grant Committee"
    }
  ]
};

export const navigation = [
  { path: "/", label: "Home", icon: "Home" },
  { path: "/about", label: "About", icon: "User" },
  { path: "/portfolio", label: "Portfolio", icon: "Briefcase" },
  { path: "/contact", label: "Contact", icon: "Mail" }
];

export const faqs = [
  {
    question: "What types of projects do you work on?",
    answer: "I specialize in creating engaging e-learning experiences, instructional design solutions, and learning management system implementations, with a focus on measurable outcomes and learner engagement."
  },
  {
    question: "What is your approach to instructional design?",
    answer: "I follow established methodologies like ADDIE and SAM, while maintaining flexibility to adapt to each project's unique needs. I emphasize learner-centered design and measurable outcomes."
  },
  {
    question: "What tools and technologies do you use?",
    answer: "I'm proficient in Articulate Storyline, Camtasia, Canvas LMS, and various other authoring tools. I also have experience with programming languages for custom solutions."
  },
  {
    question: "How do you measure the success of your learning solutions?",
    answer: "I establish clear metrics at the start of each project and use various assessment methods to measure learning outcomes, engagement, and practical application of skills."
  }
];