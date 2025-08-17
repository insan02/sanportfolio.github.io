// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' && process.env.DEPLOY_TARGET === 'gh-pages'
    ? '/sanportfolio.github.io/'
    : '/',
}))

