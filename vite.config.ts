// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      manifest: {
        name: 'Chit Fund Application',
        short_name: 'Chiti',
        description: 'Manage your chit funds efficiently and effectively.',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/images/logo.svg',
            sizes: '64x64',
            type: 'image/x-icon'
          }
        ],
      },
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // Add this line
    },
  },
});

