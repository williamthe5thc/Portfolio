// src/pages/HomePage.tsx
import React, { useState, useEffect } from 'react';

import { ScrollToSection } from '@/components/shared/ScrollToSection';

import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import {RouteTransition} from '@/components/layout/RouteTransition';
import { ProjectCarousel, PageTransition } from '@/components/shared';
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
              Learning Experiences That Work
            </h1>
            <p className="text-lg text-text-secondary mb-2">
              <b>Evidence-Based Instructional Designer | Adult Learning Specialist</b>
            </p>
            <p className="text-xl text-text-secondary mb-8">
              Evidence-based instructional designer who turns complex learning challenges into effective solutions. 
 M.Ed. graduate ready to help your organization develop training that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/portfolio" 
                variant="custom"
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg rounded-lg px-6 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                View Portfolio
              </Button>
              <Button 
                href="/resume" 
                variant="custom"
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold shadow-lg rounded-lg px-6 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Resume
              </Button>
              <Button 
                href="/about#Professional-practice" 
                variant="custom"
                size="lg"
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold shadow-lg rounded-lg px-6 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Design Process
              </Button>
              <Button 
                href="/contact" 
                variant="custom"
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg rounded-lg px-6 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <ProjectCarousel projects={featuredProjects} />
          </div>
        </div>
      </section>

      {/* Academic & Professional Growth */}
      <section id="impact" className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Academic & Professional Preparation</h2>
            <p className="text-xl text-text-secondary">
              Building strong instructional design foundations through education and hands-on experience
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
              Grounding design decisions in learning science research and cognitive psychology principles. I apply Mayer's multimedia learning principles, constructivist learning theory, and Universal Design for Learning (UDL) to create solutions that are both theoretically sound and practically effective.
            </p>
          </BaseCard>
        </motion.div>
      </div>

      {/* Design Process */}
      <motion.div variants={fadeInUp} id="design-process">
        <BaseCard className="p-8">
          <h3 className="text-2xl font-bold text-text-primary mb-6 text-center">
            ADDIE Design Methodology
          </h3>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">A</span>
              </div>
              <h4 className="font-semibold mb-2">Analyze</h4>
              <p className="text-sm text-text-secondary">
                Conduct systematic learner analysis, identify performance gaps, and assess organizational needs using andragogy principles
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">D</span>
              </div>
              <h4 className="font-semibold mb-2">Design</h4>
              <p className="text-sm text-text-secondary">
                Create learning objectives, design assessments, and plan instructional strategies using scaffolding and UDL principles
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">D</span>
              </div>
              <h4 className="font-semibold mb-2">Develop</h4>
              <p className="text-sm text-text-secondary">
                Build content applying cognitive load theory, multimedia learning principles, and accessibility standards
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">I</span>
              </div>
              <h4 className="font-semibold mb-2">Implement</h4>
              <p className="text-sm text-text-secondary">
                Deploy learning solutions with change management support and social learning approaches
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 font-bold">E</span>
              </div>
              <h4 className="font-semibold mb-2">Evaluate</h4>
              <p className="text-sm text-text-secondary">
                Measure learning outcomes using Kirkpatrick model and implement continuous improvement cycles
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

{/* Call to Action - WCAG AA Compliant Colors */}
<section id="Contact Me" className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
  <div className="container mx-auto px-4 text-center">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 drop-shadow-sm">Let's Work Together</h2>
      <p className="text-xl mb-8 opacity-95 drop-shadow-sm">
        I'm actively seeking entry-level instructional design opportunities where I can contribute evidence-based design expertise, 
        fresh perspectives, and passion for creating learning experiences that work. Let's discuss how I can support your organization's goals.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          href="/portfolio" 
          variant="outline" 
          size="lg"
          className="bg-white text-primary-600 hover:bg-gray-100 border-white font-semibold shadow-md"
        >
          View My Projects
        </Button>
        <Button 
          href="/contact" 
          variant="primary" 
          size="lg"
          className="bg-primary-800 text-white hover:bg-primary-900 border-primary-800 font-semibold shadow-md"
        >
          Let's Connect
        </Button>
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