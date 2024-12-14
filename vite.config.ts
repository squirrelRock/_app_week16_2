/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    legacy()
  ],
  build: {
    outDir: 'www', 
    rollupOptions: {
      output: {
        manualChunks: {
          // chunk splitting
          vendor: ['react', 'react-dom'], // split React and ReactDOM into a vendor chunk
          utility: ['lodash'], // split utility libraries (if used)
        },
      },
    },
    chunkSizeWarningLimit: 1000, 
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
