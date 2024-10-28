import React from 'react';
import { render } from '@testing-library/react';
import { CoreCompetencies } from '../index';

describe('CoreCompetencies', () => {
  it('renders without crashing', () => {
    const { container } = render(<CoreCompetencies />);
    expect(container).toBeInTheDocument();
  });
});
