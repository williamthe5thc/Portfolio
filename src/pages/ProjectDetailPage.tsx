// src/pages/ProjectDetailPage.tsx
/**
 * @file ProjectDetailPage.tsx
 * @description Dynamic project detail page component with rich content display
 * @module pages
 *
 * Features:
 * - Dynamic routing
 * - Image gallery
 * - Project metadata
 * - Related projects
 * - Technology stack display
 * - Navigation between projects
 *
 * @example
 * ```tsx
 * // In router configuration
 * <Route
 *   path="/portfolio/:projectId"
 *   element={<ProjectDetailPage />}
 * />
 *
 * // Navigation to project
 * navigate(`/portfolio/${project.id}`);
 * ```
 *
 * @accessibility
 * - Semantic HTML structure
 * - Image descriptions
 * - Keyboard navigation
 * - Screen reader considerations
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, FileText } from 'lucide-react';
import { Button, BaseCard } from '@/components/ui';
import { fadeInUp } from '@/lib/animations';
import { projects, projectCategories } from '@/content';
import type { ProjectId } from '@/content/projects';
import type { ProjectBase } from '@/types/content';
import { getImagePath, isPdf, documentHref, imageLoading, statusLabel } from '@/utils';
import BasePage from './BasePage';

const NewTabHint = () => <span className="sr-only"> (opens in a new tab)</span>;

/**
 * Some content entries embed markdown links, e.g.
 * "...report - [View Complete Needs Analysis Report](/case-studies/x.pdf)".
 * Rendered as plain text these show the raw brackets and parentheses to the
 * visitor, so parse them into real anchors. Absolute paths go through
 * getImagePath so they survive the staging and production base paths.
 * Every such link points at a document or an external site, so it opens in a
 * new tab rather than replacing the portfolio.
 */
const MARKDOWN_LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

const RichText: React.FC<{ children: string }> = ({ children }) => {
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  MARKDOWN_LINK.lastIndex = 0;
  while ((match = MARKDOWN_LINK.exec(children)) !== null) {
    if (match.index > cursor) parts.push(children.slice(cursor, match.index));

    const [, label, rawHref] = match;
    const href = documentHref(rawHref.startsWith('/') ? getImagePath(rawHref) : rawHref);

    parts.push(
      <a
        key={`${match.index}-${label}`}
        href={href}
        className="text-primary-600 underline hover:text-primary-700"
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
        {isPdf(rawHref) && !/\(PDF\)/i.test(label) ? ' (PDF)' : ''}
        <NewTabHint />
      </a>
    );
    cursor = match.index + match[0].length;
  }

  if (cursor < children.length) parts.push(children.slice(cursor));
  return <>{parts}</>;
};

/**
 * One beat of the project narrative. Numbered so the beats read as a
 * sequence rather than unrelated headings a reader can drop into anywhere.
 */
const StoryBeat: React.FC<{
  step: string;
  title: string;
  children: React.ReactNode;
}> = ({ step, title, children }) => (
  <section className="border-l-4 border-primary-500 pl-5">
    <div className="flex items-baseline gap-3 mb-2">
      <span className="text-sm font-bold text-primary-700 tracking-widest">
        {step}
      </span>
      <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
    </div>
    {children}
  </section>
);

/**
 * The demo and document buttons, each with a line saying what it opens.
 * Rendered twice: in the sidebar, and on phones directly under the hero
 * image, because the sidebar stacks below the whole story on small screens
 * and left the playable demo or the report 4,000-10,000px down the page.
 */
const ProjectLinks: React.FC<{ project: ProjectBase; className?: string }> = ({
  project,
  className = '',
}) => {
  if (!project.demoUrl && !project.projectUrl) return null;

  return (
    <div className={`space-y-4 ${className}`}>
      {project.demoUrl && (
        <div>
          {project.demoDescription && (
            <p className="text-sm text-text-secondary mb-2">{project.demoDescription}</p>
          )}
          <Button
            href={documentHref(project.demoUrl)}
            className="w-full"
            icon={ExternalLink}
            target="_blank"
          >
            {project.demoLabel ?? 'Open interactive demo'}
          </Button>
        </div>
      )}
      {project.projectUrl && (
        <div>
          {project.projectUrlDescription && (
            <p className="text-sm text-text-secondary mb-2">{project.projectUrlDescription}</p>
          )}
          <Button
            href={documentHref(project.projectUrl)}
            className="w-full"
            variant={project.demoUrl ? 'outline' : 'primary'}
            icon={ExternalLink}
            target="_blank"
          >
            {project.projectLabel ??
              (isPdf(project.projectUrl) ? 'View document (PDF)' : 'View project')}
          </Button>
        </div>
      )}
    </div>
  );
};

/** "learnerCharacteristics" -> "learner Characteristics", capitalised by CSS. */
const fieldLabel = (key: string) => key.replace(/([A-Z])/g, ' $1').trim();

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: ProjectId }>();
  const navigate = useNavigate();
  const location = useLocation();
  const initialRender = useRef(true);
  const navigationAttempted = useRef(false);

  // Store project in state to prevent re-fetching
  const [currentProject] = useState<ProjectBase | null>(() => {
    const found = projects.find(p => p.id === projectId);
    return found || null;
  });

  useEffect(() => {
    // Only run on initial render
    if (initialRender.current) {
      initialRender.current = false;

      if (!currentProject && !navigationAttempted.current) {
        navigationAttempted.current = true;
        navigate('/portfolio', { replace: true });
      }
    }

    // Cleanup
    return () => {
    };
  }, [projectId, currentProject, navigate, location]);

  /*
    Portfolio cards pass { from: pathname + search } in router state. When
    the visitor came from the portfolio, step back through history: that
    returns them to the filter they had open (it lives in ?category=) at the
    scroll position they left, and leaves no duplicate entry behind. The old
    navigate('/portfolio', { replace: true }) reset the filter to Featured
    and replaced this page's entry, so the next browser Back seemed dead.
    Anything else (a card on Home, a resume link, a shared URL) has no
    portfolio entry to return to, so push a fresh one instead.
  */
  const handleBackClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const from = (location.state as { from?: unknown } | null)?.from;
    if (typeof from === 'string' && from.startsWith('/portfolio')) {
      navigate(-1);
    } else {
      navigate('/portfolio');
    }
  }, [navigate, location]);

  // Don't render anything if we don't have a project
  if (!currentProject) {
    return null;
  }

  const analysis = currentProject.addieMethodology?.analysis;

  /*
    The story arc, before any methodology detail.

    Hiring managers want a narrative - "here was the problem, here was my
    analysis, here's what I designed, and here's what happened" - not a
    features dump. Every beat below reuses data the project files already
    carried; it was just ordered as description-then-challenges-then-ADDIE,
    which reads as a spec sheet. The exhaustive ADDIE/SAM breakdown still
    follows, as supporting evidence rather than as the pitch.

    Beats are numbered by position among the ones this project actually has.
    Most projects lack at least one, and fixed per-beat numbers showed up as
    "01, 03, 04" or pages that opened on "03".
  */
  const beats: Array<{ title: string; body: React.ReactNode }> = [];

  if (currentProject.businessContext) {
    beats.push({
      title: 'The problem',
      body: (
        <>
          <p className="text-text-secondary">{currentProject.businessContext}</p>
          {currentProject.challenges && (
            <ul className="mt-3 space-y-1 list-disc list-inside text-text-secondary">
              {currentProject.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
          )}
        </>
      ),
    });
  }

  if (analysis?.findings || analysis?.performanceGaps) {
    beats.push({
      title: 'What I found',
      body: (
        <>
          {analysis.findings && (
            <p className="text-text-secondary mb-3">{analysis.findings}</p>
          )}
          {analysis.performanceGaps && (
            <p className="text-text-secondary">{analysis.performanceGaps}</p>
          )}
        </>
      ),
    });
  }

  if (currentProject.solutions) {
    beats.push({
      title: 'What I designed',
      body: (
        <ul className="space-y-1 list-disc list-inside text-text-secondary">
          {currentProject.solutions.map((solution, index) => (
            <li key={index}><RichText>{solution}</RichText></li>
          ))}
        </ul>
      ),
    });
  }

  if (currentProject.results) {
    beats.push({
      title: 'What happened',
      body: (
        <ul className="space-y-1 list-disc list-inside text-text-secondary">
          {currentProject.results.map((result, index) => (
            <li key={index}><RichText>{result}</RichText></li>
          ))}
        </ul>
      ),
    });
  }

  if (currentProject.artifacts && currentProject.artifacts.length > 0) {
    beats.push({
      title: 'See the work',
      body: (
        <>
          <p className="text-text-secondary mb-4">
            The actual design documents, not a description of them.
          </p>
          {/* Say what each document is before the link that opens it. */}
          <ul className="space-y-5">
            {currentProject.artifacts.map((artifact) => (
              <li key={artifact.href}>
                <p className="font-medium text-text-primary">{artifact.label}</p>
                {artifact.description && (
                  <p className="text-sm text-text-secondary mt-1">
                    {artifact.description}
                  </p>
                )}
                <a
                  href={documentHref(getImagePath(artifact.href))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 font-medium text-primary-600 hover:text-primary-700 underline"
                >
                  <FileText aria-hidden="true" className="w-4 h-4 flex-shrink-0" />
                  {isPdf(artifact.href) ? 'View document (PDF)' : 'View document'}
                  <span className="sr-only">: {artifact.label}</span>
                  <NewTabHint />
                </a>
              </li>
            ))}
          </ul>
        </>
      ),
    });
  }

  /*
    findings and performanceGaps are the "What I found" beat above; listing
    them again under ADDIE > Analysis printed the same paragraphs twice.
  */
  const analysisDetails = analysis
    ? Object.entries(analysis).filter(
        ([key, value]) => value && key !== 'findings' && key !== 'performanceGaps'
      )
    : [];

  return (
    <BasePage
      seo={{
        title: currentProject.title,
        description: currentProject.description,
      }}
      title={currentProject.title}
      subtitle={currentProject.description}
      breadcrumbs={[
        { label: 'Portfolio', href: '/portfolio' },
        { label: currentProject.title, href: `/portfolio/${currentProject.id}` }
      ]}
    >
      <div className="py-8 md:py-12">
        <Button
          onClick={handleBackClick}
          variant="ghost"
          className="mb-6 md:mb-8"
          icon={ArrowLeft}
        >
          Back to Portfolio
        </Button>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            variants={fadeInUp}
            className="md:col-span-2"
          >
            <BaseCard>
              {/*
                Capped height, natural width, centred. Plain w-full/h-auto
                renders a square asset (a logo, for instance) at the full
                column width, so the hero alone ran ~500px tall and pushed the
                metrics and the story arc below the fold. A full-width box with
                object-contain fixed the height but letterboxed every image in
                grey bands, which read as an unfinished frame.

                The fixed-height wrapper (192px on phones, 288px from sm up)
                reserves the image's space before it loads. Without it the
                img was 0px tall until its header arrived, and the metrics
                and story jumped down by up to 288px as the reader started.
                The image is the page's first visible one, so it is fetched
                eagerly at high priority.

                alt: the title is the h1 just above, so repeating it here only
                made screen readers say it twice. imageAlt carries the text
                baked into the graphic; purely pictorial images stay alt="".
              */}
              {currentProject.image && (
                <div className="flex h-48 sm:h-72 items-center justify-center mb-6">
                  <img
                    src={currentProject.image}
                    alt={currentProject.imageAlt ?? ''}
                    {...imageLoading(true)}
                    className="block w-auto h-auto max-w-full max-h-full rounded-lg"
                  />
                </div>
              )}

              <ProjectLinks project={currentProject} className="md:hidden mb-6" />

              {currentProject.metrics && currentProject.metrics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {currentProject.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="text-center bg-primary-50 rounded-lg p-4"
                    >
                      <div className="text-3xl font-bold text-primary-600 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-text-secondary">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-8 mb-10">
                {beats.map((beat, index) => (
                  <StoryBeat
                    key={beat.title}
                    step={String(index + 1).padStart(2, '0')}
                    title={beat.title}
                  >
                    {beat.body}
                  </StoryBeat>
                ))}
              </div>

              <div className="prose max-w-none">
                <h2>About this Project</h2>
                <p>{currentProject.longDescription}</p>

                {/*
                  ADDIE Methodology Section.

                  Design and Evaluation print string fields only; the nested
                  arcsApplication and kirkpatrickModel shapes in the type are
                  never shown, so don't put text in them.
                */}
                {currentProject.addieMethodology && (
                  <>
                    <h3>ADDIE Methodology</h3>
                    <div className="space-y-4">
                      {analysisDetails.length > 0 && (
                        <div className="border-l-4 border-primary-500 pl-4">
                          <h4 className="font-semibold text-lg mb-2">Analysis</h4>
                          {analysisDetails.map(([key, value]) => (
                            <div key={key} className="mb-3">
                              <p className="font-medium text-text-primary capitalize">
                                {fieldLabel(key)}:
                              </p>
                              <p className="text-text-secondary">{value}</p>
                            </div>
                          ))}
                        </div>
                      )}
                      {currentProject.addieMethodology.design && (
                        <div className="border-l-4 border-primary-500 pl-4">
                          <h4 className="font-semibold text-lg mb-2">Design</h4>
                          {Object.entries(currentProject.addieMethodology.design)
                            .filter(([_, value]) => value && typeof value === 'string')
                            .map(([key, value]) => (
                              <div key={key} className="mb-3">
                                <p className="font-medium text-text-primary capitalize">
                                  {fieldLabel(key)}:
                                </p>
                                <p className="text-text-secondary">{value as string}</p>
                              </div>
                            ))}
                        </div>
                      )}
                      {currentProject.addieMethodology.development && (
                        <div className="border-l-4 border-primary-500 pl-4">
                          <h4 className="font-semibold text-lg mb-2">Development</h4>
                          {Object.entries(currentProject.addieMethodology.development)
                            .filter(([_, value]) => value)
                            .map(([key, value]) => (
                              <div key={key} className="mb-3">
                                <p className="font-medium text-text-primary capitalize">
                                  {fieldLabel(key)}:
                                </p>
                                <p className="text-text-secondary">{value}</p>
                              </div>
                            ))}
                        </div>
                      )}
                      {currentProject.addieMethodology.implementation && (
                        <div className="border-l-4 border-primary-500 pl-4">
                          <h4 className="font-semibold text-lg mb-2">Implementation</h4>
                          {Object.entries(currentProject.addieMethodology.implementation)
                            .filter(([_, value]) => value)
                            .map(([key, value]) => (
                              <div key={key} className="mb-3">
                                <p className="font-medium text-text-primary capitalize">
                                  {fieldLabel(key)}:
                                </p>
                                <p className="text-text-secondary">{value}</p>
                              </div>
                            ))}
                        </div>
                      )}
                      {currentProject.addieMethodology.evaluation && (
                        <div className="border-l-4 border-primary-500 pl-4">
                          <h4 className="font-semibold text-lg mb-2">Evaluation</h4>
                          {Object.entries(currentProject.addieMethodology.evaluation)
                            .filter(([_, value]) => value && typeof value === 'string')
                            .map(([key, value]) => (
                              <div key={key} className="mb-3">
                                <p className="font-medium text-text-primary capitalize">
                                  {fieldLabel(key)}:
                                </p>
                                <p className="text-text-secondary">{value as string}</p>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </>
                )}

                {/* SAM Methodology Section */}
                {currentProject.samMethodology && (
                  <>
                    <h3>SAM (Successive Approximation Model) Methodology</h3>
                    <div className="space-y-4">
                      {currentProject.samMethodology.preparation && (
                        <div className="border-l-4 border-primary-300 pl-4">
                          <h4 className="font-semibold text-lg mb-2">Preparation Phase</h4>
                          {Object.entries(currentProject.samMethodology.preparation)
                            .filter(([_, value]) => value)
                            .map(([key, value]) => (
                              <div key={key} className="mb-3">
                                <p className="font-medium text-text-primary capitalize">
                                  {fieldLabel(key)}:
                                </p>
                                <p className="text-text-secondary">{value}</p>
                              </div>
                            ))}
                        </div>
                      )}
                      {currentProject.samMethodology.iterativeDesign && (
                        <div className="border-l-4 border-primary-300 pl-4">
                          <h4 className="font-semibold text-lg mb-2">Iterative Design</h4>
                          {Object.entries(currentProject.samMethodology.iterativeDesign)
                            .filter(([_, value]) => value)
                            .map(([key, value]) => (
                              <div key={key} className="mb-3">
                                <p className="font-medium text-text-primary capitalize">
                                  {fieldLabel(key)}:
                                </p>
                                <p className="text-text-secondary">{value}</p>
                              </div>
                            ))}
                        </div>
                      )}
                      {currentProject.samMethodology.iterativeDevelopment && (
                        <div className="border-l-4 border-primary-300 pl-4">
                          <h4 className="font-semibold text-lg mb-2">Iterative Development</h4>
                          {Object.entries(currentProject.samMethodology.iterativeDevelopment)
                            .filter(([_, value]) => value)
                            .map(([key, value]) => (
                              <div key={key} className="mb-3">
                                <p className="font-medium text-text-primary capitalize">
                                  {fieldLabel(key)}:
                                </p>
                                <p className="text-text-secondary">{value}</p>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </>
                )}

                {/*
                  `solutions` is rendered above as the "What I designed" beat.
                  Repeating it here under a second heading made the same list
                  appear twice on every project page.
                */}
              </div>
            </BaseCard>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <BaseCard>
              <h3 className="font-semibold mb-4">Project Details</h3>
              <dl className="space-y-3">
                <div>
                  <dt className="text-text-secondary">Status</dt>
                  <dd className="font-medium">
                    {statusLabel(currentProject.status)}
                  </dd>
                </div>
                <div>
                  <dt className="text-text-secondary">Date</dt>
                  <dd className="font-medium">{currentProject.date}</dd>
                </div>
                <div>
                  <dt className="text-text-secondary">Category</dt>
                  {/*
                    Look the label up rather than printing the raw category id.
                    This rendered "id" and "learning-tech" to visitors, which
                    reads as a bug on a page whose whole job is credibility.
                  */}
                  <dd className="font-medium">
                    {projectCategories.find(c => c.id === currentProject.category)?.label
                      ?? currentProject.category}
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                {/* Not "Technologies": the tags are mostly skills and topics. */}
                <h4 className="font-medium mb-2">Skills &amp; Topics</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <ProjectLinks project={currentProject} className="mt-6" />
            </BaseCard>
          </motion.div>
        </div>
      </div>
    </BasePage>
  );
};

export default React.memo(ProjectDetailPage);
