// vite.config.ts
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = mode === 'production' ? '/Portfolio/' : mode === 'staging' ? '/Portfolio-Staging/' : '/';

  return {
    plugins: [react()],
    base: base,
    build: {
      outDir: 'dist',
      sourcemap: true,
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
            'ui-vendor': ['framer-motion', 'lucide-react'],
            'form-vendor': ['@emailjs/browser']
          },
          // Add this to ensure consistent chunk naming
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]'
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@/components': path.resolve(__dirname, './src/components'),
        '@/content': path.resolve(__dirname, './src/content'),
        '@/hooks': path.resolve(__dirname, './src/hooks'),
        '@/lib': path.resolve(__dirname, './src/lib'),
        '@/types': path.resolve(__dirname, './src/types'),
        '@/utils': path.resolve(__dirname, './src/utils'),
        '@/pages': path.resolve(__dirname, './src/pages'),
        '@/providers': path.resolve(__dirname, './src/providers'),
        '@/styles': path.resolve(__dirname, './src/styles')
      }
    },
    server: {
      port: mode === 'staging' ? 3001 : 3000,
      open: true
    }
  };
});