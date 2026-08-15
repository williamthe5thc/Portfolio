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

  /*
    The onClick handles normal clicks, but the href is still the real link for
    middle-click, ctrl+click, "open in new tab", "copy link address", and
    crawlers. Under HashRouter a bare "/about" resolves against the origin
    rather than the app - on GitHub Pages that is a 404 - so the fallback has
    to carry the hash.
  */
  return (
    <a href={`#${to}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};