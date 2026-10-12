// src/content/projects/vr-interview-simulator.ts
import { ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';

/*
  Written from the public repo's README (github.com/williamthe5thc/
  vr-interview-simulator, Oct 2026), which lists only what was verified on a
  Meta Quest 1 in October 2026. Dates (first version ~March 2025, rework
  October 2026) come from the git history. The screenshots are editor
  captures, not headset footage, and are labelled that way; replace them
  with headset footage when Jordan records the demo. Not claimed: testing
  with other people, or results.
*/
const vrInterviewSimulator: ProjectBase = {
  detailPage: true,
  id: 'vr-interview-simulator',
  title: 'VR Interview Simulator for Meta Quest',
  cardTitle: 'VR Interview Simulator',
  description: 'A virtual reality job-interview practice simulator. The learner sits in a virtual conference room, answers spoken questions from an AI interviewer, and gets feedback on each answer from an AI job coach.',
  longDescription: 'Interview answers are a spoken skill, and they improve with practice out loud. This simulator puts that practice in a realistic setting: a conference room, an interviewer who listens and replies, and a coach who reviews every answer afterwards. In progress since 2025.',
  image: getImagePath('/images/projects/vr-editor_room_overview.jpg'),
  category: 'learning-tech',
  tags: ['Virtual Reality', 'Meta Quest', 'Unity', 'Conversational AI', 'Speech Recognition', 'Python'],
  status: 'in-progress',
  date: '2025 - present',

  demoUrl: 'https://williamthe5thc.github.io/vr-interview-demo/',
  demoLabel: 'Try the web demo',
  demoDescription: 'A scripted browser version: no AI and no server. Type your answers (or opt in to the microphone) and get feedback from a rule-based coach. Best on desktop Chrome or Edge; about 20 MB to load.',
  projectUrl: 'https://github.com/williamthe5thc/vr-interview-simulator',
  projectLabel: 'View the code on GitHub',
  projectUrlDescription: 'The README covers how it works, with an architecture diagram.',

  businessContext: 'Job seekers can read about interviews, but answering out loud under pressure is a different skill, and most people only practice it in the real interview. The goal is a place to practice speaking answers, in a setting that feels like the real thing, with feedback afterwards.',
  challenges: [
    'A conversation only feels real if the interviewer answers quickly',
    'An avatar that talks without moving its mouth, looking at you or reacting feels lifeless',
    'The headset has little computing power, and a hosted AI service can be slow or down'
  ],
  solutions: [
    'A conference-room scene with 11 rotating interviewer avatars (Microsoft Rocketbox) and 7 job types, including nurse, teacher, software engineer and restaurant server',
    'Push-to-talk speech, turned into text with faster-whisper',
    'An AI interviewer on Claude through the Anthropic API, with a local model (Ollama) that takes over automatically if the API is slow or unavailable',
    'Spoken replies with Kokoro text-to-speech and Rhubarb lip-sync, plus interviewer eye gaze, blinks, nods and breathing',
    'An AI job coach that scores each answer and gives specific feedback, and an export of the interview to Markdown and JSON',
    'The headset is the Unity client; a Python server on a PC does the speech and AI work, and the two talk over a private Tailscale network'
  ],
  results: [
    'Working on a Meta Quest 1, checked in October 2026',
    'About 2 seconds from the end of an answer to the interviewer\'s first word',
    'A scripted web demo anyone can try in a browser: pre-recorded interviewer lines with lip-sync, typed or spoken answers, and a rule-based coach, for two job types (software engineer and customer service)',
    'In progress: bare-hand tracking with pinch input (works in a test build), a blind comparison of language models rated by people, and a prototype of a second scenario for parent-child conversation practice'
  ],
  screenshotsTitle: 'Screenshots',
  screenshots: [
    {
      src: '/images/projects/vr-web-demo.jpg',
      alt: 'The web demo in a browser: the interviewer seated in the conference room, a caption reading "To begin, tell me about yourself, and the kind of software work you\'ve done", a transcript panel on the right, and a typed-answer box with Send and End interview buttons. A banner at the top says it is a scripted demo and the full version uses a live AI interviewer on Meta Quest.',
      caption: 'The scripted web demo, running in a browser.',
      width: 960,
      height: 600
    },
    {
      src: '/images/projects/vr-editor_title_screen.jpg',
      alt: 'Start screen floating in the virtual conference room: "VR Interview Practice", seven job buttons (Software Engineer, Customer Service, Retail Associate, Restaurant Server, Registered Nurse, Speech Therapist, Teacher), and Start Interview and Job Coach Review buttons. Labelled editor capture.',
      caption: 'Pick a job, then start the interview. (Editor capture, not headset footage.)',
      width: 1200,
      height: 675
    },
    {
      src: '/images/projects/vr-editor_interviewer_closeup_viseme.jpg',
      alt: 'Close-up of an interviewer avatar in a dark suit, mid-word, with her mouth shaped by lip-sync. Labelled editor capture.',
      caption: 'The interviewer\'s mouth follows the speech. (Editor capture.)',
      width: 1200,
      height: 675
    },
    {
      src: '/images/projects/vr-editor_room_overview.jpg',
      alt: 'Overview of the virtual conference room: a long table with chairs, a whiteboard roadmap, a bookshelf, plants, and an interviewer seated at the far end. Labelled editor capture.',
      caption: 'The conference room. (Editor capture.)',
      width: 1200,
      height: 675
    }
  ]
};

export default vrInterviewSimulator;
