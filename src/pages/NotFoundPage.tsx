// src/pages/NotFoundPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { RouteTransition } from '@/components/layout/RouteTransition';
import { Button } from '@/components/ui';

const NotFoundPage: React.FC = () => {
  return (
    <RouteTransition>
      <div className="min-h-screen bg-background-light flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          {/* Large 404 */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-text-primary mb-2">
              Page Not Found
            </h2>
            <p className="text-text-secondary">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              as={Link} 
              to="/" 
              variant="primary" 
              className="inline-flex items-center gap-2"
            >
              <Home size={20} />
              Go Home
            </Button>
            
            <Button 
              onClick={() => window.history.back()} 
              variant="outline"
              className="inline-flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Go Back
            </Button>
          </div>

          {/* Helpful links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-text-secondary mb-4">
              Looking for something specific?
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link 
                to="/portfolio" 
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                View Portfolio
              </Link>
              <Link 
                to="/about" 
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                About Me
              </Link>
              <Link 
                to="/contact" 
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </RouteTransition>
  );
};

export default NotFoundPage;