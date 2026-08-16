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
import { projects } from '@/content';
import type { ProjectId, ProjectBase } from '@/types/content';
import { getImagePath } from '@/utils';
import BasePage from './BasePage';

/**
 * Some content entries embed markdown links, e.g.
 * "...report - [View Complete Needs Analysis Report](/case-studies/x.pdf)".
 * Rendered as plain text these show the raw brackets and parentheses to the
 * visitor, so parse them into real anchors. Absolute paths go through
 * getImagePath so they survive the staging and production base paths.
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
    const href = rawHref.startsWith('/') ? getImagePath(rawHref) : rawHref;

    parts.push(
      <a
        key={`${match.index}-${label}`}
        href={href}
        className="text-primary-600 underline hover:text-primary-700"
        {...(rawHref.startsWith('http')
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
      >
        {label}
      </a>
    );
    cursor = match.index + match[0].length;
  }

  if (cursor < children.length) parts.push(children.slice(cursor));
  return <>{parts}</>;
};

/**
 * One beat of the project narrative. Numbered so the four read as a sequence
 * rather than four unrelated headings a reader can drop into anywhere.
 */
const StoryBeat: React.FC<{
  step: string;
  title: string;
  children: React.ReactNode;
}> = ({ step, title, children }) => (
  <section className="border-l-4 border-primary-500 pl-5">
    <div className="flex items-baseline gap-3 mb-2">
      <span className="text-sm font-bold text-primary-500 tracking-widest">
        {step}
      </span>
      <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
    </div>
    {children}
  </section>
);

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: ProjectId }>();
  const navigate = useNavigate();
  const location = useLocation();
  const initialRender = useRef(true);
  const navigationAttempted = useRef(false);

  // Store project in state to prevent re-fetching
  const [currentProject, setCurrentProject] = useState<ProjectBase | null>(() => {
    const found = projects.find(p => p.id === projectId);
    console.log('Initial project lookup:', { projectId, found: !!found });
    return found || null;
  });

  useEffect(() => {
    console.log('ProjectDetailPage effect running', {
      projectId,
      currentProject: !!currentProject,
      initialRender: initialRender.current,
      pathname: location.pathname
    });

    // Only run on initial render
    if (initialRender.current) {
      initialRender.current = false;

      if (!currentProject && !navigationAttempted.current) {
        console.log('No project found on initial render, navigating to portfolio');
        navigationAttempted.current = true;
        navigate('/portfolio', { replace: true });
      }
    }

    // Cleanup
    return () => {
      console.log('ProjectDetailPage cleanup', { pathname: location.pathname });
    };
  }, [projectId, currentProject, navigate, location]);

  const handleBackClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    console.log('Back button clicked, navigating to portfolio');
    // Preserve the last active filter if it exists in location state
    const previousFilter = (location.state as any)?.from || 'featured';
    navigate('/portfolio', { 
      replace: true,
      state: { preserveFilter: previousFilter }
    });
  }, [navigate, location]);

  // Don't render anything if we don't have a project
  if (!currentProject) {
    console.log('No current project, rendering null');
    return null;
  }

  console.log('Rendering ProjectDetailPage', { 
    projectId, 
    currentProject: currentProject.title,
    pathname: location.pathname 
  });

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
      <div className="py-12">
        <Button 
          onClick={handleBackClick}
          variant="ghost"
          className="mb-8"
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
                Capped height with object-contain. Plain w-full/h-auto renders a
                square asset (a logo, for instance) at the full column width, so
                the hero image alone ran ~500px tall and pushed the metrics and
                the whole story arc below the fold.
              */}
              {currentProject.image && (
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full max-h-72 object-contain bg-gray-50 rounded-lg mb-6"
                />
              )}
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

              {/*
                The story arc, before any methodology detail.

                Hiring managers want a narrative - "here was the problem, here
                was my analysis, here's what I designed, and here's what
                happened" - not a features dump. Every beat below reuses data
                the project files already carried; it was just ordered as
                description-then-challenges-then-ADDIE, which reads as a spec
                sheet. The exhaustive ADDIE/SAM breakdown still follows, as
                supporting evidence rather than as the pitch.
              */}
              <div className="space-y-8 mb-10">
                {currentProject.businessContext && (
                  <StoryBeat step="01" title="The problem">
                    <p className="text-text-secondary">{currentProject.businessContext}</p>
                    {currentProject.challenges && (
                      <ul className="mt-3 space-y-1 list-disc list-inside text-text-secondary">
                        {currentProject.challenges.map((challenge, index) => (
                          <li key={index}>{challenge}</li>
                        ))}
                      </ul>
                    )}
                  </StoryBeat>
                )}

                {currentProject.addieMethodology?.analysis && (
                  <StoryBeat step="02" title="What I found">
                    {currentProject.addieMethodology.analysis.findings && (
                      <p className="text-text-secondary mb-3">
                        {currentProject.addieMethodology.analysis.findings}
                      </p>
                    )}
                    {currentProject.addieMethodology.analysis.performanceGaps && (
                      <p className="text-text-secondary">
                        {currentProject.addieMethodology.analysis.performanceGaps}
                      </p>
                    )}
                  </StoryBeat>
                )}

                {currentProject.solutions && (
                  <StoryBeat step="03" title="What I designed">
                    <ul className="space-y-1 list-disc list-inside text-text-secondary">
                      {currentProject.solutions.map((solution, index) => (
                        <li key={index}><RichText>{solution}</RichText></li>
                      ))}
                    </ul>
                  </StoryBeat>
                )}

                {currentProject.results && (
                  <StoryBeat step="04" title="What happened">
                    <ul className="space-y-1 list-disc list-inside text-text-secondary">
                      {currentProject.results.map((result, index) => (
                        <li key={index}><RichText>{result}</RichText></li>
                      ))}
                    </ul>
                  </StoryBeat>
                )}

                {currentProject.artifacts && currentProject.artifacts.length > 0 && (
                  <StoryBeat step="05" title="See the work">
                    <p className="text-text-secondary mb-4">
                      The actual design documents, not a description of them.
                    </p>
                    <ul className="space-y-3">
                      {currentProject.artifacts.map((artifact) => (
                        <li key={artifact.href}>
                          <a
                            href={getImagePath(artifact.href)}
                            className="inline-flex items-center gap-2 font-medium text-primary-600 hover:text-primary-700 underline"
                          >
                            <FileText className="w-4 h-4 flex-shrink-0" />
                            {artifact.label}
                          </a>
                          {artifact.description && (
                            <p className="text-sm text-text-secondary mt-1">
                              {artifact.description}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </StoryBeat>
                )}
              </div>

              <div className="prose max-w-none">
                <h2>About this Project</h2>
                <p>{currentProject.longDescription}</p>

                {/* ADDIE Methodology Section */}
                {currentProject.addieMethodology && (
                  <>
                    <h3>ADDIE Methodology</h3>
                    <div className="space-y-4">
                      {currentProject.addieMethodology.analysis && (
                        <div className="border-l-4 border-primary-500 pl-4">
                          <h4 className="font-semibold text-lg mb-2">Analysis</h4>
                          {Object.entries(currentProject.addieMethodology.analysis)
                            .filter(([_, value]) => value)
                            .map(([key, value]) => (
                              <div key={key} className="mb-3">
                                <p className="font-medium text-text-primary capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}:
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
                                  {key.replace(/([A-Z])/g, ' $1').trim()}:
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
                                  {key.replace(/([A-Z])/g, ' $1').trim()}:
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
                                  {key.replace(/([A-Z])/g, ' $1').trim()}:
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
                                  {key.replace(/([A-Z])/g, ' $1').trim()}:
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
                        <div className="border-l-4 border-secondary-500 pl-4">
                          <h4 className="font-semibold text-lg mb-2">Preparation Phase</h4>
                          {Object.entries(currentProject.samMethodology.preparation)
                            .filter(([_, value]) => value)
                            .map(([key, value]) => (
                              <div key={key} className="mb-3">
                                <p className="font-medium text-text-primary capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}:
                                </p>
                                <p className="text-text-secondary">{value}</p>
                              </div>
                            ))}
                        </div>
                      )}
                      {currentProject.samMethodology.iterativeDesign && (
                        <div className="border-l-4 border-secondary-500 pl-4">
                          <h4 className="font-semibold text-lg mb-2">Iterative Design</h4>
                          {Object.entries(currentProject.samMethodology.iterativeDesign)
                            .filter(([_, value]) => value)
                            .map(([key, value]) => (
                              <div key={key} className="mb-3">
                                <p className="font-medium text-text-primary capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}:
                                </p>
                                <p className="text-text-secondary">{value}</p>
                              </div>
                            ))}
                        </div>
                      )}
                      {currentProject.samMethodology.iterativeDevelopment && (
                        <div className="border-l-4 border-secondary-500 pl-4">
                          <h4 className="font-semibold text-lg mb-2">Iterative Development</h4>
                          {Object.entries(currentProject.samMethodology.iterativeDevelopment)
                            .filter(([_, value]) => value)
                            .map(([key, value]) => (
                              <div key={key} className="mb-3">
                                <p className="font-medium text-text-primary capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}:
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
                  <dd className="font-medium">{currentProject.status}</dd>
                </div>
                <div>
                  <dt className="text-text-secondary">Date</dt>
                  <dd className="font-medium">{currentProject.date}</dd>
                </div>
                <div>
                  <dt className="text-text-secondary">Category</dt>
                  <dd className="font-medium">{currentProject.category}</dd>
                </div>
              </dl>

              <div className="mt-6">
                <h4 className="font-medium mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {(currentProject.demoUrl || currentProject.projectUrl) && (
                <div className="mt-6 space-y-3">
                  {currentProject.demoUrl && (
                    <Button
                      href={currentProject.demoUrl}
                      className="w-full"
                      icon={ExternalLink}
                      target="_blank"
                    >
                      View Interactive Demo
                    </Button>
                  )}
                  {currentProject.projectUrl && (
                    <Button
                      href={currentProject.projectUrl}
                      className="w-full"
                      variant="outline"
                      icon={ExternalLink}
                      target="_blank"
                    >
                      View Live Project
                    </Button>
                  )}
                </div>
              )}
            </BaseCard>
          </motion.div>
        </div>
      </div>
    </BasePage>
  );
};

export default React.memo(ProjectDetailPage);