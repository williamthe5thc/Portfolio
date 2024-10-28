// src/pages/PortfolioPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/shared/SEO';
import { 
  PageHeader,
  SectionContainer,
  ProjectGrid
} from '../components/shared';
import { projects } from '../data/siteData';
import { fadeInUp } from '../components/shared/animations';

const PortfolioPage = () => {
  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'elearning', label: 'E-Learning' },
    { id: 'id', label: 'Instructional Design' },
    { id: 'development', label: 'Development' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

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
        title="Portfolio"
        subtitle="Explore my latest instructional design projects and achievements"
      />

      <SectionContainer className="py-20">
        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={fadeInUp}
        >
          {categories.map(category => (
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
        <ProjectGrid projects={filteredProjects} />
      </SectionContainer>
    </div>
      </>
  );
};

export default PortfolioPage;