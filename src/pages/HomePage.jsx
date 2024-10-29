// src/pages/HomePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { 
  SEO,
  PageHeader, 
  SectionContainer,
  ProjectGrid,
  JourneyCard
} from '../components/shared';
import { Button } from '../components/ui/components';
import { fadeInUp, staggerContainer } from '../components/shared/animations';
import { 
  siteMetadata,
  projects,
  education,
  experience,
  coreCompetencies
} from '../data/siteData';

// Import CoreCompetencies from cards
import { CoreCompetencies } from '../components/shared/cards';

const HomePage = () => {
  return (
    <>
      <SEO 
        title="Home"
        description={siteMetadata.description}
        keywords={[
          'instructional design',
          'learning solutions',
          'elearning development',
          siteMetadata.author
        ]}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <motion.section 
          className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-background-light to-background"
          variants={staggerContainer}
        >
          <div className="text-center px-4 max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-text-primary mb-6"
              variants={fadeInUp}
            >
              {siteMetadata.slogan}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-text-secondary mb-8"
              variants={fadeInUp}
            >
              {siteMetadata.tagline}
            </motion.p>
            <motion.div 
              className="flex gap-4 justify-center"
              variants={fadeInUp}
            >
              <Button 
                href="/portfolio"
                className="flex items-center gap-2"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                href="/contact"
                variant="outline"
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Core Competencies */}
        <SectionContainer className="py-20 bg-background">
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
          <CoreCompetencies items={coreCompetencies} />
        </SectionContainer>

        {/* Journey Section */}
        <SectionContainer className="py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </SectionContainer>

        {/* Featured Projects */}
        <SectionContainer className="py-20 bg-background">
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
            projects={projects.slice(0, 3)} // Show only first 3 projects
            showFilters={false}
          />
        </SectionContainer>
      </div>
    </>
  );
};

export default HomePage;