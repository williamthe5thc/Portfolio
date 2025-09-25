import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectGrid } from '@/components/features/portfolio/ProjectGrid';
import {PageTransition } from '@/components/shared';
import { BaseCard } from '@/components/ui';
import {RouteTransition } from '@/components/layout/RouteTransition';
import { SectionContainer } from '@/components/layout';
import { fadeInUp } from '@/lib/animations';
import { siteConfig, projects, featuredProjects } from '@/content';
import BasePage from './BasePage';

const PortfolioPage = () => {
  const [searchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('featured'); // Start with featured projects for hiring managers

  useEffect(() => {
    // Only support 'all' and 'featured' categories now
    const type = searchParams.get('type');
    if (type === 'all') {
      setActiveCategory('all');
    } else {
      setActiveCategory('featured');
    }
  }, [searchParams]);

  const filterProjects = (category: string) => {
    if (category === 'all') return projects;
    if (category === 'featured') return featuredProjects;
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
        onClick={() => setActiveCategory('featured')}
        className={`
          px-6 py-3 rounded-full text-sm font-medium transition-all
          ${activeCategory === 'featured'
            ? 'bg-primary-600 text-white shadow-md'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
        `}
      >
        Featured Projects
      </button>
      <button
        onClick={() => setActiveCategory('all')}
        className={`
          px-6 py-3 rounded-full text-sm font-medium transition-all
          ${activeCategory === 'all'
            ? 'bg-primary-600 text-white shadow-md'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
        `}
      >
        All Projects
      </button>
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
      subtitle="Evidence-based instructional design: ADDIE methodology, learning theory application, and measurable business outcomes"
      className="bg-background-light"
    >
      <div className="py-20">
        <CategoryFilters />
        <ProjectGrid 
          projects={filteredProjects}
          className="mb-20"
        />
      </div>
    </BasePage>
      </PageTransition>
    </RouteTransition>
  );
};

export default PortfolioPage;