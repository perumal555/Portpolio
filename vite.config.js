import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 5173,allowedHosts: ['portpolio-1-3gn3.onrender.com'],
  },
  plugins: [react()],
})
