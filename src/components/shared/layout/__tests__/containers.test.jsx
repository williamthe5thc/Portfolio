import React from 'react';
import { render } from '@testing-library/react';
import containers from '../containers';

describe('containers', () => {
  it('renders successfully', () => {
    render(<containers />);
  });
});
