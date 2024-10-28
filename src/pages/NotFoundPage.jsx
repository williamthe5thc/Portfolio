import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { fadeInUp } from '../components/shared/animations';
import { Button } from '../components/ui/components';
import { SEO } from '../components/shared';
import { siteMetadata } from '../data/siteData';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist"
        noindex={true}
      />
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div 
          className="text-center max-w-lg"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-9xl font-bold text-primary-600 mb-4"
            variants={fadeInUp}
          >
            404
          </motion.h1>
          
          <motion.h2 
            className="text-2xl font-bold text-text-primary mb-4"
            variants={fadeInUp}
          >
            Page Not Found
          </motion.h2>
          
          <motion.p 
            className="text-text-secondary mb-8"
            variants={fadeInUp}
          >
            Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped
            the URL or the page has been moved.
          </motion.p>
          
          <motion.div 
            className="space-x-4"
            variants={fadeInUp}
          >
            <Button 
              onClick={() => navigate(-1)}
              variant="primary"
            >
              Go Back
            </Button>
            
            <Button 
              onClick={() => navigate('/')}
              variant="outline"
            >
              Return to Home
            </Button>
          </motion.div>

          <motion.div 
            className="mt-8 text-text-light"
            variants={fadeInUp}
          >
            <p>
              Need help? {' '}
              <a 
                href={`mailto:${siteMetadata.contactInfo.email}`}
                className="text-primary-600 hover:text-primary-700"
              >
                Contact me
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default NotFoundPage;