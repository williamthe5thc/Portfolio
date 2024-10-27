import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { ProjectCard, SectionHeader, SkillCard } from '../components/EnhancedComponents';
import { Button, Card, Section } from '../components/ui';
import * as Icons from 'lucide-react'; // Import all icons
import { 
  siteMetadata, 
  projects, 
  competencies, 
  aboutMe 
} from '../data/siteData';

const HomePage = () => {
  // Function to get icon component from string name
  const getIcon = (iconName) => {
    return Icons[iconName];
  };

  return (
    <>
      <Helmet>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
        <meta name="author" content={siteMetadata.author} />
        <meta property="og:title" content={siteMetadata.title} />
        <meta property="og:description" content={siteMetadata.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={siteMetadata.siteUrl} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background-light to-background">
        {/* Hero Section */}
        <Section dark={false}>
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1 
              className="text-5xl font-bold text-text-primary mb-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {siteMetadata.author}
            </motion.h1>
            <motion.p 
              className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {aboutMe.intro}
            </motion.p>
            <motion.div 
              className="flex justify-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                as="a"
                href={siteMetadata.linkedin}
                variant="primary"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </Button>
              <Button
                as="a"
                href={`mailto:${siteMetadata.email}`}
                variant="secondary"
                className="flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </Button>
            </motion.div>
          </div>
        </Section>

        {/* Featured Projects */}
        <Section dark={true}>
          <div className="max-w-6xl mx-auto">
            <SectionHeader 
              title="Featured Projects"
              subtitle="Recent instructional design and development work"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <Card key={project.id} className="overflow-hidden">
                  <ProjectCard project={project} />
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Core Competencies */}
        <Section dark={false}>
          <div className="max-w-6xl mx-auto">
            <SectionHeader 
              title="Core Competencies"
              subtitle="Key skills and areas of expertise"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {competencies.map((competency) => {
                const IconComponent = getIcon(competency.icon);
                return (
                  <Card key={competency.id}>
                    <SkillCard 
                      icon={IconComponent}
                      title={competency.title}
                      skills={competency.skills}
                      color={competency.color}
                    />
                  </Card>
                );
              })}
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default HomePage;