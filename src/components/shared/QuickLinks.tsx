// src/components/QuickLinks.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { quickLinks } from '@/content/navigation';  // Importing the data from navigation.ts

export const QuickLinks: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {quickLinks.map((link) => (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          className={`${link.bgColor} rounded-xl shadow-lg transition-all duration-300`}
        >
          <Link
            to={link.href}
            className="block w-full h-full p-6 text-white text-xl font-semibold text-center"
          >
            {link.title}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default QuickLinks;
