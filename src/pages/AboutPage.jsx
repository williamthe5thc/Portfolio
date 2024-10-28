import React from 'react';
import { motion } from 'framer-motion';
import { 
  SEO,
  PageHeader, 
  SectionContainer,
  Timeline, 
  PhilosophyCard,
  StatsGrid
} from '../components/shared';
import { BaseCard } from '../components/ui/components';
import { fadeInUp, staggerChildren } from '../components/shared/animations';
import { 
  siteMetadata,
  education, 
  experience,
  stats
} from '../data/siteData';

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About"
        description={`Learn about ${siteMetadata.author}'s journey, expertise, and approach to instructional design`}
        keywords={[
          'instructional designer background',
          'learning experience developer',
          'education technology expert',
          `${siteMetadata.author} bio`
        ]}
      />
      <div className="min-h-screen">
        <PageHeader
          title="About Me"
          subtitle="Learn about my journey, philosophy, and approach to instructional design"
        />

        {/* Quick Stats */}
        <SectionContainer className="py-12">
          <StatsGrid stats={stats} />
        </SectionContainer>

        {/* Bio Section */}
        <SectionContainer className="py-20 bg-background">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                My Approach
              </h2>
              <div className="prose prose-lg text-text-secondary">
                <p>
                  With a background in psychology and a passion for education,
                  I bring a unique perspective to instructional design. My 
                  approach combines research-based methodologies with creative
                  solutions to deliver meaningful learning experiences.
                </p>
                <p>
                  I believe in creating learner-centered experiences that not
                  only convey information effectively but also engage and
                  inspire. My goal is to help organizations and individuals
                  reach their full potential through strategic learning
                  solutions.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Areas of Expertise
              </h2>
              <ul className="space-y-4 text-text-secondary">
                {coreCompetencies.map(competency => (
                  <li key={competency.title} className="flex items-center gap-2">
                    • {competency.title}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </SectionContainer>

        {/* Education & Experience */}
        <SectionContainer className="py-20">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerChildren}
          >
            <motion.h2 
              className="text-3xl font-bold text-text-primary mb-12 text-center"
              variants={fadeInUp}
            >
              Education & Experience
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div variants={fadeInUp}>
                <BaseCard>
                  <h3 className="text-2xl font-bold text-text-primary mb-6">
                    Education
                  </h3>
                  {education.degrees.map((degree, index) => (
                    <div key={index} className="mb-6 last:mb-0">
                      <h4 className="font-semibold text-text-primary">
                        {degree.degree} in {degree.field}
                      </h4>
                      <p className="text-text-secondary">{degree.institution}</p>
                      <p className="text-text-light">{degree.period}</p>
                      {degree.gpa && (
                        <p className="text-text-light">GPA: {degree.gpa}</p>
                      )}
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
          </motion.div>
        </SectionContainer>

        {/* Experience Timeline */}
        <SectionContainer className="py-20 bg-background">
          <motion.h2 
            className="text-3xl font-bold text-text-primary mb-12 text-center"
            variants={fadeInUp}
          >
            Professional Journey
          </motion.h2>
          <Timeline items={experience.map(exp => ({
            title: exp.title,
            subtitle: exp.company,
            date: exp.period,
            description: exp.highlights?.join('. ')
          }))} />
        </SectionContainer>
      </div>
    </>
  );
};

export default AboutPage;