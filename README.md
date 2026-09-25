# fiao-web

Landing de **fiao**, la app para llevar el fiado de la tienda desde el celular (Android y iPhone).
Astro + Tailwind v4, sin JavaScript de framework en el navegador.

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run check     # astro check (tipos)
npm run build     # sitio estático en dist/
npm run preview   # sirve dist/
```

## Dónde está cada cosa

| Qué | Dónde |
| --- | --- |
| Todo el texto de la página (y de FAQ, JSON-LD y llms.txt) | `src/data/landing.ts` |
| Dominio, título, descripción, imagen OG | `src/lib/seo.ts` (+ `site` en `astro.config.mjs`) |
| JSON-LD (`@graph`) | `src/lib/structured-data.ts` |
| Tokens del design system (calcados de fiao-mobil) | `src/styles/global.css` |
| Primitivos de UI (Button, Badge, IconBubble, BalanceCard…) | `src/components/ui/` — vitrina en `/kit` |
| Secciones de la home | `src/components/home/` |
| Íconos (Ionicons, el mismo set de la app) | `src/lib/icons.ts` |
| `llms.txt` (se genera en build) | `src/pages/llms.txt.ts` |

## Pendientes que necesitan datos

Busca `TODO(datos)` en el código:

- Dominio real de producción (`src/lib/seo.ts` y `astro.config.mjs`).
- URL de App Store y Google Play (`storeLinks` en `src/data/landing.ts`): al ponerlas se activan
  en todos los botones y en el JSON-LD.
- Confirmar el buzón `soporte@fiao.app`.
- Páginas de Términos y Privacidad (`legalLinks` en `Footer.astro`) y redes sociales.
- Precio, para la pregunta "¿Cuánto cuesta fiao?".
