// src/content/projects/weyouth-mpcc.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

/**
 * FLAGSHIP. Current, ongoing work for a 501(c)(3).
 *
 * Scope is stated precisely on purpose: WeYouth's subject matter experts
 * authored the curriculum content. My work was the platform decision, the
 * implementation, and the ongoing technical operation. Claiming the content
 * authorship would not survive an interview, and the actual role - evaluating
 * and standing up a learning platform, then getting SME material into it as
 * something learners can enrol in - is the harder thing to hire for anyway.
 *
 * Categorised as learning-tech rather than id for the same reason.
 *
 * NO CLIENT OPERATING DATA. Enrollment counts, course totals, and named
 * partner organizations are the employer's business information, not mine to
 * publish on a personal site. The story stands on the decisions and the
 * craft; every figure that would have described WeYouth's operations has been
 * deliberately left out.
 */
const weyouthMpcc: ProjectBase = {
  detailPage: true,
  id: 'weyouth-mpcc',
  title: 'LMS Selection & Implementation - Nonprofit Youth Coaching Program',
  cardTitle: 'Nonprofit LMS Selection & Build',
  role: 'Instructional designer. I chose the platform, build the courses in it and run it; WeYouth\'s subject matter experts write the content.',
  description:
    'WeYouth had curriculum and no way to deliver it. I ran the market research on learning platforms against their specific constraints, recommended the one they adopted, then implemented their SMEs\' curriculum into it as enrollable courses. I run the platform and its technical support.',
  longDescription: `WeYouth is a 501(c)(3) addressing youth disconnection through Connection Coaching for young people ages 12-24. Its primary program, Mental Performance Connection Coaching (MPCC), reaches athletes through a "whole-team" model that trains coaches, equips captains, and gives athletes and parents shared language.

The SMEs write the content. I chose the platform, build their material into it as self-paced courses, and support everyone who uses it.`,
  image: getImagePath('/images/thumbnails/weyouth-mpcc.svg'),
  imageAlt: 'WeYouth logo',
  category: 'learning-tech',
  tags: [
    'LMS Selection',
    'LMS Implementation',
    'LearnWorlds',
    'Learning Technology',
    'SME Collaboration',
    'Nonprofit',
    'Technical Support',
    'Course Architecture'
  ],
  status: 'in-progress',
  date: 'February 2026 - Present',
  // No metrics tiles here by design - see the note above. The numbers that
  // exist describe the client's operations rather than my work.
  businessContext:
    'WeYouth\'s subject matter experts had written the curriculum, but the organization had no learning platform. Without one, there was no mechanism to enroll a student, no way to deliver content between live sessions, and no path to running a season without a founder in the room. Delivery capacity was capped at the founders\' personal calendar, which is not a model a nonprofit can scale or sell team contracts against.',
  challenges: [
    'There was no platform yet, so the first problem was choosing one',
    'Nonprofit budget constraints ruled out most enterprise LMS options',
    'Three audiences each needed their own track',
    'Seasons start on fixed dates, so the platform had to be live before a season began or miss it',
    'The SMEs\' content wasn\'t written for self-paced online delivery, so it needed restructuring to work without a facilitator',
    'A very small team meant the platform had to be administrable by one person alongside other responsibilities'
  ],
  solutions: [
    'Scored LMS options against WeYouth\'s constraints: budget, multi-audience tracks, cohort enrollment, e-commerce for team contracts, and administrative overhead',
    'Stood up the LMS and built the course architecture: separate athlete, coach, and captain tracks sharing an underlying model',
    'Implemented SME curriculum as sequential modules with a consistent internal pattern, so learners and administrators both learn the format once',
    'Configured self-assessments for learner reflection and separate short evaluation surveys for program feedback, kept as distinct instruments',
    'Set up cohort and team-based enrollment so partner organizations onboard as groups, including team-specific course builds',
    'Serve as the ongoing technical support function for the platform and its users'
  ],
  results: [
    'Platform recommendation adopted: the organization delivers its programs on the LMS I evaluated and selected',
    'The organization is set up to enroll learners and run a season without a founder personally delivering every session, which is what limited delivery before',
    'Per-module surveys are collecting feedback while cohorts run; effectiveness data comes when the current seasons end',
    'Enrollment figures, course counts and partner names are WeYouth\'s operating data, so they aren\'t published here'
  ],

  addieMethodology: {
    analysis: {
      process:
        'Two analyses ran in sequence: a platform requirements analysis for the LMS selection, and an ongoing content analysis with SMEs on what restructuring their material needed to work self-paced.',
      findings:
        'The constraint was infrastructure. The coaching method and the curriculum existed, but there was no system to deliver them. The platform evaluation showed the deciding requirements were multi-audience tracks, cohort-based enrollment, e-commerce for team contracts, and low administrative overhead for a very small team. That combination ruled out most candidates, however many features they had.',
      learnerCharacteristics:
        'Coaches are busy adult professionals who must learn the model and then teach it. Athletes are 12-24 and reached through a sport they already care about. Captains are peer leaders with influence but no formal training. Each needed a different track.',
      performanceGaps:
        'With no LMS, delivery could not scale beyond the founders. Students could not be enrolled, content could not reach anyone between live sessions, and there was no consistent instrument for measuring whether the program worked.'
    },
    design: {
      instructionalStrategy:
        'Separate self-paced tracks per audience over a shared underlying model, with SME content restructured into short sequential modules that follow a consistent internal pattern.',
      assessmentStrategy:
        'Self-assessment questions within modules for learner reflection, plus short evaluation surveys for program feedback, kept separate because they serve different purposes.',
      mediaSelection:
        'Video modules for concept delivery, written activities for application, and printable discussion cards for captain-led sessions that happen away from screens.',
    },
    development: {
      contentCreation:
        'SMEs author the curriculum content. I implement it in the platform (module architecture, assessments, surveys, enrollment) and work with them on how material needs to change to function without a live facilitator.',
      prototyping:
        'Private test courses in the LMS used to trial module structures and question types before publishing to live cohorts.',
      qualityAssurance:
        'SME review of every implemented module to confirm the restructured version still says what the domain experts intended.'
    },
    implementation: {
      pilotTesting:
        'Rolled out cohort by cohort and audience by audience, with earlier tracks live while later ones were still being built, and partner-specific cohorts staged ahead of their seasons.',
      changeManagement:
        'Hybrid model configured so the platform carries the content load while live team sessions and check-ins carry the relationship load, reducing what any individual coach must prepare.',
      supportSystems:
        'I am the platform\'s technical support: onboarding administrators, resolving learner and coach access issues, and maintaining the system as cohorts move through it.'
    },
    evaluation: {
      formativeAssessment:
        'Per-module evaluation surveys and self-assessments collect data continuously during delivery, identifying weak modules while cohorts are still running.',
      summativeAssessment:
        'Pending. Cohorts are mid-training; effectiveness measurement is scheduled once current seasons complete.',
      continuousImprovement:
        'Courses are revised in place as survey data arrives, and the changes go straight to live cohorts.'
    }
  }
};

export default weyouthMpcc;
