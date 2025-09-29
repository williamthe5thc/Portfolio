// src/components/QuickLinks.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { quickLinks } from '@/content/navigation';  // Importing the data from navigation.ts

export const QuickLinks: React.FC = () => {
  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const elementId = href.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      {quickLinks.map((link) => {
        // Only use hash handler for same-page anchors (starting with #)
        // Cross-page hashes like /about#section should use Link
        const isSamePageHashLink = link.href.startsWith('#');
        
        return (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className={`${link.bgColor} rounded-xl shadow-lg transition-all duration-300`}
          >
            {isSamePageHashLink ? (
              <a
                href={link.href}
                onClick={(e) => handleHashClick(e, link.href)}
                className="block w-full h-full p-6 text-white text-xl font-semibold text-center"
              >
                {link.title}
              </a>
            ) : (
              <Link
                to={link.href}
                className="block w-full h-full p-6 text-white text-xl font-semibold text-center"
              >
                {link.title}
              </Link>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default QuickLinks;
