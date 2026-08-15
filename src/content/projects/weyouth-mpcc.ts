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
 * something students can enrol in - is the harder thing to hire for anyway.
 *
 * Categorised as learning-tech rather than id for the same reason.
 */
const weyouthMpcc: ProjectBase = {
  detailPage: true,
  id: 'weyouth-mpcc',
  title: 'LMS Selection & Implementation - Nonprofit Youth Coaching Program',
  description:
    'WeYouth had curriculum and no way to deliver it. I ran the market research on learning platforms against their specific constraints, recommended the one they adopted, then implemented their SMEs\' curriculum into it as enrollable courses. I run the platform and its technical support.',
  longDescription: `WeYouth is a 501(c)(3) addressing youth disconnection through Connection Coaching for young people ages 12-24. Its primary program, Mental Performance Connection Coaching (MPCC), reaches athletes through a "whole-team" model that trains coaches, equips captains, and gives athletes and parents shared language.

I joined at the point where the organization had the hard part done and the delivery problem unsolved. Seven-plus years of research had produced a validated coaching methodology, and the subject matter experts - the founders, a licensed clinician, and coaching staff - had written curriculum content. What did not exist was any system to deliver it. There was no LMS, no way to enroll a student, and no way to run a season without a founder personally present.

My first deliverable was a platform decision, not a course. I ran market research on learning management systems evaluated against WeYouth's actual circumstances rather than a generic feature comparison: a nonprofit budget, three distinct audiences needing separate tracks, seasonal cohorts tied to sports calendars, team-based enrollment rather than individual signups, a hybrid model where the platform carries content while live sessions carry relationships, and a very small team who would have to administer whatever was chosen. I recommended a platform, and that recommendation is what the organization runs on today.

From there the work has been implementation and operation. The SMEs write the content; I translate it into the platform as structured, sequential courses - module architecture, self-assessments, per-module evaluation surveys, enrollment, and cohort setup - and I collaborate with those SMEs on how the material is shaped to work in a self-paced online format. I am also the technical support function for the platform.

This is the difference between an organization that has good material and an organization that can deliver it to students.`,
  image: getImagePath('/images/thumbnails/weyouth-mpcc.svg'),
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
  metrics: [
    { value: '24', label: 'Courses standing in the LMS I selected and administer' },
    { value: '46', label: 'Athletes enrolled in the primary MPCC course' },
    { value: '3', label: 'Learner tracks configured: athletes, coaches, captains' }
  ],
  tools: [
    'LearnWorlds LMS',
    'LMS Vendor Evaluation',
    'Course & Module Architecture',
    'Assessment and Survey Configuration',
    'Enrollment & Cohort Management',
    'Camtasia'
  ],
  methodology:
    'Requirements-driven platform evaluation against organizational constraints, followed by iterative implementation with SMEs - modules published, evaluation instruments attached, and revisions made from live feedback rather than held for an annual release',
  businessContext:
    'WeYouth had spent 7+ years developing an evidence-based coaching methodology and its subject matter experts had written the curriculum, but the organization had no learning platform. Without one, there was no mechanism to enroll a student, no way to deliver content between live sessions, and no path to running a season without a founder in the room. Delivery capacity was capped at the founders\' personal calendar, which is not a model a nonprofit can scale or sell team contracts against.',
  targetAudience:
    'Three distinct audiences requiring separate tracks in the platform: sports coaches (adult professionals with minimal spare time who must both learn the model and deliver it), athletes ages 12-24 (the end learners), and team captains (peer leaders running discussion-based sessions). Secondary audience: the small internal team who administer the system.',
  learningObjectives: [
    'Select a learning platform that fits a nonprofit\'s budget, team size, and seasonal delivery model',
    'Establish a course architecture that serves three different audiences without duplicating content management',
    'Convert SME-authored curriculum into self-paced sequential modules that hold up without an instructor present',
    'Build assessment and evaluation instruments into the delivery system rather than bolting them on later',
    'Enable team-based enrollment so partner clubs and schools can be onboarded as cohorts'
  ],
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
    'Configured self-assessments for learner reflection and separate short evaluation surveys for programme feedback, kept as distinct instruments',
    'Set up cohort and team-based enrollment so partner organizations onboard as groups, including team-specific course builds',
    'Serve as the ongoing technical support function for the platform and its users'
  ],
  results: [
    'Platform recommendation adopted - the organization delivers its programs on the LMS I evaluated and selected',
    '24 courses standing in the school across athlete, coach, and captain tracks, including team-specific cohort builds',
    '46 athletes and 13 coaches enrolled across the primary MPCC courses, with further cohorts staged in draft for upcoming seasons',
    'WeYouth can now enroll students and run a season without a founder personally delivering every session',
    'Per-module evaluation surveys are collecting formative data during delivery, so weak modules surface while cohorts are still running',
    'Programme effectiveness data is not yet available - cohorts are still in training. The enrollment figures above describe reach, not outcomes, and this project will be updated when evaluation results are in.'
  ],
  stakeholders: [
    'WeYouth founders and science director (SMEs and curriculum authors)',
    'Licensed clinician and coaching staff (content SMEs)',
    'Fellow curriculum designers on the internal team',
    'Sports coaches and team captains (delivery layer and platform users)',
    'Athletes ages 12-24 (end learners)',
    'Partner clubs, schools, and athletic directors (cohort customers)'
  ],
  learningTheoryApplied: [
    'Cognitive Load Theory (Sweller) - drove short single-concept modules when restructuring SME content for self-paced delivery',
    'Andragogy (Knowles) - self-directed, self-paced structure for time-constrained adult coaches',
    'Formative evaluation (Scriven) - per-module survey instruments built into the platform from the start',
    'Social Cognitive Theory (Bandura) - underpins the organization\'s near-peer mentor model, which the track structure had to support'
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
        'With no LMS, delivery could not scale beyond the founders. Students could not be enrolled, content could not reach anyone between live sessions, and there was no consistent instrument for measuring whether the programme worked.'
    },
    design: {
      instructionalStrategy:
        'Separate self-paced tracks per audience over a shared underlying model, with SME content restructured into short sequential modules that follow a consistent internal pattern.',
      assessmentStrategy:
        'Self-assessment questions within modules for learner reflection, plus distinct short evaluation surveys capturing programme feedback - deliberately separate instruments serving different purposes.',
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
        'Rolled out progressively by cohort and audience, with athlete courses live before the coach track completed, and team-specific cohorts staged in draft ahead of their seasons.',
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
  },

  designProcess: {
    researchPhase:
      'Market research across learning platforms, scored against WeYouth\'s specific operating constraints rather than a generic feature comparison.',
    stakeholderCollaboration:
      'Continuous work with founders, a licensed clinician, coaches, and fellow curriculum designers - SMEs supply the domain content, I supply the delivery system and the structural decisions that make it work online.',
    iterativeDesign:
      'Modules are implemented, tested in private courses, published, then revised against live survey feedback. Iteration continues after launch rather than stopping at it.',
    evidenceBasedDecisions:
      'Platform choice traced to documented organizational requirements; module structuring decisions traced to cognitive load and adult learning principles rather than preference.'
  },

  professionalImpact: {
    businessValue:
      'The platform is what converts WeYouth from an organization that sells a founder\'s calendar into one that can sell a team contract. Enrollment, delivery, and measurement all became possible at the point the LMS went live.',
    scalabilityConsiderations:
      'Track-per-audience architecture means new teams reuse existing content with cohort-specific courses layered on top, as with the team-specific build already staged.',
    industryContribution:
      'A worked example of the unglamorous problem that stops many small organizations: strong subject matter expertise with no delivery infrastructure, and the platform evaluation and implementation work required to close that gap.',
    continuingEducation:
      'Direct experience in LMS vendor evaluation, platform administration, course architecture across multiple audiences, and SME collaboration under real deadlines.'
  }
};

export default weyouthMpcc;
