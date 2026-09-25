import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// site: confirmar el dominio real de producción antes de publicar (ver src/lib/seo.ts)
export default defineConfig({
  site: 'https://fiao.app',
  integrations: [react(), sitemap({ filter: (page) => !page.includes('/kit') })],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
    // Vite a veces no detecta react-dom/client como entrada a pre-empaquetar
    // porque solo la importa @astrojs/react en tiempo de ejecución (no el
    // código de la app), y la hidratación falla con "does not provide an
    // export named 'createRoot'". Forzarlo aquí lo resuelve.
    optimizeDeps: {
      include: ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime'],
    },
  },
});
