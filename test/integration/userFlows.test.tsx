import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '@/App';

describe('User Flows', () => {
  it('completes portfolio browsing flow', async () => {
    const user = userEvent.setup();
    render(<App />);

    // Navigate to portfolio
    await user.click(screen.getByText(/portfolio/i));
    expect(screen.getByText(/my projects/i)).toBeInTheDocument();

    // Filter projects
    await user.click(screen.getByText(/development/i));
    expect(screen.getAllByTestId('project-card')).toHaveLength(2);

    // View project details
    await user.click(screen.getAllByTestId('project-card')[0]);
    expect(screen.getByText(/project details/i)).toBeInTheDocument();
  });
});
