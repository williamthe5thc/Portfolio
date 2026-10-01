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
  role: 'Instructional design intern, working under professional supervision. I ran the needs analysis and wrote the recommendations; Chartway carried out the redesign.',
  description: 'As part of my internship with Chartway, I conducted a systematic needs analysis for the company\'s FiCEP program, which prepares employees for a financial counseling certification exam. The analysis showed what was holding learners back, and I recommended changes to the curriculum and to the support around it.',
  longDescription: `A needs analysis for Chartway Credit Union's Financial Counseling Examination Preparation (FiCEP) program, done under professional supervision during my instructional design internship. Pass rates on the certification exam had dropped after America's Credit Unions (ACU) updated the materials to a sixth edition. I interviewed five program participants, surveyed recent participants (21 responses), and reviewed the ten-week program and the new materials. The most common theme was that managers need to set aside more study time (23 mentions). Others were that the study guide helped (17), that content should be tailored to the organization (16), and that the practice exam needed to be better (12). I recommended changes to the curriculum, the practice exam and the support learners get around it, to help bring pass rates back up and improve the experience for learners.`,
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
  businessContext: 'America\'s Credit Unions (ACU) released the sixth edition of the FiCEP materials, and pass rates fell for Chartway Credit Union employees taking the certification exam. The ten-week preparation program needed an analysis of what was holding learners back, and recommendations for what to change.',
  challenges: [
    'Pass rates fell after the sixth-edition materials came in',
    'Little protected study time at work: participants reported 10 to 12 hours of unpaid study',
    'The practice exam and materials didn\'t match what the real exam asked',
    'Learners wanted examples from their own organization',
    'Collecting enough data from working professionals who were already short on time'
  ],
  solutions: [
    'Interviewed 5 participants and surveyed recent participants (21 responses)',
    'Sorted the answers into themes to find the barriers and what learners preferred',
    'Recommended changes to study time, the practice exam and tailored content',
    'Proposed ways for leaders to support learners, including protected study time',
    'Wrote a training materials proposal: leadership support, mandatory success sessions, an organization-specific curriculum, better practice exams, and feedback surveys'
  ],
  results: [
    'Chartway implemented the redesigned program and reported improved examination results. Specific pass rates and cohort figures are not shared here to protect employee privacy.',
    'Delivered the needs analysis report. The top barrier was managers not setting aside study time (23 mentions). [View the needs analysis report](/case-studies/ficep-needs-analysis.pdf)'
  ],

  addieMethodology: {
    analysis: {
      process: 'Mixed-methods needs analysis: semi-structured interviews with five program participants, a survey of recent participants (21 responses), and a review of the existing ten-week program and the sixth-edition materials.',
      findings: 'The five most common themes across the interviews and the survey: managers need to set aside more time (23 mentions), the study guide was helpful (17), content should be tailored to the organization (16), "I had management support" (15), and the practice exam needs to be better (12). Time was the main barrier. Participants reported studying 10 to 12 hours on their own unpaid time to pass.',
      learnerCharacteristics: 'Chartway Credit Union employees from retail, the call center and member services, with different backgrounds and levels of experience. All of them need FiCEP certification for financial counseling roles.',
      performanceGaps: 'After the sixth edition came in, pass rates fell well below the 2023 baseline and kept falling through 2024, across monthly cohorts. A drop that lasting pointed to problems in the program itself, and it needed fixing soon.'
    },
    design: {
      instructionalStrategy: 'Recommended turning the existing check-ins into mandatory "FiCEP Success Sessions" that teach each chapter through the credit union\'s own products, services and practices, with time for learners\' questions.',
      assessmentStrategy: 'Recommended low-stakes knowledge checks throughout the course, building to a practice exam that matches the real exam\'s complexity and question formats: double negatives, similar answer choices and reading-comprehension items.',
      mediaSelection: 'Recommended a mix learners can choose from: Rise activities (matching exercises and choose-your-own-adventure branching scenarios), branded flash cards in print or in Anki for spaced repetition, and role plays.',
      accessibilityDesign: 'Recommended WCAG 2.1 AA compliance: screen reader compatibility, color contrast ratios above 4.5:1, keyboard navigation, and closed captioning for all video content.'
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
