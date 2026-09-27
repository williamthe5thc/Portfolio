// src/pages/AboutPage.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Timeline, PageTransition } from '@/components/shared';
import type { TimelineEvent } from '@/components/shared/Timeline';
import { SectionContainer } from '@/components/layout';
import {RouteTransition } from '@/components/layout/RouteTransition';
import { BaseCard, StatsGrid } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { 
  siteConfig,
  education, 
  experience,
  stats,
  methodology,
  faqs 
} from '@/content';
import BasePage from './BasePage';

const MONTH_INDEX: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
};

/**
 * Turn a display period into a sortable number based on when it started.
 * "March 2026 - Present" -> 2026*12 + 2. Year-only periods like "2012 - 2018"
 * fall back to January of that year, which keeps them correctly ordered
 * against month-qualified entries.
 */
const periodStartRank = (period: string): number => {
  const start = period.split('-')[0].trim();
  const withMonth = start.match(/([A-Za-z]+)\.?\s+(\d{4})/);

  if (withMonth) {
    const month = MONTH_INDEX[withMonth[1].slice(0, 3).toLowerCase()] ?? 0;
    return Number(withMonth[2]) * 12 + month;
  }

  const yearOnly = start.match(/\d{4}/);
  return yearOnly ? Number(yearOnly[0]) * 12 : 0;
};

/*
  These periods are display strings ("March 2026 - Present", "2012 - 2018"),
  so they have to be parsed before they can be ordered. Sorting them with
  localeCompare - as this did - compares them alphabetically, which sorts by
  month *name*: "May 2025" lands above "March 2026" and the current role gets
  buried under a finished internship.
*/
const byStartDateDesc = (a: TimelineEvent, b: TimelineEvent) =>
  periodStartRank(b.date ?? '') - periodStartRank(a.date ?? '');

/*
  Education is its own list, shown before Experience, rather than merged into
  one date-sorted timeline. Merged, the M.Ed. (started Aug 2023) sorted below
  the May 2025 internship and read as the third item; the reviewer asked for
  the degree to be moved up. GPA only appears when there is one - the old
  template printed "GPA: N/A" for the B.S.
*/
const educationItems: TimelineEvent[] = education.degrees
  .map((deg) => ({
    title: deg.degree,
    subtitle: deg.institution,
    date: deg.period,
    description: deg.gpa ? `${deg.field} · GPA ${deg.gpa}` : deg.field,
    highlights: deg.highlights
  }))
  .sort(byStartDateDesc);

const experienceItems: TimelineEvent[] = experience
  .map((exp) => ({
    title: exp.title,
    subtitle: exp.company,
    date: exp.period,
    highlights: exp.highlights
  }))
  .sort(byStartDateDesc);

/*
  No scroll handling in this page: links such as /about#design-process are
  scrolled to by the app-level scroll manager, which also waits for lazy
  content to mount. A second, page-level handler only raced it.
*/
const AboutPage: React.FC = () => {
  return (
   <RouteTransition>
      <PageTransition>
    <BasePage
      seo={{
        title: "About",
        description: `Learn about ${siteConfig.author}'s journey, expertise, and approach to instructional design`
      }}
      title="About Me"
      subtitle="Exploring the intersection of learning theory, technology, and design"
      className="bg-background-light"
    >
      <StatsSection />
      <ProfessionalPracticeSection />
      <SkillsSection />
      <ToolsSection />
      <BackgroundSection />
      <FAQSection />
    </BasePage>
     </PageTransition>
     </RouteTransition>
      
  );
};

// Component Definitions
const StatsSection = () => (
  <SectionContainer className="py-12">
    <StatsGrid stats={stats} />
  </SectionContainer>
);

const ProfessionalPracticeSection = () => (
  <SectionContainer id="Professional-practice" className="py-20" tinted>
    <motion.div 
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="max-w-4xl mx-auto"
    >
      {/* Title */}
      <motion.div variants={fadeInUp} className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          {methodology.title}
        </h2>
        <p className="text-xl text-text-secondary">
          {methodology.summary}
        </p>
      </motion.div>

      {/* Core Principles */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {methodology.corePrinciples.map((principle) => (
          <motion.div 
            key={principle.title}
            variants={fadeInUp}
          >
            <BaseCard className="h-full">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {principle.title}
              </h3>
              <p className="text-text-secondary">
                {principle.description}
              </p>
            </BaseCard>
          </motion.div>
        ))}
      </div>

      {/*
        Design Process - the target of the home page's "Design Process" links
        (/about#design-process). The id sits on a plain wrapper, not on the
        animated div: that one starts 20px low, and a scroll measured while it
        is still moving lands short.
      */}
      <div id="design-process" className="scroll-mt-24">
        <motion.div variants={fadeInUp}>
          <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
            Design Process
          </h3>
          <div className="space-y-6">
            {methodology.process.map((phase) => (
              <BaseCard 
                key={phase.phase} 
                className="border-l-4 border-primary-500"
              >
                <h4 className="text-xl font-semibold text-text-primary mb-4">
                  {phase.phase}
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {phase.activities.map((activity) => (
                    <li 
                      key={activity} 
                      className="text-text-secondary flex items-start gap-2"
                    >
                      <span className="w-2 h-2 mt-2 rounded-full bg-primary-300 flex-shrink-0" />
                      {activity}
                    </li>
                  ))}
                </ul>
              </BaseCard>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  </SectionContainer>
);

const SkillsSection = () => (
  <SectionContainer className="py-20">
    <motion.div variants={fadeInUp} className="mt-12">
      <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
        Professional Skills
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(methodology.skills).map(([category, skillList]) => (
          <BaseCard key={category} className="h-full">
            <h4 className="font-semibold text-text-primary mb-2 capitalize">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h4>
            <ul className="space-y-2">
              {skillList.map((skill) => (
                <li 
                  key={skill}
                  className="text-text-secondary flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-primary-300 flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </BaseCard>
        ))}
      </div>
    </motion.div>
  </SectionContainer>
);

const ToolsSection = () => (
  <SectionContainer className="py-10">
    <motion.div variants={fadeInUp} className="mt-12">
      <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
        Technical Tools
      </h3>
      <div className="grid md:grid-cols-3 gap-4">
        {Object.entries(methodology.tools).map(([category, toolsets]) => (
          <div key={category} className="space-y-6">
            {toolsets.map((toolset) => (
              <BaseCard key={toolset.name} className="p-6">
            <h4 className="font-semibold text-text-primary mb-2 capitalize">
                  {toolset.name}
                </h4>
                <ul className="space-y-2">
                  {toolset.applications.map((tool) => (
                    <li 
                      key={tool}
                      className="text-text-secondary flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-primary-300 flex-shrink-0" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </BaseCard>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  </SectionContainer>
);

const BackgroundSection: React.FC = () => (
  <SectionContainer className="py-20">
    <motion.div className="max-w-4xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold text-text-primary mb-12 text-center"
        variants={fadeInUp}
      >
        Education & Experience
      </motion.h2>
      <h3 className="text-2xl font-bold text-text-primary mb-6">Education</h3>
      <Timeline events={educationItems} headingLevel="h4" className="mb-16" />
      <h3 className="text-2xl font-bold text-text-primary mb-6">Experience</h3>
      <Timeline events={experienceItems} headingLevel="h4" />
    </motion.div>
  </SectionContainer>
);

// FAQ Section
const FAQSection = () => (
  <SectionContainer className="py-20" tinted>
    <motion.div
      className="max-w-4xl mx-auto"
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >
      <motion.h2 
        className="text-3xl font-bold text-text-primary mb-12 text-center"
        variants={fadeInUp}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="grid gap-8">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
          >
            <BaseCard>
              <h3 className="font-semibold text-text-primary mb-2 text-xl">
                {faq.question}
              </h3>
              <p className="text-text-secondary">
                {faq.answer}
              </p>
            </BaseCard>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </SectionContainer>
);

export default AboutPage;