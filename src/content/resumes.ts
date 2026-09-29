// src/content/resumes.ts
/**
 * The two resumes: one master resume (instructional design, everything) and
 * one tailored to learning technology. The resume pages render this file and
 * scripts/build-resume-pdfs.mjs prints the downloadable PDFs from it, so the
 * web and PDF versions can no longer disagree.
 *
 * Both are cut from the same facts. If a title, date or number changes, change
 * it here once; don't give the same job a different title in each resume.
 *
 * Kept free of runtime imports (the PDF script loads it directly with Node).
 */

export interface ResumeEntry {
  title: string;
  org: string;
  location?: string;
  period: string;
  bullets: string[];
}

export interface ResumeEducation {
  degree: string;
  field: string;
  school: string;
  period: string;
  details?: string;
}

export interface ResumeProject {
  title: string;
  description: string;
  /** Site route (e.g. /portfolio/weyouth-mpcc) or an absolute URL. */
  url?: string;
}

export interface ResumeSkillGroup {
  label: string;
  items: string[];
}

export interface ResumeData {
  /** Route segment: /resume/<slug>. */
  slug: string;
  title: string;
  /** One line, shown under the name. */
  headline: string;
  /** Shown on the resume chooser page. */
  blurb: string;
  summary: string;
  /** File name in public/documents/. */
  pdf: string;
  experience: ResumeEntry[];
  research?: ResumeEntry[];
  education: ResumeEducation[];
  projectsHeading: string;
  projects: ResumeProject[];
  skills: ResumeSkillGroup[];
  presentations?: string[];
  honors?: string[];
}

export const resumeContact = {
  name: 'W. Jordan Charles',
  location: 'Salt Lake City, Utah',
  phone: '208.779.2406',
  email: 'williamthe5thc@gmail.com',
  linkedin: 'linkedin.com/in/jordan-charles',
  portfolio: 'williamthe5thc.github.io/Portfolio',
};

const WEYOUTH = {
  title: 'Instructional Designer',
  org: 'WeYouth (501(c)(3) nonprofit)',
  location: 'North Salt Lake, UT',
  period: 'March 2026 - Present',
};
const CHARTWAY = {
  title: 'Financial Wellness Intern',
  org: 'Chartway Federal Credit Union',
  location: 'South Jordan, UT',
  period: 'May 2025 - July 2025',
};
const NACVA = {
  title: 'Learning Technology Specialist (Contract)',
  org: 'National Association of Certified Valuators and Analysts (NACVA)',
  location: 'Sandy, UT',
  period: 'April 2023 - August 2023',
};
const HELP_DESK = {
  title: 'Help Desk Specialist',
  org: 'All Season Control Cover',
  location: 'Salt Lake City, UT',
  period: 'January 2021 - May 2024',
  bullets: ['Diagnosed user-reported problems and implemented fixes, translating technical detail into plain guidance'],
};

const EDUCATION: ResumeEducation[] = [
  {
    degree: 'Master of Education (M.Ed.)',
    field: 'Instructional Design & Educational Technology',
    school: 'University of Utah',
    period: 'August 2023 - May 2025',
    details: 'GPA 3.9. 30 credit hours across five semesters.',
  },
  {
    degree: 'Bachelor of Science',
    field: 'Psychology',
    school: 'Brigham Young University - Idaho',
    period: '2012 - 2018',
    details: 'Certificate in Programming.',
  },
];

export const instructionalDesignResume: ResumeData = {
  slug: 'instructional',
  title: 'Instructional Design Resume',
  headline: 'Instructional Design | Learning Experience Design | Learning Technology',
  blurb: 'The full resume: design and delivery work, research background, education and skills.',
  summary:
    'Instructional designer who takes learning programs from analysis through delivery: needs analysis to find what is actually broken, evidence-based design to fix it, and the platform work to get it in front of learners. Psychology research background; M.Ed. from the University of Utah.',
  pdf: 'Instructional_Design_Resume.pdf',
  experience: [
    {
      ...WEYOUTH,
      bullets: [
        "Ran LMS market research against the organization's constraints and delivered the platform recommendation the nonprofit adopted and runs on today",
        'Implemented SME-authored curriculum into the LMS as enrollable self-paced courses with module architecture, self-assessments, and evaluation surveys',
        'Built separate learner tracks supporting Mental Performance Connection Coaching for young people ages 12-24',
        'Collaborate with founders, a licensed clinician, and coaching staff as subject matter experts on restructuring curriculum for self-paced online delivery',
        'Serve as the technical support function for the platform and its administrators',
      ],
    },
    {
      ...CHARTWAY,
      bullets: [
        'Conducted a mixed-methods needs analysis for the FiCEP certification program: five semi-structured interviews and a survey returning 21 responses',
        'Applied thematic analysis to identify limited protected study time as the top barrier to certification (23 mentions)',
        'Applied the ADDIE framework and adult learning theory to deliver evidence-based curriculum recommendations',
        'Implemented WCAG 2.1 AA accessibility standards in curriculum design',
        'Chartway implemented the redesigned program and reported improved exam results (figures withheld to protect employee privacy)',
      ],
    },
    {
      ...NACVA,
      bullets: [
        'Converted legacy video content and streamlined backend processing for continuing education delivery',
        'Built Python automation replacing manual data entry across the course publishing workflow',
        'Collaborated with subject matter experts to maintain content quality while scaling delivery',
      ],
    },
    HELP_DESK,
  ],
  research: [
    {
      title: 'Graduate Research Assistant',
      org: 'Florida State University',
      period: 'August 2018 - December 2018',
      bullets: ["Supported development of educational software for stealth assessment in children's learning"],
    },
    {
      title: 'Research Associate',
      org: 'Research & Business Development Center',
      location: 'Rexburg, ID',
      period: 'January 2017 - April 2017',
      bullets: ['Designed a pilot study, administered a survey to over one thousand participants, and presented findings to a city committee'],
    },
    {
      title: 'Undergraduate Researcher',
      org: 'BYU-Idaho Psychology Department',
      period: 'April 2013 - July 2015',
      bullets: ['Conducted literature reviews, generated testable hypotheses, gathered and analyzed data, and presented findings at conferences'],
    },
  ],
  education: EDUCATION,
  projectsHeading: 'Selected Projects',
  projects: [
    {
      title: 'AI & Law, S.J. Quinney College of Law',
      description: 'Ten-week graduate curriculum for Master of Legal Studies students, built and delivered in Canvas by a three-person capstone team',
      url: '/portfolio/ai-law-course',
    },
    {
      title: 'FiCEP Curriculum Needs Analysis',
      description: "Mixed-methods needs analysis for a credit union's certification-preparation program, with evidence-based redesign recommendations",
      url: '/portfolio/chartway-ficep-enhanced',
    },
    {
      title: 'Articulate Storyline 360 course',
      description: '278-slide branching scenario build with consequential decision points',
      url: '/portfolio/professional-communication-training',
    },
    {
      title: 'Teaching the Waltz',
      description: 'Self-paced Canvas course for a physical skill, co-designed with a classmate, assessed by learner-submitted video and validated by small-group formative evaluation',
      url: '/portfolio/teaching-waltz',
    },
  ],
  skills: [
    { label: 'Authoring', items: ['Articulate Storyline 360', 'Rise', 'Camtasia', 'Adobe Creative Suite'] },
    { label: 'Platforms', items: ['LearnWorlds (selection, implementation, administration)', 'Canvas LMS'] },
    { label: 'Methodology', items: ['ADDIE', 'SAM', 'Backward design', 'Formative and summative evaluation', 'Cognitive walkthrough'] },
    { label: 'Research', items: ['Experimental design', 'Survey design', 'Semi-structured interviewing', 'Thematic analysis', 'Statistical analysis (SPSS)'] },
    { label: 'Theory', items: ['Cognitive load theory', 'Andragogy', "Mayer's multimedia principles", 'Universal Design for Learning', "Bloom's taxonomy"] },
    { label: 'Technical', items: ['Python', 'JavaScript', 'TypeScript', 'React', 'HTML/CSS'] },
  ],
  presentations: [
    'Charles, W.J. (2014, Dec). Does Money Inequality Affect Empathy and Compassion? Poster session, Research & Creative Works Conference, Rexburg, ID.',
    'North, A.J., & Charles, W.J. (2014, Apr). The Effects of PowerPoint on Student-Teacher Connection. Poster session, Rocky Mountain Psychological Association, Salt Lake City, UT.',
  ],
  honors: ['Research & Creative Works Conference: Finalist and 1st Place; Finalist and 3rd Place in a separate year'],
};

export const learningTechnologyResume: ResumeData = {
  slug: 'technology',
  title: 'Learning Technology Resume',
  headline: 'Learning Technology | LMS Implementation | Front-End Development',
  blurb: 'The same experience, told from the technical side: platforms, automation and front-end work.',
  summary:
    'Learning technologist who builds the technical layer of learning programs: LMS selection and administration, Python automation for course operations, and React and TypeScript front ends. An M.Ed. in instructional design and a psychology background mean I can talk to both designers and engineers.',
  pdf: 'Learning_Technology_Resume.pdf',
  experience: [
    {
      ...WEYOUTH,
      bullets: [
        'Evaluated learning management systems against organizational requirements and delivered the platform recommendation the nonprofit adopted and runs on',
        'Implemented the platform end to end: course and module architecture, assessment configuration, and cohort enrollment across three learner tracks',
        'Own technical support for the platform, from administrator onboarding to resolving learner and coach access issues',
      ],
    },
    {
      ...CHARTWAY,
      bullets: [
        'Ran a mixed-methods needs analysis (five interviews, 21 survey responses) for a certification-preparation program and delivered evidence-based recommendations',
      ],
    },
    {
      ...NACVA,
      bullets: [
        'Wrote Python automation replacing manual backend data entry for the CVA and MAFF certification programs',
        'Converted and processed training video for continuing-education delivery',
        'Migrated instructional content off legacy platforms',
      ],
    },
    HELP_DESK,
  ],
  education: EDUCATION,
  projectsHeading: 'Selected Technical Work',
  projects: [
    {
      title: 'LMS implementation',
      description: 'Platform evaluation, course architecture, assessment and enrollment configuration, and ongoing administration for a youth nonprofit',
      url: '/portfolio/weyouth-mpcc',
    },
    {
      title: 'Course processing automation',
      description: 'Python scripts replacing hand-entry of course data at a certification body',
      url: '/portfolio/nacva-automation',
    },
    {
      title: 'Variable-interval timer',
      description: 'Android app that times variable-interval reinforcement for Registered Behavior Technicians in ABA therapy sessions',
      url: '/portfolio/variable-timer',
    },
    {
      title: 'Articulate Storyline 360 course',
      description: '278-slide branching scenario build',
      url: '/portfolio/professional-communication-training',
    },
    {
      title: 'This portfolio site',
      description: 'React 18, TypeScript, Vite and Tailwind, with a typed content layer, automated tests and CI',
      url: 'https://github.com/williamthe5thc/Portfolio',
    },
  ],
  skills: [
    { label: 'Languages', items: ['Python', 'JavaScript', 'TypeScript', 'C++', 'HTML/CSS'] },
    { label: 'Frameworks', items: ['React', 'Node.js', 'Tailwind CSS', 'Vite'] },
    { label: 'Learning platforms', items: ['LearnWorlds', 'Canvas LMS', 'Articulate Storyline 360', 'SCORM packaging'] },
    { label: 'Tools', items: ['Git', 'VS Code', 'Camtasia', 'Adobe Creative Suite'] },
  ],
};

export const resumes: ResumeData[] = [instructionalDesignResume, learningTechnologyResume];
