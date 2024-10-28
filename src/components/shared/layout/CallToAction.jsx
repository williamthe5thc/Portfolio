// src/components/shared/CallToAction.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from './animations';

export const CallToAction = ({ title, subtitle, buttons }) => (
  <motion.section 
    className="py-16 px-4 bg-background-light"
    {...fadeInUp}
  >
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-text-primary mb-4">{title}</h2>
      <p className="text-xl text-text-secondary mb-8">{subtitle}</p>
      <div className="flex justify-center gap-4">
        {buttons}
      </div>
    </div>
  </motion.section>
);
