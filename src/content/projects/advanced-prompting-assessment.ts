// src/content/projects/advanced-prompting-assessment.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

/**
 * Solo assessment-design work on one module of the AI & Law course.
 *
 * Stated as a module rather than a standalone course on purpose. The course
 * itself was a three-person capstone and already has its own project page;
 * counting the same work twice would be padding. What is genuinely separate
 * here is that this piece was written alone, it is about assessment rather
 * than curriculum, and it went through a documented revision pass.
 */
const advancedPromptingAssessment: ProjectBase = {
  detailPage: true,
  id: 'advanced-prompting-assessment',
  title: 'Assessment Design - Advanced AI Prompting Module',
  description:
    'How do you grade a skill where the tool does the typing? I designed the assessment plan for a week-long module teaching advanced prompting to law students, including an AI usage policy that made tool use part of the evidence rather than something to police.',
  longDescription: `This is the assessment design for one week of the AI and Law course - the module covering advanced prompting techniques. I wrote it alone, unlike the course itself, and it went through two passes: an initial plan and a revision.

The interesting problem is that prompting is a skill practised through a tool that also produces the output. A quiz on chain-of-thought prompting tests whether someone can define it, not whether they can do it. And a submitted artifact proves very little on its own, because the AI wrote it.

The design answers that by assessing the process rather than the artifact. Learners run daily prompt challenges and must document which AI tool they used and include the prompts themselves, so the reasoning is visible and gradeable. Peer feedback puts learners in the position of evaluating someone else's prompting, which is a sharper test of understanding than producing your own. Reflective iteration asks them to analyse why a prompt underperformed and revise it, which is the actual professional skill.

The AI usage policy is deliberately not a restriction. Written in late 2024, when a lot of academic policy was still framed around preventing AI use, this treats disclosure as part of the submission - the tool and the prompt are the evidence, not the contraband.`,
  image: getImagePath('/images/thumbnails/coming_soon.png'),
  category: 'id',
  tags: [
    'Assessment Design',
    'AI in Education',
    'Formative Assessment',
    'Rubric Design',
    'Peer Review',
    'Adult Learning Theory',
    'Prompt Engineering'
  ],
  status: 'completed',
  date: '2024',
  metrics: [
    { value: '30%', label: 'Of the grade weighted to formative work rather than a final artifact' },
    { value: '5', label: 'Learning objectives, from technique recall through ethical judgement' }
  ],

  projectUrl: getImagePath('/case-studies/advanced-prompting-assessment-design.pdf'),
  artifacts: [
    {
      label: 'Assessment Design, Parts 1 and 2',
      href: '/case-studies/advanced-prompting-assessment-design.pdf',
      description:
        'The full assessment plan: instructional approach, learner context, objectives, formative and summative instruments, and the revision pass'
    }
  ],

  tools: [
    'Assessment & Rubric Design',
    'Formative Assessment Instruments',
    'Peer Review Structures',
    'Canvas LMS'
  ],
  methodology:
    'Backward design from the performance the module is meant to produce, with assessment weighted toward observable process rather than a final artifact that an AI tool could have generated',

  businessContext:
    'Week 5 of a thirteen-week Master of Legal Studies course. Learners had covered basic prompting and needed to move to techniques with real professional value - chain-of-thought reasoning, few-shot examples, and a structured framework for constructing prompts. The assessment problem was that the skill is exercised through a tool that also writes the answer, so conventional assessment measures the tool rather than the learner.',
  targetAudience:
    '25-30 adult professionals in a Master of Legal Studies program, studying asynchronously alongside working. They arrived with a basic understanding of AI and simple prompting, and no technical background beyond that.',

  learningObjectives: [
    'Understand advanced prompting techniques including chain-of-thought, few-shot learning, and the PCRO framework',
    'Apply those techniques to improve AI responses in legal and business scenarios',
    'Evaluate the effectiveness of different prompting strategies',
    'Iteratively refine prompts toward better results',
    'Recognise the ethical considerations in advanced AI prompting'
  ],

  challenges: [
    'The skill is exercised through a tool that also produces the deliverable, so a submitted artifact is weak evidence of learning',
    'Recall-based testing would measure whether learners could define a technique rather than use one',
    'Learners were working professionals studying asynchronously, so anything time-heavy would simply not be completed',
    'Academic AI policy at the time was mostly framed around prevention, which fits badly with a course whose subject is the tool'
  ],

  solutions: [
    'Weighted a substantial share of the grade to formative work spread across the week rather than a single end-of-module submission',
    'Required learners to document the AI tool used and include their actual prompts, making the reasoning visible and assessable',
    'Built in peer feedback on prompts, since evaluating someone else\'s work is a sharper test of understanding than producing your own',
    'Used reflective iteration - analyse why a prompt underperformed, revise it, explain the change - to assess the professional skill rather than the output',
    'Kept individual tasks to roughly twenty to thirty minutes so working professionals could actually complete them',
    'Wrote the AI usage policy as disclosure rather than restriction, treating the tool and the prompt as part of the evidence'
  ],

  results: [
    'Complete assessment plan covering instructional approach, learner context, objectives, and both formative and summative instruments',
    'Revised through a second pass, so the published document shows the design changing rather than only its final state',
    'Assessment approach transfers directly to any course teaching a skill exercised through a generative tool, which is an increasing share of professional training'
  ],

  learningTheoryApplied: [
    'Backward design (Wiggins & McTighe) - assessment derived from the target performance rather than the content covered',
    'Formative assessment (Scriven) - weighted toward feedback during learning rather than judgement at the end',
    'Experiential learning (Kolb) - practise, reflect, revise, practise again',
    'Andragogy (Knowles) - tasks sized for working professionals and framed around immediate professional relevance'
  ],

  lessonsLearned:
    'Writing this in late 2024 meant guessing at where AI policy in education would settle. The guess that held up was that disclosure beats prohibition: asking learners to show the prompt turns the tool into evidence of thinking rather than a way around it. What I would add now is a calibration step, because peer feedback on prompt quality assumes a shared standard that learners at this stage do not yet have.'
};

export default advancedPromptingAssessment;
