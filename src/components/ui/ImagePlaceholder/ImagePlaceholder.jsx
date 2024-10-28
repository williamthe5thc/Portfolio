// src/components/ui/ImagePlaceholder.jsx
import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

export const ImagePlaceholder = ({ className = '' }) => (
  <div 
    className={`bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${className}`}
  >
    <ImageIcon className="w-12 h-12 text-gray-400" />
  </div>
);

// Image Modal Component
export const ImageModal = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full">
        <button 
          className="absolute -top-12 right-0 text-white hover:text-gray-300"
          onClick={onClose}
        >
          <X className="w-8 h-8" />
        </button>
        <motion.div
          className="w-full h-auto rounded-lg overflow-hidden"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {image ? (
            <img 
              src={image} 
              alt="Project detail" 
              className="w-full h-auto"
            />
          ) : (
            <ImagePlaceholder className="w-full aspect-video" />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Enhanced Project Card
export const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
            {project.image ? (
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <ImagePlaceholder className="w-full h-full" />
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
              className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {project.status}
            </motion.div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <motion.span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
      <ImageModal
        isOpen={isModalOpen}
        image={project.image}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

// Rest of the components remain the same...
export const SectionHeader = ({ title, subtitle }) => {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </motion.div>
  );
};

export const SkillCard = ({ icon: Icon, title, skills, color }) => {
  return (
    <motion.div
      className="p-6 border border-gray-200 rounded-lg bg-gray-50"
      whileHover={{ y: -5, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <Icon className={`w-8 h-8 ${color} mb-4`} />
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {skills.map((skill) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            • {skill}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};