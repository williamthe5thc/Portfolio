// src/components/ui/components.tsx
import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  isLoading?: boolean;
  children: ReactNode;
}

interface CardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  hover?: boolean;
}

// ... (Component implementations with proper TypeScript types)





