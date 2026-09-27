// src/components/templates/ResumeTemplate.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, ExternalLink } from 'lucide-react';
import { Button, BaseCard } from '@/components/ui';
import { fadeInUp } from '@/lib/animations';
import { documentHref } from '@/utils';

export interface ResumeTemplateProps {
  /** Shown by the page's BasePage header, not by this template. */
  title: string;
  /** Shown by the page's BasePage header, not by this template. */
  subtitle: string;
  summary: string;
  downloadUrl: string;
  experience?: Array<{
    title: string;
    company: string;
    period: string;
    highlights: string[];
  }>;
  education?: Array<{
    degree: string;
    field: string;
    institution: string;
    period: string;
    relevantCourses?: string[];
  }>;
  skills: Array<{
    category: string;
    skills: string[];
  }>;
  projects?: Array<{
    title: string;
    description: string;
    url?: string;
  }>;
  publications?: Array<{
    title: string;
    citation: string;
    url?: string;
  }>;
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

const ResumeTemplate: React.FC<ResumeTemplateProps> = ({
  summary,
  downloadUrl,
  experience,
  education,
  skills,
  projects,
  publications
}) => {
  return (
    // BasePage already wraps this in a Container, so no second container here.
    <div className="py-12">
      {/* Summary - the title and subtitle are in the page header above */}
      <motion.div 
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <p className="text-text-secondary max-w-3xl mx-auto mb-8">{summary}</p>
        <Button
          href={documentHref(downloadUrl)}
          target="_blank"
          icon={Download}
          variant="primary"
          className="mx-auto"
          analyticsLabel="Download PDF Version"
        >
          Download PDF Version
        </Button>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-8">
          {/* Experience */}
          {experience && experience.length > 0 && (
            <BaseCard>
              <h2 className="text-2xl font-bold mb-6">Professional Experience</h2>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
                  >
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-text-secondary mb-2">{exp.company} | {exp.period}</p>
                    <ul className="list-disc list-inside space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-text-secondary">{highlight}</li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </BaseCard>
          )}

          {/* Projects */}
          {projects && projects.length > 0 && (
            <BaseCard>
              <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
              <div className="space-y-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
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

          {/* Publications */}
          {publications && publications.length > 0 && (
            <BaseCard>
              <h2 className="text-2xl font-bold mb-6">Publications</h2>
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
                  >
                    <h3 className="text-xl font-semibold mb-1">
                      <EntryTitle title={pub.title} url={pub.url} />
                    </h3>
                    <p className="text-text-secondary">{pub.citation}</p>
                  </motion.div>
                ))}
              </div>
            </BaseCard>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Education first: the reviewer asked for the M.Ed. to be moved up */}
          {education && education.length > 0 && (
            <BaseCard>
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
                  >
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-text-secondary mb-1">{edu.field}</p>
                    <p className="text-text-secondary">{edu.institution} | {edu.period}</p>
                    {edu.relevantCourses && (
                      <div className="mt-2">
                        <p className="text-sm font-medium">Relevant Coursework:</p>
                        <p className="text-sm text-text-secondary">
                          {edu.relevantCourses.join(', ')}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </BaseCard>
          )}

          {/* Skills */}
          <BaseCard>
            <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                >
                  <h3 className="font-semibold mb-2">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </BaseCard>
        </div>
      </div>
    </div>
  );
};

export default ResumeTemplate;