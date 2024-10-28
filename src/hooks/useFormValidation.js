// src/hooks/useFormValidations.js

// Form validation hook
export const useFormValidation = (initialValues, validate) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState(null);

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

  return {
    formData,
    errors,
    touched,
    status,
    setStatus,
    handleChange,
    handleBlur,
    reset
  };
};

// Animation presence hook
export const useAnimationPresence = () => {
  const [isPresent, setIsPresent] = useState(true);

  const safeUnmount = useCallback((callback) => {
    setIsPresent(false);
    setTimeout(callback, 300); // Match this with your animation duration
  }, []);

  return { isPresent, safeUnmount };
};

// Modal hook
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen(prev => !prev), []);

  return {
    isOpen,
    open,
    close,
    toggle
  };
};

// Intersection observer hook for animations
export const useIntersectionObserver = (options = {}) => {
  const [ref, setRef] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback = useCallback(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    []
  );

  useEffect(() => {
    if (ref) {
      const observer = new IntersectionObserver(callback, options);
      observer.observe(ref);
      return () => observer.disconnect();
    }
  }, [ref, options, callback]);

  return [setRef, isVisible];
};

// Basic form state hook
export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  }, []);

  const reset = useCallback(() => {
    setValues(initialState);
  }, [initialState]);

  return {
    values,
    handleChange,
    reset,
    setValues
  };
};