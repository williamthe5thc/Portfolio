// src/components/shared/ErrorBoundary.jsx
import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '../ui/components';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
    // Log the error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by ErrorBoundary:', error);
      console.error('Error Info:', errorInfo);
    }
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-background-light">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
            <div className="text-center">
              <AlertTriangle className="w-16 h-16 text-accent-red mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-text-primary mb-2">
                Something went wrong
              </h1>
              <p className="text-text-secondary mb-6">
                We apologize for the inconvenience. Please try refreshing the page or return to the home page.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={this.handleReload}
                  className="w-full sm:w-auto"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Reload page
                </Button>
                <Button
                  onClick={this.handleGoHome}
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Go home
                </Button>
              </div>
              
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-6 text-left">
                  <summary className="cursor-pointer text-text-primary font-medium">
                    Error Details
                  </summary>
                  <pre className="mt-2 p-4 bg-gray-100 rounded-lg overflow-auto text-sm text-text-secondary">
                    {this.state.error.toString()}
                    {'\n\n'}
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </details>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;