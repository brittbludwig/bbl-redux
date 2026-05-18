import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '$components': '/src/components',
      '$constants': '/src/constants',
      '$hooks': '/src/hooks',
      '$images': new URL('./src/images', import.meta.url).pathname,
      '$providers': '/src/providers',
      '$routes': '/src/routes',
      '$types': '/src/types',
      '$utils': '/src/utilities/index.ts',
    },
  },
});