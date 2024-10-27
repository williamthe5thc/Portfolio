import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Mail, Linkedin } from 'lucide-react';
import { ProjectCard } from '../components/EnhancedComponents';
import { Button, Card, Section } from '../components/ui';
import {
  SEO,
  PageHeader,
  PageLayout,
  GridContainer,
  SectionContainer,
  CallToAction,
  fadeInUp,
  staggerChildren
} from '../components/shared';
import { projects, siteMetadata } from '../data/siteData';

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <PageLayout>
      <SEO 
        title="Portfolio"
        description="Showcase of instructional design projects and e-learning solutions by W. Jordan Charles"
        type="website"
      />

      {/* Header */}
      <PageHeader
        title="Portfolio"
        subtitle="A showcase of my instructional design projects, demonstrating expertise 
                in e-learning development, multimedia production, and educational technology."
      />

      {/* Category Filter */}
      <Section dark={false}>
        <SectionContainer>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2
                  ${selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-background-light text-text-secondary hover:bg-background'
                  }`}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Filter className="w-4 h-4" />
                {category}
              </motion.button>
            ))}
          </motion.div>
        </SectionContainer>
      </Section>

      {/* Projects Grid */}
      <Section dark={true}>
        <SectionContainer>
          <GridContainer>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Card className="h-full">
                  <ProjectCard project={project} />
                </Card>
              </motion.div>
            ))}
          </GridContainer>
        </SectionContainer>
      </Section>

      {/* Call to Action */}
      <CallToAction
        title="Interested in Collaboration?"
        subtitle="I'm always open to discussing new projects and opportunities in instructional design."
        buttons={
          <>
            <Button
              as="a"
              href={`mailto:${siteMetadata.email}`}
              variant="primary"
              className="flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </Button>
            <Button
              as="a"
              href={siteMetadata.linkedin}
              variant="secondary"
              className="flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </Button>
          </>
        }
      />
    </PageLayout>
  );
};

export default PortfolioPage;