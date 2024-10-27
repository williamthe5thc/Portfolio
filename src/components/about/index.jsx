import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui';
import { fadeInUp, staggerChildren } from '../shared';
import * as Icons from 'lucide-react';

export const JourneyCard = ({ icon, title, items, color }) => {
  const Icon = Icons[icon];
  
  return (
    <motion.div variants={fadeInUp} className="h-full">
      <Card className="p-8 h-full">
        <Icon className={`w-8 h-8 ${color} mb-4`} />
        <h3 className="text-xl font-semibold text-text-primary mb-4">{title}</h3>
        <div className="space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeInUp}
              className="border-l-2 border-primary-200 pl-4"
            >
              <p className="font-semibold text-text-primary">{item.title}</p>
              <p className="text-text-secondary">{item.subtitle}</p>
              {item.date && (
                <p className="text-sm text-text-light">{item.date}</p>
              )}
            </motion.div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};


// Philosophy Card Component
export const PhilosophyCard = ({ icon: IconName, content }) => {
  const Icon = Icons[IconName];
  
  return (
    <motion.div 
      className="bg-background-light rounded-xl shadow-lg p-8 max-w-3xl mx-auto"
      variants={fadeInUp}
    >
      <Icon className="w-12 h-12 text-primary-600 mx-auto mb-6" />
      <p className="text-text-secondary text-center text-lg leading-relaxed">
        {content}
      </p>
    </motion.div>
  );
};

// Stats Grid Component
export const StatsGrid = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
    {stats.map((stat) => (
      <motion.div
        key={stat.label}
        variants={fadeInUp}
        className="text-center"
      >
        <Card className="p-6">
          <h4 className="text-4xl font-bold text-primary-600 mb-2">
            {stat.value}
          </h4>
          <p className="text-text-secondary">{stat.label}</p>
        </Card>
      </motion.div>
    ))}
  </div>
);

// Timeline Component
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