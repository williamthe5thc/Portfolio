// src/components/shared/Timeline.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface TimelineEvent {
  title: string;
  subtitle: string;
  date?: string;
  description?: string;
}

interface TimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ events, className = '' }) => {
  return (
    <div className={`relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gray-200 ${className}`}>
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          className="relative flex items-start gap-6 ml-12"
        >
          {/* Timeline dot */}
          <div className="absolute -left-[35px] flex h-7 w-7 items-center justify-center rounded-full bg-primary-100 ring-2 ring-white">
            <Calendar className="h-4 w-4 text-primary-600" />
          </div>
          
          {/* Content */}
          <div className="flex flex-col">
            <h3 className="font-semibold text-text-primary">{event.title}</h3>
            <p className="text-text-secondary">{event.subtitle}</p>
            {event.date && (
              <span className="mt-1 text-sm text-text-light">{event.date}</span>
            )}
            {event.description && (
              <p className="mt-2 text-text-secondary">{event.description}</p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;