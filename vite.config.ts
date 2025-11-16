import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react', 'react-icons'],
          utils: ['clsx', 'tailwind-merge']
        }
      }
    },
    target: 'esnext',
    minify: 'terser',
    cssMinify: true
  },
  
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: ['lucide-react']
  },
  
  server: {
    hmr: {
      overlay: false
    }
  }
});
