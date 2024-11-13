// test/components/features/ProjectGridAnimations.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, beforeEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { ProjectGrid } from '@/components/features/portfolio/ProjectGrid';
import type { ProjectBase } from '@/types/content';

// Mock project data
const mockProjects: ProjectBase[] = [
  {
    id: 'test-project-1',
    title: 'Test Project 1',
    description: 'Test Description 1',
    image: '/test-image-1.jpg',
    category: 'development',
    tags: ['React', 'TypeScript'],
    status: 'completed',
    date: '2024'
  },
  {
    id: 'test-project-2',
    title: 'Test Project 2',
    description: 'Test Description 2',
    image: '/test-image-2.jpg',
    category: 'design',
    tags: ['UI/UX', 'Figma'],
    status: 'in-progress',
    date: '2024'
  }
] as const;

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>
    {children}
  </MemoryRouter>
);

describe('ProjectGrid', () => {
  beforeEach(() => {
    // Clear any mocks before each test
  });

  test('renders all projects initially', () => {
    render(
      <TestWrapper>
        <ProjectGrid projects={mockProjects} />
      </TestWrapper>
    );

    // Check if both projects are rendered
    mockProjects.forEach(project => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });

  test('renders project tags', () => {
    render(
      <TestWrapper>
        <ProjectGrid projects={mockProjects} />
      </TestWrapper>
    );

    // Check if tags are rendered
    const allTags = mockProjects.flatMap(project => project.tags);
    allTags.forEach(tag => {
      expect(screen.getByText(tag)).toBeInTheDocument();
    });
  });

  test('handles empty project list', () => {
    render(
      <TestWrapper>
        <ProjectGrid projects={[]} />
      </TestWrapper>
    );

    expect(screen.getByText(/no projects/i)).toBeInTheDocument();
  });

  test('displays correct project count', () => {
    render(
      <TestWrapper>
        <ProjectGrid projects={mockProjects} />
      </TestWrapper>
    );

    const projectElements = screen.getAllByTestId('motion-component');
    expect(projectElements.length).toBeGreaterThanOrEqual(mockProjects.length);
  });
});