// src/components/shared/ScrollToSection.tsx
import React from 'react';
import { useHref, useNavigate, useLocation } from 'react-router-dom';
import { scrollToElement, scrollWindowTo } from '@/hooks/useScrollManager';
import { isSamePath, routePath } from '@/utils/paths';

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
  const target = routePath(to);
  const href = useHref(target);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let the browser handle ctrl/cmd/shift/middle clicks via the real href.
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    const [rawPath, hash] = target.split('#');
    const path = rawPath || '/';

    if (isSamePath(location.pathname, path)) {
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
    crawlers. useHref adds the deploy base: a bare "/about/" would resolve
    against the origin rather than the app, which on GitHub Pages is a 404.
  */
  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};