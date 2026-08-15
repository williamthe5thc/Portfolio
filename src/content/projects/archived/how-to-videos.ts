// src/content/projects/how-to-videos.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const howToVideos: ProjectBase = {
  detailPage: true,
  id: 'how-to-videos-claude',
  title: 'AI-Enhanced Instructional Video Development with Claude',
  description: 'Explored AI-assisted instructional design workflow by collaborating with Claude AI to develop procedural training videos using Adobe Express, demonstrating innovative approaches to content creation and learner support',
  longDescription: `Experimental project exploring the integration of AI technology into instructional design workflows. Collaborated with Claude AI to develop clear, engaging how-to instructional videos using Adobe Express, investigating how artificial intelligence can support content creation, script development, and learner engagement strategies. This project demonstrates proactive exploration of emerging technologies in learning design and willingness to innovate with AI-assisted instructional development methodologies.

The project showcases adaptive use of available tools to create effective instructional content, applying principles of procedural instruction design while leveraging AI capabilities for content ideation, script refinement, and instructional strategy optimization. This experience provides practical insight into AI-human collaboration for learning content development, relevant to organizations exploring AI integration in their training operations.`,
  image: getImagePath('/images/thumbnails/How to Claude.png'),
  category: 'id',
  tags: [
    'AI-Assisted Design',
    'Video Instruction',
    'Adobe Express',
    'Procedural Training',
    'Content Development',
    'Emerging Technology',
    'Instructional Innovation'
  ],
  status: 'completed',
  date: '2023',
  
  tools: [
    'Adobe Express',
    'Claude AI',
    'Video Editing Tools',
    'Script Development',
    'Instructional Design Frameworks'
  ],
  
  methodology: 'AI-Enhanced Instructional Design with Human-Centered Content Creation',
  
  businessContext: 'Organizations increasingly explore AI integration in training development to improve efficiency and content quality. This project investigates practical applications of AI-assisted instructional design, providing insights into how artificial intelligence can augment human instructional designers in content creation workflows.',
  
  targetAudience: 'Learners requiring clear procedural instruction for specific tasks. Project demonstrates AI-assisted content development applicable to corporate training, onboarding programs, and just-in-time learning support.',
  
  learningObjectives: [
    'Explore AI collaboration in instructional content development workflows',
    'Apply procedural instruction design principles to video creation',
    'Demonstrate effective use of Adobe Express for instructional media',
    'Create clear, engaging how-to content with AI-assisted script development',
    'Investigate emerging technology applications in learning design'
  ],
  
  challenges: [
    'Balancing AI assistance with human instructional design expertise and judgment',
    'Ensuring AI-generated content aligns with instructional design principles and learner needs',
    'Creating authentic, engaging instruction rather than generic AI output',
    'Determining optimal division of responsibilities between AI and human designer',
    'Maintaining instructional quality and pedagogical soundness with AI collaboration'
  ],
  
  solutions: [
    'Established clear human oversight protocols ensuring instructional design principles guide AI contributions',
    'Developed iterative collaboration workflow where AI provides suggestions and human designer makes pedagogical decisions',
    'Applied systematic instructional design framework (ADDIE) to structure AI collaboration',
    'Used AI for content ideation and script drafting while maintaining human control over learning objectives and assessment',
    'Created quality assurance checklist ensuring AI-assisted content meets professional instructional standards'
  ],
  
  results: [
    'Successfully created instructional video series demonstrating effective AI-human collaboration in content development',
    'Established replicable workflow for AI-assisted instructional design that maintains pedagogical integrity',
    'Gained practical experience with emerging AI technologies relevant to corporate training development',
    'Demonstrated ability to innovate with new tools while maintaining instructional design best practices',
    'Provided insights into AI integration strategies applicable to organizational learning and development'
  ],
  
  lessonsLearned: 'This project revealed that AI can be a powerful collaborator in instructional design when properly directed by human expertise. The key is maintaining instructional designers as decision-makers who leverage AI for efficiency while ensuring all content serves clear learning objectives and follows evidence-based design principles. Organizations exploring AI integration should focus on augmenting human expertise rather than replacing instructional design judgment.',
  
  learningTheoryApplied: [
    'Procedural Learning Theory - step-by-step skill acquisition',
    'Cognitive Load Theory - managing information processing in video instruction',
    'Multimedia Learning Principles (Mayer) - optimizing visual and verbal information',
    'Just-in-Time Learning - accessible content for immediate application'
  ],
  
  features: [
    'AI-Human Collaboration Workflow: Systematic approach to leveraging AI while maintaining instructional quality',
    'Procedural Instruction Design: Clear, step-by-step how-to content following best practices',
    'Adobe Express Integration: Professional video editing for instructional content creation',
    'Emerging Technology Exploration: Proactive investigation of AI applications in learning design',
    'Quality Assurance Framework: Ensuring AI-assisted content meets professional standards',
    'Scalable Content Development: Replicable methodology for efficient instructional video creation'
  ]
};

export default howToVideos;
