// src/pages/PortfolioPage.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectGrid } from '@/components/features';
import { BaseCard, SectionContainer } from '@/components/ui';
import { fadeInUp } from '@/lib/animations';
import { 
  siteConfig,
  projects,
  projectCategories 
} from '@/content';
import type { ProjectCategory } from '@/types/content';
import BasePage from './BasePage';

const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

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

  // Category Overview Section
  const CategoryOverview = () => (
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
                {projects.filter(p => p.category === category.id).length} projects
              </div>
            </BaseCard>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );

  return (
    <BasePage
      seo={{
        title: "Portfolio",
        description: `Explore ${siteConfig.author}'s instructional design projects and achievements`
      }}
      title="Portfolio"
      subtitle="Explore my latest instructional design projects and achievements"
      className="bg-background-light"
    >
      <div className="py-20">
        <CategoryFilters />
        <ProjectGrid 
          projects={filteredProjects}
          className="mb-20"
        />
        <CategoryOverview />
      </div>
    </BasePage>
  );
};

export default PortfolioPage;