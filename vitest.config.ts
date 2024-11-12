import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './test/setup.ts',
    include: [
      './test/**/*.{test,spec}.{ts,tsx}',
      './src/**/*.{test,spec}.{ts,tsx}'
    ],
    exclude: [
      'node_modules',
      '.git',
      'dist',
      'cypress',
      'storybook-static'
    ],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'test/setup.ts',
        'test/__mocks__/**',
        '**/*.d.ts',
        '**/*.config.*',
        '**/types/*',
        '.storybook/**'
      ],
      all: true,
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@test': path.resolve(__dirname, './test')
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@test': path.resolve(__dirname, './test')
    }
  }
});