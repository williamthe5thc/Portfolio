import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import { ProjectBase, ProjectCategory } from '@/types/content';

interface ProjectGridProps {
  projects: ProjectBase[];
  filter?: ProjectCategory | null;
  showFilters?: boolean;
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
  <motion.button
    onClick={onClick}
    className={`
      px-4 py-2 rounded-full transition-colors
      ${active 
        ? 'bg-primary-600 text-white' 
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }
    `}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
);

export const ProjectGrid: React.FC<ProjectGridProps> = ({ 
  projects, 
  filter = null,
  showFilters = true,
  className = ''
}) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | null>(filter);
  
  // Get unique categories from projects
  const categories = Array.from(new Set(projects.map(project => project.category)));
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter
    ? projects.filter(project => project.category === activeFilter)
    : projects;

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Filter Categories */}
      {showFilters && categories.length > 0 && (
        <motion.div
          className="flex flex-wrap justify-center gap-2"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <FilterButton
            active={!activeFilter}
            onClick={() => setActiveFilter(null)}
          >
            All Projects
          </FilterButton>
          {categories.map(category => (
            <FilterButton
              key={category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </motion.div>
      )}
      
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
            No projects found matching the selected filter.
          </p>
        </motion.div>
      )}
    </div>
  );
};