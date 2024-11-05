// src/components/shared/forms.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { fadeInUp } from './animations';
import { FormInput, FormTextArea } from '../ui/components';

interface ContactMethodProps {
  icon: 'Mail' | 'Phone' | 'Linkedin' | 'MapPin';
  title: string;
  content: string;
  link?: string;
  color?: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: FormData) => Promise<void>;
}

// ... (Component implementations with proper TypeScript types)