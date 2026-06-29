import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `base` is the path the app is served from:
//   • local dev / preview      -> "/"
//   • GitHub Pages project site -> "/<repo>/"   (set automatically by the deploy workflow)
//   • GitHub Pages user site    -> "/"          (<user>.github.io repo)
// The GitHub Actions workflow passes BASE_PATH; locally it stays "/".
// https://vite.dev/config/
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
