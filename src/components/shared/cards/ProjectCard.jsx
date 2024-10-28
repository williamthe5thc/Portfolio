// src/components/shared/cards/ProjectCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, X } from 'lucide-react';
import { BaseCard } from '../../ui/BaseCard';
import { ImagePlaceholder } from '../../ui/ImagePlaceholder';

export const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => setImageError(true);

  return (
    <>
      <BaseCard 
        hover={false} 
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative">
          <div className="aspect-video bg-gray-100 relative overflow-hidden">
            {project.image && !imageError ? (
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
                onError={handleImageError}
              />
            ) : (
              <ImagePlaceholder />
            )}
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center"
              animate={{ backgroundColor: isHovered ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0)' }}
              transition={{ duration: 0.3 }}
            >
              <motion.button
                className="bg-white p-2 rounded-full opacity-0"
                animate={{ opacity: isHovered ? 1 : 0 }}
                onClick={() => setIsModalOpen(true)}
              >
                <ZoomIn className="w-6 h-6 text-gray-800" />
              </motion.button>
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

        <div className="mt-6">
          <h3 className={`${typography.heading.h3} mb-2`}>{project.title}</h3>
          <p className={`${typography.body.secondary} mb-4`}>{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <motion.span
                key={tag}
                className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm"
                {...animations.hover.scale}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </BaseCard>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          {/* ... modal content remains the same ... */}
        </motion.div>
      )}
    </>
  );
};