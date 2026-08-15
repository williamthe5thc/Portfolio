// src/content/projects/chartway-ficep-enhanced.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const chartwayFicepEnhanced: ProjectBase = {
  detailPage: true,
  id: 'chartway-ficep-enhanced',
  title: 'Financial Wellness Internship - FiCEP Curriculum Needs Analysis',
  description: 'I conducted a systematic needs analysis for Chartway Credit Union\'s Financial Counseling Examination Preparation program. This project involved applying ADDIE methodology and evidence-based research to identify performance gaps and provide curriculum enhancement recommendations.',
  longDescription: `Conducted comprehensive needs analysis for Chartway Credit Union's Financial Information Counseling and Education Program (FiCEP) certification preparation program under professional supervision. Applied systematic ADDIE methodology including semi-structured interviews with 5 program participants and survey distribution yielding 21 responses to identify performance barriers following ACU's sixth edition material update. Analysis revealed key findings: Management Needs to Set Apart More Time (23 mentions - highest priority), Study Guide was Helpful (17 mentions), Personalized per organization Content (16 mentions), Need Better Practice Exam (12 mentions). Delivered evidence-based curriculum enhancement recommendations addressing organizational support structures, assessment alignment gaps, and contextual learning approaches to help restore examination pass rates and improve learner experience.`,
  image: getImagePath('/images/thumbnails/chartway-ficep-enhanced.png'),
  category: 'id',
  tags: [
    'Financial Wellness',
    'Curriculum Modernization',
    'ADDIE Framework',
    'Needs Analysis',
    'Adult Learning Theory',
    'Behavior Change Design',
    'Accessibility Compliance'
  ],
  status: 'completed',
  date: 'May 2025 - July 2025',
  metrics: [
    { value: '21', label: 'Survey responses analyzed' },
    { value: '5', label: 'Semi-structured participant interviews' },
    { value: '23', label: 'Mentions of limited study time — the top barrier found' }
  ],

  // Case Study Documentation
  projectUrl: getImagePath('/case-studies/ficep-needs-analysis.pdf'),
  tools: [
    'ADDIE Framework',
    'Learner Interview Protocols',
    'Needs Analysis Surveys',
    'Curriculum Mapping Tools',
    'Assessment Design Templates',
    'WCAG Accessibility Standards'
  ],
  methodology: 'Comprehensive ADDIE Framework with systematic learner analysis, andragogy-based design principles, and cognitive load theory application for evidence-based instructional solutions',
  businessContext: 'America\'s Credit Unions (ACU) recently released the sixth edition of their Financial Counseling Examination Preparation (FiCEP) materials, resulting in declining examination pass rates for Chartway Credit Union employees seeking professional certification. The existing ten-week preparation program required systematic analysis to identify instructional barriers and develop evidence-based enhancement recommendations for improved learner outcomes.',
  targetAudience: 'Chartway Credit Union employees across various departments (retail, call center, member services) preparing for FiCEP certification to provide financial counseling services to members.',
  learningObjectives: [
    'Identify primary barriers to FiCEP certification exam success through systematic needs analysis',
    'Analyze organizational support structures affecting employee learning outcomes',
    'Evaluate current instructional materials against learner feedback and performance data',
    'Develop evidence-based recommendations for curriculum enhancement and support systems',
    'Apply ADDIE methodology to professional development program analysis and improvement'
  ],
  challenges: [
    'Declining examination pass rates following implementation of 6th edition FiCEP materials',
    'Limited protected study time for employees during work hours (10-12 hours unpaid study reported)',
    'Practice examination inadequacy with discrepancies between materials and actual exam requirements',
    'Need for organization-specific content examples to enhance practical application',
    'Balancing comprehensive needs analysis with time constraints of working professionals'
  ],
  solutions: [
    'Conducted mixed-methods research with 5 semi-structured interviews and 21-response survey',
    'Applied systematic thematic analysis identifying organizational barriers and learner preferences',
    'Developed evidence-based recommendations addressing time allocation, practice exams, and content customization',
    'Proposed organizational support frameworks including leadership engagement and protected study time',
    'Created implementation roadmap with leadership training, enhanced practice exams, and feedback systems'
  ],
  results: [
    'Delivered comprehensive needs analysis report identifying management time allocation as primary barrier (23 mentions) - [View Complete Needs Analysis Report](/case-studies/ficep-needs-analysis.pdf)',
    'Provided evidence-based training enhancement recommendations addressing organizational support, practice exams, and content personalization',
    'Created systematic research findings documenting learner preferences and institutional challenges affecting certification success',
    'Developed implementation roadmap including leadership training, enhanced practice examinations, and organizational content customization',
    'Demonstrated application of ADDIE methodology and mixed-methods research approach for professional development program improvement'
  ],
  stakeholders: [
    'Chartway Employees (primary learners seeking FiCEP certification)',
    'Financial Wellness Manager (project supervisor and SME)',
    'Department Managers (employee development supporters)',
    'Learning & Development Team (training implementation)',
    'Executive Leadership (professional development investment)'
  ],
  learningTheoryApplied: [
    'Andragogy (Knowles) - self-directed adult learning principles',
    'Social Cognitive Theory (Bandura) - observational learning and modeling',
    'Transtheoretical Model - stages of behavior change for financial habits',
    'Cognitive Load Theory (Sweller) - managing intrinsic and extraneous load',
    'Universal Design for Learning (UDL) - multiple means of engagement',
    'ARCS Motivation Model (Keller) - attention, relevance, confidence, satisfaction',
    'Constructivist Learning Theory - active knowledge construction through practice'
  ],
  
  // SYSTEMATIC ADDIE METHODOLOGY DOCUMENTATION
  addieMethodology: {
    analysis: {
      process: 'Conducted comprehensive needs analysis using mixed-methods approach including stakeholder interviews, member surveys, and existing curriculum audit',
      findings: 'Conducted mixed-methods research including semi-structured interviews with 5 program participants and survey distribution yielding 21 responses. Analysis revealed consistent patterns: Management Needs to Set Apart More Time (23 mentions - highest priority), Study Guide was Helpful (17 mentions), Personalized per organization Content (16 mentions), I had Management Support (15 mentions), Need Better Practice Exam (12 mentions). Time constraints emerged as primary barrier with participants studying 10-12 hours of unpaid personal time for examination success.',
      learnerCharacteristics: 'Chartway Credit Union employees across multiple departments (retail, call center, member services) with varying professional backgrounds and experience levels, all requiring FiCEP certification for financial counseling roles',
      performanceGaps: 'Following implementation of sixth edition materials, examination pass rates declined significantly from 2023 baseline, representing persistent underperformance across monthly cohorts rather than temporary adjustment difficulties. Progressive decline throughout 2024 indicates systematic instructional inadequacies requiring immediate programmatic intervention.'
    },
    design: {
      instructionalStrategy: 'Problem-based learning scenarios using real member financial situations, scaffolded learning progression from basic concepts to complex applications',
      assessmentStrategy: 'Competency-based assessments including scenario-based simulations, peer review exercises, and practical application demonstrations with immediate feedback mechanisms',
      mediaSelection: 'Multi-modal approach: interactive infographics for visual learners, podcast-style audio content for auditory learners, hands-on calculators for kinesthetic engagement',
      accessibilityDesign: 'WCAG 2.1 AA compliance including screen reader compatibility, color contrast ratios >4.5:1, keyboard navigation, closed captioning for all video content'
    },
    development: {
      contentCreation: 'Collaborated with 5 subject matter experts to develop evidence-based content aligned with 6th Edition FiCEP standards and current financial industry practices',
      prototyping: 'Created rapid prototypes for user testing with representative member groups, iterating design based on feedback before full development',
      qualityAssurance: 'Implemented systematic review process with SME validation, accessibility testing, and member focus group feedback integration'
    },
    implementation: {
      pilotTesting: 'Recommended phased implementation beginning with pilot group to validate effectiveness before full-scale deployment',
      changeManagement: 'Leadership Support Strategy: Managers should expect to schedule at least 2 hours each week per team member for the program. Leaders group chat with 2-3 sentence quick updates sent to leaders about team member progress. Leaders Guide providing structured talking points for team member discussions.',
      supportSystems: 'Initial Meeting to establish expectations, enhanced check-in sessions rebranded as mandatory learning sessions, office hours for one-on-one support, and flexible check-in formats accommodating different learning preferences.'
    },
    evaluation: {
      formativeAssessment: 'Continuous data collection throughout development including user interaction analytics, completion rates, and satisfaction surveys',
      summativeAssessment: 'Post-implementation evaluation measuring: certification pass rate improvement, member financial behavior change metrics, and long-term engagement statistics',
      continuousImprovement: 'Established quarterly review cycles for content updates, accessibility enhancements, and instructional effectiveness optimization'
    }
  },
  
  designProcess: {
    researchPhase: 'Conducted literature review of financial wellness education best practices, analyzed member demographic data, and benchmarked against industry-leading credit union training programs',
    stakeholderCollaboration: 'Facilitated weekly design sessions with financial wellness team, conducted member focus groups, and maintained regular communication with compliance and executive stakeholders',
    iterativeDesign: 'Employed user-centered design approach with 3 rounds of prototype testing, incorporating feedback from both subject matter experts and target learners',
    evidenceBasedDecisions: 'All design decisions supported by research data including member survey results, learning science literature, and financial behavior change studies'
  },
  
  professionalImpact: {
    businessValue: 'Systematic needs analysis addresses most frequently cited barrier (23 mentions of time allocation challenges) through organizational support frameworks ensuring protected learning time. Enhanced practice examination systems address assessment alignment gaps (12 mentions). Curriculum personalization directly addresses second most frequent request (16 mentions for organization-specific content).',
    scalabilityConsiderations: 'Modular training materials proposal includes: enhanced practice examinations with varied question types, branded flashcards using spaced repetition, role-play scenarios for practical application, and Rise activities enabling pick-and-choose learning approaches.',
    industryContribution: 'Evidence-based training suggestions directly address organizational support structures, assessment alignment strategies, and contextual learning approaches connecting theoretical knowledge to practical workplace applications.',
    continuingEducation: 'Methodology demonstrates systematic instructional design approach applicable to corporate training environments, emphasizing stakeholder collaboration, iterative design, and measurable outcomes for professional development initiatives.'
  }
};

export default chartwayFicepEnhanced;