// src/pages/NotFoundPage.tsx
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui';
import { fadeInUp } from '@/lib/animations';
import BasePage from './BasePage';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const NotFoundContent = () => (
    <motion.div 
      className="flex flex-col items-center justify-center min-h-[60vh]"
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
        Sorry, we couldn't find the page you're looking for.
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
    </motion.div>
  );

  return (
    <BasePage
      seo={{
        title: "404 - Page Not Found",
        description: "The page you're looking for doesn't exist",
        noindex: true
      }}
      title=""  // Empty title since we're using custom content
      className="bg-background-light"
      animation={{
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 }
      }}
    >
      <NotFoundContent />
    </BasePage>
  );
};

export default NotFoundPage;