// src/pages/NotFoundPage.tsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { SEO } from '@/components/shared';
import { Button } from '@/components/ui';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  // React Router numbers its history entries. At idx 0 this 404 is the first
  // page of the visit (a stale shared link), so "back" would leave the site:
  // go home instead.
  const goBack = () => {
    const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0;
    if (idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <SEO title="Page not found" noindex />
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
            {/*
              href, not as={Link} to="/": Button has no `as`/`to` props, so
              that rendered a plain <button> with no handler. An internal href
              makes Button render a router <Link>.
            */}
            <Button
              href="/"
              variant="primary"
              icon={Home}
            >
              Go Home
            </Button>

            <Button
              onClick={goBack}
              variant="outline"
              icon={ArrowLeft}
            >
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
                to="/resume"
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                Resume
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
    </>
  );
};

export default NotFoundPage;
