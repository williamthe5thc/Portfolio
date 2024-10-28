// src/components/shared/Timeline.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from './animations';  // Fix: Import from local animations
import { Card } from '../ui';  // Fix: Check if Card is exported from ui

export const Timeline = ({ events }) => (
  <div className="relative space-y-8">
    {events.map((event, index) => (
      <motion.div
        key={index}
        variants={fadeInUp}
        className="flex gap-4"
      >
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 bg-primary-600 rounded-full" />
          {index !== events.length - 1 && (
            <div className="w-0.5 h-full bg-primary-200" />
          )}
        </div>
        <Card className="flex-1 p-6">
          <h4 className="font-semibold text-text-primary">{event.title}</h4>
          <p className="text-text-light text-sm">{event.date}</p>
          <p className="text-text-secondary mt-2">{event.description}</p>
        </Card>
      </motion.div>
    ))}
  </div>
);