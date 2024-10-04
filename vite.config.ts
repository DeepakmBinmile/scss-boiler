import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  build: {
    rollupOptions: {
      // Externalize dependencies that don’t need to be bundled
      external: ['react', 'react-dom'],
    },
  },
});
