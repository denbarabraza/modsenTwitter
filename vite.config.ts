import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import babel from 'vite-plugin-babel';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react(), babel()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
