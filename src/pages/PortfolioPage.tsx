import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectGrid } from '@/components/features/portfolio/ProjectGrid';
import {PageTransition } from '@/components/shared';
import { BaseCard } from '@/components/ui';
import {RouteTransition } from '@/components/layout/RouteTransition';
import { SectionContainer } from '@/components/layout';
import { fadeInUp } from '@/lib/animations';
import { siteConfig, projects, projectCategories } from '@/content';
import BasePage from './BasePage';

const PortfolioPage = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState(searchParams.get('type') || 'all');

  useEffect(() => {
    const type = searchParams.get('type');
    if (type && projectCategories.some(cat => cat.id === type)) {
      setActiveCategory(type);
    }
  }, [searchParams]);

  const filterProjects = (category: string) => {
    if (category === 'all') return projects;
    return projects.filter(project => project.category === category);
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
      {projectCategories.map(category => (
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
        description: `Explore ${siteConfig.author}'s instructional design projects and learning solutions`
      }}
      title="Portfolio"
      subtitle="Explore my instructional design work & learning technology solutions"
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
            {projectCategories.map(category => (
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