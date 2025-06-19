import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://djs4gnx.github.io/mp-media-players/',
  plugins: [react()],
})
