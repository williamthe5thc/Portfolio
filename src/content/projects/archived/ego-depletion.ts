// src/content/projects/ego-depletion.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const egoDepletion: ProjectBase = {
  detailPage: true,
  id: 'ego-depletion-research',
  title: 'Ego Depletion Research - Evidence-Based Design Foundation',
  description: 'Undergraduate research investigating cognitive fatigue effects on academic performance, demonstrating research methodology skills and evidence-based approach to learning design. Presented at BYU-Idaho Research and Creative Works Conference',
  longDescription: `Conducted rigorous academic research examining the relationship between ego depletion (mental fatigue from self-control exertion) and test performance, presented at the competitive BYU-Idaho Research and Creative Works Conference. This research project demonstrates systematic application of research methodology, statistical analysis, and evidence-based thinking that forms the foundation for data-driven instructional design practice.

The study investigated whether self-control depletion from early test questions affects performance on later items in 80-90 question academic assessments. While results were non-significant (p=.115), the research process provided invaluable experience in experimental design, hypothesis testing, data collection with human subjects, statistical analysis, and academic presentation - all skills directly applicable to learning analytics, assessment design, and evidence-based instructional decision-making in corporate training environments.

This research foundation enables me to approach instructional design with scientific rigor, critically evaluate learning interventions, apply appropriate research methodologies to training effectiveness studies, and make data-driven decisions based on empirical evidence rather than assumptions.`,
  image: getImagePath('/images/thumbnails/Ego depletion.png'),
  category: 'id',
  tags: [
    'Research Methodology',
    'Evidence-Based Practice',
    'Statistical Analysis',
    'Assessment Design',
    'Cognitive Psychology',
    'Learning Science',
    'Academic Research',
    'Data-Driven Design'
  ],
  status: 'completed',
  date: 'Sep 2013 - Dec 2013',
  
  tools: [
    'Statistical Analysis Software (SPSS)',
    'Research Design Methodology',
    'Data Collection Instruments',
    'Hypothesis Testing Frameworks',
    'Academic Presentation Tools',
    'Experimental Design Protocols'
  ],
  
  methodology: 'Experimental Research Design with Quantitative Analysis',
  
  businessContext: 'Understanding cognitive fatigue and performance decline is critical for designing effective assessments and learning interventions in corporate training. This research provides scientific foundation for decisions about assessment length, question ordering, cognitive load management, and learner support strategies in organizational learning programs.',
  
  targetAudience: 'Academic research community and instructional designers interested in evidence-based assessment design and cognitive load theory applications',
  
  learningObjectives: [
    'Apply rigorous experimental research methodology to learning-related questions',
    'Demonstrate statistical analysis skills for learning effectiveness measurement',
    'Present research findings to academic and professional audiences',
    'Develop evidence-based approach to instructional design decisions',
    'Understand cognitive fatigue implications for assessment and training design'
  ],
  
  challenges: [
    'Designing controlled experimental methodology to isolate ego depletion effects',
    'Recruiting sufficient participant sample for statistical power',
    'Managing confounding variables in academic testing environment',
    'Conducting rigorous statistical analysis with research-level precision',
    'Presenting complex research findings to diverse academic audience'
  ],
  
  solutions: [
    'Developed controlled testing protocol minimizing extraneous variables',
    'Implemented systematic participant recruitment achieving adequate sample size',
    'Applied appropriate statistical methods (correlational analysis) for hypothesis testing',
    'Created clear, accessible presentation of complex research for conference audience',
    'Collaborated with faculty mentors to ensure methodological rigor'
  ],
  
  results: [
    'Successfully presented research at competitive BYU-Idaho Research and Creative Works Conference',
    'Completed rigorous experimental study from hypothesis through statistical analysis and presentation',
    'Developed research methodology skills directly applicable to learning analytics and training evaluation',
    'Gained experience with human subjects research protocols and ethical considerations',
    'Built foundation for evidence-based instructional design practice and data-driven decision making',
    'Established understanding of cognitive load and fatigue implications for learning design'
  ],
  
  lessonsLearned: 'This research experience taught me the importance of rigorous methodology in educational research and the value of evidence-based practice over assumptions. The skills gained - experimental design, statistical analysis, critical evaluation of results - are fundamental to effective instructional design. Even non-significant findings provide valuable insights; in this case, understanding that ego depletion effects may be more complex than initially hypothesized informs more nuanced approaches to assessment design and learner support.',
  
  learningTheoryApplied: [
    'Ego Depletion Theory (Baumeister) - self-control as limited resource',
    'Cognitive Load Theory (Sweller) - mental resource management in learning',
    'Working Memory Theory - capacity limitations and fatigue effects',
    'Test-Taking Strategy Research - performance optimization in assessments',
    'Attention Research - sustained focus and cognitive fatigue'
  ],
  
  researchImpact: {
    instructionalDesignApplications: [
      'Assessment Design: Understanding cognitive fatigue implications for test length and structure',
      'Learning Sequence: Optimal ordering of learning activities considering mental resource depletion',
      'Break Strategies: Evidence-based scheduling of rest periods in training programs',
      'Cognitive Load Management: Designing instruction that accounts for learner fatigue',
      'Performance Support: Identifying when learners need additional scaffolding due to depletion'
    ],
    
    professionalSkillsDemonstrated: [
      'Research Design: Systematic experimental methodology from hypothesis to conclusion',
      'Statistical Analysis: Quantitative data analysis and interpretation for decision-making',
      'Critical Thinking: Evaluating evidence and drawing appropriate conclusions',
      'Academic Communication: Presenting complex findings to professional audiences',
      'Ethical Research: Human subjects protocols and research ethics compliance',
      'Evidence-Based Practice: Using research to inform instructional design decisions'
    ]
  },
  
  features: [
    'Rigorous Research Methodology: Systematic experimental design with controlled testing protocols',
    'Statistical Analysis Expertise: Quantitative data analysis using professional research software',
    'Conference Presentation: Academic communication of complex research findings',
    'Evidence-Based Foundation: Research skills directly applicable to learning analytics and training evaluation',
    'Cognitive Load Understanding: Scientific basis for assessment and instruction design decisions',
    'Human Subjects Research: Ethical research protocols and participant management experience'
  ]
};

export default egoDepletion;
