import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // --- YEH NAYA HISSA JODEIN ---
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Hamara backend server
        changeOrigin: true,
      }
    }
  }
  // -----------------------------
})
