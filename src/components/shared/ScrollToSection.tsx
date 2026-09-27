// src/components/shared/ScrollToSection.tsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToElement, scrollWindowTo } from '@/hooks/useScrollManager';

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let the browser handle ctrl/cmd/shift/middle clicks via the real href.
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const [rawPath, hash] = to.split('#');
    const path = rawPath || '/';

    if (location.pathname === path) {
      // Same page: nothing to navigate, just scroll (instant when the
      // visitor prefers reduced motion).
      const element = hash ? document.getElementById(hash) : null;
      if (element) {
        scrollToElement(element);
      } else if (!hash) {
        scrollWindowTo(0, true);
      }
    } else {
      // Other page: navigate with the hash in the URL; App's scroll manager
      // scrolls to it once the page has rendered.
      // The hash is all it needs; nothing reads a scrollTo router state.
      navigate(hash ? { pathname: path, hash: `#${hash}` } : path);
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