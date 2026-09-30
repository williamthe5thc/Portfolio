// src/content/projects/nacva-automation.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

const nacvaAutomation: ProjectBase = {
  detailPage: true,
  id: 'nacva-automation',
  title: 'Learning Technology Contractor - NACVA Professional Certification Systems',
  cardTitle: 'NACVA Course Automation',
  description: 'A contract role supporting continuing education technology at the National Association of Certified Valuators and Analysts (NACVA). I automated content delivery work for the CVA and MAFF certification programs.',
  longDescription: `A contract role with the National Association of Certified Valuators and Analysts (NACVA), which trains and certifies over 7,000 financial professionals in business valuation and financial litigation. I converted training videos and wrote Python scripts to automate backend data entry for its CVA (Certified Valuation Analyst) and MAFF (Master Analyst in Financial Forensics) certification programs, which are nationally accredited credentials for CPAs, business valuators and financial litigation consultants.

The work was about updating how course content was delivered, and removing the manual data entry that had been delaying course deployment.`,
  image: getImagePath('/images/thumbnails/Presentation - NACVA Professional Certification Technology.webp'),
  imageAlt: 'Title graphic: NACVA Professional Certifications - Supporting financial professionals using automation solutions',
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
  demoDescription: 'Simplified browser versions of the scripts, running on sample data.',
  
  challenges: [
    'Older training videos needed converting to formats current delivery platforms could use',
    'Manual data entry was delaying course deployment',
    'Content had to stay accurate through the migration',
    'Working with several stakeholders while learning how the organization ran'
  ],
  solutions: [
    'Wrote Python scripts to automate backend data entry',
    'Helped convert videos to formats the updated delivery systems could use',
    'Helped improve workflows to cut manual processing time',
    'Helped check content for accuracy during the migration',
    'Worked with the team on content management procedures'
  ],
  results: [
    'Helped convert 50+ professional development videos to current formats',
    'Helped improve workflows that cut course deployment time from weeks to days'
  ]
};

export default nacvaAutomation;