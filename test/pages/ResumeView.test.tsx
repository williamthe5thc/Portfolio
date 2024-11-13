import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useParams } from 'react-router-dom';
import { SoftwareDevResume, InstructionalDesignResume, AcademicResume } from '@/pages/resumes';

// Mock router hooks
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useParams: vi.fn()
}));

describe('Resume Views', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Software Development Resume', () => {
    beforeEach(() => {
      (useParams as jest.Mock).mockReturnValue({ type: 'software' });
    });

    it('renders software development experience', () => {
      render(
        <MemoryRouter>
          <SoftwareDevResume />
        </MemoryRouter>
      );
      
      expect(screen.getByText(/technical skills/i)).toBeInTheDocument();
      expect(screen.getByText(/programming languages/i)).toBeInTheDocument();
      expect(screen.getByText(/development tools/i)).toBeInTheDocument();
    });

    it('displays project highlights', () => {
      render(
        <MemoryRouter>
          <SoftwareDevResume />
        </MemoryRouter>
      );
      
      const projects = screen.getAllByRole('article');
      expect(projects.length).toBeGreaterThan(0);
      projects.forEach(project => {
        expect(project).toHaveTextContent(/technologies used/i);
      });
    });
  });

  describe('Instructional Design Resume', () => {
    beforeEach(() => {
      (useParams as jest.Mock).mockReturnValue({ type: 'instructional' });
    });

    it('renders instructional design experience', () => {
      render(
        <MemoryRouter>
          <InstructionalDesignResume />
        </MemoryRouter>
      );
      
      expect(screen.getByText(/learning design/i)).toBeInTheDocument();
      expect(screen.getByText(/authoring tools/i)).toBeInTheDocument();
      expect(screen.getByText(/lms platforms/i)).toBeInTheDocument();
    });

    it('displays course development examples', () => {
      render(
        <MemoryRouter>
          <InstructionalDesignResume />
        </MemoryRouter>
      );
      
      const courses = screen.getAllByRole('article');
      expect(courses.length).toBeGreaterThan(0);
      courses.forEach(course => {
        expect(course).toHaveTextContent(/learning objectives/i);
      });
    });
  });

  describe('Academic Resume', () => {
    beforeEach(() => {
      (useParams as jest.Mock).mockReturnValue({ type: 'academic' });
    });

    it('renders academic experience', () => {
      render(
        <MemoryRouter>
          <AcademicResume />
        </MemoryRouter>
      );
      
      expect(screen.getByText(/education/i)).toBeInTheDocument();
      expect(screen.getByText(/research experience/i)).toBeInTheDocument();
      expect(screen.getByText(/publications/i)).toBeInTheDocument();
    });

    it('displays research projects', () => {
      render(
        <MemoryRouter>
          <AcademicResume />
        </MemoryRouter>
      );
      
      const research = screen.getAllByRole('article');
      expect(research.length).toBeGreaterThan(0);
      research.forEach(project => {
        expect(project).toHaveTextContent(/methodology/i);
      });
    });
  });

  describe('Print Layout', () => {
    it('optimizes for printing', () => {
      render(
        <MemoryRouter>
          <SoftwareDevResume />
        </MemoryRouter>
      );
      
      const resumeContent = screen.getByRole('main');
      expect(resumeContent).toHaveClass('print:m-0', 'print:p-0', 'print:text-sm');
    });

    it('removes non-printable elements', () => {
      render(
        <MemoryRouter>
          <SoftwareDevResume />
        </MemoryRouter>
      );
      
      const navigationButtons = screen.getByRole('navigation');
      expect(navigationButtons).toHaveClass('print:hidden');
    });
  });

  describe('Responsive Layout', () => {
    it('adjusts layout for different screens', () => {
      render(
        <MemoryRouter>
          <SoftwareDevResume />
        </MemoryRouter>
      );
      
      const sections = screen.getAllByRole('region');
      sections.forEach(section => {
        expect(section).toHaveClass('md:grid-cols-2', 'lg:grid-cols-3');
      });
    });
  });
});