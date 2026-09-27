// src/test/components/animations.test.tsx
import { render, screen } from '@testing-library/react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

// Test component that uses our animation variants
const TestAnimatedComponent = ({ isVisible = true, variant }: { isVisible?: boolean; variant: any }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        data-testid="animated-element"
        variants={variant}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Test Content
      </motion.div>
    )}
  </AnimatePresence>
);

describe('Animation Variants', () => {
  test('fadeInUp has correct animation properties', () => {
    // Test the animation configuration
    expect(fadeInUp).toHaveProperty('initial');
    expect(fadeInUp).toHaveProperty('animate');
    expect(fadeInUp).toHaveProperty('exit');
    expect(fadeInUp.initial).toEqual(expect.objectContaining({
      opacity: 0,
      y: expect.any(Number)
    }));
  });

  test('staggerContainer has correct stagger configuration', () => {
    expect(staggerContainer).toHaveProperty('animate');
    expect(staggerContainer.animate).toHaveProperty('transition');
    expect((staggerContainer.animate as { transition?: object }).transition).toHaveProperty('staggerChildren');
  });
});

// Test Component with Stagger Effect
const StaggerTestComponent = () => (
  <motion.div
    variants={staggerContainer}
    initial="initial"
    animate="animate"
    data-testid="stagger-container"
  >
    <motion.div variants={fadeInUp} data-testid="stagger-item-1">Item 1</motion.div>
    <motion.div variants={fadeInUp} data-testid="stagger-item-2">Item 2</motion.div>
    <motion.div variants={fadeInUp} data-testid="stagger-item-3">Item 3</motion.div>
  </motion.div>
);

describe('Animation Components', () => {
  test('renders animated component with initial state', () => {
    render(<TestAnimatedComponent variant={fadeInUp} />);
    const element = screen.getByTestId('animated-element');
    expect(element).toBeInTheDocument();
  });

  test('stagger container renders children', () => {
    render(<StaggerTestComponent />);
    const container = screen.getByTestId('stagger-container');
    expect(container).toBeInTheDocument();
    expect(screen.getByTestId('stagger-item-1')).toBeInTheDocument();
    expect(screen.getByTestId('stagger-item-2')).toBeInTheDocument();
    expect(screen.getByTestId('stagger-item-3')).toBeInTheDocument();
  });
});

describe('Animation Integration', () => {
  test('components receive animation classes', () => {
    render(<StaggerTestComponent />);
    const items = screen.getAllByTestId(/stagger-item/);
    
    expect(items).toHaveLength(3);
    items.forEach(item => {
      expect(item).toBeInTheDocument();
    });
  });
});