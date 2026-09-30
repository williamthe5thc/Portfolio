// src/content/projects/chartway-ficep-enhanced.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

/*
  This was a needs analysis. Everything under Design onwards is what the
  report recommended, and is worded that way; check any new line against
  public/case-studies/ficep-needs-analysis.pdf before adding it.
*/
const chartwayFicepEnhanced: ProjectBase = {
  detailPage: true,
  id: 'chartway-ficep-enhanced',
  title: 'Instructional Design Internship - FiCEP Curriculum Needs Analysis',
  cardTitle: 'FiCEP Needs Analysis',
  description: 'As part of my internship with Chartway, I conducted a systematic needs analysis for the company\'s FiCEP program, which prepares employees for a financial counseling certification exam. The analysis showed what was holding learners back, and I recommended changes to the curriculum and to the support around it.',
  longDescription: `Conducted comprehensive needs analysis for Chartway Credit Union's Financial Counseling Examination Preparation (FiCEP) certification preparation program under professional supervision. Applied systematic ADDIE methodology including semi-structured interviews with 5 program participants and survey distribution yielding 21 responses to identify performance barriers following ACU's sixth edition material update. Analysis revealed key findings: Management Needs to Set Apart More Time (23 mentions - highest priority), Study Guide was Helpful (17 mentions), Personalized per organization Content (16 mentions), Need Better Practice Exam (12 mentions). Delivered evidence-based curriculum enhancement recommendations addressing organizational support structures, assessment alignment gaps, and contextual learning approaches to help restore examination pass rates and improve learner experience.`,
  image: getImagePath('/images/thumbnails/chartway-ficep-enhanced.webp'),
  imageAlt: 'Title graphic: Systematic Needs Analysis - FiCEP Curriculum Redesign for Corporate Training Improvement',
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
    { value: '5', label: 'Semi-structured participant interviews' }
  ],

  // Case Study Documentation
  projectUrl: getImagePath('/case-studies/ficep-needs-analysis.pdf'),
  projectUrlDescription: 'The complete needs analysis report, from the interviews and survey through to the training recommendations.',
  artifacts: [
    {
      label: 'Needs Analysis Report',
      href: '/case-studies/ficep-needs-analysis.pdf',
      description:
        'Report with a one-page summary up front: data collection from 5 interviews and a 21-response survey, theme and audience analysis, and the proposed training materials.'
    }
  ],
  businessContext: 'America\'s Credit Unions (ACU) recently released the sixth edition of their Financial Counseling Examination Preparation (FiCEP) materials, resulting in declining examination pass rates for Chartway Credit Union employees seeking professional certification. The existing ten-week preparation program required systematic analysis to identify instructional barriers and develop evidence-based enhancement recommendations for improved learner outcomes.',
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
    'Wrote a training materials proposal: leadership support, mandatory success sessions, an organization-specific curriculum, better practice exams, and feedback surveys'
  ],
  results: [
    'Chartway implemented the redesigned program and reported improved examination results. Specific pass rates and cohort figures are not shared here to protect employee privacy.',
    'Delivered comprehensive needs analysis report identifying management time allocation as primary barrier (23 mentions) - [View Complete Needs Analysis Report](/case-studies/ficep-needs-analysis.pdf)',
    'Provided evidence-based training enhancement recommendations addressing organizational support, practice exams, and content personalization',
    'Created systematic research findings documenting learner preferences and institutional challenges affecting certification success',
    'Demonstrated application of ADDIE methodology and mixed-methods research approach for professional development program improvement'
  ],

  addieMethodology: {
    analysis: {
      process: 'Mixed-methods needs analysis: semi-structured interviews with five program participants, a survey of recent participants (21 responses), and a review of the existing ten-week program and the sixth-edition materials.',
      findings: 'Conducted mixed-methods research including semi-structured interviews with 5 program participants and survey distribution yielding 21 responses. Analysis revealed consistent patterns: Management Needs to Set Apart More Time (23 mentions - highest priority), Study Guide was Helpful (17 mentions), Personalized per organization Content (16 mentions), I had Management Support (15 mentions), Need Better Practice Exam (12 mentions). Time constraints emerged as primary barrier with participants studying 10-12 hours of unpaid personal time for examination success.',
      learnerCharacteristics: 'Chartway Credit Union employees across multiple departments (retail, call center, member services) with varying professional backgrounds and experience levels, all requiring FiCEP certification for financial counseling roles.',
      performanceGaps: 'Following implementation of sixth edition materials, examination pass rates declined significantly from 2023 baseline, representing persistent underperformance across monthly cohorts rather than temporary adjustment difficulties. Progressive decline throughout 2024 indicates systematic instructional inadequacies requiring immediate programmatic intervention.'
    },
    design: {
      instructionalStrategy: 'Recommended turning the existing check-ins into mandatory "FiCEP Success Sessions" that teach each chapter through the credit union\'s own products, services and practices, with time for learners\' questions.',
      assessmentStrategy: 'Recommended low-stakes knowledge checks throughout the course, building to a practice exam that matches the real exam\'s complexity and question formats: double negatives, similar answer choices and reading-comprehension items.',
      mediaSelection: 'Recommended a mix learners can choose from: Rise activities (matching exercises and choose-your-own-adventure branching scenarios), branded flash cards in print or in Anki for spaced repetition, and role plays.',
      accessibilityDesign: 'WCAG 2.1 AA compliance including screen reader compatibility, color contrast ratios >4.5:1, keyboard navigation, closed captioning for all video content.'
    },
    development: {
      contentCreation: 'Worked with the Financial Wellness manager, the program\'s primary subject matter expert.',
      prototyping: 'Drafted examples to show what the recommendations would look like: Chapter 4 rewritten side by side with the credit union\'s own approach, and a sample flash card.'
    },
    implementation: {
      changeManagement: 'Recommended leadership support: a meeting that asks managers to schedule at least 2 hours a week per team member for the program, a short weekly update on their team members in a leaders\' chat, a leaders\' guide with talking points, and a mid-program check-in with leaders.',
      supportSystems: 'Recommended an initial meeting to set expectations with learners, flexible check-in formats for people who want more or fewer, and office hours for one-on-one help.'
    },
    evaluation: {
      formativeAssessment: 'Recommended feedback surveys for learners and for their managers at the middle and end of the program, to track what works and carry it forward to later cohorts.',
      summativeAssessment: 'The report\'s success measure: first-attempt pass rates back to the April 2023 baseline or higher.'
    }
  }
};

export default chartwayFicepEnhanced;
