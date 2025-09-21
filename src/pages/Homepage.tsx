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

// Import the strategic project ordering
import { featuredProjects } from '@/content';

const HomePage: React.FC = () => {

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
              Instructional Design That Drives Results
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Creating data-driven learning solutions that improve performance and deliver measurable business outcomes. 
              <span className="font-semibold">Entry-level designers with portfolios earn 15% more</span> — 
              see why employers choose proven expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                as={Link} 
                to="/portfolio" 
                variant="primary" 
                size="lg"
                className="bg-primary-600 hover:bg-primary-700 text-white font-semibold"
              >
                View My Work
              </Button>
              <Button 
                as={Link} 
                to="/contact" 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold"
              >
                Start a Project
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Portfolio Projects</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              <span className="font-semibold">Top 3 Projects</span> showcasing proven instructional design methodology: 
              Articulate Storyline 360 proficiency, graduate curriculum design, and learning technology innovation.
            </p>
            <div className="mt-4 text-sm text-primary-600 font-medium">
              ✓ Interactive Demos Available  ✓ Complete Case Studies  ✓ Business Impact Documented
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ProjectCarousel projects={featuredProjects} />
            </div>
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-6">Quick Access</h3>
              <QuickLinks />
            </div>
          </div>
        </div>
      </section>

      {/* Professional Impact */}
      <section id="impact" className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proven Impact</h2>
            <p className="text-xl text-text-secondary">
              Creating measurable results through evidence-based instructional design
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
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
<section id="Contact Me" className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
  <div className="container mx-auto px-4 text-center">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Ready to Create Learning That Works?</h2>
      <p className="text-xl mb-8 opacity-90">
        From Articulate Storyline demos to scalable learning technology solutions — 
        let's build something that drives real business results.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <ScrollToSection to="/portfolio">
          <Button 
            as={Link} 
            to="./portfolio" 
            variant="outline" 
            size="lg"
            className="bg-white text-primary-600 hover:bg-gray-50 border-white"
          >
            View Interactive Demos
          </Button>
        </ScrollToSection>
        <ScrollToSection to="/Contact">
          <Button 
            as={Link} 
            to="./contact" 
            variant="primary" 
            size="lg"
            className="bg-white text-primary-600 hover:bg-gray-50"
          >
            Start a Project
          </Button>
        </ScrollToSection>
      </div>
    </div>
  </div>
</section>
    </div>
     </PageTransition>
    </RouteTransition>
  );
};

export default HomePage;