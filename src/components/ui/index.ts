// src/components/ui/index.ts
/**
 * @file index.ts
 * @description Centralized export point for all UI components.
 * Re-exports components from their respective files for clean imports.
 */

// Base UI Components
export * from './components';

// Card Components
export {
  BaseCard,
  CoreCompetency,
  JourneyCard,
  PhilosophyCard,
  StatsGrid,
} from './Card';

// Container Components
export {
  Container,
  Section,
  GridContainer,
  SectionContainer,
  containerPadding,
} from './Container';

// Form Components
export {
  Form,
  FormField,
  FormInput,
  FormTextArea,
  ContactMethod,
} from './Form';

// Individual Components
export { BackToTop } from './BackToTop';
export { Badge } from './Badge';
export { Button } from './Button';
export { Icon } from './Icon';

// Export component types
export type {
  ButtonProps,
  CardProps,
  ContainerProps,
  GridProps,
  FormFieldProps,
  FormInputProps,
  FormTextAreaProps,
  ContactMethodProps,
} from './components';