// src/content/projects/ai-law-course.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const aiLawCourse: ProjectBase = {
  detailPage: true,
  id: 'ai-law-course',
  title: 'Graduate Curriculum Design Project - AI & Law Course',
  description: 'A three-person graduate capstone team designed and built this ten-week AI and Law course for Master of Legal Studies students, delivered in Canvas. We ran a client interview with the faculty sponsor, developed personas, ran a cognitive walkthrough on our own design, and validated it with a stakeholder review before handover.',
  longDescription: `Graduate capstone, built by a team of three for the University of Utah's S.J. Quinney College of Law. This challenging project required translating complex artificial intelligence concepts into accessible learning experiences for Master of Legal Studies students, demonstrating my ability to work with complex content and diverse subject matter experts. Applied competency-based instructional design principles to build a ten-module weekly curriculum covering AI foundations, prompt engineering, legal research applications, media, and professional ethics, assessed through five quizzes, four applied assignments, and five discussion cycles. The project involved extensive collaboration with legal and technical faculty, providing valuable experience in SME coordination and academic curriculum development. This project showcases my ability to handle complex instructional design challenges and apply systematic methodology to real-world educational needs.`,
  image: getImagePath('/images/thumbnails/ai-law-course.png'),
  category: 'id',
  tags: [
    'Curriculum Development',
    'Graduate Course Design', 
    'SME Collaboration',
    'ADDIE Methodology',
    'Competency-Based Design',
    'Adult Learning Theory',
    'Assessment Design',
    'Technology-Based Instruction'
  ],
  status: 'completed',
  date: '2024',
  metrics: [
    { value: '10', label: 'Graduate modules designed' },
    { value: '14', label: 'Graded assessments designed across the semester' }
  ],
  
  /*
    Team attribution is deliberate. This was a three-person capstone and we
    did not log individual ownership as we went, so the honest description is
    "we built it" - with the one specific I can stand behind, that I did most
    of the Canvas construction.
  */
  stakeholders: [
    'Faculty sponsor at the college of law (client and subject matter expert)',
    'Master of Legal Studies students (end learners)',
    'Two graduate capstone teammates'
  ],

  // Demo URL for interactive preview
  demoUrl: getImagePath('/demos/ai-law-course/index.html'),
  
  tools: [
    'Canvas LMS',
    'Instructional Design Templates',
    'Assessment Rubrics',
    'Interactive Course Navigation',
    'Competency Mapping Tools'
  ],
  
  methodology: 'ADDIE Framework with Universal Design for Learning principles, applying cognitive load theory for complex content translation, scaffolding strategies for progressive competency development, and andragogy-based adult learning approaches',
  
  // Business Context
  businessContext: 'Law schools need to prepare graduates for AI integration in legal practice. Students require foundational AI knowledge, practical skills, and ethical frameworks to navigate the intersection of technology and law professionally.',
  
  targetAudience: 'Master of Legal Studies (MLS) graduate students with diverse legal backgrounds, requiring scaffolded learning from basic AI concepts to advanced legal applications',
  
  learningObjectives: [
    'Analyze AI development history and its implications for legal practice',
    'Apply prompt engineering techniques for legal research and documentation',
    'Evaluate AI tools and platforms for professional legal applications',
    'Assess ethical implications of AI implementation in legal contexts',
    'Develop professional AI integration strategies for legal practice',
    'Create comprehensive AI toolkits for ongoing professional development',
    'Design legal compliance frameworks for AI technology adoption',
    'Synthesize AI trends and future implications for legal careers'
  ],
  
  // Instructional Design Process
  challenges: [
    'Translating highly technical AI concepts for legal professionals without technical backgrounds',
    'Creating engaging learning experiences for complex theoretical content',
    'Balancing foundational knowledge with practical application skills',
    'Ensuring content accuracy across rapidly evolving AI and legal landscapes',
    'Designing assessments that measure both understanding and practical competency',
    'Accommodating diverse learning needs in graduate-level instruction'
  ],
  
  solutions: [
    'Developed progressive scaffolding from basic concepts to advanced applications',
    'Created interactive module navigation with hands-on learning activities',
    'Implemented competency-based assessment strategy with real-world scenarios',
    'Established extensive SME collaboration protocols for content validation',
    'Applied Universal Design for Learning principles for accessibility',
    'Built comprehensive portfolio-based final assessment demonstrating practical competency'
  ],
  
  // Learning Design Innovation
  results: [
    'Built a ten-module weekly curriculum delivered asynchronously in Canvas for the Spring 2025 MLS cohort',
    'Designed the assessment mix as five quizzes, four applied assignments, and five discussion cycles across the semester',
    'Ran a cognitive walkthrough against our own build and revised the navigation and instructions from what it surfaced',
    'Created scalable course structure adaptable for continuing legal education',
    'Established framework for ongoing curriculum updates as AI technology evolves',
    'Prepared future lawyers with essential AI literacy for professional practice'
  ],
  
  lessonsLearned: 'Two things stuck. First, running a cognitive walkthrough on our own course was uncomfortable and worth it - we found navigation and instruction problems that we were too close to the design to see. Second, this was genuinely a team build and we did not track who did what at the time; I did most of the Canvas construction and worked closely with one teammate on the bulk of the design, but the course is a group product and describing it any other way would be inaccurate.',
  
  // Learning Theory Application
  learningTheoryApplied: [
    'Cognitive Load Theory (Sweller) - managing complexity in technical AI concepts',
    'Scaffolding (Vygotsky) - Zone of Proximal Development for progressive learning',
    'Constructivist Learning Theory - active knowledge building through practice',
    'Andragogy (Knowles) - adult learning principles for graduate-level instruction',
    'Multimedia Learning Principles (Mayer) - optimizing information processing',
    'Social Learning Theory (Bandura) - collaborative learning and peer modeling'
  ],
  
  // Features that showcase ID expertise
  features: [
    'Weekly module structure: Diving In, Basic Prompting, History of AI, How AI Works, Advanced Prompting, Legal Research, Fine-Tuning, AI Media, AI in the Legal Profession, Future of AI',
    'Progressive Complexity Design: Scaffolded learning from foundations to advanced applications', 
    'Competency-Based Assessment: Portfolio approach demonstrating practical AI integration skills',
    'SME Collaboration Framework: Extensive validation with legal and technical experts',
    'Real-World Application Focus: Legal scenarios and professional context throughout',
    'Accessible Design: Universal Design for Learning principles for diverse graduate learners'
  ]
};

export default aiLawCourse;