// src/components/shared/ScrollLink.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface ScrollLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

export const ScrollLink: React.FC<ScrollLinkProps> = ({
  to,
  className,
  children
}) => {
  const navigate = useNavigate();

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    // First fade out
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';

    // After fade out, navigate and scroll
    setTimeout(() => {
      navigate(to);
      window.scrollTo({ top: 0 });
      
      // Then fade back in
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 100);
    }, 300);
  };

  return (
    <a
      href={to}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
};