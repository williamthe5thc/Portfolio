// src/components/shared/ProjectGrid.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './cards';
import { fadeInUp, staggerChildren } from './animations';
import { Badge } from '../ui/components';

const ProjectGrid = ({ 
  projects, 
  filter = null,
  showFilters = true 
}) => {
  const [activeFilter, setActiveFilter] = useState(filter);
  
  // Get unique tags from all projects
  const tags = [...new Set(projects.flatMap(project => project.tags))];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter
    ? projects.filter(project => project.tags.includes(activeFilter))
    : projects;

  return (
    <div className="space-y-8">
      {/* Filter Tags */}
      {showFilters && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center">
          <motion.button
            onClick={() => setActiveFilter(null)}
            className={`px-4 py-2 rounded-full transition-colors ${
              !activeFilter 
                ? 'bg-primary-600 text-white' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            variants={fadeInUp}
          >
            All
          </motion.button>
          {tags.map(tag => (
            <motion.button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeFilter === tag 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              variants={fadeInUp}
            >
              {tag}
            </motion.button>
          ))}
        </div>
      )}
      
      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerChildren}
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

export default ProjectGrid;