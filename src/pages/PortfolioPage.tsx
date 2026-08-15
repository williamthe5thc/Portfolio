import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectGrid } from '@/components/features/portfolio/ProjectGrid';
import {PageTransition } from '@/components/shared';
import {RouteTransition } from '@/components/layout/RouteTransition';
import { SectionContainer } from '@/components/layout';
import { fadeInUp } from '@/lib/animations';
import { siteConfig, projects, featuredProjects, projectCategories } from '@/content';
import BasePage from './BasePage';

const VALID_CATEGORIES = ['featured', 'all', 'id', 'learning-tech', 'technical'];

const PortfolioPage = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('featured');

  // Read the primitives, not the objects: useSearchParams/useLocation hand back
  // fresh instances each render, so depending on them made this effect re-fire
  // constantly and reset activeCategory - which silently ate every filter click.
  const categoryParam = searchParams.get('category');
  const preservedFilter = (location.state as any)?.preserveFilter as string | undefined;

  useEffect(() => {
    if (preservedFilter) {
      setActiveCategory(preservedFilter);
      // Clean up state
      window.history.replaceState({}, document.title);
      return;
    }

    // Only honour an explicit URL category. Falling back to 'featured' here
    // would overwrite whatever the user just clicked.
    if (categoryParam && VALID_CATEGORIES.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam, preservedFilter]);

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
      
      {/* Strategic Category Filters */}
      {projectCategories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => setActiveCategory(cat.id)}
          className={`
            px-6 py-3 rounded-full text-sm font-medium transition-all
            ${activeCategory === cat.id
              ? 'bg-primary-600 text-white shadow-md'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
          `}
        >
          {cat.label}
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
      subtitle="Evidence-based instructional design: ADDIE methodology, learning theory application, and measurable business outcomes"
      className="bg-background-light"
    >
      <div className="py-20">
        <CategoryFilters />
        {/* showFilters=false: this page already renders CategoryFilters above,
            and the grid's own filter row was a second, conflicting control. */}
        <ProjectGrid
          projects={filteredProjects}
          showFilters={false}
          className="mb-20"
        />
      </div>
    </BasePage>
      </PageTransition>
    </RouteTransition>
  );
};

export default PortfolioPage;
