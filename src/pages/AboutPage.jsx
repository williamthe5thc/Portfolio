// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/shared/SEO';
import { 
  PageHeader,
  SectionContainer,
  Timeline,
  PhilosophyCard,
  StatsGrid
} from '../components/shared';
import { BaseCard } from '../components/ui';
import { fadeInUp, staggerChildren } from '../constants/design/animations';
import { education, experience, achievements } from '../data/siteData';

const AboutPage = () => {
  const stats = [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Certifications", value: "15+" },
    { label: "Happy Clients", value: "10+" }
  ];

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
      <PageHeader
        title="About Me"
        subtitle="Learn about my journey, philosophy, and approach to instructional design"
      />

      {/* Stats Section */}
      <SectionContainer className="py-12">
        <StatsGrid stats={stats} />
      </SectionContainer>

      {/* Journey Section */}
      <SectionContainer className="py-20 bg-background">
        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerChildren}
        >
          <motion.h2 
            className="text-3xl font-bold text-text-primary mb-12 text-center"
            variants={fadeInUp}
          >
            Professional Journey
          </motion.h2>
          <Timeline items={experience} />
        </motion.div>
      </SectionContainer>

      {/* Education & Skills */}
      <SectionContainer className="py-20">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div variants={fadeInUp}>
            <BaseCard>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Education
              </h3>
              {education.degrees.map((degree, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h4 className="font-semibold text-text-primary">
                    {degree.degree}
                  </h4>
                  <p className="text-text-secondary">{degree.institution}</p>
                  <p className="text-text-light">{degree.period}</p>
                </div>
              ))}
            </BaseCard>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <BaseCard>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Certifications
              </h3>
              {education.certifications.map((cert, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h4 className="font-semibold text-text-primary">
                    {cert.title}
                  </h4>
                  <p className="text-text-secondary">{cert.issuer}</p>
                  <p className="text-text-light">{cert.date}</p>
                </div>
              ))}
            </BaseCard>
          </motion.div>
        </div>

        {/* Philosophy */}
        <PhilosophyCard
          icon="Lightbulb"
          content="I believe in creating engaging, effective learning experiences that 
                  empower individuals and organizations to reach their full potential. 
                  My approach combines research-based methodologies with creative 
                  solutions to deliver meaningful results."
        />
      </SectionContainer>
    </div>
      </>
  );
};

export default AboutPage;