// src/hooks/useFormValidation.js
import { useState, useCallback } from 'react';

export const useFormValidation = (initialValues, validate) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState(null);

  // Basic validation function if no validation schema is provided
  const defaultValidate = (name, value) => {
    let error;
    if (!value) {
      error = `${name} is required`;
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Email is invalid';
    }
    return error;
  };

  const validateField = useCallback((name, value) => {
    const validationError = validate ? 
      validate[name]?.(value) : 
      defaultValidate(name, value);
    
    setErrors(prev => ({
      ...prev,
      [name]: validationError
    }));
  }, [validate]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      validateField(name, value);
    }
  }, [touched, validateField]);

  const handleBlur = useCallback((name) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, formData[name]);
  }, [formData, validateField]);

  const reset = useCallback(() => {
    setFormData(initialValues);
    setErrors({});
    setTouched({});
    setStatus(null);
  }, [initialValues]);

  const setFieldValue = useCallback((name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name]) {
      validateField(name, value);
    }
  }, [touched, validateField]);

  return {
    formData,
    errors,
    touched,
    status,
    setStatus,
    handleChange,
    handleBlur,
    setFieldValue,
    reset
  };
};