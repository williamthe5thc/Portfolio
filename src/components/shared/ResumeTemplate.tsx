// src/components/shared/ResumeTemplate.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import { Button, BaseCard } from '@/components/ui';
import { fadeInUp } from '@/lib/animations';
import { documentHref, getImagePath } from '@/utils';
import type { ResumeData, ResumeEntry } from '@/content/resumes';

export interface ResumeTemplateProps {
  resume: ResumeData;
}

/*
  The entry title is the link. It used to be plain text beside a bare 20px
  ExternalLink icon, so clicking the project name did nothing and screen
  readers announced an unnamed "link". Internal case studies get an arrow;
  only real off-site links get the external-link icon and a new tab.
*/
const EntryTitle: React.FC<{ title: string; url?: string }> = ({ title, url }) => {
  const linkClass = 'text-primary-600 hover:text-primary-700 hover:underline';
  // Inline so the icon follows the last word when a long title wraps.
  const iconClass = 'inline-block w-5 h-5 ml-1.5 -mt-0.5';

  if (!url) return <>{title}</>;

  if (url.startsWith('/')) {
    return (
      <Link to={url} className={linkClass}>
        {title}
        <ArrowRight className={iconClass} aria-hidden="true" />
      </Link>
    );
  }

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={linkClass}>
      {title}
      <span className="sr-only"> (opens in a new tab)</span>
      <ExternalLink className={iconClass} aria-hidden="true" />
    </a>
  );
};

const EntryList: React.FC<{ heading: string; entries: ResumeEntry[] }> = ({ heading, entries }) => (
  <BaseCard>
    <h2 className="text-2xl font-bold mb-6">{heading}</h2>
    <div className="space-y-6">
      {entries.map(entry => (
        <motion.div
          key={`${entry.title}-${entry.org}`}
          variants={fadeInUp}
          className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
        >
          <h3 className="text-xl font-semibold">{entry.title}</h3>
          <p className="text-text-secondary mb-2">
            {entry.org}
            {entry.location ? `, ${entry.location}` : ''} | {entry.period}
          </p>
          <ul className="list-disc list-inside space-y-2">
            {entry.bullets.map(bullet => (
              <li key={bullet} className="text-text-secondary">{bullet}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </BaseCard>
);

const ResumeTemplate: React.FC<ResumeTemplateProps> = ({ resume }) => {
  const { summary, pdf, experience, research, education, projectsHeading, projects, skills, presentations, honors } = resume;

  return (
    // BasePage already wraps this in a Container, so no second container here.
    <div className="py-12">
      {/* Summary - the title and headline are in the page header above */}
      <motion.div
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <p className="text-text-secondary max-w-3xl mx-auto mb-8">{summary}</p>
        <Button
          href={documentHref(getImagePath(`/documents/${pdf}`))}
          target="_blank"
          icon={Download}
          variant="primary"
          className="mx-auto"
          analyticsLabel={`Download PDF: ${resume.title}`}
        >
          Download PDF Version
        </Button>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          <EntryList heading="Professional Experience" entries={experience} />

          {research && research.length > 0 && (
            <EntryList heading="Research Experience" entries={research} />
          )}

          {projects.length > 0 && (
            <BaseCard>
              <h2 className="text-2xl font-bold mb-6">{projectsHeading}</h2>
              <div className="space-y-6">
                {projects.map(project => (
                  <motion.div
                    key={project.title}
                    variants={fadeInUp}
                    className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
                  >
                    <h3 className="text-xl font-semibold mb-1">
                      <EntryTitle title={project.title} url={project.url} />
                    </h3>
                    <p className="text-text-secondary">{project.description}</p>
                  </motion.div>
                ))}
              </div>
            </BaseCard>
          )}

          {presentations && presentations.length > 0 && (
            <BaseCard>
              <h2 className="text-2xl font-bold mb-6">Presentations</h2>
              <ul className="space-y-4">
                {presentations.map(item => (
                  <li key={item} className="text-text-secondary">{item}</li>
                ))}
              </ul>
            </BaseCard>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Education first: the reviewer asked for the M.Ed. to be moved up */}
          <BaseCard>
            <h2 className="text-2xl font-bold mb-6">Education</h2>
            <div className="space-y-6">
              {education.map(edu => (
                <motion.div
                  key={edu.degree}
                  variants={fadeInUp}
                  className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
                >
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-text-secondary mb-1">{edu.field}</p>
                  <p className="text-text-secondary">{edu.school} | {edu.period}</p>
                  {edu.details && <p className="text-sm text-text-secondary mt-2">{edu.details}</p>}
                </motion.div>
              ))}
            </div>
          </BaseCard>

          <BaseCard>
            <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
            <div className="space-y-6">
              {skills.map(group => (
                <motion.div
                  key={group.label}
                  variants={fadeInUp}
                >
                  <h3 className="font-semibold mb-2">{group.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(item => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </BaseCard>

          {honors && honors.length > 0 && (
            <BaseCard>
              <h2 className="text-2xl font-bold mb-6">Honors</h2>
              <ul className="space-y-3">
                {honors.map(item => (
                  <li key={item} className="text-text-secondary">{item}</li>
                ))}
              </ul>
            </BaseCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate;
