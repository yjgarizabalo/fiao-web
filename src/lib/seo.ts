/**
 * Una sola fuente de verdad para lo que meta tags y JSON-LD repiten en todo
 * el sitio. site.url es un marcador de posición (coincide con el `scheme`
 * "fiao" de app.json en fiao-mobil) — hay que confirmarlo con el dominio de
 * producción real antes de publicar.
 */
export const site = {
  name: "fiao",
  url: "https://fiao.app",
  description:
    "Fiao es la app para tenderos que llevan el fiado de su negocio: quién debe, cuánto y desde cuándo, sin cuadernos ni cuentas perdidas. Disponible para Android y iPhone.",
  locale: "es_CO",
  themeColor: "#00B26B",
  ogImage: "/images/hero/hero-banner-img.png",
};
