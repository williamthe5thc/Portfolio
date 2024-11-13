import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import PortfolioPage from '@/pages/PortfolioPage';

describe('Portfolio Page Performance', () => {
  it('renders within performance budget', () => {
    const start = performance.now();
    render(<PortfolioPage />);
    const end = performance.now();
    
    expect(end - start).toBeLessThan(200); // 200ms budget
  });
});
