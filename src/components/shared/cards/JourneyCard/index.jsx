// src/components/shared/cards/JourneyCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { BaseCard } from '../../ui/BaseCard';


const JourneyCard = ({ 
  icon: IconName, 
  title, 
  items, 
  color = "text-primary-600" 
}) => {
  const Icon = Icons[IconName];
  
  return (
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
};

export default JourneyCard;