# Notes for Claude

W. Jordan Charles's instructional design portfolio: React 18, TypeScript, Vite and
Tailwind, with a HashRouter, published to GitHub Pages under `/Portfolio/`.
README.md has the full setup and deploy steps.

## Commands

- `npm run dev`: local site at http://localhost:3000
- `npx tsc --noEmit -p tsconfig.json`: type-check (0 errors expected)
- `npx vitest run`: tests (all should pass)
- `npx vite build --mode production`: production build
- `npm run deploy:production`: publishes the live site. Only when Jordan asks,
  and only from a clean folder (`git status` shows nothing): it deploys whatever
  is in the folder, including untracked files.

## Content rules

- Titles, dates, numbers, results, tools and claims come from Jordan. Don't
  invent or embellish them; ask. Earlier versions of several pages carried
  invented figures that had to be removed.
- Content lives in `src/content/`: `projects.ts` lists the projects that ship,
  `projects/*.ts` holds each case study, `resumes.ts` both resumes, and
  `experience.ts` the About timeline. A job's title and dates must match in
  all of them.
- Every field in a project file ships in the site's JavaScript, even one no
  page shows. Only fill in fields the project page renders.
- After changing `resumes.ts`, regenerate the resume PDFs (README, "Resumes").
- The PDFs in `public/case-studies/` are redacted and have summary pages. Never
  replace them with an original export.
- Don't publish other people's names or contact details, or client data such as
  WeYouth's operating figures or Chartway's pass rates.
- Cards use a project's `cardTitle` when it has one, and only "In progress"
  work gets a status label.

## Git

- Work on a branch. Don't push to `portfolio-improvements` or `main`, and don't
  deploy, without asking.
- Private notes belong in `notes/`, which is git-ignored, never in committed
  files.
