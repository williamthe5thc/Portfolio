// src/components/navigation/EnhancedNavigation.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '@/hooks';

interface Section {
  id: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  shortDescription?: string; // For mobile view
}

const sections: Section[] = [
  {
    id: 'hero',
    label: 'About Me',
    icon: '👋',
    description: 'Instructional Designer & Developer',
    shortDescription: 'Getting to know me'
  },
  {
    id: 'philosophy',
    label: 'Philosophy',
    icon: '🎯',
    description: 'My approach to learning design',
    shortDescription: 'My design approach'
  },
  {
    id: 'featured-projects',
    label: 'Projects',
    icon: '💼',
    description: 'Featured work and case studies',
    shortDescription: 'Exploring my work'
  },
  {
    id: 'competencies',
    label: 'Skills',
    icon: '⚡',
    description: 'Core competencies and tools',
    shortDescription: 'What I can do'
  },
  {
    id: 'education',
    label: 'Education',
    icon: '🎓',
    description: 'Academic background',
    shortDescription: 'My journey'
  }
];

export const SideNavigation = () => {
  const [activeSection, setActiveSection] = useState(sections[0]);
  const { y } = useScroll();

  useEffect(() => {
    const checkActiveSection = () => {
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    checkActiveSection();
  }, [y]);

  return (
    <motion.div
      className="fixed top-1 left-0 right-0 z-50 lg:hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection.id}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="bg-white/90 backdrop-blur-sm border-b border-gray-100 py-2"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-2 text-sm">
              <span className="text-lg">{activeSection.icon}</span>
              <span className="text-primary-600 font-medium">{activeSection.shortDescription}</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export const PreviewNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const { y } = useScroll();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Desktop Preview Navigation
  const DesktopNav = () => (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="space-y-4"
      >
        {sections.map((section) => (
          <div
            key={section.id}
            className="relative"
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            <button
              onClick={() => scrollToSection(section.id)}
              className={`flex items-center gap-3 p-2 rounded-lg transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-primary-50 text-primary-600'
                  : 'hover:bg-gray-100'
              }`}
            >
              <span className="text-xl">{section.icon}</span>
              <span className={`text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeSection === section.id
                  ? 'text-primary-600'
                  : 'text-gray-600'
              }`}>
                {section.label}
              </span>
            </button>

            {/* Preview Card */}
            <AnimatePresence>
              {hoveredSection === section.id && (
                <motion.div
                  initial={{ opacity: 0, x: -10, scale: 0.95 }}
                  animate={{ opacity: 1, x: -20, scale: 1 }}
                  exit={{ opacity: 0, x: -10, scale: 0.95 }}
                  className="absolute right-full top-0 mr-4 bg-white rounded-lg shadow-lg p-4 w-48"
                  style={{ transformOrigin: 'right center' }}
                >
                  <div className="font-medium text-primary-600 mb-1">
                    {section.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {section.description}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <>
      <DesktopNav />
      <SectionIndicator />
    </>
  );
};
// Also let's add a progress indicator at the top:
export const ScrollProgressBar = () => {
  const { progress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary-600 origin-left z-50"
      style={{ scaleX: progress / 100 }}
    />
  );
};