/**
 * Scroll-reveal con la API vanilla de `motion` (no `motion/react`): así las
 * secciones estáticas de la landing animan sin pagar costo de hidratación.
 * Cada elemento con [data-reveal] entra con un fade + leve desplazamiento la
 * primera vez que cruza el viewport.
 *
 * El contenido nunca debe depender de que este script funcione: si
 * IntersectionObserver no existe, si `motion` falla al cargar, o si algo
 * lanza un error, el fallback es dejar todo visible de una — el peor caso
 * posible es perder la animación, nunca esconder el copy de la página.
 */
import { animateMini, inView } from "motion";

const REVEAL_DURATION = 0.38; // duration.slow de fiao-mobil

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function setupReveal() {
  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");

  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    return; // el contenido ya es visible por defecto: no hay nada que "arreglar"
  }

  targets.forEach((target) => {
    try {
      target.style.opacity = "0";
      inView(
        target,
        () => {
          animateMini(
            target,
            { opacity: [0, 1], y: [16, 0] },
            { duration: REVEAL_DURATION, ease: [0.22, 1, 0.36, 1] },
          );
        },
        { margin: "0px 0px -10% 0px" },
      );
    } catch {
      target.style.opacity = "1"; // si algo falla para este elemento, que se vea igual
    }
  });
}

try {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupReveal);
  } else {
    setupReveal();
  }
} catch {
  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    el.style.opacity = "1";
  });
}
