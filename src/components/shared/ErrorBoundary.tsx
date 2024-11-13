// src/components/shared/ErrorBoundary.tsx
/**
 * @file ErrorBoundary.tsx
 * @description Error boundary component for graceful error handling
 * @module components/shared
 * 
 * Features:
 * - Catches and handles React component errors
 * - Customizable fallback UI
 * - Development mode error details
 * - Error reporting integration
 * - Recovery options
 * 
 * @example
 * ```tsx
 * // Basic usage
 * <ErrorBoundary>
 *   <App />
 * </ErrorBoundary>
 * 
 * // With custom error handler
 * <ErrorBoundary 
 *   onError={(error, errorInfo) => logError(error, errorInfo)}
 *   fallback={<CustomErrorUI />}
 * >
 *   <App />
 * </ErrorBoundary>
 * ```
 */
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { 
      hasError: true, 
      error, 
      errorInfo: null 
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      errorInfo
    });

    // Log error to an error reporting service
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by ErrorBoundary:', error);
      console.error('Error Info:', errorInfo);
    }

    this.props.onError?.(error, errorInfo);
  }

  private handleReload = (): void => {
    window.location.reload();
  };

  private handleGoHome = (): void => {
    window.location.href = '/Portfolio/index.html';
  };

  public render(): ReactNode {
    if (this.state.hasError) {
      // Check for custom fallback
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI
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
                  icon={RefreshCw}
                >
                  Reload page
                </Button>
                <Button
                  onClick={this.handleGoHome}
                  variant="outline"
                  className="w-full sm:w-auto"
                  icon={Home}
                >
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