// src/components/ui/Card.tsx
/**
 * @file Card.tsx
 * @description A collection of card components for displaying content in consistent, 
 * visually appealing containers. Includes base card and specialized variants for
 * different content types.
 * 
 * Components:
 * - BaseCard: Foundation card component with animation support
 * - CoreCompetency: Displays professional skills and competencies
 * - JourneyCard: Shows timeline or progression information
 * - PhilosophyCard: Presents philosophical or mission statements
 * - StatsGrid: Displays statistical information in a grid layout
 */

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

// Base Card Types
export interface BaseCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  hover?: boolean;
}

// Specialized Card Types
export interface CoreCompetencyProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

export interface JourneyItemProps {
  title: string;
  subtitle: string;
  date?: string;
}

export interface JourneyCardProps {
  icon: LucideIcon;
  title: string;
  items: JourneyItemProps[];
  color?: string;
}

export interface PhilosophyCardProps {
  icon: LucideIcon;
  content: string;
}

export interface StatsItemProps {
  label: string;
  value: string | number;
}

export interface StatsGridProps {
  stats: StatsItemProps[];
}

// Base Card Component
export const BaseCard: React.FC<BaseCardProps> = ({
  children,
  className = '',
  animate = true,
  hover = true,
  onClick,
  ...props
}) => {
  const baseClass = 'bg-white rounded-xl shadow-lg overflow-hidden p-6';
  const hoverAnimation = hover ? {
    whileHover: { y: -5, transition: { duration: 0.2 } },
    whileTap: { y: 0 }
  } : {};

  if (!animate) {
    return (
      <div 
        className={`${baseClass} ${className}`} 
        onClick={onClick}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`${baseClass} ${className}`}
      onClick={onClick}
      {...hoverAnimation}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Specialized Card Components
export const CoreCompetency: React.FC<CoreCompetencyProps> = ({ 
  icon: Icon,
  title, 
  description, 
  color = 'text-primary-600' 
}) => (
  <motion.div variants={fadeInUp}>
    <BaseCard>
      <div className="flex items-start gap-3 p-6">
        <Icon className={`w-6 h-6 ${color}`} />
        <div>
          <h3 className="font-semibold text-text-primary mb-1">{title}</h3>
          <p className="text-text-secondary">{description}</p>
        </div>
      </div>
    </BaseCard>
  </motion.div>
);

export const JourneyCard: React.FC<JourneyCardProps> = ({ 
  icon: Icon, 
  title, 
  items, 
  color = "text-primary-600" 
}) => (
  <BaseCard>
    <Icon className={`w-8 h-8 ${color} mb-4`} />
    <h3 className="text-xl font-semibold text-text-primary mb-4">{title}</h3>
    <div className="space-y-4">
      {items.map((item, i) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="border-l-2 border-primary-200 pl-4"
        >
          <p className="font-medium text-text-primary">{item.title}</p>
          <p className="text-text-secondary">{item.subtitle}</p>
          {item.date && (
            <p className="text-text-light text-sm">{item.date}</p>
          )}
        </motion.div>
      ))}
    </div>
  </BaseCard>
);

export const PhilosophyCard: React.FC<PhilosophyCardProps> = ({ 
  icon: Icon, 
  content 
}) => (
  <BaseCard className="text-center max-w-3xl mx-auto">
    <Icon className="w-12 h-12 text-primary-600 mx-auto mb-6" />
    <p className="text-lg leading-relaxed text-text-secondary">
      {content}
    </p>
  </BaseCard>
);

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {stats.map((stat) => (
      <motion.div
        key={stat.label}
        variants={fadeInUp}
      >
        <BaseCard className="text-center">
          <h4 className="text-4xl font-bold text-primary-600 mb-2">
            {stat.value}
          </h4>
          <p className="text-text-secondary">{stat.label}</p>
        </BaseCard>
      </motion.div>
    ))}
  </div>
);