// src/components/shared/cards/PhilosophyCard.jsx
import React from 'react';
import * as Icons from 'lucide-react';
import { BaseCard } from '../../ui/BaseCard';
import { typography } from '../../../constants/design';

export const PhilosophyCard = ({ icon: IconName, content }) => {
  const Icon = Icons[IconName];
  
  return (
    <BaseCard className="text-center max-w-3xl mx-auto">
      <Icon className="w-12 h-12 text-primary-600 mx-auto mb-6" />
      <p className={`${typography.body.secondary} text-lg leading-relaxed`}>
        {content}
      </p>
    </BaseCard>
  );
};