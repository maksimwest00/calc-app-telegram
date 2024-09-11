import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/calc-app-telegram",
  plugins: [react()],
  resolve: {
    alias: {
      '@app': '/src/app',
      '@layouts': '/src/layouts',
      '@pages': '/src/pages',
      '@widgets': '/src/widgets',
      '@features': '/src/features',
      '@entities': '/src/entities',
      '@shared': '/src/shared',
    },
  }
})
