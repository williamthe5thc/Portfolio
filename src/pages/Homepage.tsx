// src/pages/HomePage.tsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BasePage from './BasePage';

import {
ProjectGrid
} from '@/components/features';

import { 
  Button,
BaseCard, CoreCompetency, JourneyCard, StatsGrid, PhilosophyCard, SectionContainer

} from '@/components/ui';

import {
  SectionContainer
} from '@/components/layout';

import { fadeInUp, staggerContainer } from '@/lib/animations';
import { 
  siteConfig,
  projects,
  education,
  experience,
  competencies
} from '@/content';
import type { Competency } from '@/types/content';

interface CoreCompetencyCardProps {
  title: string;
  description: string;
  icon: string;
  color?: string;
}

const CoreCompetencyCard: React.FC<CoreCompetencyCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  color 
}) => (
  <motion.div variants={fadeInUp}>
    <BaseCard className="h-full transition-shadow duration-300 hover:shadow-lg">
      <div className="flex items-start gap-3 p-6">
        {Icon && <Icon className={`w-6 h-6 ${color || 'text-primary-600'}`} />}
        <div>
          <h3 className="font-semibold text-text-primary mb-1">{title}</h3>
          <p className="text-text-secondary">{description}</p>
        </div>
      </div>
    </BaseCard>
  </motion.div>
);

const HomePage: React.FC = () => {
  return (
    <BasePage
      seo={{
        title: "Home",
        description: siteConfig.description
      }}
      title=""  // Empty title since we're using custom hero section
      className="bg-background-light"
    >
      {/* Hero Section */}
      <motion.section 
        className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-background-light to-background px-4 sm:px-6 md:px-8 pb-safe"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6"
            variants={fadeInUp}
          >
            {siteConfig.slogan}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-text-secondary mb-8"
            variants={fadeInUp}
          >
            {siteConfig.tagline}
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Button 
              href="/portfolio"
              className="w-full sm:w-auto"
              icon={ArrowRight}
            >
              View Portfolio
            </Button>
            <Button 
              href="/contact"
              variant="outline"
              className="w-full sm:w-auto"
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </motion.section>

        {/* Core Competencies Section */}
        <SectionContainer className="py-20 bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Core Competencies
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Combining instructional design expertise with technical skills
                to create impactful learning solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competencies.map((competency, index) => (
                <CoreCompetencyCard
                  key={index}
                  {...competency}
                />
              ))}
            </div>
          </div>
        </SectionContainer>

        {/* Journey Section */}
        <SectionContainer className="py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <JourneyCard 
                icon="GraduationCap"
                title="Education"
                items={education.degrees.map(deg => ({
                  title: deg.degree,
                  subtitle: deg.institution,
                  date: deg.period
                }))}
              />
              <JourneyCard
                icon="Briefcase"
                title="Experience"
                items={experience.map(exp => ({
                  title: exp.title,
                  subtitle: exp.company,
                  date: exp.period
                }))}
              />
              <JourneyCard
                icon="Award"
                title="Certifications"
                items={education.certifications.map(cert => ({
                  title: cert.title,
                  subtitle: cert.issuer,
                  date: cert.date
                }))}
              />
            </div>
          </div>
        </SectionContainer>

        {/* Featured Projects */}
        <SectionContainer className="py-20 bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Featured Projects
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Explore some of my recent instructional design work and
                learning solutions.
              </p>
            </motion.div>
            <ProjectGrid 
              projects={projects.slice(0, 3)}
              showFilters={false}
            />
          </div>
        </SectionContainer>
      </BasePage>      
  );
};

export default HomePage;