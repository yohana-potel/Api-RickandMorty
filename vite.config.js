import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://yohana-potel.github.io/Api-RickandMorty/",
  plugins: [react()],
})
