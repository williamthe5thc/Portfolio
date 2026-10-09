// scripts/prerender.ts
//
// The static copy of each page that the build writes to
// dist/<route>/index.html (the prerender-pages plugin in vite.config.ts).
// GitHub Pages serves those files, so search engines and AI tools that don't
// run JavaScript get each page's own title, description, canonical URL and
// text instead of an empty <div id="root">. When the app starts, React
// replaces the text with the real page.
//
// Everything comes from src/content. Each page's title and description repeat
// what the page passes to <SEO>, and its h1 what the page shows;
// test/content/prerender.test.tsx renders every route in the app and fails if
// they differ. Fields shown here must be ones the page itself renders.

import type { ProjectBase, SiteConfig, Experience, Education, FAQ } from '../src/types/content';
import type { ResumeData, ResumeEntry } from '../src/content/resumes';

export interface PrerenderContent {
  siteConfig: SiteConfig;
  projects: ProjectBase[];
  featuredProjects: ProjectBase[];
  projectCategories: Array<{ id: string; label: string }>;
  capabilities: Array<{ title: string; points: Array<{ text: string; to?: string }> }>;
  methodology: {
    title: string;
    summary: string;
    corePrinciples: Array<{ title: string; description: string }>;
    process: Array<{ phase: string; activities: string[] }>;
    skills: Record<string, string[]>;
    tools: Record<string, Array<{ name: string; applications: string[] }>>;
  };
  education: Education;
  experience: Experience[];
  faqs: FAQ[];
  resumes: ResumeData[];
}

export interface StaticPage {
  /** Path under the deploy base, with its trailing slash: "" for home, "about/". */
  route: string;
  /** The full document title, as <SEO> sets it. */
  title: string;
  description: string;
  h1: string;
  /** HTML for inside #root. */
  body: string;
}

/** Same text as DEFAULT_DESCRIPTION in src/components/shared/SEO.tsx. */
const HOME_DESCRIPTION =
  'Portfolio of W. Jordan Charles: instructional design, learning experience design and learning technology. Case studies, interactive demos and resumes.';

const STATUS: Record<string, string> = {
  completed: 'Completed',
  'in-progress': 'In progress',
  planned: 'Planned',
  unfinished: 'Unfinished',
};

export const esc = (text: string): string =>
  String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/** "learnerCharacteristics" -> "Learner Characteristics", as the pages' CSS shows it. */
const label = (key: string): string =>
  key.replace(/([A-Z])/g, ' $1').trim().replace(/\b[a-z]/g, c => c.toUpperCase());

const list = (items: string[], render: (item: string) => string = esc): string =>
  items.length ? `<ul>${items.map(item => `<li>${render(item)}</li>`).join('')}</ul>` : '';

export function buildPages(content: PrerenderContent, base: string): StaticPage[] {
  const { siteConfig, projects, resumes } = content;
  const suffix = (title: string) => `${title} | ${siteConfig.author}`;

  /** "/about" or "/about#x" -> "<base>about/#x"; off-site URLs unchanged. */
  const route = (to: string): string => {
    if (/^https?:\/\//i.test(to)) return to;
    const [, path, rest] = /^([^?#]*)(.*)$/s.exec(to) ?? ['', to, ''];
    const clean = path.replace(/^\/+/, '');
    return base + (clean && !clean.endsWith('/') ? `${clean}/` : clean) + rest;
  };
  /** A public file: "/case-studies/x.pdf" -> "<base>case-studies/x.pdf". */
  const file = (path: string): string => {
    if (/^https?:\/\//i.test(path)) return path;
    if (base !== '/' && path.startsWith(base)) return path;
    return base + path.replace(/^\/+/, '');
  };
  const link = (href: string, text: string) => `<a href="${esc(href)}">${esc(text)}</a>`;
  /** Escapes text and turns "[label](/x.pdf)" into a link, as the project page does. */
  const rich = (text: string): string => {
    let html = '';
    let cursor = 0;
    for (const match of text.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)) {
      html += esc(text.slice(cursor, match.index)) + link(file(match[2]), match[1]);
      cursor = (match.index ?? 0) + match[0].length;
    }
    return html + esc(text.slice(cursor));
  };
  const cardTitle = (p: ProjectBase) =>
    (p.cardTitle ?? p.title) + (p.status === 'in-progress' ? ' (In progress)' : '');
  const projectItem = (p: ProjectBase, heading: string) =>
    `<li><${heading}>${link(route(`/portfolio/${p.id}`), cardTitle(p))}</${heading}><p>${esc(p.description)}</p></li>`;

  const pages: StaticPage[] = [];
  const add = (page: Omit<StaticPage, 'body'> & { content: string; crumbs?: Array<[string, string]> }) => {
    const crumbs = page.crumbs
      ? `<nav aria-label="Breadcrumb"><ol>${page.crumbs
          .map(([text, to]) => `<li>${link(route(to), text)}</li>`)
          .join('')}<li aria-current="page">${esc(page.h1)}</li></ol></nav>`
      : '';
    pages.push({
      route: page.route,
      title: page.title,
      description: page.description,
      h1: page.h1,
      body: `${crumbs}${page.content}`,
    });
  };

  // Home
  add({
    route: '',
    title: siteConfig.title,
    description: HOME_DESCRIPTION,
    h1: 'Learning Experiences That Work',
    content: [
      `<p>${esc(siteConfig.title.replace(' - ', ', '))}</p>`,
      `<h1>Learning Experiences That Work</h1>`,
      `<p>${esc(siteConfig.description)}</p>`,
      `<p>${esc(siteConfig.bio)}</p>`,
      `<h2>Featured Projects</h2>`,
      `<ul>${content.featuredProjects.map(p => projectItem(p, 'h3')).join('')}</ul>`,
      `<p>${link(route('/portfolio'), 'All projects')}</p>`,
      `<h2>What I Bring</h2>`,
      ...content.capabilities.map(
        c =>
          `<h3>${esc(c.title)}</h3><ul>${c.points
            .map(point => `<li>${esc(point.text)}${point.to ? ` ${link(route(point.to), 'See the work')}` : ''}</li>`)
            .join('')}</ul>`
      ),
    ].join(''),
  });

  // About
  const m = content.methodology;
  add({
    route: 'about/',
    title: suffix('About'),
    description: `${siteConfig.author}'s background, skills and approach to instructional design`,
    h1: 'About Me',
    content: [
      `<h1>About Me</h1>`,
      `<p>${esc(siteConfig.bio)}</p>`,
      `<h2>${esc(m.title)}</h2>`,
      `<p>${esc(m.summary)}</p>`,
      ...m.corePrinciples.map(p => `<h3>${esc(p.title)}</h3><p>${esc(p.description)}</p>`),
      `<section id="design-process"><h3>Design Process</h3>`,
      ...m.process.map(phase => `<h4>${esc(phase.phase)}</h4>${list(phase.activities)}`),
      `</section>`,
      `<h3>Professional Skills</h3>`,
      ...Object.entries(m.skills).map(([group, skills]) => `<h4>${esc(label(group))}</h4>${list(skills)}`),
      `<h3>Technical Tools</h3>`,
      ...Object.values(m.tools)
        .flat()
        .map(set => `<h4>${esc(set.name)}</h4>${list(set.applications)}`),
      `<h2>Education &amp; Experience</h2>`,
      `<h3>Education</h3>`,
      ...content.education.degrees.map(
        d =>
          `<h4>${esc(d.degree)}</h4><p>${esc(d.institution)}, ${esc(d.period)}</p>` +
          `<p>${esc(d.gpa ? `${d.field} · GPA ${d.gpa}` : d.field)}</p>${list(d.highlights ?? [])}`
      ),
      `<h3>Experience</h3>`,
      ...content.experience.map(
        job => `<h4>${esc(job.title)}</h4><p>${esc(job.company)}, ${esc(job.period)}</p>${list(job.highlights)}`
      ),
      `<p>${link(route('/contact'), 'Get in touch')}</p>`,
    ].join(''),
  });

  // Portfolio: every project, whatever filter the page opens on.
  add({
    route: 'portfolio/',
    title: suffix('Portfolio'),
    description:
      'Instructional design and learning technology projects by W. Jordan Charles, with case studies, demos and design documents',
    h1: 'Portfolio',
    content: `<h1>Portfolio</h1><ul>${projects
      .filter(p => p.detailPage !== false)
      .map(p => projectItem(p, 'h2'))
      .join('')}</ul>`,
  });

  // One page per project
  for (const p of projects.filter(project => project.detailPage !== false)) {
    const analysis = p.addieMethodology?.analysis;
    const parts: string[] = [`<h1>${esc(p.title)}</h1>`, `<p>${esc(p.description)}</p>`];
    if (p.demoUrl) {
      parts.push(
        (p.demoDescription ? `<p>${esc(p.demoDescription)}</p>` : '') +
          `<p>${link(file(p.demoUrl), p.demoLabel ?? 'Open interactive demo')}</p>`
      );
    }
    if (p.projectUrl) {
      const isPdf = /\.pdf$/i.test(p.projectUrl);
      parts.push(
        (p.projectUrlDescription ? `<p>${esc(p.projectUrlDescription)}</p>` : '') +
          `<p>${link(file(p.projectUrl), p.projectLabel ?? (isPdf ? 'View document (PDF)' : 'View project'))}</p>`
      );
    }
    if (p.role) parts.push(`<p><strong>My role:</strong> ${esc(p.role)}</p>`);
    if (p.metrics?.length) parts.push(list(p.metrics.map(metric => `${metric.value} ${metric.label}`)));
    if (p.businessContext || p.challenges?.length) {
      parts.push(
        `<h2>The problem</h2>` +
          (p.businessContext ? `<p>${esc(p.businessContext)}</p>` : '') +
          list(p.challenges ?? [])
      );
    }
    if (analysis?.findings || analysis?.performanceGaps) {
      parts.push(
        `<h2>What I found</h2>` +
          [analysis.findings, analysis.performanceGaps].filter(Boolean).map(t => `<p>${esc(t!)}</p>`).join('')
      );
    }
    if (p.solutions) parts.push(`<h2>What I did</h2>${list(p.solutions, rich)}`);
    if (p.results) parts.push(`<h2>What happened</h2>${list(p.results, rich)}`);
    if (p.screenshots?.length) {
      // Links rather than <img>, so a visitor whose app is about to start
      // doesn't download every screenshot for a copy they never see.
      parts.push(
        `<h2>Inside the course</h2><ul>${p.screenshots
          .map(shot => `<li>${link(file(shot.src), shot.caption)}<p>${esc(shot.alt)}</p></li>`)
          .join('')}</ul>`
      );
    }
    if (p.artifacts?.length) {
      parts.push(
        `<h2>See the work</h2><ul>${p.artifacts
          .map(
            a =>
              `<li><p>${link(file(a.href), a.label)}</p>${a.description ? `<p>${esc(a.description)}</p>` : ''}</li>`
          )
          .join('')}</ul>`
      );
    }
    if (p.lessonsLearned) parts.push(`<h2>What I'd change</h2><p>${esc(p.lessonsLearned)}</p>`);
    if (p.longDescription) parts.push(`<h2>About this Project</h2><p>${esc(p.longDescription)}</p>`);
    if (p.addieMethodology) {
      // String fields only, as on the page; the analysis beat above already
      // carries findings and performanceGaps.
      const phases = Object.entries(p.addieMethodology)
        .map(([phase, fields]) => {
          const shown = Object.entries(fields ?? {}).filter(
            ([key, value]) =>
              typeof value === 'string' && value && !(phase === 'analysis' && (key === 'findings' || key === 'performanceGaps'))
          );
          return shown.length
            ? `<h4>${esc(label(phase))}</h4>${shown.map(([key, value]) => `<p><strong>${esc(label(key))}:</strong> ${esc(value as string)}</p>`).join('')}`
            : '';
        })
        .join('');
      if (phases) parts.push(`<h3>ADDIE Methodology</h3>${phases}`);
    }
    const category = content.projectCategories.find(c => c.id === p.category)?.label ?? p.category;
    parts.push(
      `<h3>Project Details</h3><dl><dt>Status</dt><dd>${esc(STATUS[p.status] ?? p.status)}</dd>` +
        `<dt>Date</dt><dd>${esc(p.date)}</dd><dt>Category</dt><dd>${esc(category)}</dd></dl>` +
        `<h4>Skills &amp; Topics</h4>${list(p.tags)}`
    );
    add({
      route: `portfolio/${p.id}/`,
      title: suffix(p.title),
      description: p.description,
      h1: p.title,
      crumbs: [['Portfolio', '/portfolio']],
      content: parts.join(''),
    });
  }

  // Resumes
  add({
    route: 'resume/',
    title: suffix('Resumes'),
    description: 'Instructional design and learning technology resumes for W. Jordan Charles',
    h1: 'Professional Resumes',
    content:
      `<h1>Professional Resumes</h1>` +
      resumes
        .map(
          r =>
            `<h2>${esc(r.title)}</h2><p>${esc(r.blurb)}</p>` +
            `<p>${link(route(`/resume/${r.slug}`), 'View Online')} · ${link(file(`/documents/${r.pdf}`), 'Download PDF')}</p>`
        )
        .join(''),
  });

  const entries = (heading: string, items: ResumeEntry[]) =>
    `<h2>${esc(heading)}</h2>` +
    items
      .map(
        e =>
          `<h3>${esc(e.title)}</h3><p>${esc(e.org)}${e.location ? `, ${esc(e.location)}` : ''} | ${esc(e.period)}</p>${list(e.bullets)}`
      )
      .join('');

  for (const r of resumes) {
    add({
      route: `resume/${r.slug}/`,
      title: suffix(r.title),
      description: r.blurb,
      h1: r.title,
      crumbs: [['Resumes', '/resume']],
      content: [
        `<h1>${esc(r.title)}</h1>`,
        `<p>${esc(r.headline.split(' | ').join(' · '))}</p>`,
        `<p>${esc(r.summary)}</p>`,
        `<p>${link(file(`/documents/${r.pdf}`), 'Download PDF Version')}</p>`,
        entries('Professional Experience', r.experience),
        r.research?.length ? entries('Research Experience', r.research) : '',
        r.projects.length
          ? `<h2>${esc(r.projectsHeading)}</h2>` +
            r.projects
              .map(p => `<h3>${p.url ? link(route(p.url), p.title) : esc(p.title)}</h3><p>${esc(p.description)}</p>`)
              .join('')
          : '',
        r.presentations?.length ? `<h2>Presentations</h2>${list(r.presentations)}` : '',
        `<h2>Education</h2>`,
        ...r.education.map(
          e =>
            `<h3>${esc(e.degree)}</h3><p>${esc(e.field)}</p><p>${esc(e.school)} | ${esc(e.period)}</p>` +
            (e.details ? `<p>${esc(e.details)}</p>` : '')
        ),
        `<h2>Skills &amp; Expertise</h2>`,
        ...r.skills.map(group => `<h3>${esc(group.label)}</h3>${list(group.items)}`),
        r.honors?.length ? `<h2>Honors</h2>${list(r.honors)}` : '',
      ].join(''),
    });
  }

  // Contact. LinkedIn and location only: the email address and phone number
  // stay in the app, out of plain HTML that address harvesters read.
  add({
    route: 'contact/',
    title: suffix('Contact'),
    description: `Get in touch with ${siteConfig.author} to discuss your instructional design needs`,
    h1: "Let's Connect",
    content: [
      `<h1>Let's Connect</h1>`,
      `<h2>Get in Touch</h2>`,
      `<ul><li>LinkedIn: ${link(`https://${siteConfig.contactInfo.linkedin}`, siteConfig.contactInfo.linkedin)}</li>`,
      `<li>Location: ${esc(siteConfig.contactInfo.location)}</li></ul>`,
      `<h2>Frequently Asked Questions</h2>`,
      ...content.faqs.map(faq => `<h3>${esc(faq.question)}</h3><p>${esc(faq.answer)}</p>`),
    ].join(''),
  });

  // The same header and footer on every page, so each copy links to the rest.
  const nav = [
    ['Home', '/'],
    ['About', '/about'],
    ['Portfolio', '/portfolio'],
    ['Resume', '/resume'],
    ['Contact', '/contact'],
  ]
    .map(([text, to]) => `<li>${link(route(to), text)}</li>`)
    .join('');
  const footer =
    `<footer><p>${link(siteConfig.social.linkedin, 'LinkedIn')} · ${link(siteConfig.social.github, 'GitHub')} · ` +
    `${link(file('/llms.txt'), 'Plain-text summary (llms.txt)')}</p></footer>`;
  return pages.map(page => ({
    ...page,
    body: `<div data-static-page><header><nav aria-label="Primary"><ul>${nav}</ul></nav></header><main>${page.body}</main>${footer}</div>`,
  }));
}

/** Replaces one attribute value in the single tag `pattern` matches; throws if there is none. */
const setAttribute = (html: string, pattern: RegExp, attribute: string, value: string): string => {
  const match = html.match(pattern);
  if (!match) throw new Error(`prerender: no tag matching ${pattern} in index.html`);
  const tag = match[0].replace(new RegExp(`(\\b${attribute}=")[^"]*(")`), `$1${esc(value)}$2`);
  return html.replace(match[0], () => tag);
};

const metaTag = (key: string) => new RegExp(`<meta[^>]*\\b(?:name|property)="${key}"[^>]*>`);
const ROOT = '<div id="root"></div>';

/** The built index.html with this page's head tags and text. */
export function renderPage(shell: string, page: StaticPage, siteUrl: string): string {
  const url = `${siteUrl}/${page.route}`;
  let html = shell.replace(/<title>[^<]*<\/title>/, () => `<title>${esc(page.title)}</title>`);
  html = setAttribute(html, metaTag('description'), 'content', page.description);
  html = setAttribute(html, metaTag('og:title'), 'content', page.title);
  html = setAttribute(html, metaTag('og:description'), 'content', page.description);
  html = setAttribute(html, metaTag('og:url'), 'content', url);
  html = setAttribute(html, metaTag('twitter:title'), 'content', page.title);
  html = setAttribute(html, metaTag('twitter:description'), 'content', page.description);
  html = setAttribute(html, /<link[^>]*\brel="canonical"[^>]*>/, 'href', url);
  if (!html.includes(ROOT)) throw new Error(`prerender: no empty ${ROOT} in index.html`);
  return html.replace(ROOT, () => `<div id="root">${page.body}</div>`);
}

/**
 * dist/404.html, which GitHub Pages serves for every URL it has no file for.
 * Not indexed, and no canonical. The robots tag is Helmet's (data-rh), so it
 * goes once the app moves on to a real page. A path that looks like a file
 * (a missing PDF or image) gets a plain message; anything else starts the
 * app, which shows its own not-found page, or follows an old /#/ link
 * (index.html's script).
 */
export function renderNotFound(shell: string, author: string, base: string): string {
  const entry = shell.match(/<script type="module" crossorigin src="([^"]+)"><\/script>\s*/);
  if (!entry) throw new Error('prerender: no module entry script in index.html');
  const title = `Page not found | ${author}`;
  let html = shell
    .replace(entry[0], '')
    .replace(/<title>[^<]*<\/title>/, () => `<title>${esc(title)}</title>`)
    .replace(/\s*<link[^>]*\brel="canonical"[^>]*>/, '')
    .replace(/\s*<meta[^>]*\bproperty="og:url"[^>]*>/, '')
    .replace(/<meta charset="[^"]*"\s*\/?>/i, charset => `${charset}\n    <meta data-rh="true" name="robots" content="noindex" />`);
  const body =
    `<div data-static-page><main><h1>Page not found</h1><p>This file or page doesn't exist.</p>` +
    `<p><a href="${esc(base)}">Go to the portfolio home page</a></p></main></div>`;
  const loader = `  <script>
      if (/\\.[a-z0-9]+$/i.test(window.location.pathname)) {
        document.documentElement.classList.remove('app-pending');
      } else {
        var app = document.createElement('script');
        app.type = 'module';
        app.crossOrigin = '';
        app.src = ${JSON.stringify(entry[1])};
        document.body.appendChild(app);
      }
    </script>
  </body>`;
  if (!html.includes(ROOT)) throw new Error(`prerender: no empty ${ROOT} in index.html`);
  return html.replace(ROOT, () => `<div id="root">${body}</div>`).replace('</body>', () => loader);
}
