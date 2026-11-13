import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: false,
    allowedHosts: ['.vercel.run'],
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: false,
    allowedHosts: ['.vercel.run'],
  },
  appType: 'spa',
  root: '.',
});
