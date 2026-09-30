// scripts/deploy.mjs
//
// Builds the site and publishes it to a GitHub Pages branch.
//
//   npm run deploy:production              (node scripts/deploy.mjs production)
//   npm run deploy:staging                 (node scripts/deploy.mjs staging)
//   node scripts/deploy.mjs production --dry-run   (everything but the push)
//
// The build copies every file in public/, including ones git ignores, so this
// refuses to run unless `git status` is clean and public/ holds no ignored
// files. Operating-system clutter (.DS_Store, Thumbs.db, desktop.ini) comes
// back whenever a folder is opened in Finder or Explorer, so instead of
// blocking on it, it is left out of the published copy.
//
// It starts from an empty dist/ every time: a dist/.git kept from an earlier
// run can make a retry look like it worked without pushing anything, or carry
// a staging commit into production. The deploy commit is signed with GitHub's
// no-reply address rather than whatever this computer's git settings say, and
// pushes HEAD, so it works whatever git calls a new branch here.

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');

const TARGETS = {
  production: {
    repo: 'https://github.com/williamthe5thc/Portfolio.git',
    url: 'https://williamthe5thc.github.io/Portfolio/'
  },
  staging: {
    repo: 'https://github.com/williamthe5thc/Portfolio-Staging.git',
    url: 'https://williamthe5thc.github.io/Portfolio-Staging/'
  }
};
const CLUTTER = new Set(['.DS_Store', 'Thumbs.db', 'desktop.ini']);
const AUTHOR = ['-c', 'user.name=williamthe5thc', '-c', 'user.email=16481895+williamthe5thc@users.noreply.github.com'];

const mode = process.argv[2];
const dryRun = process.argv.includes('--dry-run');
const target = TARGETS[mode];
if (!target) stop(`Usage: node scripts/deploy.mjs <${Object.keys(TARGETS).join('|')}> [--dry-run]`);

function stop(message) {
  console.error(`\nDeploy stopped. ${message}\n`);
  process.exit(1);
}

function git(args, cwd = ROOT) {
  const result = spawnSync('git', args, { cwd, encoding: 'utf8' });
  if (result.status !== 0) stop(`git ${args.join(' ')} failed:\n${result.stderr || result.stdout}`);
  return result.stdout;
}

// 1. Nothing uncommitted, and no ignored files that would ship from public/
const changes = git(['status', '--porcelain']).trim();
if (changes) stop(`Commit or remove these first; the deploy would publish them:\n${changes}`);

const ignored = git(['ls-files', '--others', '--ignored', '--exclude-standard', 'public'])
  .split('\n')
  .filter((file) => file && !CLUTTER.has(path.basename(file)));
if (ignored.length) stop(`These files are git-ignored but would still be published:\n${ignored.join('\n')}`);

// 2. A fresh build
fs.rmSync(DIST, { recursive: true, force: true });
const { build } = await import('vite');
await build({ root: ROOT, mode });

// 3. Leave operating-system clutter out of the published copy
function removeClutter(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) removeClutter(full);
    else if (CLUTTER.has(entry.name)) fs.rmSync(full);
  }
}
removeClutter(DIST);

// 4. Commit dist/ on its own and replace the Pages branch with it
git(['init', '-q'], DIST);
git(['add', '-A'], DIST);
git([...AUTHOR, '-c', 'commit.gpgsign=false', 'commit', '-q', '-m', `Deploy ${mode}`], DIST);

if (dryRun) {
  console.log(`\nDry run: built and committed in dist/, not pushed. Would publish to ${target.url}\n`);
} else {
  git(['push', '-f', '-q', target.repo, 'HEAD:gh-pages'], DIST);
  console.log(`\nPublished to ${target.url} (GitHub Pages can take a minute or two to update).\n`);
}
