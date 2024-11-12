// src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { 
  ProjectCarousel,
  QuickLinks
} from '@/components/shared';
import { 
  Button, 
  BaseCard, 
  JourneyCard, 
  StatsGrid,
  CoreCompetency
} from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { 
  siteConfig,
  projects,
  stats,
  education,
  competencies,
} from '@/content';

const HomePage: React.FC = () => {
  // Featured projects - take first 3 projects
  const featuredProjects = React.useMemo(() => 
    projects.slice(2, 5),
    [projects]
  );

  

  return (
    <div className="min-h-screen bg-background-light">
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section using siteConfig */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            {siteConfig.slogan}
          </h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {siteConfig.tagline}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Project Carousel - Takes up 2 columns */}
          <div className="lg:col-span-2">
            <ProjectCarousel projects={featuredProjects} />
          </div>

          {/* Quick Links - Takes up 1 column */}
          <div className="lg:col-span-1">
            <QuickLinks />
          </div>
        </div>

        
        {/* Core Competencies Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Core Competencies
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competencies.map((competency, index) => (
                <CoreCompetency
                  key={index}
                  {...competency}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Education and Certifications Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <JourneyCard 
                icon={GraduationCap}
                title="Education"
                items={education.degrees.map(deg => ({
                  title: deg.degree,
                  subtitle: deg.institution,
                  date: deg.period
                }))}
              />
              <JourneyCard
                icon={Award}
                title="Certifications"
                items={education.certifications.map(cert => ({
                  title: cert.title,
                  subtitle: cert.issuer,
                  date: cert.date
                }))}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;