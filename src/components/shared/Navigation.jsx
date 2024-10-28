// src/components/Navigation.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { navigation } from '../../data/siteData';  // Fixed path - need to go up two levels


const Navigation = () => (
  <nav className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <NavLink to="/" className="font-bold text-xl text-text-primary hover:text-primary-600">
          W. Jordan Charles
        </NavLink>
        <div className="hidden md:flex space-x-4">
          {navigation.map(({ path, label, icon }) => {
            const Icon = Icons[icon];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => `
                  px-3 py-2 rounded-md flex items-center gap-2
                  ${isActive ? 'text-primary-600' : 'text-text-secondary hover:text-primary-600'}
                `}
              >
                <Icon className="w-4 h-4" />
                {label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;