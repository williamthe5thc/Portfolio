// src/components/shared/forms/ContactMethod.jsx
import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { animations } from '../animations';

export const ContactMethod = ({ 
  icon: IconName, 
  title, 
  content, 
  link, 
  color = "text-primary-600" 
}) => {
  const Icon = Icons[IconName];
  
  const Inner = () => (
    <>
      <Icon className={`w-6 h-6 ${color} mt-1`} />
      <div>
        <h3 className={typography.heading.h4}>{title}</h3>
        <p className={link ? `${color} hover:opacity-80` : typography.body.secondary}>
          {content}
        </p>
      </div>
    </>
  );

  return (
    <motion.div 
      variants={animations.fadeInUp}
      className="flex items-start gap-4"
    >
      {link ? (
        <motion.a 
          href={link}
          className="flex items-start gap-4"
          {...animations.hover.scale}
        >
          <Inner />
        </motion.a>
      ) : (
        <Inner />
      )}
    </motion.div>
  );
};