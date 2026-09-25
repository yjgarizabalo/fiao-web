/**
 * Una sola fuente de verdad para lo que repiten los meta tags, el JSON-LD, llms.txt y
 * robots.txt.
 *
 * TODO(datos): `url` es un marcador (coincide con el scheme "fiao" de app.json en
 * fiao-mobil). Confirmar el dominio real de producción; hay que cambiarlo aquí y en
 * astro.config.mjs (`site`).
 */
export const site = {
  name: "fiao",
  url: "https://fiao.app",
  /** Título de la home: marca + qué es + plataformas (≤ 60 caracteres). */
  homeTitle: "fiao: la app del fiado para tu tienda | Android y iPhone",
  description:
    "Lleva el fiado de tu tienda en el celular, sin cuaderno: anota lo que fías, registra los abonos y cobra por WhatsApp. Disponible para Android y iPhone.",
  tagline: "Tus vales, siempre al día",
  locale: "es_CO",
  language: "es-CO",
  themeColor: "#0B0F14",
  ogImage: { path: "/og/fiao-og.jpg", width: 1200, height: 630, alt: "fiao: Tus vales, siempre al día. La app para llevar el fiado de tu tienda, disponible para Android y iPhone." },
  country: "CO",
};

export const absoluteUrl = (path: string) => new URL(path, site.url).toString();
