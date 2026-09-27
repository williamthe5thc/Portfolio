/**
 * @file Navigation.tsx
 * @description Main navigation component with mobile responsiveness and animation
 * @module components/layout
 * 
 * @requires framer-motion - For menu and hover animations
 * @requires lucide-react - For navigation icons
 * @requires react-router-dom - For navigation handling
 * 
 * Features:
 * - Responsive mobile menu with animation
 * - Active route highlighting
 * - Hover animations
 * - Accessible keyboard navigation
 * - Icon support for menu items
 * 
 * @example
 * ```tsx
 * // Default usage with standard navigation items
 * <Navigation />
 * 
 * // Custom navigation items
 * <Navigation 
 *   items={[
 *     { path: "/dashboard", label: "Dashboard", icon: "Home" },
 *     { path: "/profile", label: "Profile", icon: "User" }
 *   ]}
 * />
 * ```
 */

import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, FileText, Mail, Menu, X } from 'lucide-react';
import { siteConfig } from '@/content';

/*
  Named imports and a local map, not `import * as Icons` with Icons[name]:
  a dynamic lookup on the namespace defeats tree-shaking and shipped all
  ~1,400 lucide icons (about 690 kB of JavaScript) to every visitor.
*/
const navIcons = { Home, User, Briefcase, FileText, Mail };

interface NavItem {
  path: string;
  label: string;
  icon: keyof typeof navIcons;
  end?: boolean;
}

export interface NavigationProps {
  items?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { path: "/", label: "Home", icon: "Home", end: true },
  { path: "/about", label: "About", icon: "User" },
  // No query param: PortfolioPage reads `category`, never `type`, so the old
  // ?type=instructional was silently ignored. The page defaults to Featured,
  // which is the right landing view anyway.
  { path: "/portfolio", label: "Portfolio", icon: "Briefcase" },
  // Not `end`, so it stays highlighted on the individual resume pages.
  { path: "/resume", label: "Resume", icon: "FileText" },
  { path: "/contact", label: "Contact", icon: "Mail" }
];

export const Navigation: React.FC<NavigationProps> = ({ 
  items = defaultNavItems 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsMenuOpen(open => !open);

  // Close on any navigation, however it happened: a link in the page, the
  // footer, or browser Back. Previously only the menu's own links closed it.
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.search, location.hash]);

  // While open: Escape closes and returns focus to the toggle; a tap or click
  // anywhere outside the header closes it.
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [isMenuOpen]);

  return (
    <header
      id="site-header"
      ref={headerRef}
      className="bg-white shadow-sm sticky top-0 z-50"
    >
      <nav aria-label="Primary" className="max-w-6xl mx-auto px-4">
        {/* min-h, not h: at 200% text size a fixed height clipped the name. */}
        <div className="flex items-center justify-between min-h-16 py-2 gap-4">
          {/* Logo/Name */}
          <NavLink 
            to="/" 
            className="font-bold text-lg sm:text-xl whitespace-nowrap text-text-primary hover:text-primary-600 transition-all duration-300"
          >
            {siteConfig.author}
          </NavLink>

          {/*
            Desktop Navigation. Icons appear from lg up: with five items,
            icons and full padding wrapped the row onto two lines at 768px.
          */}
          <div className="hidden md:flex flex-wrap justify-end gap-x-1 lg:gap-x-4">
            {items.map(({ path, label, icon, end }) => {
              const Icon = navIcons[icon];
              return (
                <NavLink
                  key={path}
                  to={path}
                  end={end}
                  className={({ isActive }) => `
                    px-2 lg:px-3 py-2 rounded-md flex items-center gap-2
                    transition-all duration-300 relative group
                    ${isActive 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-text-secondary hover:text-primary-600'
                    }
                  `}
                >
                  <Icon className="hidden lg:block w-4 h-4" aria-hidden="true" />
                  {label}
                  <motion.span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600"
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={toggleRef}
            type="button"
            className="md:hidden p-2 rounded-md text-text-secondary hover:text-primary-600 hover:bg-primary-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/*
          Mobile Navigation. Rendered only while open: collapsing to height 0
          left the links clipped but still in the tab order, so keyboard users
          tabbed through invisible links on every page.
        */}
        <AnimatePresence initial={false}>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-4 space-y-2">
                {items.map(({ path, label, icon, end }) => {
                  const Icon = navIcons[icon];
                  return (
                    <NavLink
                      key={path}
                      to={path}
                      end={end}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) => `
                        px-3 py-2 rounded-md flex items-center gap-2
                        transition-all duration-300
                        ${isActive 
                          ? 'text-primary-600 bg-primary-50' 
                          : 'text-text-secondary hover:text-primary-600 hover:bg-primary-50'
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                      {label}
                    </NavLink>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
