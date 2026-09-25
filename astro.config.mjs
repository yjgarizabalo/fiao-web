import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// TODO(datos): confirmar el dominio real de producción (también en src/lib/seo.ts).
export default defineConfig({
  site: 'https://fiao.app',
  integrations: [
    react(),
    // /kit es la vitrina interna del design system y /404 no es una página real.
    sitemap({
      filter: (page) => !page.includes('/kit') && !page.includes('/404'),
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
