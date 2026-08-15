// src/content/projects/ai-law-course.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const aiLawCourse: ProjectBase = {
  detailPage: true,
  id: 'ai-law-course',
  title: 'Graduate Curriculum Design Project - AI & Law Course',
  description: 'I developed this comprehensive 10-module graduate course on AI and law, demonstrating my ability to translate complex technical concepts for legal professionals. This project involved extensive collaboration with university faculty and showcased my advanced curriculum design skills.',
  longDescription: `Academic project completed as part of my M.Ed. program, designing a comprehensive graduate-level course for the University of Utah's S.J. Quinney College of Law. This challenging project required translating complex artificial intelligence concepts into accessible learning experiences for Master of Legal Studies students, demonstrating my ability to work with complex content and diverse subject matter experts. Applied competency-based instructional design principles learned in graduate coursework to create a 40+ hour curriculum covering AI foundations, prompt engineering, legal applications, and professional ethics. The project involved extensive collaboration with legal and technical faculty, providing valuable experience in SME coordination and academic curriculum development. This project showcases my ability to handle complex instructional design challenges and apply systematic methodology to real-world educational needs.`,
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
    { value: '40+ hrs', label: 'Of curriculum delivered' }
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
    'Successfully created 10-module comprehensive graduate curriculum totaling 40+ hours',
    'Developed 25+ interactive learning activities with practical legal applications',
    'Implemented 15 competency-based assessments measuring both knowledge and application',
    'Created scalable course structure adaptable for continuing legal education',
    'Established framework for ongoing curriculum updates as AI technology evolves',
    'Prepared future lawyers with essential AI literacy for professional practice'
  ],
  
  lessonsLearned: 'This project reinforced the importance of extensive SME collaboration when designing courses that bridge multiple expert domains. The success came from creating clear learning progressions that build confidence while maintaining academic rigor, and from focusing on practical application rather than just theoretical understanding.',
  
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
    'Interactive Course Navigation: 10-module structure with detailed learning pathways',
    'Progressive Complexity Design: Scaffolded learning from foundations to advanced applications', 
    'Competency-Based Assessment: Portfolio approach demonstrating practical AI integration skills',
    'SME Collaboration Framework: Extensive validation with legal and technical experts',
    'Real-World Application Focus: Legal scenarios and professional context throughout',
    'Accessible Design: Universal Design for Learning principles for diverse graduate learners'
  ]
};

export default aiLawCourse;