// src/components/shared/cards.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { fadeInUp, cardHover, modalContent, modalBackdrop } from './animations';
import { BaseCard } from '../ui/components';

// Journey Card Component
export const JourneyCard = ({ 
  icon: IconName, 
  title, 
  items, 
  color = "text-primary-600" 
}) => {
  const Icon = Icons[IconName];
  
  return (
    <BaseCard>
      <Icon className={`w-8 h-8 ${color} mb-4`} />
      <h3 className="text-xl font-semibold text-text-primary mb-4">{title}</h3>
      <div className="space-y-4">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="border-l-2 border-primary-200 pl-4"
          >
            <p className="font-medium text-text-primary">{item.title}</p>
            <p className="text-text-secondary">{item.subtitle}</p>
            {item.date && (
              <p className="text-text-light text-sm">{item.date}</p>
            )}
          </motion.div>
        ))}
      </div>
    </BaseCard>
  );
};

// Philosophy Card Component
export const PhilosophyCard = ({ icon: IconName, content }) => {
  const Icon = Icons[IconName];
  
  return (
    <BaseCard className="text-center max-w-3xl mx-auto">
      <Icon className="w-12 h-12 text-primary-600 mx-auto mb-6" />
      <p className="text-lg leading-relaxed text-text-secondary">
        {content}
      </p>
    </BaseCard>
  );
};

// Project Card Component
export const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <motion.div
        className="bg-white rounded-xl shadow-lg overflow-hidden"
        variants={cardHover}
        whileHover="whileHover"
        whileTap="whileTap"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative">
          <div className="aspect-video bg-gray-100 relative overflow-hidden">
            {project.image ? (
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <Icons.Image className="w-12 h-12 text-gray-400" />
              </div>
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
                <Icons.ZoomIn className="w-6 h-6 text-gray-800" />
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

      {/* Project Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          variants={modalBackdrop}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
            variants={modalContent}
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setIsModalOpen(false)}
            >
              <Icons.X className="w-6 h-6" />
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
              {project.details && (
                <div className="prose prose-sm max-w-none">
                  {project.details}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

// Stats Grid Component
export const StatsGrid = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {stats.map((stat) => (
      <motion.div
        key={stat.label}
        variants={fadeInUp}
      >
        <BaseCard className="text-center">
          <h4 className="text-4xl font-bold text-primary-600 mb-2">
            {stat.value}
          </h4>
          <p className="text-text-secondary">{stat.label}</p>
        </BaseCard>
      </motion.div>
    ))}
  </div>
);