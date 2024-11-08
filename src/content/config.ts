import { SiteConfig, Experience, Education, Competency, ProjectCategory, FAQ } from '@/types/content';

export const siteConfig: SiteConfig = {
  title: "W. Jordan Charles Portfolio",
  author: "W. Jordan Charles",
  description: "Instructional Designer & Learning Solutions Developer",
  slogan: "Unlock YOUR Employees Potential through Learning",
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

export const experiences: Experience[] = [
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
  // ... other experiences
];

export const education: Education = {
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
    }
  ],
  certifications: [
    {
      title: "Agile Instructional Design",
      issuer: "LinkedIn",
      date: "Mar 2023"
    }
  ]
};

export const competencies: Competency[] = [
  {
    icon: "BookOpen",
    title: "Instructional Design",
    description: "Creating engaging learning experiences using ADDIE and SAM models",
    color: "text-blue-600"
  }
];

export const projectCategories: ProjectCategory[] = [
  {
    id: 'elearning',
    label: 'E-Learning',
    description: 'Interactive digital learning experiences and modules'
  }
];

export const faqs: FAQ[] = [
  {
    question: "What types of projects do you work on?",
    answer: "I specialize in creating engaging e-learning experiences..."
  }
];