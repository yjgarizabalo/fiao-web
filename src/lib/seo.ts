/**
 * Una sola fuente de verdad para lo que repiten los meta tags, el JSON-LD, llms.txt y
 * robots.txt. Si cambia el dominio, actualizarlo aquí y en astro.config.mjs (`site`).
 */
export const site = {
  name: "fiao",
  url: "https://elfiao.com",
  /** Título de la home: marca + qué es + plataformas (≤ 60 caracteres). */
  homeTitle: "fiao: la app del fiado para tu tienda | Android y iPhone",
  description:
    "Lleva el fiado de tu tienda en el celular, sin cuaderno: anota lo que fías, registra los abonos y cobra por WhatsApp. Disponible para Android y iPhone.",
  tagline: "Tus vales, siempre al día",
  locale: "es_CO",
  language: "es-CO",
  themeColor: "#0B0F14",
  /**
   * Imagen para compartir (Open Graph / Twitter). El archivo vive en
   * src/assets/ogg-fiao.png y se optimiza en build con getImage (ver Layout.astro),
   * así que aquí solo declaramos el tipo, las dimensiones y el texto alternativo.
   * Es cuadrada (1:1): WhatsApp la muestra completa; Facebook/LinkedIn la recortan a
   * su banner apaisado dejando el isotipo centrado.
   */
  ogImage: { width: 1200, height: 1200, type: "image/png", alt: "Logo de fiao, la app del fiado para tu tienda" },
  country: "CO",
};

export const absoluteUrl = (path: string) => new URL(path, site.url).toString();
