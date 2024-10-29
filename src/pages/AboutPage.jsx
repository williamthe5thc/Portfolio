// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { 
  SEO,
  PageHeader, 
  SectionContainer,
  Timeline, 
  StatsGrid
} from '../components/shared';
import { BaseCard } from '../components/ui/components';
import { 
  fadeInUp, 
  staggerContainer, 
  staggerChildren 
} from '../components/shared/animations';

import { 
  siteMetadata,
  education, 
  experience,
  stats,
  coreCompetencies 
} from '../data/siteData';

const CompetencyItem = ({ icon: IconName, title, description, color }) => {
  const Icon = Icons[IconName];
  return (
    <motion.div variants={fadeInUp} className="mb-6">
      <div className="flex items-start gap-3">
        {Icon && <Icon className={`w-6 h-6 ${color}`} />}
        <div>
          <h3 className="font-semibold text-text-primary mb-1">{title}</h3>
          <p className="text-text-secondary text-sm">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About"
        description={`Learn about ${siteMetadata.author}'s journey, expertise, and approach to instructional design`}
      />
      <div className="min-h-screen">
        <PageHeader
          title="About Me"
          subtitle="Learn about my journey, philosophy, and approach to instructional design"
        />

        {/* Quick Stats */}
        <SectionContainer className="py-12">
          <StatsGrid stats={stats} />
        </SectionContainer>

        {/* Bio Section */}
        <SectionContainer className="py-20 bg-background">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                My Approach
              </h2>
              <div className="prose prose-lg text-text-secondary">
                <p>
                  With a background in psychology and a passion for education,
                  I bring a unique perspective to instructional design. My 
                  approach combines research-based methodologies with creative
                  solutions to deliver meaningful learning experiences.
                </p>
                <p>
                  I believe in creating learner-centered experiences that not
                  only convey information effectively but also engage and
                  inspire. My goal is to help organizations and individuals
                  reach their full potential through strategic learning
                  solutions.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Areas of Expertise
              </h2>
              <div className="space-y-4">
                {coreCompetencies.map((competency, index) => (
                  <CompetencyItem key={index} {...competency} />
                ))}
              </div>
            </motion.div>
          </div>
        </SectionContainer>

        {/* Education & Experience */}
        <SectionContainer className="py-20">
          <motion.div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl font-bold text-text-primary mb-12 text-center"
              variants={fadeInUp}
            >
              Education & Experience
            </motion.h2>
            <Timeline items={experience.map(exp => ({
              title: exp.title,
              subtitle: exp.company,
              date: exp.period,
              description: exp.highlights?.join('. ')
            }))} />
          </motion.div>
        </SectionContainer>
      </div>
    </>
  );
};

export default AboutPage;