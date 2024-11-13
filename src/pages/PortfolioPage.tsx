import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectGrid } from '@/components/features';
import {PageTransition } from '@/components/shared';
import { BaseCard } from '@/components/ui';
import {RouteTransition } from '@/components/layout/RouteTransition';
import { SectionContainer } from '@/components/layout';
import { fadeInUp } from '@/lib/animations';
import { siteConfig, projects } from '@/content';
import BasePage from './BasePage';

const ProjectCategories = {
  coding: {
    id: 'coding',
    label: 'Coding Projects',
    description: 'Software development and programming projects',
    tags: ['Python', 'React', 'JavaScript', 'C++', 'Development', 'Web Development']
  },
  instructional: {
    id: 'instructional',
    label: 'Instructional Design',
    description: 'E-learning and educational content development',
    tags: ['E-Learning', 'Instructional Design', 'Educational Software', 'Canvas LMS']
  },
  media: {
    id: 'media',
    label: 'Art & Video',
    description: 'Digital art and video production projects',
    tags: ['Adobe Photoshop', 'Adobe Premiere Pro', 'Digital Art', 'Video Editing']
  }
};

const PortfolioPage = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('type') || 'all');

  useEffect(() => {
    const type = searchParams.get('type');
    if (type && Object.keys(ProjectCategories).includes(type)) {
      setActiveCategory(type);
    }
  }, [searchParams]);

  const filterProjects = (category: string) => {
    if (category === 'all') return projects;
    
    const categoryInfo = ProjectCategories[category as keyof typeof ProjectCategories];
    return projects.filter(project => 
      project.tags.some(tag => categoryInfo.tags.includes(tag))
    );
  };

  const filteredProjects = filterProjects(activeCategory);

  // Category Filter Section
  const CategoryFilters = () => (
    <motion.div
      className="flex flex-wrap justify-center gap-4 mb-12"
      variants={fadeInUp}
    >
      <button
        onClick={() => setActiveCategory('all')}
        className={`
          px-6 py-3 rounded-full text-sm transition-all
          ${activeCategory === 'all'
            ? 'bg-primary-600 text-white'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
        `}
      >
        All Projects
      </button>
      {Object.values(ProjectCategories).map(category => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`
            px-6 py-3 rounded-full text-sm transition-all
            ${activeCategory === category.id
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
          `}
        >
          {category.label}
        </button>
      ))}
    </motion.div>
  );

  return (
  <RouteTransition>
      <PageTransition>
    <BasePage
      seo={{
        title: "Portfolio",
        description: `Explore ${siteConfig.author}'s projects and achievements`
      }}
      title="Portfolio"
      subtitle="Explore all my work & latest projects and achievements"
      className="bg-background-light"
    >
      <div className="py-20">
        <CategoryFilters />
        <ProjectGrid 
          projects={filteredProjects}
          className="mb-20"
        />
        
        {/* Category Overview */}
        <SectionContainer className="py-20 bg-background">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(ProjectCategories).map(category => (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                onClick={() => setActiveCategory(category.id)}
              >
                <BaseCard className="cursor-pointer hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-2">
                    {category.label}
                  </h3>
                  <p className="text-text-secondary">
                    {category.description}
                  </p>
                  <div className="mt-4 text-sm text-text-light">
                    {filterProjects(category.id).length} projects
                  </div>
                </BaseCard>
              </motion.div>
            ))}
          </div>
        </SectionContainer>
      </div>
    </BasePage>
      </PageTransition>
    </RouteTransition>
  );
};

export default PortfolioPage;