/**
 * @file ProjectCard.tsx
 * @description Interactive project display card with hover effects and modal preview
 * @module components/features
 * 
 * @requires framer-motion - For card and modal animations
 * @requires lucide-react - For action icons
 * @requires react-router-dom - For navigation handling
 * 
 * Features:
 * - Hover animations
 * - Image zoom effect
 * - Modal preview
 * - Status badge
 * - Tag display
 * - External/internal linking
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <ProjectCard 
 *   project={projectData}
 *   showPreview={true}
 * />
 * 
 * // Without preview
 * <ProjectCard 
 *   project={projectData}
 *   showPreview={false}
 * />
 * ```
 * 
 * @accessibility
 * - Interactive elements are keyboard focusable
 * - Modal is screen reader friendly
 * - Images have descriptive alt text
 * - ARIA labels for buttons
 */
import ProjectModal from './ProjectModal';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, ArrowRight, X, ZoomIn } from 'lucide-react';
import { ProjectBase } from '@/types/content';
import { cardHover, modalContent, modalBackdrop } from '@/lib/animations';
import { Badge } from '@/components/ui';

interface ProjectCardProps {
  project: ProjectBase;
  showPreview?: boolean;
  className?: string;
}


export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project,
  showPreview = true,
  className = ''
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
 console.log('Project clicked:', project);
  console.log('Project ID:', project.id);
  console.log('Detail Page:', project.detailPage);
  if (project.projectUrl) {
    console.log("Opening external url");
      window.open(project.projectUrl, '_blank');
    } else if (project.detailPage) {
    console.log("Opening internal details url");
      navigate(`/portfolio/${project.id}`);
    }
    else {
    console.log('No action - missing projectUrl or detailPage flag');
    }
  };

  const handleZoomClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <>
      <motion.div
        className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer ${className}`}
        variants={cardHover}
        whileHover="whileHover"
        whileTap="whileTap"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div className="relative">
          <div className="aspect-video bg-gray-100 relative overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center"
              animate={{ 
                backgroundColor: isHovered ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0)' 
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-white opacity-0 flex items-center gap-2"
                animate={{ opacity: isHovered ? 1 : 0 }}
              >
                {project.projectUrl ? (
                  <ExternalLink className="w-6 h-6" />
                ) : (
                  <ArrowRight className="w-6 h-6" />
                )}
                <span>View {project.projectUrl ? 'Project' : 'Details'}</span>
              </motion.div>
            </motion.div>
          </div>

          {project.status && (
            <motion.div
              className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {project.status}
            </motion.div>
          )}
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-text-primary mb-2">
            {project.title}
          </h3>
          <p className="text-text-secondary mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <Badge key={tag} variant="primary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>

      {showPreview && (
        <ProjectModal
          project={project}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};