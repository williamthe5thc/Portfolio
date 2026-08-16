// src/content/info.ts
/**
 * Capability cards for the homepage and about page.
 *
 * These replaced a row of numbers. Survey data on what hiring managers screen
 * for is fairly blunt - roughly half rate LMS skill as important and about a
 * third specifically prefer candidates who use AI tools - and none of that is
 * conveyed by a slide count. The field is also described as shifting from
 * content creator to learning architect, which is a claim about scope of
 * responsibility rather than volume of output.
 *
 * So each card names a capability a job description would actually list, then
 * gives the specific evidence underneath it. `value` is the headline claim,
 * `label` is the proof. Every proof traces to a shipped project on this site.
 */
export const stats = [
  {
    value: "LMS selection & administration",
    label: "Ran the platform evaluation for a nonprofit, made the recommendation they adopted, and administer it today. Also built and delivered in Canvas."
  },
  {
    value: "Articulate Storyline 360",
    label: "A 278-slide branching course with scenario-based decision points, published and playable from this site."
  },
  {
    value: "AI, designed rather than bolted on",
    label: "Ten-week AI curriculum for law students, plus assessment design for an advanced prompting module."
  },
  {
    value: "Evidence before design",
    label: "Interviews and a 21-response survey to locate the real barrier, and a cognitive walkthrough run against my own build."
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
