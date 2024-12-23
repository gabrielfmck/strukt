import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Carrega variáveis do .env
dotenv.config();

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  define: {
    // Apenas exporte variáveis seguras com prefixo VITE_
    'process.env': Object.fromEntries(
      Object.entries(process.env).filter(([key]) => key.startsWith('VITE_'))
    ),
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});