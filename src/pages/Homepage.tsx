// src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';

import { ScrollToSection } from '@/components/shared/ScrollToSection';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import {RouteTransition} from '@/components/layout/RouteTransition';
import { ProjectCarousel, QuickLinks, PageTransition } from '@/components/shared';
import { Button, BaseCard, JourneyCard, StatsGrid, CoreCompetency } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { siteConfig, projects, stats, education, competencies } from '@/content';

// Import specific featured projects
import nacvaAutomation from '@/content/projects/nacva-automation';
import waltzCourse from '@/content/projects/course-waltz';
import variableTimer from '@/content/projects/variable-timer';

const HomePage: React.FC = () => {
  // Featured projects - directly specify the projects we want to showcase
  const featuredProjects = React.useMemo(() => [
    nacvaAutomation,  // NACVA automation - our strongest ID case study
    waltzCourse,      // Waltz course - comprehensive ID project
    variableTimer     // Variable timer - learning technology innovation
  ], []);

  return (
   <RouteTransition>
      <PageTransition>
    <div className="min-h-screen bg-background-light">
      {/* Hero Section */}
      <section id="hero" className="relative py-20 bg-gradient-to-b from-background-light to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-bold text-text-primary mb-6">
              {siteConfig.slogan}
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              {siteConfig.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      
      {/* Featured Projects */}
      <section id="featured-projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Featured Work</h2>
              <ProjectCarousel projects={featuredProjects} />
            </div>
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-6">Quick Links</h2>
              <QuickLinks />
            </div>
          </div>
        </div>
      </section>


{/* Learning Design Philosophy */}
<section id="philosophy" className="py-20 bg-background">
  <div className="container mx-auto px-4">
    <motion.div 
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="max-w-4xl mx-auto"
    >
      {/* Title */}
      <motion.div variants={fadeInUp} className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Learning Design Philosophy
        </h2>
        <p className="text-xl text-text-secondary">
          Creating impactful learning experiences through proven methodologies and innovative approaches
        </p>
      </motion.div>

      {/* Core Principles */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div variants={fadeInUp}>
          <BaseCard className="h-full">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Learner-Centered Design
            </h3>
            <p className="text-text-secondary">
              Every solution starts with understanding the learner's needs, 
              context, and goals. By putting the learner first, we create 
              engaging experiences that drive real results.
            </p>
          </BaseCard>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <BaseCard className="h-full">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Evidence-Based Approach
            </h3>
            <p className="text-text-secondary">
              Combining learning science with practical experience to create 
              solutions that are both theoretically sound and practically effective.
            </p>
          </BaseCard>
        </motion.div>
      </div>

      {/* Design Process */}
      <motion.div variants={fadeInUp}>
        <BaseCard className="p-8">
          <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
            Design Process
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Analyze</h4>
              <p className="text-sm text-text-secondary">
                Understand needs and objectives
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Design</h4>
              <p className="text-sm text-text-secondary">
                Create learner-centered solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Develop</h4>
              <p className="text-sm text-text-secondary">
                Build engaging experiences
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Implement</h4>
              <p className="text-sm text-text-secondary">
                Deploy and support solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">5</span>
              </div>
              <h4 className="font-semibold mb-2">Measure</h4>
              <p className="text-sm text-text-secondary">
                Evaluate and improve impact
              </p>
            </div>
          </div>
        </BaseCard>
      </motion.div>

      {/* Results Focus */}
      <motion.div variants={fadeInUp}>
        <div className="mt-12 text-center">
          <motion.div variants={fadeInUp}>
  <div className="mt-12 text-center">
    <ScrollToSection to="/about#Professional-practice">
      <Button 
        variant="outline"
        className="hover:bg-primary-50"
      >
        Learn More About My Approach
      </Button>
    </ScrollToSection>
  </div>
</motion.div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>

{/* Call to Action */}
<section id="Contact Me" className="py-20 bg-primary-50">
  <div className="container mx-auto px-4 text-center">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Learning Experience?</h2>
      <p className="text-xl text-text-secondary mb-8">
        Let's collaborate to create engaging, effective learning solutions for your organization.
      </p>
          <ScrollToSection to="/Contact">

      <Button 
        as={Link} 
        to="./contact" 
        variant="primary" 
        size="lg"
        className="hover:bg-primary-700"
      >
        Start a Conversation
      </Button>
      </ScrollToSection>
    </div>
  </div>
</section>
    </div>
     </PageTransition>
    </RouteTransition>
  );
};

export default HomePage;