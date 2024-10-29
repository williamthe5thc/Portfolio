// src/components/ui/components.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Loader2, AlertCircle, Image as ImageIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Add to src/components/ui/components.jsx

export const CollapsibleSection = ({ 
  title, 
  children, 
  defaultOpen = false,
  className = '' 
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border rounded-lg ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        <span className="text-lg font-medium">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Icons.ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-4 py-3 border-t">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // Make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 md:bottom-8 md:right-8"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ResponsiveContainer handles different screen sizes with appropriate padding
export const ResponsiveContainer = ({ children, className = '' }) => (
  <div className={`
    w-full px-4 mx-auto
    sm:px-6 
    md:px-8 
    lg:px-12 
    xl:max-w-7xl
    ${className}
  `}>
    {children}
  </div>
);

// ResponsiveGrid provides a responsive grid layout
export const ResponsiveGrid = ({ 
  children, 
  cols = {
    default: 1,
    sm: 1,
    md: 2,
    lg: 3
  },
  gap = "gap-6",
  className = '' 
}) => {
  const getGridCols = () => {
    const colClasses = [];
    if (cols.default) colClasses.push(`grid-cols-${cols.default}`);
    if (cols.sm) colClasses.push(`sm:grid-cols-${cols.sm}`);
    if (cols.md) colClasses.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) colClasses.push(`lg:grid-cols-${cols.lg}`);
    return colClasses.join(' ');
  };

  return (
    <div className={`grid ${getGridCols()} ${gap} ${className}`}>
      {children}
    </div>
  );
};

// ResponsiveText adjusts text size based on screen size
export const ResponsiveText = ({ 
  children,
  size = {
    default: 'base',
    sm: 'lg',
    md: 'xl',
    lg: '2xl'
  },
  className = '' 
}) => {
  const getTextSize = () => {
    const sizeClasses = [];
    if (size.default) sizeClasses.push(`text-${size.default}`);
    if (size.sm) sizeClasses.push(`sm:text-${size.sm}`);
    if (size.md) sizeClasses.push(`md:text-${size.md}`);
    if (size.lg) sizeClasses.push(`lg:text-${size.lg}`);
    return sizeClasses.join(' ');
  };

  return (
    <div className={`${getTextSize()} ${className}`}>
      {children}
    </div>
  );
};

// ResponsiveImage handles image sizing and loading
export const ResponsiveImage = ({ 
  src, 
  alt, 
  className = '',
  sizes = "100vw",
  priority = false 
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="w-full h-auto object-cover"
        sizes={sizes}
      />
    </div>
  );
};

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
// Update in src/components/ui/components.jsx

export const FormInput = ({ 
  label, 
  error, 
  className = '', 
  type = 'text',
  ...props 
}) => (
  <div className="space-y-2">
    {label && (
      <label className="block text-sm font-medium text-text-primary">
        {label}
      </label>
    )}
    <div className="relative">
      <input
        type={type}
        className={`
          w-full rounded-lg border px-4 py-3 min-h-[44px] text-base
          ${error 
            ? 'border-accent-red focus:border-accent-red focus:ring-accent-red' 
            : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
          }
          ${className}
        `}
        autoComplete={
          type === 'email' ? 'email' :
          type === 'tel' ? 'tel' :
          type === 'name' ? 'name' :
          'off'
        }
        {...props}
      />
      {error && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <AlertCircle className="h-5 w-5 text-accent-red" />
        </div>
      )}
    </div>
    {error && (
      <p className="text-sm text-accent-red">{error}</p>
    )}
  </div>
);

export const FormTextArea = ({ 
  label, 
  error, 
  className = '', 
  ...props 
}) => (
  <div className="space-y-2">
    {label && (
      <label className="block text-sm font-medium text-text-primary">
        {label}
      </label>
    )}
    <div className="relative">
      <textarea
        className={`
          w-full rounded-lg border px-4 py-3 resize-y min-h-[120px] text-base
          leading-relaxed
          ${error 
            ? 'border-accent-red focus:border-accent-red focus:ring-accent-red' 
            : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500'
          }
          ${className}
        `}
        {...props}
      />
      {error && (
        <div className="absolute top-3 right-3">
          <AlertCircle className="h-5 w-5 text-accent-red" />
        </div>
      )}
    </div>
    {error && (
      <p className="text-sm text-accent-red">{error}</p>
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