// src/pages/NotFoundPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui';
import { fadeInUp } from '../components/shared/animations';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        className="text-center"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-text-secondary mb-8 max-w-md">
          Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped
          the URL or the page has been moved.
        </p>
        <div className="space-x-4">
          <Button onClick={() => navigate(-1)}>
            Go Back
          </Button>
          <Button 
            variant="outline"
            onClick={() => navigate('/')}
          >
            Go Home
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;