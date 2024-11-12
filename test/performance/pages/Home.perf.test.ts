import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import HomePage from '@/pages/HomePage';

describe('Home Page Performance', () => {
  it('renders within performance budget', () => {
    const start = performance.now();
    render(<HomePage />);
    const end = performance.now();
    
    expect(end - start).toBeLessThan(200); // 200ms budget
  });
});
