// src/components/shared/ScrollToSection.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface ScrollToSectionProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const ScrollToSection: React.FC<ScrollToSectionProps> = ({ 
  to, 
  children,
  className = '' 
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const [path, hash] = to.split('#');
    
    const performScroll = () => {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    if (location.pathname === path || (!path && location.pathname === '/')) {
      performScroll();
    } else {
      // For cross-page navigation
      navigate(path, {
        state: { scrollTo: hash },
        replace: false
      });
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};