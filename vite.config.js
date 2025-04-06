import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['425e-103-98-209-74.ngrok-free.app']
  },
  plugins: [react()],
})
