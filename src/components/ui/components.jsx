// src/components/ui/components.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, AlertCircle, Image as ImageIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  icon: Icon,
  isLoading = false,
  className = '',
  href,
  onClick,
  ...props 
}) => {
  const navigate = useNavigate();
  
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white focus:ring-secondary-500',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    danger: 'bg-accent-red hover:bg-accent-red-dark text-white focus:ring-accent-red'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const handleClick = (e) => {
    if (isLoading) return;
    
    if (href) {
      e.preventDefault();
      if (href.startsWith('http')) {
        window.open(href, '_blank');
      } else {
        navigate(href);
      }
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      disabled={isLoading}
      onClick={handleClick}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
        ${className}
      `}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Loading...
        </>
      ) : (
        <>
          {Icon && <Icon className="w-4 h-4 mr-2" />}
          {children}
        </>
      )}
    </motion.button>
  );
};

// Base Card Component
export const BaseCard = ({ 
  children, 
  className = '', 
  animate = true,
  hover = true,
  ...props 
}) => {
  const baseClass = 'bg-white rounded-xl shadow-lg overflow-hidden p-6';
  const hoverAnimation = hover ? {
    whileHover: { y: -5, transition: { duration: 0.2 } },
    whileTap: { y: 0 }
  } : {};

  if (!animate) {
    return (
      <div className={`${baseClass} ${className}`} {...props}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className={`${baseClass} ${className}`}
      {...hoverAnimation}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Form Input Component
export const FormInput = ({ 
  label, 
  error, 
  className = '', 
  ...props 
}) => (
  <div className="space-y-1">
    {label && (
      <label className="block text-sm font-medium text-text-primary">
        {label}
      </label>
    )}
    <div className="relative">
      <input
        className={`
          w-full rounded-lg border px-4 py-2
          ${error 
            ? 'border-accent-red focus:border-accent-red focus:ring-accent-red' 
            : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
          }
          ${className}
        `}
        {...props}
      />
      {error && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <AlertCircle className="h-5 w-5 text-accent-red" />
        </div>
      )}
    </div>
    {error && (
      <p className="text-sm text-accent-red mt-1">{error}</p>
    )}
  </div>
);

// Form Textarea Component
export const FormTextArea = ({ 
  label, 
  error, 
  className = '', 
  ...props 
}) => (
  <div className="space-y-1">
    {label && (
      <label className="block text-sm font-medium text-text-primary">
        {label}
      </label>
    )}
    <div className="relative">
      <textarea
        className={`
          w-full rounded-lg border px-4 py-2 resize-y min-h-[100px]
          ${error 
            ? 'border-accent-red focus:border-accent-red focus:ring-accent-red' 
            : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
          }
          ${className}
        `}
        {...props}
      />
      {error && (
        <div className="absolute top-2 right-2">
          <AlertCircle className="h-5 w-5 text-accent-red" />
        </div>
      )}
    </div>
    {error && (
      <p className="text-sm text-accent-red mt-1">{error}</p>
    )}
  </div>
);

// Loading Spinner Component
export const LoadingSpinner = ({ 
  size = 'md', 
  color = 'primary',
  className = '' 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  const colors = {
    primary: 'text-primary-600',
    white: 'text-white',
    gray: 'text-gray-600'
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={className}
    >
      <Loader2 
        className={`
          animate-spin
          ${sizes[size]} 
          ${colors[color]}
        `}
      />
    </motion.div>
  );
};

// Image Placeholder Component
export const ImagePlaceholder = ({ className = '' }) => (
  <div 
    className={`
      bg-gradient-to-br from-gray-200 to-gray-300 
      flex items-center justify-center aspect-video
      ${className}
    `}
  >
    <ImageIcon className="w-12 h-12 text-gray-400" />
  </div>
);

// Badge Component
export const Badge = ({ 
  children, 
  variant = 'primary', 
  className = '' 
}) => {
  const variants = {
    primary: 'bg-primary-100 text-primary-800',
    secondary: 'bg-secondary-100 text-secondary-800',
    success: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
    warning: 'bg-yellow-100 text-yellow-800'
  };

  return (
    <span className={`
      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
      ${variants[variant]}
      ${className}
    `}>
      {children}
    </span>
  );
};

// Avatar Component
export const Avatar = ({ 
  src, 
  alt, 
  size = 'md', 
  className = '' 
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`
      relative rounded-full overflow-hidden bg-gray-200
      ${sizes[size]}
      ${className}
    `}>
      {src ? (
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-600">
          {alt?.slice(0, 2).toUpperCase() || 'NA'}
        </div>
      )}
    </div>
  );
};

// Tooltip Component
export const Tooltip = ({ children, text, position = 'top' }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2'
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`
            absolute z-50 px-2 py-1 text-sm text-white bg-gray-900 
            rounded shadow-lg whitespace-nowrap
            ${positions[position]}
          `}
        >
          {text}
          <div className={`
            absolute w-2 h-2 bg-gray-900 transform rotate-45
            ${position === 'top' ? 'bottom-[-4px] left-1/2 -translate-x-1/2' :
              position === 'bottom' ? 'top-[-4px] left-1/2 -translate-x-1/2' :
              position === 'left' ? 'right-[-4px] top-1/2 -translate-y-1/2' :
              'left-[-4px] top-1/2 -translate-y-1/2'
            }
          `} />
        </motion.div>
      )}
    </div>
  );
};

// Divider Component with optional text
export const Divider = ({ children, className = '' }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-gray-300" />
    </div>
    {children && (
      <div className="relative flex justify-center">
        <span className="px-2 bg-white text-sm text-gray-500">
          {children}
        </span>
      </div>
    )}
  </div>
);