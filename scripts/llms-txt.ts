// scripts/llms-txt.ts
//
// Builds public/llms.txt: a plain-text summary of the portfolio for AI
// assistants and search tools (https://llmstxt.org). Most of them don't run
// JavaScript, and the app is a single page behind "#/" routes, so without
// this they see little more than the page title.
//
// Everything comes from src/content, so the file can't drift from the site.
// Regenerate after changing content:
//   node scripts/build-llms-txt.mjs
// test/content/llms-txt.test.ts fails when the committed file is stale.

const SITE = 'https://williamthe5thc.github.io/Portfolio/';

const STATUS: Record<string, string> = {
  completed: 'Completed',
  'in-progress': 'In progress',
  planned: 'Planned',
  unfinished: 'Unfinished',
};

/** "/Portfolio/case-studies/x.pdf" or "/case-studies/x.pdf" -> absolute URL. */
const publicUrl = (path: string): string => SITE + path.replace(/^\/(Portfolio\/)?/, '');

/** Drops markdown links ("[label](url)") and trims a trailing period. */
const plain = (text: string): string =>
  text.replace(/\s*-?\s*\[[^\]]+\]\([^)]+\)/g, '').replace(/\s+/g, ' ').trim().replace(/\.$/, '');

interface Content {
  siteConfig: { author: string; title: string; bio: string; contactInfo: { location?: string } };
  projects: Array<{
    id: string;
    title: string;
    description: string;
    role?: string;
    date?: string;
    status: string;
    results?: string[];
    demoUrl?: string;
    demoLabel?: string;
    projectUrl?: string;
    artifacts?: Array<{ label: string; href: string }>;
  }>;
  experience: Array<{ title: string; company: string; period: string }>;
  education: { degrees: Array<{ degree: string; field: string; institution: string; period: string }> };
}

export function buildLlmsTxt({ siteConfig, projects, experience, education }: Content): string {
  const lines: string[] = [];
  lines.push(`# ${siteConfig.author}`, '');
  lines.push(`> ${siteConfig.title.replace(`${siteConfig.author} - `, '')}. ${siteConfig.bio}`, '');
  lines.push(
    'This file summarizes the portfolio at ' + SITE + ' for AI assistants and search tools. ' +
      'Project pages on the site need JavaScript; the documents and demos linked below are plain files.',
    ''
  );

  lines.push('## Experience', '');
  for (const job of experience) lines.push(`- ${job.title}, ${job.company} (${job.period})`);
  lines.push('');

  lines.push('## Education', '');
  for (const d of education.degrees) lines.push(`- ${d.degree}, ${d.field}, ${d.institution} (${d.period})`);
  lines.push('');

  lines.push('## Projects', '');
  for (const p of projects) {
    lines.push(`### ${p.title}`, '');
    lines.push(plain(p.description) + '.', '');
    if (p.role) lines.push(`- Role: ${plain(p.role)}`);
    if (p.date) lines.push(`- Dates: ${p.date}`);
    lines.push(`- Status: ${STATUS[p.status] ?? p.status}`);
    for (const r of p.results ?? []) lines.push(`- Result: ${plain(r)}`);
    lines.push(`- Case study: ${SITE}#/portfolio/${p.id}`);
    if (p.demoUrl) lines.push(`- ${p.demoLabel ?? 'Interactive demo'}: ${publicUrl(p.demoUrl)}`);
    const docs = new Map<string, string>();
    if (p.projectUrl) docs.set(publicUrl(p.projectUrl), 'Document');
    for (const a of p.artifacts ?? []) docs.set(publicUrl(a.href), a.label);
    for (const [url, label] of docs) lines.push(`- ${label}: ${url}`);
    lines.push('');
  }

  lines.push('## Links', '');
  lines.push(`- [Portfolio](${SITE})`);
  lines.push(`- [About](${SITE}#/about)`);
  lines.push(`- [Resumes](${SITE}#/resume)`);
  lines.push(`- [Contact](${SITE}#/contact)`);
  lines.push('- [LinkedIn](https://linkedin.com/in/jordan-charles)');
  lines.push('- [GitHub](https://github.com/williamthe5thc)');
  lines.push('');
  return lines.join('\n');
}
