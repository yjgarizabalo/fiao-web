import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  site: 'https://elfiao.com',
  // Toda la CSS va en línea: es una sola página y así no hay petición que bloquee el
  // primer render (≈8 KB comprimida).
  build: { inlineStylesheets: 'always' },
  integrations: [
    react(),
    // /kit (vitrina del design system), /404 y /descargar (redirección del QR) no van al sitemap.
    sitemap({
      filter: (page) => !page.includes('/kit') && !page.includes('/404') && !page.includes('/descargar'),
      changefreq: 'monthly',
      lastmod: new Date(),
      i18n: { defaultLocale: 'es', locales: { es: 'es-CO' } },
    }),
  ],
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
