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

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { siteConfig } from '@/content/';

interface NavItem {
  path: string;
  label: string;
  icon: keyof typeof Icons;
  end?: boolean;
}

interface NavigationProps {
  items?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { path: "/", label: "Home", icon: "Home", end: true },
  { path: "/about", label: "About", icon: "User" },
  // No query param: PortfolioPage reads `category`, never `type`, so the old
  // ?type=instructional was silently ignored. The page defaults to Featured,
  // which is the right landing view anyway.
  { path: "/portfolio", label: "Portfolio", icon: "Briefcase" },
  { path: "/contact", label: "Contact", icon: "Mail" }
];

export const Navigation: React.FC<NavigationProps> = ({ 
  items = defaultNavItems 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <NavLink 
            to="/" 
            className="font-bold text-xl text-text-primary hover:text-primary-600 transition-all duration-300"
          >
            {siteConfig.author}
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {items.map(({ path, label, icon, end }) => {
              const Icon = Icons[icon];
              return (
                <NavLink
                  key={path}
                  to={path}
                  end={end}
                  className={({ isActive }) => `
                    px-3 py-2 rounded-md flex items-center gap-2
                    transition-all duration-300 relative group
                    ${isActive 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-text-secondary hover:text-primary-600'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
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
            className="md:hidden p-2 rounded-md text-text-secondary hover:text-primary-600 hover:bg-primary-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <Icons.X className="w-6 h-6" />
            ) : (
              <Icons.Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 space-y-2">
            {items.map(({ path, label, icon, end }) => {
              const Icon = Icons[icon];
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
                  <Icon className="w-5 h-5" />
                  {label}
                </NavLink>
              );
            })}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};