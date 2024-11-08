// src/pages/PortfolioPage.tsx
/**
 * @file PortfolioPage.tsx - Portfolio showcase page
 * @module pages
 * @description Main portfolio display page featuring projects
 * and filtering capabilities.
 * 
 * Features:
 * - Project grid
 * - Category filtering
 * - Animated transitions
 * - Project preview
 * 
 */
 
import React from 'react';
import { motion } from 'framer-motion';
import { ProjectGrid } from '@/components/features';
import { BaseCard } from '@/components/ui';
import { fadeInUp } from '@/lib/animations';
import { 
  siteConfig,
  projects,
  projectCategories 
} from '@/content';
import BasePage from './BasePage';

const PortfolioPage: React.FC = () => {
  return (
    <BasePage
      seo={{
        title: "Portfolio",
        description: `Explore ${siteConfig.author}'s instructional design projects and achievements`
      }}
      title="William's Portfolio"
      subtitle="Explore my latest instructional design projects and achievements"
      className="bg-background-light"
    >
      <div className="py-20">
        {/* Projects Grid with built-in filtering */}
        <ProjectGrid 
          projects={projects}
          className="mb-20"
        />

        {/* Category Overview */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-center mb-8">
            Project Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <BaseCard className="cursor-pointer h-full">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      {category.label}
                    </h3>
                    <p className="text-gray-600">
                      {category.description}
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      {projects.filter(p => p.category === category.id).length} projects
                    </p>
                  </div>
                </BaseCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </BasePage>
  );
};

export default PortfolioPage;