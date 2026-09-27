///tests/components/layout/Footer.test.tsx


import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/content';

describe('Footer', () => {
  beforeEach(() => {
    // Its in-site links are router links, so it renders inside a router as in App.
    render(<Footer />, { wrapper: MemoryRouter });
  });

  describe('Brand Section', () => {
    it('displays author name and description', () => {
      expect(screen.getByText(siteConfig.author)).toBeInTheDocument();
      expect(screen.getByText(siteConfig.description)).toBeInTheDocument();
    });

    it('shows location information', () => {
      expect(screen.getByText(siteConfig.contactInfo.location)).toBeInTheDocument();
    });
  });

  describe('Navigation Links', () => {
    it('displays all navigation sections', () => {
      expect(screen.getByText(/navigation/i)).toBeInTheDocument();
      expect(screen.getByText(/social/i)).toBeInTheDocument();
    });

    it('renders main navigation links', () => {
      expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /portfolio/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
    });
  });

  describe('Social Links', () => {
    it('renders social media links with icons', () => {
      const githubLink = screen.getByRole('link', { name: /github/i });
      const linkedinLink = screen.getByRole('link', { name: /linkedin/i });

      expect(githubLink).toHaveAttribute('href', siteConfig.social.github);
      expect(linkedinLink).toHaveAttribute('href', siteConfig.social.linkedin);
    });

    it('opens social links in new tab', () => {
      const socialLinks = screen.getAllByRole('link').filter(link => 
        link.getAttribute('href')?.startsWith('http')
      );

      socialLinks.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      });
    });
  });

  describe('Copyright Section', () => {
    it('displays copyright information', () => {
      const currentYear = new Date().getFullYear();
      expect(screen.getByText(new RegExp(`© ${currentYear}`))).toBeInTheDocument();
      expect(screen.getByText(/all rights reserved/i)).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('uses semantic HTML structure', () => {
      // A contentinfo landmark with its link groups as lists (the page's
      // Primary nav is the only navigation landmark).
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
      expect(screen.queryAllByRole('navigation')).toHaveLength(0);
      expect(screen.getAllByRole('list').length).toBeGreaterThanOrEqual(2);
    });

    it('has accessible link text', () => {
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link).toHaveAccessibleName();
      });
    });
  });
});