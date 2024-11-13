// src/components/QuickLinks.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { ScrollToSection } from '@/components/shared';
import { quickLinks } from '@/content/quickLinks';

export const QuickLinks: React.FC = () => {
  console.log('QuickLinks rendering with links:', quickLinks);

  return (
    <div className="grid grid-cols-2 gap-4">
      {quickLinks.map((link) => (
        <ScrollToSection
          key={link.href}
          to={link.href}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className={`${link.bgColor} rounded-xl shadow-lg transition-all duration-300 block w-full h-full p-6 text-white text-xl font-semibold text-center`}
          >
            <div className="pointer-events-none">
              {link.title}
            </div>
          </motion.div>
        </ScrollToSection>
      ))}
    </div>
  );
};

export default QuickLinks;