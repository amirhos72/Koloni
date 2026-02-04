import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Changed from '/Koloni/' to './' so it works on any repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});