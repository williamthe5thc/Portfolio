// src/pages/HomePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/shared/SEO';
import { ArrowRight } from 'lucide-react';
import { 
  PageHeader,
  SectionContainer,
  ProjectGrid,
  JourneyCard
} from '../components/shared';
import { Button } from '../components/ui';
import { fadeInUp, staggerChildren } from '../constants/design/animations';
import { siteMetadata, featuredProjects } from '../data/siteData';

const HomePage = () => {
  return (
      <>
         <SEO 
        title="Home"
        description="W. Jordan Charles - Instructional Designer & Learning Solutions Developer specializing in creating engaging learning experiences"
        keywords={[
          'instructional design',
          'learning solutions',
          'elearning development',
          'W. Jordan Charles'
        ]}
      />
    <div className="min-h-screen">        
      {/* Hero Section */}
      <motion.section 
        className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-background-light to-background"
        variants={staggerChildren}
      >
        <div className="text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-text-primary mb-6"
            variants={fadeInUp}
          >
            {siteMetadata.author}
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-text-secondary mb-8"
            variants={fadeInUp}
          >
            {siteMetadata.description}
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

      {/* Featured Projects */}
      <SectionContainer className="py-20">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Here are some of my recent instructional design projects that showcase
            my skills and expertise.
          </p>
        </motion.div>
        <ProjectGrid 
          projects={featuredProjects} 
          showFilters={false}
        />
      </SectionContainer>

      {/* Journey Section */}
      <SectionContainer className="py-20 bg-background">
        <motion.div
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            My Journey
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            From psychology research to instructional design, here's how I've grown
            professionally.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <JourneyCard 
            icon="GraduationCap"
            title="Education"
            items={[
              {
                title: "Master of Education",
                subtitle: "University of Utah",
                date: "2023 - Present"
              },
              {
                title: "Bachelor of Science in Psychology",
                subtitle: "BYU-Idaho",
                date: "2012 - 2018"
              }
            ]}
          />
          <JourneyCard
            icon="Briefcase"
            title="Experience"
            items={[
              {
                title: "Instructional Designer",
                subtitle: "NACVA",
                date: "2023"
              },
              {
                title: "Research Assistant",
                subtitle: "Florida State University",
                date: "2018"
              }
            ]}
          />
          <JourneyCard
            icon="Award"
            title="Achievements"
            items={[
              {
                title: "Research Awards",
                subtitle: "Multiple conference awards",
                date: "2013 - 2015"
              },
              {
                title: "Certifications",
                subtitle: "Various ID certifications",
                date: "2023"
              }
            ]}
          />
        </div>
      </SectionContainer>
    </div>
      </>
  );
};

export default HomePage;