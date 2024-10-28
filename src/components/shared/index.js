// src/components/shared/index.js

// Export layout components
export {
  Navigation,
  PageHeader,
  PageLayout,
  GridContainer,
  SectionContainer,
  CallToAction,
  Timeline,
  SEO,
  SectionHeader,
  Divider
} from './layout';

// Export card components
export {
  JourneyCard,
  PhilosophyCard,
  ProjectCard,
  StatsGrid
} from './cards';

// Export form components
export {
  ContactForm,
  ContactMethod
} from './forms';

// Export animations
export {
  fadeIn,
  fadeInUp,
  slideIn,
  scaleUp,
  hover,
  staggerContainer,
  pageTransition,
  loadingSpinner,
  modalBackdrop,
  modalContent
} from './animations';

// Export standalone components
export { default as ErrorBoundary } from './ErrorBoundary';
export { default as LoadingScreen } from './LoadingScreen';
export { default as ProjectGrid } from './ProjectGrid';