import React from 'react';
import { render } from '@testing-library/react';
import { EnhancedComponents } from '../index';

describe('EnhancedComponents', () => {
  it('renders without crashing', () => {
    const { container } = render(<EnhancedComponents />);
    expect(container).toBeInTheDocument();
  });
});
