// src/components/ui/index.ts

// Core Components
export { Button  } from './Button.tsx';  // Add the .tsx extension and export named export
export { BackToTop } from './BackToTop.tsx';
export { Badge } from './Badge.tsx';

//export the cards
export { BaseCard, CoreCompetency, JourneyCard, StatsGrid, PhilosophyCard } from './Card.jsx';
export type {
  CoreCompetencyProps,
  JourneyItemProps,
  JourneyCardProps,
  PhilosophyCardProps,
  StatsItemProps,
  StatsGridProps,
} from './Card.tsx';

// Form Components
export { Input } from './Input.tsx';
export { TextArea } from './TextArea.tsx';
export { FormField } from './FormField.tsx';
export { ContactMethod } from './ContactMethod';


// Layout Components
export { SectionContainer } from './Container.tsx';
export { GridContainer } from './Container.tsx';

// Types
export type { ButtonProps } from './Button.tsx';
export type { CardProps } from './Card.tsx';
export type { ContainerProps, SectionProps, GridContainerProps } from './Container.tsx';
export type { InputProps } from './Input.tsx';
export type { TextAreaProps } from './TextArea.tsx';
export type { FormFieldProps } from './FormField.tsx';
export type { BackToTopProps } from './BackToTop.tsx';
export type { BadgeProps } from './Badge.tsx';
export type { ContactMethodProps } from './ContactMethod';