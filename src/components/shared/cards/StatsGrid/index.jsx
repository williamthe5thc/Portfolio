// src/components/shared/cards/StatsGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { BaseCard } from '../../ui/BaseCard';
import { fadeInUp } from '../animations';

export const StatsGrid = ({ stats }) => (
  <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${spacing.grid}`}>
    {stats.map((stat) => (
      <motion.div
        key={stat.label}
        variants={animations.fadeInUp}
        className="text-center"
      >
        <BaseCard>
          <h4 className={`text-4xl font-bold text-primary-600 mb-2`}>
            {stat.value}
          </h4>
          <p className={typography.body.secondary}>{stat.label}</p>
        </BaseCard>
      </motion.div>
    ))}
  </div>
);