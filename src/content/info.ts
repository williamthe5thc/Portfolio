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
  /*
    Each tile has to make sense on its own. A homepage visitor has no story
    yet, so a number that needs a paragraph to land - "2 exam failures" - reads
    as a puzzle rather than a credential. That outcome lives on the Chartway
    project page, where the problem it answers is right above it.

    These four are self-explanatory cold, and together they say: real clients,
    can build, works from evidence, formally trained.
  */
  { label: "Organizations I've designed learning for", value: "4" },
  { label: "Storyline 360 slides in one branching course", value: "278" },
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
