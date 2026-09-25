/**
 * Imagen del hero (el LCP de la página) procesada una sola vez en build.
 *
 * Se arma a mano con getImage() —en vez de <Picture>— para que el <link rel="preload">
 * del <head> y el <picture> del hero usen exactamente las mismas URL: si no coinciden,
 * el navegador descargaría la imagen dos veces.
 */
import { getImage } from "astro:assets";
import heroSource from "@/assets/hero-app-inicio.png";

/** Ancho máximo al que se muestra: 440 px en escritorio, ~78 % de la pantalla en móvil. */
export const HERO_SIZES = "(min-width: 1024px) 440px, (min-width: 640px) 380px, 78vw";
const WIDTHS = [300, 440, 600, 880];

export const heroImageSource = heroSource;

let cached: Promise<{ avif: Awaited<ReturnType<typeof getImage>>; webp: Awaited<ReturnType<typeof getImage>> }> | undefined;

export const getHeroImage = () => {
  cached ??= Promise.all([
    getImage({ src: heroSource, format: "avif", widths: WIDTHS, quality: 60 }),
    getImage({ src: heroSource, format: "webp", widths: WIDTHS, quality: 72 }),
  ]).then(([avif, webp]) => ({ avif, webp }));
  return cached;
};
