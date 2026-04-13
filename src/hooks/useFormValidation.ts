
import { useState } from 'react';

interface ValidationRules {
  required?: boolean;
  minLength?: number;
  email?: boolean;
}

interface FormField {
  value: string;
  error: string;
  rules: ValidationRules;
}

interface FormState {
  [key: string]: FormField;
}

export const useFormValidation = (initialState: FormState) => {
  const [formState, setFormState] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name: string, value: string, rules: ValidationRules): string => {
    if (rules.required && !value.trim()) {
      return `${name} is required`;
    }
    
    if (rules.minLength && value.length < rules.minLength) {
      return `${name} must be at least ${rules.minLength} characters`;
    }
    
    if (rules.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address';
    }
    
    return '';
  };

  const updateField = (name: string, value: string) => {
    setFormState(prev => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        error: validateField(name, value, prev[name].rules)
      }
    }));
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newState = { ...formState };

    Object.keys(formState).forEach(key => {
      const field = formState[key];
      const error = validateField(key, field.value, field.rules);
      newState[key] = { ...field, error };
      if (error) isValid = false;
    });

    setFormState(newState);
    return isValid;
  };

  const resetForm = () => {
    const resetState = Object.keys(formState).reduce((acc, key) => ({
      ...acc,
      [key]: { ...formState[key], value: '', error: '' }
    }), {});
    setFormState(resetState);
  };

  return {
    formState,
    isSubmitting,
    setIsSubmitting,
    updateField,
    validateForm,
    resetForm
  };
};
