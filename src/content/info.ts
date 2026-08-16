// src/content/info.ts
/**
 * Site-level proof points.
 *
 * Every figure here traces to a specific project file - 278 and 26 min from
 * professional-communication-training, 40+ hrs from ai-law-course, 21 from the
 * Chartway needs analysis. Counts of things produced ("workflows", "tools
 * mastered") were removed: they measure activity rather than outcome, and
 * "Organizations Served: 2" advertised inexperience.
 */
export const stats = [
  { label: "Storyline 360 slides authored", value: "278" },
  // Was "40+ hours of graduate curriculum". That figure came from a mock-up
  // rather than the course itself - the real syllabus never mentions hours.
  // Weekly modules are countable from the schedule.
  { label: "Weekly modules in a graduate law curriculum", value: "10" },
  { label: "Learners surveyed in a live needs analysis", value: "21" },
  { label: "Instructional Design, University of Utah", value: "M.Ed." }
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
