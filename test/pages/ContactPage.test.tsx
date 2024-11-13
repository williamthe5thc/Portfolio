//tests/pages/ContactPage.test.tsx

import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactPage from '@/pages/ContactPage';
import { siteConfig, faqs } from '@/content';

// Mock ContactForm component
vi.mock('@/components/features', () => ({
  ContactForm: () => <div data-testid="mock-contact-form">Contact Form</div>
}));

describe('ContactPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Page Structure', () => {
    it('renders page header with correct content', () => {
      render(<ContactPage />);
      
      expect(screen.getByText('Contact Me')).toBeInTheDocument();
      expect(screen.getByText(/let's discuss how we can work together/i)).toBeInTheDocument();
    });

    it('renders all main sections', () => {
      render(<ContactPage />);
      
      expect(screen.getByText('Get in Touch')).toBeInTheDocument();
      expect(screen.getByText('Send a Message')).toBeInTheDocument();
      expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument();
    });
  });

  describe('Contact Information Section', () => {
    it('displays all contact methods', () => {
      render(<ContactPage />);
      
      // Check for email
      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(screen.getByText(siteConfig.contactInfo.email)).toBeInTheDocument();

      // Check for phone
      expect(screen.getByText('Phone')).toBeInTheDocument();
      expect(screen.getByText(siteConfig.contactInfo.phone)).toBeInTheDocument();

      // Check for LinkedIn
      expect(screen.getByText('LinkedIn')).toBeInTheDocument();
      expect(screen.getByText(siteConfig.contactInfo.linkedin)).toBeInTheDocument();

      // Check for location
      expect(screen.getByText('Location')).toBeInTheDocument();
      expect(screen.getByText(siteConfig.contactInfo.location)).toBeInTheDocument();
    });

    it('renders contact method icons', () => {
      render(<ContactPage />);
      
      const icons = document.querySelectorAll('svg');
      expect(icons.length).toBeGreaterThanOrEqual(4); // At least 4 contact method icons
    });

    it('makes contact information clickable where appropriate', () => {
      render(<ContactPage />);
      
      // Email link
      expect(screen.getByRole('link', { name: /email/i }))
        .toHaveAttribute('href', `mailto:${siteConfig.contactInfo.email}`);
      
      // Phone link
      expect(screen.getByRole('link', { name: /phone/i }))
        .toHaveAttribute('href', `tel:${siteConfig.contactInfo.phone.replace(/\D/g,'')}`);
      
      // LinkedIn link
      expect(screen.getByRole('link', { name: /linkedin/i }))
        .toHaveAttribute('href', `https://${siteConfig.contactInfo.linkedin}`);
    });
  });

  describe('Contact Form Section', () => {
    it('renders contact form component', () => {
      render(<ContactPage />);
      
      expect(screen.getByTestId('mock-contact-form')).toBeInTheDocument();
    });

    it('displays form section title', () => {
      render(<ContactPage />);
      
      expect(screen.getByText('Send a Message')).toBeInTheDocument();
    });
  });

  describe('FAQ Section', () => {
    it('renders all FAQs', () => {
      render(<ContactPage />);
      
      faqs.forEach(faq => {
        expect(screen.getByText(faq.question)).toBeInTheDocument();
        expect(screen.getByText(faq.answer)).toBeInTheDocument();
      });
    });

    it('applies card styling to FAQ items', () => {
      render(<ContactPage />);
      
      const faqCards = screen.getAllByRole('article');
      faqCards.forEach(card => {
        expect(card).toHaveClass('bg-white', 'rounded-xl', 'shadow-lg');
      });
    });
  });

  describe('Animations', () => {
    it('animates sections on scroll', async () => {
      render(<ContactPage />);
      
      const sections = screen.getAllByRole('region');
      sections.forEach(section => {
        expect(section).toHaveAttribute('data-animate');
      });

      await waitFor(() => {
        sections.forEach(section => {
          expect(section).toHaveStyle({ opacity: '1' });
        });
      });
    });
  });

  describe('Responsive Layout', () => {
    it('uses responsive grid for contact methods and form', () => {
      render(<ContactPage />);
      
      const grid = screen.getByRole('main').firstChild;
      expect(grid).toHaveClass('grid', 'md:grid-cols-2', 'gap-12');
    });
  });

  describe('SEO', () => {
    it('sets correct meta tags', () => {
      render(<ContactPage />);
      
      expect(document.title).toContain('Contact');
      
      const metaDescription = document.querySelector('meta[name="description"]');
      expect(metaDescription?.getAttribute('content'))
        .toContain(`Get in touch with ${siteConfig.author}`);
    });
  });

  describe('Accessibility', () => {
    it('uses proper heading hierarchy', () => {
      render(<ContactPage />);
      
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toHaveTextContent('Contact Me');

      const h2s = screen.getAllByRole('heading', { level: 2 });
      expect(h2s.length).toBeGreaterThan(0);
    });

    it('provides proper ARIA labels for contact links', () => {
      render(<ContactPage />);
      
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link).toHaveAccessibleName();
      });
    });
  });

  describe('Error Handling', () => {
    it('handles missing contact information gracefully', () => {
      const originalContactInfo = { ...siteConfig.contactInfo };
      (siteConfig.contactInfo as any) = {};
      
      render(<ContactPage />);
      
      // Should still render without crashing
      expect(screen.getByText('Get in Touch')).toBeInTheDocument();
      
      // Restore original contact info
      siteConfig.contactInfo = originalContactInfo;
    });
  });
});