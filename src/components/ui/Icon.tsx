// src/components/ui/Icon.tsx
import { createElement } from 'react';
import type { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface IconProps {
  name: keyof typeof Icons;
  className?: string;
}

export const Icon = ({ name, className }: IconProps) => {
  const IconComponent = Icons[name];
  return createElement(IconComponent, { className });
};

// Example usage in other components:
// Instead of:
// const Icon = Icons[IconName];
// <Icon className="w-6 h-6" />

// Use:
// <Icon name={IconName} className="w-6 h-6" />