// test/smoke/routes.test.tsx
/**
 * Renders every route through the real App and router, the way main.tsx
 * does, and checks that each one reaches its page heading. It deliberately
 * asserts only that one <h1> appears, not its wording, so copy edits don't
 * break it. It exists to catch the class of bug that has reached the live
 * site before: a page that throws, a route that never finishes its
 * transition, or a lazy import that no longer resolves.
 */
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from '@/App';
import { projects } from '@/content/projects';

const routes = [
  '/',
  '/about',
  '/portfolio',
  '/contact',
  '/resume',
  '/resume/software',
  '/resume/instructional',
  '/resume/academic',
  '/this-route-does-not-exist',
  ...projects.map(project => `/portfolio/${project.id}`)
];

describe('every route renders', () => {
  it.each(routes)('%s shows exactly one page heading', async path => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={[path]}>
          <React.Suspense fallback={null}>
            <App />
          </React.Suspense>
        </MemoryRouter>
      </HelmetProvider>
    );

    await screen.findByRole('heading', { level: 1 }, { timeout: 5000 });
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  });
});
