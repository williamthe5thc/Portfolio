// src/hooks/useFormValidation.ts
import { useState, useCallback, ChangeEvent, FocusEvent } from 'react';

type ValidationRules<T> = {
  [K in keyof T]?: (value: T[K]) => string | undefined;
};

interface UseFormValidationReturn<T> {
  formData: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  status: 'idle' | 'submitting' | 'success' | 'error';
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  setStatus: (status: 'idle' | 'submitting' | 'success' | 'error') => void;
  reset: () => void;
}

export const useFormValidation = <T extends Record<string, any>>(
  initialValues: T,
  validate?: ValidationRules<T>
): UseFormValidationReturn<T> => {
  const [formData, setFormData] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateField = useCallback((name: keyof T, value: T[keyof T]) => {
    if (validate?.[name]) {
      const error = validate[name]?.(value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  }, [validate]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      validateField(name as keyof T, value);
    }
  }, [touched, validateField]);

  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name as keyof T, formData[name as keyof T]);
  }, [formData, validateField]);

  const reset = useCallback(() => {
    setFormData(initialValues);
    setErrors({});
    setTouched({});
    setStatus('idle');
  }, [initialValues]);

  return {
    formData,
    errors,
    touched,
    status,
    handleChange,
    handleBlur,
    setStatus,
    reset
  };
};