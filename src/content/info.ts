// src/content/info.ts
/**
 * Capability cards for the homepage and about page.
 *
 * These replaced a row of numbers. Survey data on what hiring managers screen
 * for is blunt - roughly half rate LMS skill as important and about a third
 * specifically prefer candidates who use AI tools - and none of that is
 * conveyed by a slide count.
 *
 * Each card is a thing I can do, with the specific work underneath it. Kept as
 * short bullets rather than prose so the whole section is skimmable, and split
 * finely enough that no bullet implies credit for a neighbouring project:
 * choosing an LMS and building a Canvas course are separate pieces of work for
 * separate clients, and were previously run together in one sentence.
 */
/**
 * The "What I Bring" cards on the home page. Each point is a fact from a
 * project page or the resumes; `to` links to the page that backs it up.
 * The order follows what the technologist and instructional design postings
 * ask for most: platforms, support, accessibility, AI, automation, analysis.
 */
export interface CapabilityPoint {
  text: string;
  /** Internal route that backs the claim, e.g. "/portfolio/weyouth-mpcc". */
  to?: string;
}
export interface Capability {
  title: string;
  points: CapabilityPoint[];
}

export const capabilities: Capability[] = [
  {
    title: 'Learning platforms',
    points: [
      { text: 'Chose LearnWorlds for a youth nonprofit and built its courses and learner tracks', to: '/portfolio/weyouth-mpcc' },
      { text: 'Built ten Canvas modules for a graduate law course, on a team of three', to: '/portfolio/ai-law-course' },
      { text: 'Installed and configured Moodle on my own computer to learn it' }
    ]
  },
  {
    title: 'Support and troubleshooting',
    points: [
      { text: "Technical support for WeYouth's administrators, learners and coaches", to: '/portfolio/weyouth-mpcc' },
      { text: 'Tested video, iFrames, JavaScript and an AI chatbot in a Canvas test module before adding them to a course', to: '/portfolio/ai-law-course' },
      { text: 'Three years on a help desk, explaining technical problems in plain language', to: '/resume/technology' }
    ]
  },
  {
    title: 'Accessibility',
    points: [
      { text: "Recommended WCAG 2.1 AA changes for a credit union's certification program", to: '/portfolio/chartway-ficep-enhanced' },
      { text: 'Captions, transcripts, alt text and an alternate assignment in a self-paced Canvas course', to: '/portfolio/teaching-waltz' }
    ]
  },
  {
    title: 'AI in learning',
    points: [
      { text: 'An assessment plan for a graduate AI course where learners name the tool and submit their prompt instead of being told not to use AI', to: '/portfolio/ai-law-course' },
      { text: 'A VR interview-practice simulator on a local AI model (in progress)' }
    ]
  },
  {
    title: 'Automation and web development',
    points: [
      { text: 'Python scripts that did about 80 manual steps per course at a certification body', to: '/portfolio/nacva-automation' },
      { text: 'HTML for Canvas pages; React and TypeScript for this site' }
    ]
  },
  {
    title: 'Needs analysis and evaluation',
    points: [
      { text: 'Interviews and a survey that found the real barrier to a certification program: study time', to: '/portfolio/chartway-ficep-enhanced' },
      { text: 'Usability testing on the law course; a four-person evaluation of the waltz course', to: '/portfolio/teaching-waltz' }
    ]
  }
];

// Instructional Design focused categories - aligned with actual project categories
export const projectCategories = [
  {
    id: 'id',
    label: 'Instructional Design',
    description: 'Comprehensive learning solutions, curriculum design, and educational strategy'
  },
  {
    id: 'learning-tech',
    label: 'Learning Technology',
    description: 'Technology-enhanced learning solutions combining instructional design with technical development'
  },
  {
    id: 'technical',
    label: 'Technical Projects',
    description: 'Pure programming and development work demonstrating technical proficiency'
  }
];
