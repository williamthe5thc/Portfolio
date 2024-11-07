// src/components/features/ProjectGrid.tsx
/**
 * @file ProjectGrid.tsx - Project grid display component
 * @module components/features
 * @description Grid layout for displaying multiple project cards with
 * filtering and animation capabilities.
 * 
 * Features:
 * - Responsive grid layout
 * - Category filtering
 * - Animated transitions
 * - Empty state handling
 */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { ProjectBase } from '@/types/content';
import { projectCategories } from '@/content';

interface ProjectGridProps {
  projects: ProjectBase[];
  className?: string;
}

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  active,
  onClick,
  children
}) => (
  <button
    onClick={onClick}
    className={`
      px-4 py-2 rounded-full text-sm font-medium transition-all
      ${active 
        ? 'bg-primary-600 text-white' 
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }
    `}
  >
    {children}
  </button>
);

export const ProjectGrid: React.FC<ProjectGridProps> = ({ 
  projects, 
  className = ''
}) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Filter projects based on active filter
  const filteredProjects = activeCategory
    ? projects.filter(project => project.category === activeCategory)
    : projects;

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Filter Categories */}
      <motion.div
        className="flex flex-wrap justify-center gap-2"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <FilterButton
          active={!activeCategory}
          onClick={() => setActiveCategory(null)}
        >
          All Projects
        </FilterButton>
        {projectCategories.map(category => (
          <FilterButton
            key={category.id}
            active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </FilterButton>
        ))}
      </motion.div>
      
      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              layout
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div 
          className="text-center py-12"
          variants={fadeInUp}
        >
          <p className="text-text-secondary">
            No projects found matching the selected category.
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectGrid;