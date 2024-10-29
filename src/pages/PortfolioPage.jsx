// src/pages/PortfolioPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SEO,
  PageHeader, 
  SectionContainer,
  ProjectGrid
} from '../components/shared';
import { 
  ResponsiveContainer,
  ResponsiveGrid,
  ResponsiveText,
  BaseCard 
} from '../components/ui/components';
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
      />
      <div className="min-h-screen">
        <PageHeader
          title="Portfolio"
          subtitle="Explore my latest instructional design projects and achievements"
        />

        <SectionContainer className="py-20">
          <ResponsiveContainer>
            {/* Category Filters - Enhanced for touch */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12 px-4"
              variants={fadeInUp}
            >
              <button
                onClick={() => setActiveCategory('all')}
                className={`
                  px-6 py-3 rounded-full text-sm transition-all min-h-touch
                  hover:scale-105 active:scale-95 transform
                  ${activeCategory === 'all'
                    ? 'bg-primary-600 text-white shadow-lg'
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
                    px-6 py-3 rounded-full text-sm transition-all min-h-touch
                    hover:scale-105 active:scale-95 transform
                    ${activeCategory === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                  `}
                >
                  {category.label}
                </button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <div className="animate-fade-in">
              <ProjectGrid 
                projects={filteredProjects} 
              />
            </div>

            {/* No Results Message */}
            {filteredProjects.length === 0 && (
              <motion.div
                variants={fadeInUp}
                className="text-center py-12 text-text-secondary animate-fade-in"
              >
                No projects found in this category.
              </motion.div>
            )}
          </ResponsiveContainer>
        </SectionContainer>

        {/* Project Categories Overview */}
        <SectionContainer className="py-20 bg-background">
          <ResponsiveContainer>
            <div className="max-w-4xl mx-auto">
              <motion.h2
                variants={fadeInUp}
                className="text-2xl md:text-3xl font-bold text-text-primary mb-12 text-center animate-fade-in"
              >
                Project Categories
              </motion.h2>
              <ResponsiveGrid
                cols={{ default: 1, md: 2 }}
                gap="gap-8"
              >
                {projectCategories.map(category => (
                  <motion.div
                    key={category.id}
                    variants={fadeInUp}
                    className="animate-slide-up"
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <BaseCard className="h-full transition-all duration-300 hover:shadow-lg cursor-pointer">
                      <div className="min-h-touch">
                        <h3 className="text-xl font-semibold text-text-primary mb-2">
                          {category.label}
                        </h3>
                        <p className="text-text-secondary mb-4 prose">
                          {category.description}
                        </p>
                        <div className="text-text-light">
                          {projects.filter(p => p.category === category.id).length} projects
                        </div>
                      </div>
                    </BaseCard>
                  </motion.div>
                ))}
              </ResponsiveGrid>
            </div>
          </ResponsiveContainer>
        </SectionContainer>
      </div>
    </>
  );
};

export default PortfolioPage;