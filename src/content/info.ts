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
export const stats = [
  /*
    Bullets are all noun phrases. They previously mixed past verbs
    ("Evaluated platforms"), present verbs ("Administer that platform") and
    bare noun phrases ("Ten weeks of AI curriculum") inside the same list,
    which reads as unedited. Naming the deliverable rather than conjugating a
    verb also sidesteps the tense question entirely: the headline already
    says what I can do, so each bullet just has to name the evidence.
  */
  {
    value: "Choose and run an LMS",
    points: [
      "A platform evaluation against a nonprofit's real constraints, and the recommendation they now run on",
      "Day-to-day administration of that platform, including its technical support"
    ]
  },
  {
    value: "Build and deliver courses in Canvas",
    points: [
      "A ten-week graduate law curriculum, delivered asynchronously to a live cohort",
      "A self-paced skills course assessed by video the learners submitted themselves"
    ]
  },
  {
    value: "Build interactive e-learning in Storyline 360",
    points: [
      "Branching scenarios where a learner's choices change what happens next",
      "A published course, playable here rather than shown as screenshots"
    ]
  },
  {
    value: "Design AI learning that goes past the tool demo",
    points: [
      "Ten weeks of AI curriculum for legal professionals with no technical background",
      "An assessment design that grades the prompting, not the output the AI produced"
    ]
  },
  {
    value: "Find the real problem before designing",
    points: [
      "Interviews and a survey to locate the actual barrier instead of assuming it",
      "A usability walkthrough of my own build, catching what I was too close to see"
    ]
  },
  {
    value: "Automate what should not be manual",
    points: [
      "Python scripts replacing hand-entry of course data at a certification body",
      "React and TypeScript front ends, this site among them"
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
