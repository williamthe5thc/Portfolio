import React from 'react';
import { render } from '@testing-library/react';
import { StatsGrid } from '../index';

describe('StatsGrid', () => {
  it('renders without crashing', () => {
    const { container } = render(<StatsGrid />);
    expect(container).toBeInTheDocument();
  });
});
