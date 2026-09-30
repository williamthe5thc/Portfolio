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
  description:
    'WeYouth had curriculum and no way to deliver it. I ran the market research on learning platforms against their specific constraints, recommended the one they adopted, then implemented their SMEs\' curriculum into it as enrollable courses. I run the platform and its technical support.',
  longDescription: `WeYouth is a 501(c)(3) addressing youth disconnection through Connection Coaching for young people ages 12-24. Its primary program, Mental Performance Connection Coaching (MPCC), reaches athletes through a "whole-team" model that trains coaches, equips captains, and gives athletes and parents shared language.

I joined at the point where the organization had the hard part done and the delivery problem unsolved. Seven-plus years of research had produced a validated coaching methodology, and the subject matter experts - the founders, a licensed clinician, and coaching staff - had written curriculum content. What did not exist was any system to deliver it. There was no LMS, no way to enroll a student, and no way to run a season without a founder personally present.

My first deliverable was a platform decision, not a course. I ran market research on learning management systems evaluated against WeYouth's actual circumstances rather than a generic feature comparison: a nonprofit budget, three distinct audiences needing separate tracks, seasonal cohorts tied to sports calendars, team-based enrollment rather than individual signups, a hybrid model where the platform carries content while live sessions carry relationships, and a very small team who would have to administer whatever was chosen. I recommended a platform, and that recommendation is what the organization runs on today.

From there the work has been implementation and operation. The SMEs write the content; I translate it into the platform as structured, sequential courses - module architecture, self-assessments, per-module evaluation surveys, enrollment, and cohort setup - and I collaborate with those SMEs on how the material is shaped to work in a self-paced online format. I am also the technical support function for the platform.

This is the difference between an organization that has good material and an organization that can deliver it to students.`,
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
  date: 'March 2026 - Present',
  // No metrics tiles here by design - see the note above. The numbers that
  // exist describe the client's operations rather than my work.
  businessContext:
    'WeYouth had spent 7+ years developing an evidence-based coaching methodology and its subject matter experts had written the curriculum, but the organization had no learning platform. Without one, there was no mechanism to enroll a student, no way to deliver content between live sessions, and no path to running a season without a founder in the room. Delivery capacity was capped at the founders\' personal calendar, which is not a model a nonprofit can scale or sell team contracts against.',
  challenges: [
    'No existing platform, so the first problem was a procurement decision rather than a design one',
    'Nonprofit budget constraints ruled out most enterprise LMS options',
    'Three audiences needed genuinely separate tracks, not one course relabeled',
    'Seasonal delivery windows are fixed - the platform had to be live before a season started or miss it',
    'SME-authored content was written by domain experts, not for self-paced online delivery, so it needed restructuring to work without a facilitator',
    'A very small team meant the platform had to be administrable by one person alongside other responsibilities'
  ],
  solutions: [
    'Ran market research on LMS options scored against WeYouth\'s specific constraints - budget, multi-audience tracks, cohort enrollment, e-commerce for team contracts, and administrative overhead - rather than a generic feature matrix',
    'Delivered a platform recommendation the organization adopted and still runs on',
    'Stood up the LMS and built the course architecture: separate athlete, coach, and captain tracks sharing an underlying model',
    'Implemented SME curriculum as sequential modules with a consistent internal pattern, so learners and administrators both learn the format once',
    'Configured self-assessments for learner reflection and separate short evaluation surveys for program feedback, kept as distinct instruments',
    'Set up cohort and team-based enrollment so partner organizations onboard as groups, including team-specific course builds',
    'Serve as the ongoing technical support function for the platform and its users'
  ],
  results: [
    'Platform recommendation adopted - the organization delivers its programs on the LMS I evaluated and selected',
    'Separate learner tracks live in the platform, each with its own sequence of modules, self-assessments, and evaluation instruments',
    'The organization can now enroll learners and run a full season without a founder personally delivering every session - the constraint that capped delivery before',
    'Cohort-based enrollment configured so partner organizations onboard as groups rather than individual signups',
    'Per-module evaluation surveys collect formative data during delivery, so weak modules surface while cohorts are still running',
    'Program effectiveness data is not yet available - cohorts are still in training, and measurement is scheduled once current seasons complete',
    'Enrollment figures, course counts, and partner names are the organization\'s operating data and are deliberately not published here'
  ],

  addieMethodology: {
    analysis: {
      process:
        'Two analyses ran in sequence: a platform requirements analysis for the LMS selection, and an ongoing content analysis with SMEs on what restructuring their material needed to work self-paced.',
      findings:
        'The organization\'s constraint was infrastructure, not content. The methodology was validated and the curriculum was written; there was simply no system to deliver it through. Platform evaluation surfaced the deciding requirements as multi-audience tracks, cohort-based enrollment, e-commerce for team contracts, and low administrative overhead for a very small team - a combination that eliminated most candidates regardless of feature depth.',
      learnerCharacteristics:
        'Coaches are busy adult professionals who must learn the model and then teach it. Athletes are 12-24 and reached through a sport they already care about. Captains are peer leaders with influence but no formal training. Each needed a different track.',
      performanceGaps:
        'With no LMS, delivery could not scale beyond the founders. Students could not be enrolled, content could not reach anyone between live sessions, and there was no consistent instrument for measuring whether the program worked.'
    },
    design: {
      instructionalStrategy:
        'Separate self-paced tracks per audience over a shared underlying model, with SME content restructured into short sequential modules that follow a consistent internal pattern.',
      assessmentStrategy:
        'Self-assessment questions within modules for learner reflection, plus distinct short evaluation surveys capturing program feedback - deliberately separate instruments serving different purposes.',
      mediaSelection:
        'Video modules for concept delivery, written activities for application, and printable discussion cards for captain-led sessions that happen away from screens.',
      accessibilityDesign:
        'Short self-paced modules completable around training schedules and on a phone between practices.'
    },
    development: {
      contentCreation:
        'SMEs author the curriculum content. I implement it in the platform - module architecture, assessments, surveys, enrollment - and work with them on how material needs to change to function without a live facilitator.',
      prototyping:
        'Private test courses in the LMS used to trial module structures and question types before publishing to live cohorts.',
      qualityAssurance:
        'SME review of every implemented module to confirm the restructured version still says what the domain experts intended.'
    },
    implementation: {
      pilotTesting:
        'Rolled out progressively by cohort and audience rather than all at once, with earlier tracks live while later ones were still being built, and partner-specific cohorts staged ahead of their seasons.',
      changeManagement:
        'Hybrid model configured so the platform carries the content load while live team sessions and check-ins carry the relationship load, reducing what any individual coach must prepare.',
      supportSystems:
        'I am the technical support function for the platform - onboarding administrators, resolving learner and coach access issues, and maintaining the system as cohorts move through it.'
    },
    evaluation: {
      formativeAssessment:
        'Per-module evaluation surveys and self-assessments collect data continuously during delivery, identifying weak modules while cohorts are still running.',
      summativeAssessment:
        'Pending. Cohorts are mid-training; effectiveness measurement is scheduled once current seasons complete.',
      continuousImprovement:
        'Courses are revised in place as survey data arrives and pushed to live cohorts rather than held for an annual release.'
    }
  }
};

export default weyouthMpcc;
