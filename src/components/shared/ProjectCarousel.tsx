// src/components/shared/ProjectCarousel.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui';
import type { ProjectBase } from '@/types/content';

interface ProjectCarouselProps {
  projects: ProjectBase[];
  autoPlayInterval?: number;
  className?: string;
}

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  projects,
  autoPlayInterval = 5000,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const displayedProjects = projects.slice(0, 5);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % displayedProjects.length);
  };

  const previousSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + displayedProjects.length) % displayedProjects.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlayInterval]);

  const currentProject = displayedProjects[currentIndex];

  return (
    <div className={`relative w-full h-[500px] bg-white rounded-xl shadow-lg overflow-hidden ${className}`}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {currentProject.detailPage ? (
            <Link to={`/portfolio/${currentProject.id}`} className="block h-full">
              <img
                src={currentProject.image || "/api/placeholder/800/400"}
                alt={currentProject.title}
                className="w-full h-3/5 object-cover cursor-pointer hover:opacity-90 transition-opacity"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 hover:text-primary-600 transition-colors">{currentProject.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{currentProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentProject.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-auto">View Details</Button>
              </div>
            </Link>
          ) : (
            <>
              <img
                src={currentProject.image || "/api/placeholder/800/400"}
                alt={currentProject.title}
                className="w-full h-3/5 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{currentProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {currentProject.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
        aria-label="Previous project"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg"
        aria-label="Next project"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {displayedProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;