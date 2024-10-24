import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, User, Briefcase, Mail } from 'lucide-react';
console.log("loading Navigation.jsx");
const Navigation = () => (
  <nav className="bg-white shadow-sm sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <NavLink to="/" className="font-bold text-xl text-gray-900 hover:text-blue-600">
          W. Jordan Charles
        </NavLink>
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" 
            className={({ isActive }) => 
              `px-3 py-2 rounded-md flex items-center gap-2 ${
                isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`
            }
          >
            <Home className="w-4 h-4" />
            Home
          </NavLink>
          <NavLink to="/about"
            className={({ isActive }) => 
              `px-3 py-2 rounded-md flex items-center gap-2 ${
                isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`
            }
          >
            <User className="w-4 h-4" />
            About
          </NavLink>
          <NavLink to="/portfolio"
            className={({ isActive }) => 
              `px-3 py-2 rounded-md flex items-center gap-2 ${
                isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`
            }
          >
            <Briefcase className="w-4 h-4" />
            Portfolio
          </NavLink>
          <NavLink to="/contact"
            className={({ isActive }) => 
              `px-3 py-2 rounded-md flex items-center gap-2 ${
                isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`
            }
          >
            <Mail className="w-4 h-4" />
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
