/**
 * Scroll-reveal sin librerías: un IntersectionObserver marca con `is-visible` cada
 * [data-reveal] la primera vez que entra en pantalla, y el CSS (global.css) hace el
 * resto. Reemplaza a `motion` (≈10 KB) por unas pocas líneas.
 *
 * El contenido nunca depende de este script: los elementos solo se ocultan si <html>
 * tiene la clase `reveal-ready`, que se pone aquí mismo y solo cuando todo lo necesario
 * existe. Si el script no carga o el navegador no tiene IntersectionObserver, todo queda
 * visible. Con movimiento reducido, el CSS nunca oculta nada.
 */
const root = document.documentElement;
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
  );

  const targets = document.querySelectorAll<HTMLElement>("[data-reveal]");
  const viewportBottom = window.innerHeight;
  targets.forEach((target) => {
    // Lo que ya está en pantalla al cargar no se anima: evita parpadeos sobre el LCP.
    if (target.getBoundingClientRect().top < viewportBottom) {
      target.classList.add("is-visible");
    } else {
      observer.observe(target);
    }
  });
  root.classList.add("reveal-ready");
}
