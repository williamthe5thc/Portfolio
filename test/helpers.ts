//tests/helpers.ts
import { vi } from 'vitest';

// Common test data
export const mockProject = {
  id: 'test-project',
  title: 'Test Project',
  description: 'Test Description',
  image: '/test-image.jpg',
  category: 'development' as const,
  tags: ['React', 'TypeScript'],
  status: 'completed' as const,
  date: '2024',
  detailPage: true
};

export const mockUser = {
  name: 'Test User',
  email: 'test@example.com',
  message: 'Test message'
};

// Common mock functions
export const mockNavigate = vi.fn();
export const mockIntersectionObserver = vi.fn();

// Helper to wait for animations
export const waitForAnimation = (ms = 300) => 
  new Promise(resolve => setTimeout(resolve, ms));

// Helper to mock API responses
export const mockApiResponse = (data: any) => {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};