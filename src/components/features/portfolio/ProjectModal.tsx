// src/components/features/portfolio/ProjectModal.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ProjectBase } from '@/types/content';

interface ProjectModalProps {
  project: ProjectBase;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={onClose}
            >
              <X className="w-6 h-6" />
            </button>
            {project.image && (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto"
              />
            )}
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-text-secondary mb-4">{project.description}</p>
              {project.longDescription && (
                <div className="prose prose-sm max-w-none">
                  {project.longDescription}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;