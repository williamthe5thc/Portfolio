// src/content/projects/course-waltz.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

/*
  Every claim here comes from the two documents this page links:
  public/case-studies/waltz-formative-evaluation.pdf and
  waltz-blueprint-storyboard.pdf. Check any new line against them first.
*/
const waltzCourse: ProjectBase = {
  detailPage: true,
  id: "teaching-waltz",
  title: "Teaching the Waltz Online Course",
  description: "A classmate and I designed a self-paced Canvas course that teaches complete beginners to dance the waltz. I filmed the lessons with a dancer, showing common mistakes next to the correct form, and we tested the course with a small group of four learners.",
  longDescription: "Graduate final project at the University of Utah, co-designed with a classmate. The course has two modules. The first teaches the box step, the progressive basic and the underarm turn; the second covers the dance's history, its health benefits and its place in social life. Dance is learned by doing, and an online course can't correct anyone in the moment, so the design plans for mistakes instead: the lesson videos show common errors next to the correct form, and learners send in a video of their own dancing for instructor feedback. My part was the video and the subject matter expert. I coordinated with the dancer who taught in our videos, filmed the lessons with him, and turned the footage into course videos with transcripts and optional captions. I also proofed the finished course. My co-designer built the Canvas pages, assessments and rubrics.",
  image: getImagePath('/images/thumbnails/how-to-waltz.webp'),
  category: "id",
  tags: ["Instructional Design", "Online Learning", "Dance Education", "Canvas LMS", "Video Production", "Formative Evaluation"],
  status: "completed",
  date: "2023",
  metrics: [
    { value: '4', label: 'Participants in small-group formative evaluation' },
    { value: '2', label: 'Modules tested' }
  ],

  // Case Study Documentation
  projectUrl: getImagePath('/case-studies/waltz-formative-evaluation.pdf'),
  projectUrlDescription: 'The complete formative evaluation report, including the assessment design.',
  artifacts: [
    {
      label: 'Module Blueprint & Storyboard',
      href: '/case-studies/waltz-blueprint-storyboard.pdf',
      description:
        'The 17-page build plan for both modules: objectives, assessments and learning activities, then the page-by-page content, rubrics and quiz.'
    },
    {
      label: 'Assessment & Evaluation Plan',
      href: '/case-studies/waltz-formative-evaluation.pdf',
      description:
        'A one-page summary, then the assessment design, the evaluation plan, and the results of testing the course with four participants.'
    }
  ],
  challenges: [
    "Teaching a physical, partnered skill through a self-paced online course, with no instructor in the room to correct form",
    "Showing learners what common mistakes look like, and asking them to spot those mistakes",
    "Including learners who don't have a partner, or who can't dance themselves",
    "Keeping learners part of a dancing community while they study on their own"
  ],

  businessContext: "The course was for adults who want to learn the waltz but don't have the time or access for in-person classes. They are complete beginners, may not have a partner, and have no instructor there to correct their form. The project was also our chance to run the whole instructional design process, from course goals through evaluation. Our own constraints were a fixed end-of-semester deadline and limited access to the dancer we were filming.",

  addieMethodology: {
    analysis: {
      needsAssessment: "We worked from a written needs assessment. No survey of prospective learners was run; the need was set by defining the target learner and the skill gap directly.",
      learnerAnalysis: "Able-bodied adults of any age and background, with a computer and an internet connection and little or no dance experience. We wrote personas for them and kept referring back to them while designing.",
      contextAnalysis: "A self-paced course in Canvas. Learners practice at home, alone or with a partner, and send in video for feedback.",
      performanceGaps: "The gap was the skill itself: beginners who can't yet dance the box step, the progressive basic or the underarm turn. The two course outcomes follow from that: perform the basic steps, and explain the waltz's historical, social and physical context."
    },
    design: {
      instructionalStrategy: "Module 1 builds from the box step to the progressive basic to the underarm turn with a partner, and ends with a video submission. Each step has a video and written instructions for the lead and the follow. The motivation plan follows the ARCS model: physical activity and varied lessons for attention, dancing in real settings for relevance, instructor feedback for confidence, and clear rubrics for satisfaction.",
      assessmentStrategy: "Module 1 has a video of the learner dancing all three steps, graded by rubric with instructor feedback; an assignment to spot mistakes in a dance video; a four-question quiz with two attempts that points to the page to review after a wrong answer; and a discussion on challenges and successes. Module 2 has a 500 to 1,000 word essay on the history of the waltz, a concept map on the health benefits of dancing, and a discussion where learners share a waltz from a film, a piece of music or social life.",
      universalDesign: "Captions and transcripts on every video, written instructions next to the videos, alt text on images, sans-serif type, good contrast and no tables. Learners who can't dance can instead film themselves talking another person through the steps."
    },
    development: {
      contentCreation: "I filmed a dancer, a friend who agreed to be our instructor, instead of using existing footage, so the videos could show common mistakes next to the correct form. I cut the footage into a separate video for each step and one for the mistakes, and wrote a transcript for each."
    },
    implementation: {
      pilotTesting: "We tested both modules with a small group of four participants, using a feedback survey and interviews."
    },
    evaluation: {
      formativeAssessment: "Participants took 5 to 30 minutes per module, with averages of 10.75 minutes for the first and 14.75 for the second. They felt at least somewhat competent afterwards. Opinions were split on whether there were enough visual aids, and the common suggestion was more step diagrams.",
      continuousImprovement: "The revisions we planned from the results: fix the title slides on the common-mistakes video, correct the captions and let learners turn them off, split the videos into lead and follow, add diagrams for the progressive basic and the underarm turn, and use \"lead\" and \"follow\" throughout instead of gendered terms. We decided not to re-film for better audio, because it didn't get in the way of understanding."
    }
  },

  solutions: [
    "Lesson videos alongside written lead and follow instructions, so learners can use whichever helps them",
    "Videos filmed for the course that show common mistakes next to the correct form",
    "Discussions where learners share challenges and successes and reply to each other",
    "A video submission graded by rubric, with an alternative for learners who can't dance"
  ],
  results: [
    "Tested with a small group of four participants, who agreed the modules were well organized, clear and easy to get to. [View the evaluation report](/case-studies/waltz-formative-evaluation.pdf)",
    "Interviews found the assessments matched the learning objectives and the grading criteria were clear",
    "Every participant said they wanted more video, especially of the whole dance",
    "The results led to a revision plan for the videos, captions, diagrams and wording"
  ]
};

export default waltzCourse;
