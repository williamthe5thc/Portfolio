import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  Target, 
  Lightbulb,
  BookOpen,
  Code,
  Brain,
  PlayCircle
} from 'lucide-react';
import { Card, Section } from '../components/ui';
import { ProjectCard } from '../components/EnhancedComponents';
import {
  SEO,
  PageHeader,
  PageLayout,
  GridContainer,
  SectionContainer,
  fadeInUp,
  staggerChildren
} from '../components/shared';
import {
  JourneyCard,
  PhilosophyCard,
  StatsGrid,
  Timeline
} from '../components/about';
import {
  aboutMe,
  education,
  experience,
  projects,
  competencies,
  siteMetadata
} from '../data/siteData';

const AboutPage = () => {
  const journeyCards = [
    {
      icon: "GraduationCap",
      title: "Education",
      items: education.map(edu => ({
        title: edu.degree,
        subtitle: edu.school,
        date: edu.period
      })),
      color: "text-primary-600"
    },
    {
      icon: "Award",
      title: "Experience",
      items: experience.map(exp => ({
        title: exp.title,
        subtitle: exp.company,
        date: exp.period
      })),
      color: "text-accent-green"
    }
  ];

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "15+", label: "Certifications" },
    { value: "100%", label: "Client Satisfaction" }
  ];

  return (
    <PageLayout>
      <SEO 
        title="About Me"
        description="Learn about W. Jordan Charles - an instructional designer combining psychology research expertise with modern educational technology"
      />

      {/* Hero Section */}
      <PageHeader
        title="About Me"
        subtitle={aboutMe.intro}
      />

      {/* Professional Journey */}
      <Section dark={true}>
        <SectionContainer>
          <motion.h2 
            className="text-3xl font-bold text-text-primary text-center mb-8"
            variants={fadeInUp}
          >
            Professional Journey
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {journeyCards.map((card) => (
              <JourneyCard key={card.title} {...card} />
            ))}
          </motion.div>

          <StatsGrid stats={stats} />
        </SectionContainer>
      </Section>

      {/* Core Competencies */}
      <Section dark={false}>
        <SectionContainer>
          <motion.h2 
            className="text-3xl font-bold text-text-primary text-center mb-8"
            variants={fadeInUp}
          >
            Core Competencies
          </motion.h2>
          
          <GridContainer cols="md:grid-cols-2 lg:grid-cols-4">
            {competencies.map((competency) => (
              <motion.div
                key={competency.id}
                variants={fadeInUp}
                className="h-full"
              >
                <Card className="p-6 h-full">
                  <div className={`w-12 h-12 rounded-lg ${competency.color} bg-opacity-10 flex items-center justify-center mb-4`}>
                    {React.createElement(Icons[competency.icon], {
                      className: `w-6 h-6 ${competency.color}`
                    })}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-4">
                    {competency.title}
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    {competency.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </GridContainer>
        </SectionContainer>
      </Section>

      {/* Teaching Philosophy */}
      <Section dark={true}>
        <SectionContainer>
          <motion.h2 
            className="text-3xl font-bold text-text-primary text-center mb-8"
            variants={fadeInUp}
          >
            Teaching Philosophy
          </motion.h2>
          
          <PhilosophyCard 
            icon="Lightbulb"
            content={aboutMe.philosophy}
          />
        </SectionContainer>
      </Section>

      {/* Featured Projects */}
      <Section dark={false}>
        <SectionContainer>
          <motion.h2 
            className="text-3xl font-bold text-text-primary text-center mb-8"
            variants={fadeInUp}
          >
            Featured Projects
          </motion.h2>
          
          <GridContainer>
            {projects.slice(0, 3).map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="h-full"
              >
                <Card className="h-full">
                  <ProjectCard project={project} />
                </Card>
              </motion.div>
            ))}
          </GridContainer>
        </SectionContainer>
      </Section>

      {/* Professional Timeline */}
      <Section dark={true}>
        <SectionContainer>
          <motion.h2 
            className="text-3xl font-bold text-text-primary text-center mb-12"
            variants={fadeInUp}
          >
            Professional Timeline
          </motion.h2>
          
          <Timeline 
            events={[
              ...education.map(edu => ({
                title: `${edu.degree} - ${edu.school}`,
                date: edu.period,
                description: edu.field
              })),
              ...experience.map(exp => ({
                title: `${exp.title} at ${exp.company}`,
                date: exp.period,
                description: exp.responsibilities?.[0] || ''
              }))
            ].sort((a, b) => new Date(b.date) - new Date(a.date))}
          />
        </SectionContainer>
      </Section>
    </PageLayout>
  );
};

export default AboutPage;