// src/components/shared/ErrorBoundary.jsx
import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '../ui';

export class ErrorBoundary extends React.Component {
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
    this.setState({ errorInfo });
    
    // Log to your error reporting service
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
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
          <div className="text-center max-w-lg">
            <AlertTriangle className="w-16 h-16 text-accent-red mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-text-primary mb-2">
              Something went wrong
            </h1>
            <p className="text-text-secondary mb-6">
              We're sorry, but there was an error loading this page. Our team has been
              notified and we're working to fix it.
            </p>
            <div className="space-x-4">
              <Button
                onClick={this.handleReload}
                className="inline-flex items-center"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reload page
              </Button>
              <Button
                variant="outline"
                onClick={this.handleGoHome}
                className="inline-flex items-center"
              >
                <Home className="w-4 h-4 mr-2" />
                Go home
              </Button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
              <details className="mt-6 text-left bg-white p-4 rounded-lg">
                <summary className="cursor-pointer text-text-primary font-medium">
                  Error Details
                </summary>
                <pre className="mt-2 text-sm text-text-secondary overflow-auto">
                  {this.state.error?.toString()}
                  {'\n'}
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;