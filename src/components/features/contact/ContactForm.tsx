/**
 * @file ContactForm.tsx
 * @description A comprehensive contact form component with validation, rate limiting, and error handling
 * @module components/features
 * 
 * @requires @emailjs/browser - For handling email submissions
 * @requires framer-motion - For animation effects
 * @requires lucide-react - For icons
 * @requires @/hooks/useAnalytics - For tracking form submissions
 * 
 * Features:
 * - Real-time form validation
 * - Rate limiting to prevent spam
 * - Animated success/error states
 * - Analytics tracking
 * - Accessibility support
 * 
 * @example
 * ```tsx
 * <ContactForm 
 *   onSubmit={(data) => console.log(data)}
 *   className="max-w-lg mx-auto"
 * />
 * ```
 */
import React, { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, AlertTriangle, CheckCircle, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAnalytics } from '@/hooks/useAnalytics';
import { siteConfig } from '@/content';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

type FormStatus =
  | 'idle'
  | 'sending'
  | 'success'
  | 'error'
  | 'rate-limited'
  /** Direct send was unavailable, so the visitor's mail client was opened instead. */
  | 'mail-client';

interface RateLimitConfig {
  maxAttempts: number;
  timeWindow: number; // in milliseconds
  cooldownPeriod: number; // in milliseconds
}

const DEFAULT_RATE_LIMIT: RateLimitConfig = {
  maxAttempts: 3,
  timeWindow: 300000, // 5 minutes
  cooldownPeriod: 3600000, // 1 hour
};

const validateForm = (values: FormData): FormErrors => {
  const errors: FormErrors = {};
  
  if (!values.name?.trim()) {
    errors.name = 'Name is required';
  } else if (values.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  if (!values.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!values.message?.trim()) {
    errors.message = 'Message is required';
  } else if (values.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }
  
  return errors;
};

export const ContactForm: React.FC<ContactFormProps> = () => {
  const { trackFormSubmission } = useAnalytics();

const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [attempts, setAttempts] = useState(0);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [cooldownEnd, setCooldownEnd] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const checkRateLimit = useCallback(() => {
    const now = Date.now();
    
    // Check if in cooldown period
    if (now < cooldownEnd) {
      return false;
    }
    
    // Reset attempts if outside time window
    if (now - lastSubmitTime > DEFAULT_RATE_LIMIT.timeWindow) {
      setAttempts(0);
      return true;
    }
    
    // Check if exceeded max attempts
    if (attempts >= DEFAULT_RATE_LIMIT.maxAttempts) {
      setCooldownEnd(now + DEFAULT_RATE_LIMIT.cooldownPeriod);
      return false;
    }
    
    return true;
  }, [attempts, lastSubmitTime, cooldownEnd]);

  const handleSubmit = async (e: React.FormEvent) => {
    try {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (!checkRateLimit()) {
      setStatus('rate-limited');
      return;
    }

    setStatus('sending');
    setAttempts(prev => prev + 1);
    setLastSubmitTime(Date.now());

    /*
      EmailJS credentials come from build-time env vars. When they are absent
      Vite compiles the call to emailjs.send(undefined, undefined, ..., undefined),
      which fails on every submission - so an unconfigured deploy silently
      swallows every message a visitor sends. Rather than fail, hand the message
      to the visitor's own mail client with everything pre-filled. Nothing is
      lost either way.
    */
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const openMailClientFallback = () => {
      const subject = `Portfolio enquiry from ${formData.name}`;
      const body = `${formData.message}\n\n---\nFrom: ${formData.name}\nReply to: ${formData.email}`;
      window.location.href =
        `mailto:${siteConfig.contactInfo.email}` +
        `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus('mail-client');
      setTimeout(() => setStatus('idle'), 8000);
    };

    if (!serviceId || !templateId || !publicKey) {
      openMailClientFallback();
      return;
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        publicKey
      );

      if (result.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      openMailClientFallback();
    }
  } catch (error) {
      trackFormSubmission('contact_form', 'error', error.message);
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'success':
        return (
          <motion.div 
            className="flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CheckCircle className="w-5 h-5" />
            <span>Message sent successfully!</span>
          </motion.div>
        );
      case 'error':
        return (
          <motion.div 
            className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            {/*
              A retry prompt alone loses the message when sending is broken at
              the config level rather than transiently - the visitor retries,
              fails again, and leaves. Surfacing the address means the contact
              still reaches its destination.
            */}
            <span>
              Failed to send message. Please email me directly at{' '}
              <a
                className="underline font-medium"
                href={`mailto:${siteConfig.contactInfo.email}`}
              >
                {siteConfig.contactInfo.email}
              </a>
              .
            </span>
          </motion.div>
        );
      case 'mail-client':
        return (
          <motion.div
            className="flex items-start gap-2 p-4 bg-blue-50 text-blue-700 rounded-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
            <span>
              Your email app should have opened with this message ready to send.
              If it did not, reach me directly at{' '}
              <a
                className="underline font-medium"
                href={`mailto:${siteConfig.contactInfo.email}`}
              >
                {siteConfig.contactInfo.email}
              </a>
              .
            </span>
          </motion.div>
        );
      case 'rate-limited':
        const timeLeft = Math.ceil((cooldownEnd - Date.now()) / 1000);
        return (
          <motion.div 
            className="flex items-center gap-2 p-4 bg-yellow-50 text-yellow-700 rounded-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertTriangle className="w-5 h-5" />
            <span>
              Too many attempts. Please wait {timeLeft} seconds before trying again.
            </span>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full rounded-lg border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } focus:ring-2 focus:ring-blue-500`}
          disabled={status === 'sending'}
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full rounded-lg border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } focus:ring-2 focus:ring-blue-500`}
          disabled={status === 'sending'}
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`w-full rounded-lg border ${
            errors.message ? 'border-red-500' : 'border-gray-300'
          } focus:ring-2 focus:ring-blue-500`}
          disabled={status === 'sending'}
        />
        {errors.message && (
          <p className="text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'sending' || status === 'rate-limited'}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? (
          <>
            <RefreshCw className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Mail className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>

      <AnimatePresence>
        {status !== 'idle' && getStatusMessage()}
      </AnimatePresence>
    </form>
  );
};

export default ContactForm;