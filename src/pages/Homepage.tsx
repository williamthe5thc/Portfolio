// src/pages/HomePage.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '@/components/shared';
import { ProjectGrid } from '@/components/features/portfolio/ProjectGrid';
import { Button, BaseCard } from '@/components/ui';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { stats, featuredProjects } from '@/content';

const HomePage: React.FC = () => {

  return (
    <div className="min-h-screen bg-background-light">
      <SEO title="Home" />
      {/*
        Hero padding is kept tight on purpose so the featured projects start
        inside the first desktop screen: a first glance should show work, not
        only a headline and buttons.
      */}
      <section id="hero" className="relative pt-10 pb-6 md:pt-14 md:pb-8 bg-gradient-to-b from-background-light to-background">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4 break-words">
              Learning Experiences That Work
            </h1>
            {/*
              Deliberately does not open with the degree. Hiring advice in this
              field is consistent that the credential is table stakes and the
              work is the differentiator, so the lede is what I can do for an
              organization. The role list is broad on purpose - the same skills
              are hired under several different titles.
            */}
            <p className="text-lg text-text-secondary mb-2">
              <b>Instructional Design &middot; Learning Experience Design &middot; Learning Technology</b>
            </p>
            <p className="text-lg sm:text-xl text-text-secondary mb-6">
              I turn learning problems into programs that work &mdash; needs analysis to find
              what is actually broken, evidence-based design to fix it, and the technical
              build to ship it. Currently designing connection curriculum for a youth
              nonprofit; previously certification training for a credit union.
            </p>
            {/*
              One solid primary action and outline buttons for the rest, the
              same variants every other page uses. The four previous one-off
              colours read as unbranded, and all four failed contrast with white text.
            */}
            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
              <Button
                href="/portfolio"
                variant="primary"
                className="sm:px-6 sm:py-3 sm:text-lg font-semibold"
              >
                View Portfolio
              </Button>
              <Button
                href="/resume"
                variant="outline"
                className="sm:px-6 sm:py-3 sm:text-lg font-semibold"
              >
                Resume
              </Button>
              <Button
                href="/about#design-process"
                variant="outline"
                className="sm:px-6 sm:py-3 sm:text-lg font-semibold"
              >
                Design Process
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="sm:px-6 sm:py-3 sm:text-lg font-semibold"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="pt-6 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3">Featured Projects</h2>
            <p className="text-lg text-text-secondary">
              A credit union engagement with a measured outcome, a nonprofit LMS
              selection and build, and an Articulate Storyline 360 course
            </p>
          </div>
          {/*
            Shown as a grid rather than a carousel: hiring managers skim, and a
            flagship parked on slide two is a flagship nobody sees.
          */}
          <ProjectGrid
            projects={featuredProjects}
            showFilters={false}
            className="max-w-6xl mx-auto"
          />
        </div>
      </section>

      {/* Academic & Professional Growth */}
      <section id="impact" className="py-20 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What I Bring</h2>
            <p className="text-xl text-text-secondary">
              The capabilities behind the projects, and where each one is demonstrated
            </p>
          </div>
          {/*
            Capability cards, not a scoreboard. Left-aligned and given room to
            breathe because each one carries a sentence of evidence - centred
            numeric tiles cannot hold that, and the evidence is the point.
          */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={String(stat.value)}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.06 }}
                className="bg-white rounded-lg p-6 border-l-4 border-primary-500 shadow-sm"
              >
                <div className="text-lg font-bold text-primary-700 mb-3">
                  {stat.value}
                </div>
                <ul className="space-y-2">
                  {stat.points?.map((point) => (
                    <li key={point} className="text-text-secondary leading-relaxed flex gap-2">
                      <span className="text-primary-500 flex-shrink-0">&bull;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
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
          Three things I hold to, and what each one costs when you skip it
        </p>
      </motion.div>

      {/* Core Principles */}
      <div className="grid lg:grid-cols-3 gap-6 mb-12">
        <motion.div variants={fadeInUp}>
          <BaseCard className="h-full">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Find the real barrier first
            </h3>
            <p className="text-text-secondary">
              The stated problem is rarely the actual one. A credit union thought its
              certification materials needed rewriting; the analysis found the binding
              constraint was that nobody had protected study time. Design aimed at the
              wrong barrier is expensive and it does not work.
            </p>
          </BaseCard>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <BaseCard className="h-full">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Let the evidence pick the format
            </h3>
            <p className="text-text-secondary">
              Cognitive load theory, Mayer's multimedia principles and Universal Design for
              Learning are useful because they settle arguments about format with something
              other than taste. Short modules, one idea at a time, and more than one way in
              are design decisions with reasons behind them, not preferences.
            </p>
          </BaseCard>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <BaseCard className="h-full">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Build the measurement in
            </h3>
            <p className="text-text-secondary">
              Evaluation added at the end tells you what happened after it is too late to
              act. Instruments built into the modules produce data while a cohort is still
              running, which is the difference between finding out a module is weak and
              being able to fix it.
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
      <motion.div variants={fadeInUp} className="mt-12 text-center">
        <Button 
          href="/about#design-process"
          variant="outline"
        >
          Learn More About My Approach
        </Button>
      </motion.div>
    </motion.div>
  </div>
</section>

{/* Call to Action - WCAG AA Compliant Colors */}
<section id="contact-cta" className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
  <div className="container mx-auto px-4 text-center">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 drop-shadow-sm">Let's Work Together</h2>
      <p className="text-xl mb-8 opacity-95 drop-shadow-sm">
        I take learning programs from analysis through delivery, and I measure whether they worked. 
        Let's discuss how I can contribute to creating training that drives measurable results for your organization.
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
  );
};

export default HomePage;