// src/data/siteData.js

export const siteMetadata = {
  title: "W. Jordan Charles Portfolio",
  author: "W. Jordan Charles",
  description: "Instructional Designer & Learning Solutions Developer",
  slogan: "Enhancing Learning Through Design",
  tagline: "Instructional Designer specializing in creating engaging, effective learning experiences that drive real results.",
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
    id: 'lms',
    label: 'LMS Implementation',
    description: 'Learning Management System setup and customization'
  }
];

export const navigation = [
  { path: "/", label: "Home", icon: "Home" },
  { path: "/about", label: "About", icon: "User" },
  { path: "/portfolio", label: "Portfolio", icon: "Briefcase" },
  { path: "/contact", label: "Contact", icon: "Mail" }
];

export const projects = [
   {
    id: "dating-course",
    title: "How to Effectively Date Better",
    description: "Designed a comprehensive course on effective dating using Articulate Storyline",
    tags: ["Articulate", "Instructional Design", "eLearning"],
    image: "/public/images/projects/online-dating.jpg",
    status: "in progress",
    date: "May 2024 - Jul 2024",
    category: "elearning"
  },
  {
    id: "waltz-course",
    title: "How to Learn the Waltz",
    description: "Developed a Canvas LMS course for 'The Social Dance Effect'",
    tags: ["Canvas", "LMS", "Dance Education"],
    image: "public/images/projects/how-to-waltz.jpg",
    status: "in progress",
    date: "Aug 2023 - Dec 2023",
    category: "id"
  }
  // Add more projects here
];

export const experience = [
  {
    title: "Instructional Designer",
    company: "National Association of Certified Valuators and Analysts",
    location: "Sandy, UT",
    period: "Mar. 2023 - Aug. 2023",
    highlights: [
      "Transitioned instructional content using Camtasia and Articulate",
      "Developed Python automation scripts for database management",
      "Built document conversion tools"
    ]
  },
  {
    title: "Research Assistant",
    company: "Florida State University",
    location: "Tallahassee, FL",
    period: "Aug. 2018 - Dec. 2018",
    highlights: [
      "Worked with research team on educational software development",
      "Conducted user testing and data analysis",
      "Contributed to stealth assessment research"
    ]
  }
  // Add more experience entries here
];

export const education = {
  degrees: [
    {
      degree: "Master of Education",
      field: "Instructional Design",
      institution: "University of Utah",
      location: "Salt Lake City, Utah",
      period: "2023 - 2025 (expected)",
      gpa: "4.0"
    },
    {
      degree: "Bachelor of Science",
      field: "Psychology",
      institution: "Brigham Young University - Idaho",
      location: "Rexburg, ID",
      period: "2012 - 2018"
    }
  ],
  certifications: [
    {
      title: "Agile Instructional Design",
      issuer: "LinkedIn",
      date: "Mar 2023"
    },
    {
      title: "Instructional Design Essentials",
      issuer: "LinkedIn",
      date: "Mar 2023"
    },
    {
      title: "eLearning Development",
      issuer: "LinkedIn",
      date: "Mar 2023"
    }
    // Add more certifications here
  ]
};

export const coreCompetencies = [
  {
    icon: "BookOpen",
    title: "Instructional Design",
    description: "Creating engaging learning experiences using ADDIE and SAM models",
    color: "text-blue-600"
  },
  {
    icon: "Code",
    title: "E-Learning Development",
    description: "Building interactive content with Articulate Storyline and web technologies",
    color: "text-purple-600"
  },
  {
    icon: "Layout",
    title: "LMS Implementation",
    description: "Setting up and managing learning management systems",
    color: "text-green-600"
  },
  {
    icon: "PenTool",
    title: "Content Creation",
    description: "Developing clear, engaging educational content and assessments",
    color: "text-orange-600"
  },
  {
    icon: "Target",
    title: "Performance Analysis",
    description: "Identifying learning needs and measuring training effectiveness",
    color: "text-red-600"
  },
  {
    icon: "Users",
    title: "Collaboration",
    description: "Working effectively with SMEs and stakeholders",
    color: "text-teal-600"
  }
];

export const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Certifications", value: "15+" },
  { label: "Happy Clients", value: "10+" }
];

export const faqs = [
  {
    question: "What types of projects do you work on?",
    answer: "I specialize in creating engaging e-learning experiences, instructional design solutions, and learning management system implementations."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. Most projects take 4-8 weeks from initial consultation to final delivery."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes, I provide post-project support to ensure smooth implementation and address any questions or concerns."
  },
  {
    question: "What is your preferred collaboration method?",
    answer: "I'm flexible and can adapt to your preferred communication tools. I typically use a combination of video calls, email, and project management software."
  }
];