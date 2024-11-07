// src/pages/AboutPage.tsx
import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import BasePage from './BasePage';

import { 
  SEO,
  Timeline
} from '@/components/shared';

import {
  PageHeader,
  Container,
  SectionContainer
} from '@/components/layout';

import { 
  Button,
BaseCard, CoreCompetency, JourneyCard, StatsGrid, PhilosophyCard

} from '@/components/ui';

import { 
  fadeInUp, 
  staggerContainer, 
  staggerChildren 
} from '@/lib/animations';


import { 
  siteConfig,
  education, 
  experience,
  stats,
  competencies 
} from '@/content';
import type { Competency } from '@/types/content';

interface CompetencyItemProps extends Competency {
  className?: string;
}

const CompetencyItem: React.FC<CompetencyItemProps> = ({ 
  icon: IconName, 
  title, 
  description, 
  color,
  className = '' 
}) => {
  const Icon = Icons[IconName as keyof typeof Icons];
  
  return (
    <motion.div variants={fadeInUp} className={`mb-6 ${className}`}>
      <div className="flex items-start gap-3 min-h-touch">
        {Icon && <Icon className={`w-6 h-6 ${color || 'text-primary-600'}`} />}
        <div>
          <h3 className="font-semibold text-text-primary mb-1">{title}</h3>
          <p className="text-text-secondary text-sm md:text-base">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const AboutPage: React.FC = () => {
  const experienceItems = React.useMemo(() => {
    return experience.map(exp => ({
      title: exp.title,
      subtitle: exp.company,
      date: exp.period,
      description: exp.highlights.join('. ')
    }));
  }, []);

  return (
    <>
      <SEO 
        title="About"
        description={`Learn about ${siteConfig.author}'s journey, expertise, and approach to instructional design`}
      />
      
      <div className="min-h-screen">
        <PageHeader
          title="About Me"
          subtitle="Learn about my journey, philosophy, and approach to instructional design"
        />

        {/* Quick Stats */}
        {stats && (
          <SectionContainer className="py-12">
            <Container>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="animate-fade-in"
                  >
                    <BaseCard className="text-center">
                      <div className="text-4xl font-bold text-primary-600 mb-2">
                        {stat.value}
                      </div>
                      <p className="text-text-secondary">{stat.label}</p>
                    </BaseCard>
                  </motion.div>
                ))}
              </div>
            </Container>
          </SectionContainer>
        )}

        {/* Bio Section */}
        <SectionContainer className="py-20 bg-background">
          <Container>
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div 
                variants={fadeInUp}
                className="animate-slide-up"
              >
                <h2 className="text-3xl font-bold text-text-primary mb-6">
                  My Approach
                </h2>
                <div className="prose prose-lg text-text-secondary">
                  <p>
                    With a background in psychology and a passion for education,
                    I bring a unique perspective to instructional design. My 
                    approach combines research-based methodologies with creative
                    solutions to deliver meaningful learning experiences.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                variants={fadeInUp}
                className="animate-slide-up"
              >
                <h2 className="text-3xl font-bold text-text-primary mb-6">
                  Areas of Expertise
                </h2>
                <div className="space-y-4">
                  {competencies.map((competency, index) => (
                    <CompetencyItem key={index} {...competency} />
                  ))}
                </div>
              </motion.div>
            </div>
          </Container>
        </SectionContainer>

        {/* Education & Experience */}
        <SectionContainer className="py-20">
          <Container>
            <motion.div className="max-w-4xl mx-auto">
              <motion.h2 
                className="text-3xl font-bold text-text-primary mb-12 text-center"
                variants={fadeInUp}
              >
                Education & Experience
              </motion.h2>
              <Timeline events={experienceItems} />
            </motion.div>
          </Container>
        </SectionContainer>
      </div>
    </>
  );
};

export default AboutPage;