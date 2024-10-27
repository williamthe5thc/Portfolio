// src/data/siteData.js
export const siteMetadata = {
  title: "W. Jordan Charles Portfolio",
  author: "W. Jordan Charles",
  description: "Instructional Designer & Learning Solutions Developer",
  siteUrl: "https://williamthe5thc.github.io/Portfolio",
  defaultImage: "/path/to/default-og-image.jpg", // Add a default social sharing image
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

export const navigation = [
  { path: "/", label: "Home", icon: "Home" },
  { path: "/about", label: "About", icon: "User" },
  { path: "/portfolio", label: "Portfolio", icon: "Briefcase" },
  { path: "/contact", label: "Contact", icon: "Mail" }
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
  // Add other experience entries...
];

export const projects = [
  {
    id: "dating-course",
    title: "How to Effectively Date Better",
    description: "Designed a comprehensive course on effective dating using Articulate Storyline",
    tags: ["Articulate", "Instructional Design", "eLearning"],
    image: "/api/placeholder/600/400", // Using placeholder for now
    status: "Completed"
  },
  {
    id: "waltz-course",
    title: "How to Learn the Waltz",
    description: "Developed a Canvas LMS course for 'The Social Dance Effect'",
    tags: ["Canvas", "LMS", "Dance Education"],
    image: "/api/placeholder/600/400",
    status: "Completed"
  }
  // Add other projects...
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
    // Add other certifications...
  ]
};
