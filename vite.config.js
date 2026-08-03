import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // O domínio próprio é publicado na raiz (https://ggcc.org.br/).
  base: '/',
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
