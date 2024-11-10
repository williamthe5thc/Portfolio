///tests/components/layout/Footer.test.tsx


import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/content';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
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
      expect(document.querySelector('footer')).toBeInTheDocument();
      expect(screen.getAllByRole('navigation')).toHaveLength(2); // Main nav and social links
    });

    it('has accessible link text', () => {
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link).toHaveAccessibleName();
      });
    });
  });
});