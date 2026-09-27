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
 * <ContactForm className="max-w-lg mx-auto" />
 * ```
 */
import React, { useState, useCallback, useEffect, useRef } from 'react';
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

export interface ContactFormProps {
  className?: string;
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

const FIELD_ORDER: Array<keyof FormData> = ['name', 'email', 'message'];

/*
  EmailJS credentials come from build-time env vars. When they are absent
  Vite compiles the call to emailjs.send(undefined, undefined, ..., undefined),
  which fails on every submission - so an unconfigured deploy silently
  swallows every message a visitor sends. Rather than fail, the form hands the
  message to the visitor's own mail client with everything pre-filled.

  That has to be said up front, not discovered after clicking: a "Send
  Message" button promises delivery, and on webmail or a locked-down work
  laptop the mail client never opens. So without credentials the button reads
  "Open in Email App" and the form says where the message goes.
*/
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const canSendDirectly = Boolean(
  EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY
);

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

const fieldClasses = (hasError: boolean) =>
  `w-full min-h-[44px] rounded-lg border bg-white px-3 py-2 text-text-primary ${
    hasError ? 'border-red-500' : 'border-gray-500'
  } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`;

export const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
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
  const [focusField, setFocusField] = useState<keyof FormData | null>(null);

  const fieldRefs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    message: useRef<HTMLTextAreaElement>(null)
  };

  /*
    One timer for the status banner, cleared whenever a new status is set.
    Each submit used to start its own un-cleared setTimeout, so a timer from an
    earlier submit could wipe a newer banner - most visibly the rate-limit
    warning, which vanished while the button still refused to send.
  */
  const statusTimer = useRef<ReturnType<typeof setTimeout>>();
  const showStatus = useCallback((next: FormStatus, clearAfterMs?: number) => {
    clearTimeout(statusTimer.current);
    setStatus(next);
    if (clearAfterMs !== undefined) {
      statusTimer.current = setTimeout(() => setStatus('idle'), clearAfterMs);
    }
  }, []);
  useEffect(() => () => clearTimeout(statusTimer.current), []);

  // Focus the first invalid field once its error message has rendered, so the
  // message is read out as the field's description.
  useEffect(() => {
    if (focusField) {
      fieldRefs[focusField].current?.focus();
      setFocusField(null);
    }
  }, [focusField]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  /** Returns 0 when a send is allowed, otherwise the time sending reopens. */
  const checkRateLimit = useCallback((): number => {
    const now = Date.now();
    
    // Check if in cooldown period
    if (now < cooldownEnd) {
      return cooldownEnd;
    }
    
    // Reset attempts if outside time window
    if (now - lastSubmitTime > DEFAULT_RATE_LIMIT.timeWindow) {
      setAttempts(0);
      return 0;
    }
    
    // Check if exceeded max attempts
    if (attempts >= DEFAULT_RATE_LIMIT.maxAttempts) {
      const end = now + DEFAULT_RATE_LIMIT.cooldownPeriod;
      setCooldownEnd(end);
      return end;
    }
    
    return 0;
  }, [attempts, lastSubmitTime, cooldownEnd]);

  const openMailClientFallback = (reason: string) => {
    const subject = `Portfolio inquiry from ${formData.name}`;
    const body = `${formData.message}\n\n---\nFrom: ${formData.name}\nReply to: ${formData.email}`;
    window.location.href =
      `mailto:${siteConfig.contactInfo.email}` +
      `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // Stays up (no auto-clear): if no mail app opened, the address in this
    // banner is the visitor's only way to reach the owner.
    showStatus('mail-client');
    trackFormSubmission('contact_form', 'error', reason);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFocusField(FIELD_ORDER.find(field => validationErrors[field]) ?? null);
      return;
    }

    // Opening the visitor's own mail app is not a send, so it doesn't count
    // toward the limit - it used to, and three tries locked people out for
    // an hour.
    if (!canSendDirectly) {
      openMailClientFallback('mail_client_not_configured');
      return;
    }

    const retryAt = checkRateLimit();
    if (retryAt) {
      // Clears itself (and re-enables the button) when the cooldown ends.
      showStatus('rate-limited', retryAt - Date.now());
      return;
    }

    showStatus('sending');
    setAttempts(prev => prev + 1);
    setLastSubmitTime(Date.now());

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        showStatus('success', 5000);
        setFormData({ name: '', email: '', message: '' });
        trackFormSubmission('contact_form', 'success');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      openMailClientFallback('send_failed_mail_client_fallback');
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'success':
        return (
          <motion.div 
            className="mt-6 flex items-center gap-2 p-4 bg-green-50 text-green-700 rounded-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CheckCircle className="w-5 h-5" aria-hidden="true" />
            <span>Message sent successfully!</span>
          </motion.div>
        );
      case 'error':
        return (
          <motion.div 
            className="mt-6 flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertTriangle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
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
            className="mt-6 flex items-start gap-2 p-4 bg-blue-50 text-blue-700 rounded-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
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
        // A clock time, not a countdown: it stays correct without re-rendering.
        return (
          <motion.div 
            className="mt-6 flex items-start gap-2 p-4 bg-yellow-50 text-yellow-800 rounded-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              Several messages were just sent from this form. You can send another
              after{' '}
              {new Date(cooldownEnd).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })},
              or email me directly at{' '}
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
      default:
        return null;
    }
  };

  const isAlert = status === 'error' || status === 'rate-limited';

  const errorProps = (field: keyof FormData) =>
    errors[field]
      ? { 'aria-invalid': true, 'aria-describedby': `${field}-error` }
      : { 'aria-invalid': false };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <p className="text-sm text-text-secondary">All fields are required.</p>

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            ref={fieldRefs.name}
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={fieldClasses(!!errors.name)}
            disabled={status === 'sending'}
            {...errorProps('name')}
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            ref={fieldRefs.email}
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={fieldClasses(!!errors.email)}
            disabled={status === 'sending'}
            {...errorProps('email')}
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            ref={fieldRefs.message}
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={fieldClasses(!!errors.message)}
            disabled={status === 'sending'}
            {...errorProps('message')}
          />
          {errors.message && (
            <p id="message-error" className="text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {!canSendDirectly && (
          <p id="contact-form-delivery" className="text-sm text-text-secondary">
            This opens a pre-filled email in your email app for you to send. Using
            webmail or a shared computer? Email me directly at{' '}
            <a
              className="underline font-medium text-blue-700"
              href={`mailto:${siteConfig.contactInfo.email}`}
            >
              {siteConfig.contactInfo.email}
            </a>
            .
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'sending' || status === 'rate-limited'}
          aria-describedby={canSendDirectly ? undefined : 'contact-form-delivery'}
          className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? (
            <>
              <RefreshCw className="w-5 h-5 animate-spin" aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              <Mail className="w-5 h-5" aria-hidden="true" />
              {canSendDirectly ? 'Send Message' : 'Open in Email App'}
            </>
          )}
        </button>
      </form>

      {/*
        The live regions stay mounted and only their contents change - screen
        readers ignore a region that appears together with its message.
        Problems go to the assertive alert region, confirmations to status.
      */}
      <div role="status" aria-live="polite" aria-atomic="true">
        <AnimatePresence>
          {status !== 'idle' && !isAlert && getStatusMessage()}
        </AnimatePresence>
      </div>
      <div role="alert" aria-atomic="true">
        <AnimatePresence>
          {isAlert && getStatusMessage()}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactForm;
