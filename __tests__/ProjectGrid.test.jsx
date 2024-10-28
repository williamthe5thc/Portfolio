import React from 'react';
import { render } from '@testing-library/react';
import ProjectGrid from '../ProjectGrid';

describe('ProjectGrid', () => {
  it('renders successfully', () => {
    render(<ProjectGrid />);
  });
});
