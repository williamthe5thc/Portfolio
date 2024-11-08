// src/components/shared/cards.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';
import { fadeInUp, cardHover } from './animations';
import { BaseCard } from '../ui/';
import { useNavigate } from 'react-router-dom';

interface CoreCompetencyItem {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  projectUrl?: string;
  detailPage?: boolean;
  tags?: string[];
  status?: string;
}

interface CardProps {
  items: CoreCompetencyItem[] | ProjectItem[];
  className?: string;
}

export const CoreCompetencies: React.FC<CardProps> = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {items.map((item, index) => {
      const IconComponent = item.icon ? Icons[item.icon as keyof typeof Icons] : null;
      return (
        <motion.div
          key={index}
          variants={fadeInUp}
        >
          <BaseCard>
            {IconComponent && <IconComponent className={`w-8 h-8 ${item.color} mb-4`} />}
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              {item.title}
            </h3>
            <p className="text-text-secondary">
              {item.description}
            </p>
          </BaseCard>
        </motion.div>
      );
    })}
  </div>
);

// ... (Other card components with proper TypeScript interfaces)
