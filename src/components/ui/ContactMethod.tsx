// src/components/ui/ContactMethod.tsx
/**
 * @file ContactMethod.tsx
 * @description Contact information display component with icons and links
 * @module components/ui
 * 
 * Features:
 * - Icon integration
 * - Link handling
 * - Hover animations
 * - Responsive layout
 * - Accessibility support
 * 
 * @example
 * ```tsx
 * <ContactMethod
 *   icon="Mail"
 *   title="Email"
 *   content="example@domain.com"
 *   link="mailto:example@domain.com"
 * />
 * 
 * <ContactMethod
 *   icon="Phone"
 *   title="Phone"
 *   content="+1 234 567 8900"
 *   link="tel:+12345678900"
 * />
 * ```
 * 
 * @accessibility
 * - Proper aria labels
 * - Semantic markup
 * - Color contrast
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

interface ContactMethodProps {
  icon: 'Mail' | 'Phone' | 'Linkedin' | 'MapPin';
  title: string;
  content: string;
  link?: string;
  color?: string;
  className?: string;
}

export const ContactMethod: React.FC<ContactMethodProps> = ({ 
  icon: IconName, 
  title, 
  content, 
  link, 
  color = "text-primary-600",
  className = ''
}) => {
  const Icon = {
    Mail,
    Phone,
    Linkedin,
    MapPin
  }[IconName];
  
  const Inner = () => (
    <>
      <Icon className={`w-6 h-6 ${color} mt-1`} />
      <div>
        <h3 className="text-lg font-medium text-text-primary">{title}</h3>
        <p className={link ? `${color} hover:opacity-80` : "text-text-secondary"}>
          {content}
        </p>
      </div>
    </>
  );

  return (
    <motion.div 
      variants={fadeInUp}
      className={`flex items-start gap-4 ${className}`}
    >
      {link ? (
        <motion.a 
          href={link}
          className="flex items-start gap-4"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Inner />
        </motion.a>
      ) : (
        <Inner />
      )}
    </motion.div>
  );
};