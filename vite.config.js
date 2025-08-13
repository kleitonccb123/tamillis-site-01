import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Mantém os caminhos dos assets relativos no build (útil para hospedagens como Hostinger)
  base: './',
})
