// src/content/projects/nacva-automation.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const nacvaAutomation: ProjectBase = {
  detailPage: true,
  id: 'nacva-automation',
  title: 'Learning Technology Contractor - NACVA Professional Certification Systems',
  description: 'Professional contractor role supporting continuing education technology for the National Association of Certified Valuators and Analysts (NACVA), automating content delivery workflows for financial professionals pursuing CVA and MAFF certifications',
  longDescription: `Professional contractor role with the National Association of Certified Valuators and Analysts (NACVA), a leading organization that trains and certifies over 7,000 financial professionals in business valuation and financial litigation services. Supported their continuing education technology infrastructure by converting training videos and developing Python automation scripts to streamline backend data management for their prestigious CVA (Certified Valuation Analyst) and MAFF (Master Analyst in Financial Forensics) certification programs.

CVA and MAFF are highly respected, nationally accredited credentials for CPAs, business valuators, and financial litigation consultants. My work focused on modernizing their learning content delivery systems and eliminating time-consuming manual data entry processes that delayed course deployment for busy professionals seeking these certifications.

This contractor role provided valuable experience in learning technology optimization for professional development organizations, demonstrating how technical automation can significantly improve educational content delivery for specialized professional audiences.`,
  image: getImagePath('/images/thumbnails/Presentation - NACVA Professional Certification Technology.png'),
  category: 'technical',
  tags: [
    'Learning Technology',
    'SME Collaboration',
    'Content Management Systems',
    'Technology-Based Instruction',
    'Professional Development',
    'Process Improvement',
    'Learning Content Migration'
  ],
  status: 'completed',
  date: 'Apr 2023 - Aug 2023',
  
  // Interactive demo URL
  demoUrl: getImagePath('/demos/nacva-automation/index.html'),
  
  tools: [
    'Learning Management Systems',
    'Content Development Workflows',
    'Video Processing Technology',
    'Quality Assurance Processes',
    'SME Collaboration Tools'
  ],
  methodology: 'Systematic Technology Implementation with ADDIE Framework',
  learningObjectives: [
    'Support efficient content delivery to finance professionals pursuing continuing education',
    'Collaborate with subject matter experts to maintain content quality during technical transitions',
    'Contribute to scalable learning technology solutions for professional development programs',
    'Apply process improvement principles to learning content management workflows'
  ],
  challenges: [
    'Legacy video content requiring format updates for modern learning delivery platforms',
    'Manual processing workflows that delayed course deployment for busy professionals',
    'Need to maintain content accuracy and quality during technical migration processes',
    'Coordinating with multiple stakeholders while learning organizational procedures'
  ],
  solutions: [
    'Supported systematic video format conversion ensuring compatibility with updated delivery systems',
    'Contributed to workflow improvements that reduced manual processing time',
    'Assisted in quality assurance processes to maintain content accuracy during migration',
    'Collaborated with team members to develop efficient content management procedures'
  ],
  results: [
    'Supported the successful conversion of 50+ professional development videos to modern formats',
    'Contributed to workflow improvements that reduced course deployment time from weeks to days',
    'Gained valuable experience in learning technology implementation and stakeholder collaboration',
    'Developed understanding of how technical skills support professional development goals',
    'Built foundation for career in learning technology and instructional design'
  ]
};

export default nacvaAutomation;