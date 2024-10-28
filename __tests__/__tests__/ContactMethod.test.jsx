import React from 'react';
import { render } from '@testing-library/react';
import { ContactMethod } from '../index';

describe('ContactMethod', () => {
  it('renders without crashing', () => {
    const { container } = render(<ContactMethod />);
    expect(container).toBeInTheDocument();
  });
});
