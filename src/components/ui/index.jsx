import React from 'react';

export const Button = ({ variant = 'primary', children, className = '', ...props }) => {
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white',
    secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white',
    success: 'bg-accent-green hover:bg-accent-green-dark text-white',
    danger: 'bg-accent-red hover:bg-accent-red-dark text-white',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
  };

  return (
    <button
      className={`px-4 py-2 rounded-lg transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const Card = ({ children, className = '', ...props }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const Tag = ({ color = 'primary', children, className = '', ...props }) => {
  const colors = {
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-secondary-100 text-secondary-700',
    green: 'bg-accent-green-light text-accent-green-dark',
    orange: 'bg-accent-orange-light text-accent-orange-dark',
    red: 'bg-accent-red-light text-accent-red-dark',
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm ${colors[color]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export const Section = ({ children, dark, className = '', ...props }) => {
  return (
    <section
      className={`py-16 ${dark ? 'bg-background-dark' : 'bg-background-light'} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
};