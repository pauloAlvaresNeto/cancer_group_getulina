import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // No GitHub Pages, o workflow informa /nome-do-repositorio/.
  // Localmente, o Vite continua funcionando normalmente na raiz.
  base: process.env.BASE_PATH || '/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        inicio: 'index.html',
        interna: 'interna.html',
      },
    },
  },
});
