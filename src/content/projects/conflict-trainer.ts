// src/content/projects/conflict-trainer.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

/*
  Written from the live site, the game files, the repo (github.com/williamthe5thc/ConflictGame,
  files uploaded August 2025) and Jordan's reason for building it (Oct 2026):
  to help people handle conflict better. Scenario names, levels, times and
  choice counts come from the scenario JSON files. Only the first scenario
  is complete (Oct 2026): scenarios 2 and 3 have unwritten branches and show
  as "Coming soon". Don't call them playable until they are. Not yet known, so not
  claimed: whether anyone has used it, and how it was built (solo, with AI
  help). Ask before adding either.
*/
const conflictTrainer: ProjectBase = {
  detailPage: true,
  id: 'conflict-trainer',
  title: 'Conflict Resolution Trainer: Branching Workplace Scenarios',
  cardTitle: 'Conflict Resolution Trainer',
  description: 'A branching-scenario simulator for practicing workplace conflict. Learners choose how to respond, see how the choice plays out, and get feedback on the conflict strategy they used.',
  longDescription: 'A web-based simulator built around workplace scenarios at beginner, intermediate and advanced levels. After each choice, it names the Thomas-Kilmann strategy the learner used, rates how well it worked, and explains why. The beginner scenario is complete; the other two are being written.',
  image: getImagePath('/images/projects/conflict-trainer-scene.png'),
  category: 'id',
  tags: ['Branching Scenarios', 'Thomas-Kilmann Model', 'Conflict Resolution', 'Feedback Design', 'JavaScript'],
  status: 'in-progress',
  date: '2025',

  demoUrl: 'https://williamthe5thc.github.io/ConflictGame/',
  demoLabel: 'Try the simulator',
  demoDescription: 'Opens the live simulator. The Email Misunderstanding is playable; the other two scenarios are coming soon.',
  projectUrl: 'https://github.com/williamthe5thc/ConflictGame',
  projectLabel: 'View the code on GitHub',

  businessContext: 'I want to help people handle conflict better. Conflict skills are hard to practice at work, because the first try is usually the real one. A simulation lets someone try an approach that would be risky with a colleague, see what happens, then go back and try another.',
  challenges: [
    'Making every choice teach something, with no single "right" path',
    'Showing that each conflict strategy has a cost, and that the best one depends on the situation',
    'Letting learners compare approaches without starting the whole scenario again'
  ],
  solutions: [
    'Scenarios that rise in difficulty: an email misunderstanding (beginner, 5-8 minutes, complete), two projects competing for one designer (intermediate) and a team member whose performance is slipping (advanced), both still being written',
    'Feedback after every choice built on the Thomas-Kilmann model: the strategy used (collaborating, compromising, competing, accommodating or avoiding), a rating of how well it worked, a short explanation, and the skills it shows',
    'The beginner scenario branches through 20 choices to several different endings',
    'Each scene shows the people involved, with their names and roles',
    'A "Go Back" button, so learners can return to a decision and try a different strategy',
    'Progress saves in the browser, so a scenario can be finished later',
    'Each scenario is a separate data file, so a new one can be written without changing the code'
  ],
  results: [
    'Live on GitHub Pages, with the beginner scenario playable from start to finish',
    'Includes screen-reader announcements for story changes, and turns animations off for people who ask their device for reduced motion'
  ],
  screenshotsTitle: 'Screenshots',
  screenshots: [
    {
      src: '/images/projects/conflict-trainer-scene.png',
      alt: 'A scenario screen: an illustrated office meeting room with portraits of Alex (Senior Analyst) and Jordan (Project Coordinator) below it, beside the story text, "You notice tension building in your team. Alex sent Jordan a brief email..." and the first response choices.',
      caption: 'Each scene sets up the situation, shows who is involved, and offers several ways to respond.',
      width: 1200,
      height: 750
    },
    {
      src: '/images/projects/conflict-trainer-feedback.png',
      alt: 'Feedback card labelled COMPROMISING, rated three of five stars, Medium: "Email intervention shows good intentions but doesn\'t address the underlying communication style differences." Skills demonstrated: diplomatic communication, conflict de-escalation.',
      caption: 'After each choice: the strategy used, how well it worked, and why.',
      width: 680,
      height: 285
    },
    {
      src: '/images/projects/conflict-trainer-home.png',
      alt: 'Scenario menu: The Email Misunderstanding (beginner, 5-8 minutes), and The Resource Competition (intermediate) and The Performance Gap (advanced), both marked Coming soon.',
      caption: 'One scenario is ready; two more are being written.',
      width: 1200,
      height: 750
    }
  ]
};

export default conflictTrainer;
