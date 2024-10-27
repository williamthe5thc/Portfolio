// src/components/shared/forms/ContactForm.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { FormInput, FormTextArea } from '../../ui/FormElements';
import { useFormValidation } from '../../../hooks/useFormValidation';

const ContactForm = ({ onSubmit: onSubmitProp }) => {
  const validation = {
    name: (value) => {
      if (!value) return 'Name is required';
      if (value.length < 2) return 'Name must be at least 2 characters';
      return undefined;
    },
    email: (value) => {
      if (!value) return 'Email is required';
      if (!/\S+@\S+\.\S+/.test(value)) return 'Email is invalid';
      return undefined;
    },
    message: (value) => {
      if (!value) return 'Message is required';
      if (value.length < 10) return 'Message must be at least 10 characters';
      return undefined;
    }
  };

  const {
    formData,
    errors,
    touched,
    status,
    setStatus,
    handleChange,
    handleBlur,
    reset
  } = useFormValidation({
    name: '',
    email: '',
    message: ''
  }, validation);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await onSubmitProp(formData);
      setStatus('success');
      reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <FormInput
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        onBlur={() => handleBlur('name')}
        error={errors.name}
        touched={touched.name}
      />

      <FormInput
        name="email"
        type="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        onBlur={() => handleBlur('email')}
        error={errors.email}
        touched={touched.email}
      />

      <FormTextArea
        name="message"
        label="Message"
        value={formData.message}
        onChange={handleChange}
        onBlur={() => handleBlur('message')}
        error={errors.message}
        touched={touched.message}
        rows={4}
      />
      
      <motion.button
        type="submit"
        disabled={status === 'sending'}
        className={`
          w-full bg-primary-600 text-white px-6 py-3 rounded-lg 
          transition-colors disabled:opacity-50 disabled:cursor-not-allowed
          hover:bg-primary-700
        `}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="flex items-center justify-center gap-2">
          {status === 'sending' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </span>
      </motion.button>
      
      {status && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`
            p-3 rounded-lg 
            ${status === 'success' ? 'bg-accent-green-light text-accent-green-dark' : 
              status === 'error' ? 'bg-accent-red-light text-accent-red-dark' : 
              'bg-primary-100 text-primary-700'}
          `}
        >
          <div className="flex items-center gap-2">
            {status === 'success' ? (
              <CheckCircle className="w-5 h-5" />
            ) : status === 'error' ? (
              <AlertCircle className="w-5 h-5" />
            ) : (
              <Loader2 className="w-5 h-5 animate-spin" />
            )}
            <span>
              {status === 'success' ? 'Message sent successfully!' :
               status === 'error' ? 'Failed to send message. Please try again.' :
               'Sending...'}
            </span>
          </div>
        </motion.div>
      )}
    </form>
  );
};

export default ContactForm;