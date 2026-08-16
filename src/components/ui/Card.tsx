// src/components/ui/Card.tsx
/**
 * @file Card.tsx
 * @description A collection of card components for displaying content in consistent containers
 * @module components/ui
 * 
 * @requires framer-motion - For animations
 * @requires lucide-react - For icons
 * 
 * Components:
 * - BaseCard: Foundation card component
 * - CoreCompetency: For displaying skills/competencies
 * - JourneyCard: For timeline/progression information
 * - PhilosophyCard: For mission statements
 * - StatsGrid: For statistical information
 * 
 * @example
 * ```tsx
 * // Basic card
 * <BaseCard>
 *   <h2>Title</h2>
 *   <p>Content</p>
 * </BaseCard>
 * 
 * // Stats grid
 * <StatsGrid 
 *   stats={[
 *     { label: "Users", value: "1.2k" },
 *     { label: "Revenue", value: "$50k" }
 *   ]} 
 * />
 * ```
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
  /** Headline capability, e.g. "Choose and run an LMS". */
  value: string | number;
  /** Short supporting bullets - the specific work behind the claim. */
  points?: string[];
  /** Legacy single-line form, still supported. */
  label?: string;
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

/**
 * Now renders capability claims rather than a numeric scoreboard: `value` is a
 * short headline, `label` is a sentence of supporting evidence. The old
 * centred text-4xl treatment assumed `value` was a figure like "278" and
 * wrapped a phrase into an unreadable stack.
 */
export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => (
  <div className="grid md:grid-cols-2 gap-6">
    {stats.map((stat) => (
      <motion.div key={String(stat.value)} variants={fadeInUp}>
        <BaseCard className="h-full border-l-4 border-primary-500">
          <h4 className="text-lg font-bold text-primary-700 mb-3">
            {stat.value}
          </h4>
          {stat.points ? (
            <ul className="space-y-2">
              {stat.points.map((point) => (
                <li key={point} className="text-text-secondary leading-relaxed flex gap-2">
                  <span className="text-primary-500 flex-shrink-0">&bull;</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-text-secondary leading-relaxed">{stat.label}</p>
          )}
        </BaseCard>
      </motion.div>
    ))}
  </div>
);