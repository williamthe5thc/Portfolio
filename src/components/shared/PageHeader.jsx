// src/components/shared/PageHeader.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

export const PageHeader = ({ title, subtitle }) => (
  <motion.section 
    className="py-20 px-4 bg-background-light"
    {...fadeInUp}
  >
    <div className="max-w-6xl mx-auto text-center">
      <motion.h1 
        className="text-5xl font-bold text-text-primary mb-6"
        {...fadeInUp}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p 
          className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto"
          {...fadeInUp}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </motion.section>
);