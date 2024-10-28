import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SEO,
  PageHeader, 
  SectionContainer,
  ProjectGrid,
  ProjectCard
} from '../components/shared';
import { fadeInUp } from '../components/shared/animations';
import { 
  siteMetadata,
  projects,
  projectCategories 
} from '../data/siteData';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <SEO 
        title="Portfolio"
        description={`Explore ${siteMetadata.author}'s instructional design projects and achievements`}
        keywords={[
          'instructional design portfolio',
          'elearning projects',
          'learning design samples',
          'instructional design case studies'
        ]}
      />
      <div className="min-h-screen">
        <PageHeader
          title="Portfolio"
          subtitle="Explore my latest instructional design projects and achievements"
        />

        <SectionContainer className="py-20">
          {/* Category Filters */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            variants={fadeInUp}
          >
            <button
              onClick={() => setActiveCategory('all')}
              className={`
                px-6 py-2 rounded-full text-sm transition-colors
                ${activeCategory === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
              `}
            >
              All Projects
            </button>
            {projectCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-6 py-2 rounded-full text-sm transition-colors
                  ${activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                `}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <ProjectGrid 
            projects={filteredProjects} 
          />

          {/* No Results Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              variants={fadeInUp}
              className="text-center py-12 text-text-secondary"
            >
              No projects found in this category.
            </motion.div>
          )}
        </SectionContainer>

        {/* Project Categories Overview */}
        <SectionContainer className="py-20 bg-background">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-text-primary mb-12 text-center"
            >
              Project Categories
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projectCategories.map(category => (
                <motion.div
                  key={category.id}
                  variants={fadeInUp}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {category.label}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {category.description}
                  </p>
                  <div className="text-text-light">
                    {projects.filter(p => p.category === category.id).length} projects
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </SectionContainer>
      </div>
    </>
  );
};

export default PortfolioPage;