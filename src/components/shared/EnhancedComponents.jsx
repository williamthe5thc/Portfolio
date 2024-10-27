//src/components/contact/Enhanced Components.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ZoomIn, X, Image as ImageIcon } from 'lucide-react';

// Image Placeholder Component
const ImagePlaceholder = ({ className = '' }) => (
  <div 
    className={`bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center aspect-video ${className}`}
  >
    <ImageIcon className="w-12 h-12 text-gray-400" />
  </div>
);

// Enhanced Project Card
export const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
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
        <div className="p-6">
          <h3 className="text-xl font-semibold text-text-primary mb-2">{project.title}</h3>
          <p className="text-text-secondary mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <motion.span
                key={tag}
                className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl w-full">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
              onClick={() => setIsModalOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              className="w-full h-auto rounded-lg overflow-hidden bg-white"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {project.image && !imageError ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto"
                  onError={handleImageError}
                />
              ) : (
                <ImagePlaceholder className="w-full aspect-video" />
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
};

// Keep other components (SectionHeader, SkillCard) the same...
export const SectionHeader = ({ title, subtitle }) => {
  // ... existing code
};

export const SkillCard = ({ icon: Icon, title, skills, color }) => {
  // ... existing code
};