// src/components/features/contact/ContactForm.tsx

import React, { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Loader2, CheckCircle, AlertTriangle, RefreshCw } from 'lucide-react';
import { Input, TextArea, Button } from '@/components/ui';
import { useFormValidation } from '@/hooks/useFormValidation';

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

type FormStatus = null | 'sending' | 'success' | 'error' | 'rate-limited';

interface RateLimitConfig {
  maxAttempts: number;
  duration: number;  // in milliseconds
}

interface ContactFormProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  className?: string;
  rateLimitConfig?: RateLimitConfig;
}

const DEFAULT_RATE_LIMIT: RateLimitConfig = {
  maxAttempts: 3,
  duration: 60000, // 1 minute
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
  } else if (values.message.length > 1000) {
    errors.message = 'Message must be less than 1000 characters';
  }
  
  return errors;
};

export const ContactForm: React.FC<ContactFormProps> = ({ 
  onSuccess,
  onError,
  className = '',
  rateLimitConfig = DEFAULT_RATE_LIMIT
}) => {
  const [status, setStatus] = useState<FormStatus>(null);
  const [attempts, setAttempts] = useState(0);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [errorDetails, setErrorDetails] = useState('');

  const {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    reset: resetForm
  } = useFormValidation<FormData>(
    {
      name: '',
      email: '',
      message: ''
    },
    validateForm
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);

    // Check rate limiting
    const now = Date.now();
    if (now - lastSubmitTime < rateLimitConfig.duration) {
      setStatus('rate-limited');
      setErrorDetails(`Please wait ${Math.ceil((rateLimitConfig.duration - (now - lastSubmitTime)) / 1000)} seconds`);
      return;
    }

    if (attempts >= rateLimitConfig.maxAttempts) {
      setStatus('rate-limited');
      setErrorDetails('Maximum attempts reached. Please try again later.');
      return;
    }

    if (Object.keys(validationErrors).length === 0) {
      setStatus('sending');
      setAttempts(prev => prev + 1);
      setLastSubmitTime(now);
      
      try {
        const result = await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
            to_name: 'Jordan Charles',
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        if (result.status === 200) {
          setStatus('success');
          resetForm();
          setAttempts(0);
          onSuccess?.();
          setTimeout(() => setStatus(null), 5000);
        } else {
          throw new Error('Failed to send message');
        }
      } catch (error) {
        console.error('EmailJS error:', error);
        setStatus('error');
        setErrorDetails((error as Error).message || 'Failed to send message');
        onError?.(error as Error);
      }
    }
  };

  const renderStatusMessage = () => {
    if (!status) return null;

    const statusConfig = {
      success: {
        bgColor: 'bg-green-50',
        textColor: 'text-green-600',
        Icon: CheckCircle,
        message: 'Message sent successfully!'
      },
      error: {
        bgColor: 'bg-red-50',
        textColor: 'text-red-600',
        Icon: AlertTriangle,
        message: 'Failed to send message.'
      },
      'rate-limited': {
        bgColor: 'bg-yellow-50',
        textColor: 'text-yellow-600',
        Icon: AlertTriangle,
        message: errorDetails
      }
    };

    const config = statusConfig[status === 'sending' ? 'success' : status];
    if (!config) return null;

    const { bgColor, textColor, Icon, message } = config;

    return (
      <div
        className={`flex items-center gap-2 p-3 rounded ${bgColor} ${textColor}`}
        role="alert"
      >
        <Icon className="w-5 h-5" />
        <div className="flex-1">
          <span>{message}</span>
          {status === 'error' && errorDetails && (
            <span className="block text-sm">{errorDetails}</span>
          )}
        </div>
        {status === 'error' && (
          <button
            onClick={resetForm}
            className="p-1 hover:bg-red-100 rounded-full transition-colors"
            aria-label="Try again"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <Input
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.name ? errors.name : undefined}
        disabled={status === 'sending'}
      />

      <Input
        name="email"
        type="email"
        label="Email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.email ? errors.email : undefined}
        disabled={status === 'sending'}
      />

      <TextArea
        name="message"
        label="Message"
        value={formData.message}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.message ? errors.message : undefined}
        disabled={status === 'sending'}
        rows={4}
      />

      <Button
        type="submit"
        isLoading={status === 'sending'}
        disabled={status === 'sending' || status === 'rate-limited'}
        className="w-full"
        icon={Mail}
      >
        Send Message
      </Button>

      {renderStatusMessage()}
    </form>
  );
};