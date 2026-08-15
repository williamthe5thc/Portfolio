// src/pages/AboutPage.tsx

import React from 'react';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { Timeline, PageTransition } from '@/components/shared';
import { PageHeader, Container, SectionContainer } from '@/components/layout';
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

const AboutPage: React.FC = () => {
const location = useLocation();
  const initialRender = useRef(true);

  useEffect(() => {
    // Handle initial page load with hash
    if (location.hash && initialRender.current) {
      initialRender.current = false;
      // Small delay to ensure content is rendered
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    
    // Handle navigation state with scrollTo
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      element?.scrollIntoView({ behavior: 'smooth' });
      // Clean up state
      window.history.replaceState({}, document.title);
    }
  }, [location]);
  /*
    These periods are display strings ("March 2026 - Present", "2012 - 2018"),
    so they have to be parsed before they can be ordered. Sorting them with
    localeCompare - as this did - compares them alphabetically, which sorts by
    month *name*: "May 2025" lands above "March 2026" and the current role gets
    buried under a finished internship.
  */
  const timelineItems = React.useMemo(() => {
    const educationItems = education.degrees.map(deg => ({
      title: deg.degree,
      subtitle: deg.institution,
      date: deg.period,
      description: `${deg.field}. GPA: ${deg.gpa || 'N/A'}. ${deg.highlights?.join('. ') || ''}`,
      type: 'education' as const
    }));
    
    const experienceItems = experience.map(exp => ({
      title: exp.title,
      subtitle: exp.company,
      date: exp.period,
      description: exp.highlights.join('. '),
      type: 'experience' as const
    }));
    
    // Combine and sort by start date, most recent first.
    return [...educationItems, ...experienceItems].sort(
      (a, b) => periodStartRank(b.date) - periodStartRank(a.date)
    );
  }, []);

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
      <BackgroundSection timelineItems={timelineItems} />
      <FAQSection />
    </BasePage>
     </PageTransition>
     </RouteTransition>
      
  );
};

// Component Definitions
const StatsSection = () => (
  <SectionContainer className="py-12">
    <Container>
      <StatsGrid stats={stats} />
    </Container>
  </SectionContainer>
);

const ProfessionalPracticeSection = () => (
  <SectionContainer id="Professional-practice" className="py-20 bg-background">
    <Container>
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

        {/* Design Process */}
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
      </motion.div>
    </Container>
  </SectionContainer>
);

const SkillsSection = () => (
  <SectionContainer className="py-20">
    <Container>
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
    </Container>
  </SectionContainer>
);

const ToolsSection = () => (
  <SectionContainer className="py-10"> 
    <Container>
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
    </Container>
  </SectionContainer>
);

interface BackgroundSectionProps {
  timelineItems: Array<{
    title: string;
    subtitle: string;
    date: string;
    description: string;
    type?: 'education' | 'experience';
  }>;
}

const BackgroundSection: React.FC<BackgroundSectionProps> = ({ timelineItems }) => (
  <SectionContainer className="py-20">
    <Container>
      <motion.div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-text-primary mb-12 text-center"
          variants={fadeInUp}
        >
          Experience & Education
        </motion.h2>
        <Timeline events={timelineItems} />
      </motion.div>
    </Container>
  </SectionContainer>
);

// FAQ Section
const FAQSection = () => (
  <SectionContainer className="py-20 bg-background">
    <Container>
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
    </Container>
  </SectionContainer>
);

export default AboutPage;