// src/components/shared/ScrollToSection.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

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
    
    const scrollToElement = () => {
    
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100); // Small delay to ensure the new page is rendered
      }
    };
    if (location.pathname === path) {
      // If we're already on the right page, just scroll
      scrollToElement();
    } else {
      // Navigate to new page then scroll
      navigate(path, {
        state: { scrollTo: hash }
      });
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};