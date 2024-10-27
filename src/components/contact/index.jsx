import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Card } from '../ui';
import { fadeInUp } from '../shared';

export const ContactMethod = ({ icon: IconName, title, content, link, color = "text-primary-600" }) => {
  const Icon = Icons[IconName];
  
  const Inner = () => (
    <>
      <Icon className={`w-6 h-6 ${color} mt-1`} />
      <div>
        <h3 className="font-semibold text-text-primary">{title}</h3>
        <p className={link ? `${color} hover:opacity-80` : "text-text-secondary"}>
          {content}
        </p>
      </div>
    </>
  );

  return (
    <motion.div 
      variants={fadeInUp}
      className="flex items-start gap-4"
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

export const ContactForm = ({ onSubmit, status, errors, touched, handleChange, handleBlur, formData }) => {
  const inputClassName = (field) => `
    w-full rounded-lg border-background-dark
    focus:border-primary-500 focus:ring-primary-500
    ${touched[field] && errors[field] ? 'border-accent-red' : ''}
  `;

  const formFields = [
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'email', label: 'Email', type: 'email' },
    { id: 'message', label: 'Message', type: 'textarea' }
  ];

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id} className="block text-sm font-medium text-text-primary mb-1">
            {label}
          </label>
          {type === 'textarea' ? (
            <textarea
              id={id}
              rows={4}
              value={formData[id]}
              onChange={handleChange}
              onBlur={() => handleBlur(id)}
              className={inputClassName(id)}
            />
          ) : (
            <input
              type={type}
              id={id}
              value={formData[id]}
              onChange={handleChange}
              onBlur={() => handleBlur(id)}
              className={inputClassName(id)}
            />
          )}
          {touched[id] && errors[id] && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent-red text-sm mt-1"
            >
              {errors[id]}
            </motion.p>
          )}
        </div>
      ))}
      
      <motion.button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors
          ${status === 'sending' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary-700'}`}
        whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
        whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
      >
        <span className="flex items-center justify-center gap-2">
          <Icons.Send className="w-5 h-5" />
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </span>
      </motion.button>
      
      {status && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`p-3 rounded-lg ${
            status === 'success' ? 'bg-accent-green-light text-accent-green-dark' :
            status === 'error' ? 'bg-accent-red-light text-accent-red-dark' :
            'bg-primary-100 text-primary-700'
          }`}
        >
          <div className="flex items-center gap-2">
            {status === 'success' ? (
              <Icons.CheckCircle className="w-5 h-5" />
            ) : status === 'error' ? (
              <Icons.AlertCircle className="w-5 h-5" />
            ) : (
              <div className="animate-spin">
                <Icons.Loader2 className="w-5 h-5" />
              </div>
            )}
            <span>
              {status === 'sending' ? 'Sending...' :
               status === 'success' ? 'Message sent successfully!' :
               'Failed to send message. Please try again.'}
            </span>
          </div>
        </motion.div>
      )}
    </form>
  );
};