import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // Node.js built-in path module

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Maps '@/' directly to the 'src' directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})

