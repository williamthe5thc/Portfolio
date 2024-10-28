import React from 'react';
import { render } from '@testing-library/react';
import { ContactForm } from '../index';

describe('ContactForm', () => {
  it('renders without crashing', () => {
    const { container } = render(<ContactForm />);
    expect(container).toBeInTheDocument();
  });
});
