//tests/hooks/useFormValidation.test.ts

import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useFormValidation } from '@/hooks/useFormValidation';

describe('useFormValidation', () => {
  // Test form interface
  interface TestForm {
    email: string;
    password: string;
    name?: string;
  }

  // Initial values
  const initialValues: TestForm = {
    email: '',
    password: '',
    name: ''
  };

  // Validation rules
  const validationRules = {
    email: (value: string) => {
      if (!value) return 'Email is required';
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        return 'Invalid email address';
      }
    },
    password: (value: string) => {
      if (!value) return 'Password is required';
      if (value.length < 8) return 'Password must be at least 8 characters';
    }
  };

  describe('Initial State', () => {
    it('initializes with provided values', () => {
      const { result } = renderHook(() => 
        useFormValidation<TestForm>(initialValues, validationRules)
      );

      expect(result.current.formData).toEqual(initialValues);
      expect(result.current.errors).toEqual({});
      expect(result.current.touched).toEqual({});
      expect(result.current.status).toBe('idle');
    });
  });

  describe('Form Updates', () => {
    it('handles input changes', () => {
      const { result } = renderHook(() => 
        useFormValidation<TestForm>(initialValues, validationRules)
      );

      act(() => {
        result.current.handleChange({
          target: { name: 'email', value: 'test@example.com' }
        } as any);
      });

      expect(result.current.formData.email).toBe('test@example.com');
    });

    it('tracks touched fields on blur', () => {
      const { result } = renderHook(() => 
        useFormValidation<TestForm>(initialValues, validationRules)
      );

      act(() => {
        result.current.handleBlur({
          target: { name: 'email' }
        } as any);
      });

      expect(result.current.touched.email).toBe(true);
    });
  });

  describe('Validation', () => {
    it('validates required fields', () => {
      const { result } = renderHook(() => 
        useFormValidation<TestForm>(initialValues, validationRules)
      );

      act(() => {
        result.current.handleBlur({
          target: { name: 'email' }
        } as any);
      });

      expect(result.current.errors.email).toBe('Email is required');
    });

    it('validates email format', () => {
      const { result } = renderHook(() => 
        useFormValidation<TestForm>(initialValues, validationRules)
      );

      act(() => {
        result.current.handleChange({
          target: { name: 'email', value: 'invalid-email' }
        } as any);
        result.current.handleBlur({
          target: { name: 'email' }
        } as any);
      });

      expect(result.current.errors.email).toBe('Invalid email address');
    });

    it('validates password length', () => {
      const { result } = renderHook(() => 
        useFormValidation<TestForm>(initialValues, validationRules)
      );

      act(() => {
        result.current.handleChange({
          target: { name: 'password', value: 'short' }
        } as any);
        result.current.handleBlur({
          target: { name: 'password' }
        } as any);
      });

      expect(result.current.errors.password).toBe('Password must be at least 8 characters');
    });

    it('clears errors when field becomes valid', () => {
      const { result } = renderHook(() => 
        useFormValidation<TestForm>(initialValues, validationRules)
      );

      act(() => {
        // First make it invalid
        result.current.handleChange({
          target: { name: 'email', value: 'invalid' }
        } as any);
        result.current.handleBlur({
          target: { name: 'email' }
        } as any);
      });

      expect(result.current.errors.email).toBeTruthy();

      act(() => {
        // Then make it valid
        result.current.handleChange({
          target: { name: 'email', value: 'valid@example.com' }
        } as any);
      });

      expect(result.current.errors.email).toBeUndefined();
    });
  });

  describe('Form Status', () => {
    it('handles status changes', () => {
      const { result } = renderHook(() => 
        useFormValidation<TestForm>(initialValues, validationRules)
      );

      act(() => {
        result.current.setStatus('submitting');
      });

      expect(result.current.status).toBe('submitting');
    });

    it('resets form state', () => {
      const { result } = renderHook(() => 
        useFormValidation<TestForm>(initialValues, validationRules)
      );

      act(() => {
        result.current.handleChange({
          target: { name: 'email', value: 'test@example.com' }
        } as any);
        result.current.handleBlur({
          target: { name: 'email' }
        } as any);
        result.current.reset();
      });

      expect(result.current.formData).toEqual(initialValues);
      expect(result.current.errors).toEqual({});
      expect(result.current.touched).toEqual({});
      expect(result.current.status).toBe('idle');
    });
  });

  describe('Performance', () => {
    it('memoizes event handlers', () => {
      const { result, rerender } = renderHook(() => 
        useFormValidation<TestForm>(initialValues, validationRules)
      );

      const initialHandleChange = result.current.handleChange;
      const initialHandleBlur = result.current.handleBlur;

      rerender();

      expect(result.current.handleChange).toBe(initialHandleChange);
      expect(result.current.handleBlur).toBe(initialHandleBlur);
    });
  });

  describe('Edge Cases', () => {
    it('handles undefined validation rules', () => {
      const { result } = renderHook(() => 
        useFormValidation<TestForm>(initialValues, {})
      );

      act(() => {
        result.current.handleChange({
          target: { name: 'email', value: 'test@example.com' }
        } as any);
        result.current.handleBlur({
          target: { name: 'email' }
        } as any);
      });

      expect(result.current.errors.email).toBeUndefined();
    });

    it('handles non-existent fields', () => {
      const { result } = renderHook(() => 
        useFormValidation<TestForm>(initialValues, validationRules)
      );

      act(() => {
        result.current.handleChange({
          target: { name: 'nonexistent', value: 'test' }
        } as any);
      });

      expect(result.current.formData).not.toHaveProperty('nonexistent');
    });
  });
});