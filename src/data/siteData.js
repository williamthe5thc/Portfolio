// Site-wide shared data
export const siteMetadata = {
  title: "W. Jordan Charles - Instructional Designer & Educational Technologist",
  description: "Portfolio of W. Jordan Charles, an instructional designer specializing in multimedia learning experiences, combining psychology research expertise with modern educational technology.",
  author: "W. Jordan Charles",
  siteUrl: "https://williamthe5thc.github.io/Portfolio/",
  email: "williamthe5thc@gmail.com",
  linkedin: "https://linkedin.com/in/jordan-charles",
  location: "Provo, Utah",
  availability: "Open to internship, part-time, or contract opportunities"
};

export const projects = [
  {
    id: 1,
    title: "Intro to Online Dating",
    description: "Modern e-learning module created with Articulate 360, incorporating AI elements and following ADDIE methodology",
    longDescription: "A comprehensive e-learning module designed to help individuals navigate the modern dating landscape safely and effectively.",
    details: [
      "Developed using Articulate 360 with custom interactions",
      "Integrated AI-powered conversation simulations",
      "Implemented ADDIE methodology throughout development",
      "Created custom graphics and animations",
    ],
    tags: ["Articulate 360", "AI Integration", "ADDIE", "UX Design"],
    status: "Current Project",
    image: "/Images/projects/online-dating.jpg",
    category: "E-Learning",
    date: "May 2024 - Jul 2024",
    associated: "University of Utah"
  },
  {
    id: 2,
    title: "How to Teach the Waltz",
    description: "Comprehensive dance education course developed using backwards design and ADDIE model",
    longDescription: "A complete dance education program developed for dance instructors to effectively teach the waltz to beginners.",
    details: [
      "Created comprehensive lesson plans and assessments",
      "Produced high-quality instructional videos",
      "Designed interactive quizzes and exercises",
      "Implemented in Canvas LMS with custom modules"
    ],
    tags: ["Canvas LMS", "Video Production", "Curriculum Design"],
    image: "/Images/projects/how-to-waltz.jpg",
    category: "Course Development",
    date: "Aug 2023 - Dec 2023",
    associated: "University of Utah"
  },
  {
    id: 3,
    title: "Variable Timer App",
    description: "Client-requested Android application featuring custom random interval generation",
    longDescription: "A custom Android application developed for a client to generate random time intervals for notifications.",
    details: [
      "Developed using Android Studio and Kotlin",
      "Implemented custom random interval algorithm",
      "Created intuitive user interface",
      "Conducted extensive user testing"
    ],
    tags: ["Android", "Mobile Development", "UX Design"],
    image: "/Images/projects/variable-timer.png",
    category: "Mobile Development",
    date: "May 2019 - Aug 2019"
  }
];

export const competencies = [
  {
    id: 1,
    icon: "BookOpen",
    title: "Instructional Design",
    skills: [
      "ADDIE Methodology",
      "Backwards Design",
      "Needs Analysis",
      "Learning Theory"
    ],
    color: "text-primary-600"
  },
  {
    id: 2,
    icon: "Code",
    title: "Technical Skills",
    skills: [
      "Articulate 360",
      "Canvas LMS",
      "Adobe Suite",
      "Programming"
    ],
    color: "text-accent-green"
  },
  {
    id: 3,
    icon: "Brain",
    title: "Research",
    skills: [
      "Study Design",
      "Data Analysis",
      "Psychology",
      "User Testing"
    ],
    color: "text-secondary-600"
  },
  {
    id: 4,
    icon: "PlayCircle",
    title: "Multimedia",
    skills: [
      "Video Production",
      "Animation",
      "Graphics Design",
      "Interactive Content"
    ],
    color: "text-accent-orange"
  }
];

export const education = [
  {
    degree: "Master of Education - MEd",
    field: "Educational/Instructional Media Design",
    school: "University of Utah",
    period: "August 2023 - September 2025",
    gpa: "4.0"
  },
  {
    degree: "Bachelor of Science",
    field: "Psychology",
    school: "BYU-Idaho",
    period: "2012 - 2018"
  }
];

export const experience = [
  {
    title: "Instructional Designer",
    company: "National Association of Certified Valuators and Analysts (NACVA)",
    location: "Sandy, Utah",
    period: "April 2023 - August 2023",
    responsibilities: [
      "Helped process courses for continuing education credits",
      "Converted conference videos into e-learning modules",
      "Created Python scripts to automate data entry"
    ]
  },
  {
    title: "Help Desk Specialist",
    company: "All Season Control Cover",
    location: "Salt Lake City Metropolitan Area",
    period: "January 2021 - May 2024",
    responsibilities: [
      "Provided technical support and problem resolution",
      "Implemented solutions for user problems",
      "Delivered quality advice and feedback"
    ]
  }
];

export const aboutMe = {
  intro: "I am a passionate instructional designer dedicated to partnering with organizations to unlock the full potential of their target demographic. I create engaging, results-driven learning experiences that make a real impact.",
  philosophy: "I believe in creating learning experiences that are both engaging and results-driven. By combining psychological principles with modern technology, I develop training solutions that not only transfer knowledge but also inspire lasting behavioral change. My approach focuses on understanding the learner's needs and creating personalized, interactive content that drives real-world application.",
  skills: [
    "Instructional Design",
    "E-Learning Development",
    "Learning Management Systems",
    "Project Management",
    "Educational Technology",
    "Curriculum Development"
  ]
};

export const contact = {
  email: {
    icon: "Mail",
    title: "Email",
    content: "williamthe5thc@gmail.com",
    link: "mailto:williamthe5thc@gmail.com"
  },
  linkedin: {
    icon: "Linkedin",
    title: "LinkedIn",
    content: "linkedin.com/in/jordan-charles",
    link: "https://linkedin.com/in/jordan-charles"
  },
  location: {
    icon: "MapPin",
    title: "Location",
    content: "Provo, Utah (Open to remote, or relocation)"
  },
  availability: {
    icon: "Clock",
    title: "Availability",
    content: "Open to internship, part-time, or contract opportunities"
  }
};