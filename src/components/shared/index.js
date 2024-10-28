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

export {
  JourneyCard,
  PhilosophyCard,
  ProjectCard,
  StatsGrid,
  CoreCompetencies // This was missing
} from './cards';

export {
  ContactForm,
  ContactMethod
} from './forms';

export {
  fadeIn,
  fadeInUp,
  fadeInDown,
  slideIn,
  scaleUp,
  hover,
  staggerContainer, // Was previously staggerChildren
  pageTransition,
  loadingSpinner,
  modalBackdrop,
  modalContent,
  cardHover,
  projectGridItem
} from './animations';

export { default as ErrorBoundary } from './ErrorBoundary';
export { default as LoadingScreen } from './LoadingScreen';
export { default as ProjectGrid } from './ProjectGrid';
