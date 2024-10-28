// src/components/shared/forms.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { fadeInUp } from './animations';
import { FormInput, FormTextArea } from '../ui/components';

// Contact Method Component
export const ContactMethod = ({ 
  icon: IconName, 
  title, 
  content, 
  link, 
  color = "text-primary-600" 
}) => {
  const Icon = IconName === 'Mail' ? Mail :
              IconName === 'Phone' ? Phone :
              IconName === 'Linkedin' ? Linkedin :
              MapPin;
  
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

// Form validation helper
const validateForm = (values) => {
  const errors = {};
  
  if (!values.name) {
    errors.name = 'Name is required';
  }
  
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }
  
  if (!values.message) {
    errors.message = 'Message is required';
  } else if (values.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return errors;
};

// Contact Form Component
export const ContactForm = ({ onSubmit: handleSubmit }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = React.useState({});
  const [touched, setTouched] = React.useState({});
  const [status, setStatus] = React.useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      const validationErrors = validateForm({ ...formData, [name]: value });
      setErrors(prev => ({ ...prev, [name]: validationErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const validationErrors = validateForm(formData);
    setErrors(prev => ({ ...prev, [name]: validationErrors[name] }));
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(validationErrors).length === 0) {
      setStatus('sending');
      try {
        await handleSubmit(formData);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTouched({});
      } catch (error) {
        setStatus('error');
      }
    }
  };

  return (
    <form onSubmit={onSubmitForm} className="space-y-6">
      <FormInput
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name ? errors.name : ''}
      />

      <FormInput
        name="email"
        type="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email ? errors.email : ''}
      />

      <FormTextArea
        name="message"
        label="Message"
        value={formData.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.message ? errors.message : ''}
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
            ${status === 'success' ? 'bg-green-100 text-green-800' : 
              status === 'error' ? 'bg-red-100 text-red-800' : 
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