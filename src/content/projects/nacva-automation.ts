// src/content/projects/nacva-automation.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const nacvaAutomation: ProjectBase = {
  detailPage: true,
  id: 'nacva-automation',
  title: 'Learning Technology Contractor - NACVA Professional Certification Systems',
  cardTitle: 'NACVA Course Automation',
  description: 'A contract role supporting continuing education technology at the National Association of Certified Valuators and Analysts (NACVA). I automated content delivery work for the CVA and MAFF certification programs.',
  longDescription: `A contract role with the National Association of Certified Valuators and Analysts (NACVA), which has over 7,000 members and certificants in business valuation, financial litigation and forensic accounting. I turned recorded webinars into on-demand continuing-education courses, and wrote Python scripts to automate setting each course up in NACVA's learning platform and its online store. NACVA's CVA (Certified Valuation Analyst) and MAFF (Master Analyst in Financial Forensics) certifications are nationally accredited credentials for CPAs, business valuators and financial litigation consultants.`,
  image: getImagePath('/images/thumbnails/Presentation - NACVA Professional Certification Technology.webp'),
  imageAlt: 'Title graphic: NACVA Professional Certifications - Supporting financial professionals using automation solutions',
  category: 'technical',
  tags: [
    'Learning Technology',
    'Python',
    'Selenium',
    'Camtasia',
    'Articulate Presenter',
    'SCORM',
    'Process Automation',
    'Learning Content Migration'
  ],
  status: 'completed',
  date: 'Apr 2023 - Aug 2023',
  
  // Interactive demo URL
  demoUrl: getImagePath('/demos/nacva-automation/index.html'),
  demoDescription: 'Simplified browser versions of the scripts, running on sample data.',
  
  challenges: [
    'Older training videos needed converting to formats current delivery platforms could use',
    'Manual data entry was delaying course deployment: each course took about 80 clicks and entries by hand across two systems',
    'Content had to stay accurate through the migration',
    'Working with several stakeholders while learning how the organization ran'
  ],
  solutions: [
    'Edited recorded webinars in Camtasia into on-demand courses, and published them as SCORM packages with Articulate Presenter',
    'Wrote Python scripts (using Selenium) that set up each course in the learning platform and the online store',
    'Wrote a converter that turned each exam\'s Word document into the platform\'s question-import format',
    'Checked each course\'s exam, title and settings before it went live'
  ],
  results: [
    'Turned 50+ recorded webinars into on-demand continuing-education courses, each with its exam',
    'Automated about 80 clicks and entries per course that had been done by hand',
    'Exam questions were imported from Word instead of retyped'
  ]
};

export default nacvaAutomation;