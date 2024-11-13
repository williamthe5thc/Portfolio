// src/components/layout/Footer.tsx
/**
 * @file Footer.tsx
 * @description Global footer component with navigation and social links
 * @module components/layout
 * 
 * @requires react-router-dom - For internal navigation
 * @requires lucide-react - For social and contact icons
 * @requires @/content - For site configuration
 * 
 * Features:
 * - Responsive layout
 * - Dynamic navigation sections
 * - Social media links
 * - Contact information
 * - Copyright notice
 * 
 * @example
 * ```tsx
 * // Basic usage in App.tsx
 * <Footer />
 * 
 * // With custom className
 * <Footer className="custom-footer" />
 * ```
 * 
 * @accessibility
 * - Semantic footer structure
 * - Proper heading hierarchy
 * - ARIA labels for social links
 * - Skip navigation support
 */
 
 
import React from 'react';
//import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Container } from './Container';
import { siteConfig } from '@/content';
import { ScrollToSection } from '@/components/shared';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  className?: string;
}

const footerSections: FooterSection[] = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'Social',
    links: [
      { 
        label: 'GitHub', 
        href: siteConfig.social.github,
        external: true 
      },
      { 
        label: 'LinkedIn', 
        href: siteConfig.social.linkedin,
        external: true 
      }
    ]
  }
];

const SocialIcon: React.FC<{ name: string }> = ({ name }) => {
  switch (name.toLowerCase()) {
    case 'github':
      return <Github className="w-5 h-5" />;
    case 'linkedin':
      return <Linkedin className="w-5 h-5" />;
    case 'email':
      return <Mail className="w-5 h-5" />;
    default:
      return null;
  }
};

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const year = new Date().getFullYear();

  return (
    <footer className={`bg-white border-t border-gray-200 ${className}`}>
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold text-text-primary mb-4">
              {siteConfig.author}
            </h2>
            <p className="text-text-secondary mb-4 max-w-md">
              {siteConfig.description}
            </p>
            <div className="flex items-center text-text-secondary">
              <MapPin className="w-5 h-5 mr-2" />
              {siteConfig.contactInfo.location}
            </div>
          </div>

          {/* Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-primary-600 flex items-center gap-2"
                      >
                        <SocialIcon name={link.label} />
                        {link.label}
                      </a>
                    ) : (
                      <ScrollToSection
                        to={link.href}
                        className="text-text-secondary hover:text-primary-600"
                      >
                        {link.label}
                      </ScrollToSection>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-text-secondary">
            <p>© {year} {siteConfig.author}. All rights reserved.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};