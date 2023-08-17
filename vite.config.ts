import path from 'path';
import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), babel()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: 'index.html',
      output: {
        format: 'esm',
      },
    },
  },
});
