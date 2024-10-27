import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Card } from '../ui';

// Animation variants that can be reused across components
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
};

export const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// SEO Component
export const SEO = ({ title, description, type = 'website', image }) => (
  <div>
    <title>{title} | Portfolio</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content={type} />
    {image && <meta property="og:image" content={image} />}
  </div>
);

// Page Header Component
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

// Core Competencies Section
export const CoreCompetencies = ({ competencies }) => {
  const getIcon = (iconName) => {
    return Icons[iconName] || Icons.BookOpen;
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold text-text-primary text-center mb-8"
        variants={fadeInUp}
      >
        Core Competencies
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {competencies.map((competency) => (
          <motion.div
            key={competency.id}
            variants={fadeInUp}
            className="h-full"
          >
            <Card className="p-6 h-full">
              <div className={`w-12 h-12 rounded-lg ${competency.color} bg-opacity-10 flex items-center justify-center mb-4`}>
                {React.createElement(getIcon(competency.icon), {
                  className: `w-6 h-6 ${competency.color}`
                })}
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                {competency.title}
              </h3>
              <ul className="space-y-2 text-text-secondary">
                {competency.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Grid Container Component
export const GridContainer = ({ children, cols = "md:grid-cols-2 lg:grid-cols-3" }) => (
  <div className={`grid grid-cols-1 ${cols} gap-8`}>
    {children}
  </div>
);

// Section Container Component
export const SectionContainer = ({ children, className = '' }) => (
  <div className={`max-w-6xl mx-auto px-4 ${className}`}>
    {children}
  </div>
);

// Call to Action Component
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

// Page Layout Component
export const PageLayout = ({ children, className = '' }) => (
  <div className={`min-h-screen bg-gradient-to-b from-background-light to-background ${className}`}>
    {children}
  </div>
);