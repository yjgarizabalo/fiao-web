/**
 * Scroll-reveal sin librerías: un IntersectionObserver anima cada [data-reveal] la
 * primera vez que entra en pantalla; el CSS (global.css) hace la transición.
 *
 * No lee posiciones del DOM (getBoundingClientRect forzaría un layout en plena carga):
 * el primer aviso del observer ya dice qué está fuera de pantalla, y solo eso se oculta
 * con `reveal-pending`. Lo que ya se ve al cargar nunca se esconde ni parpadea.
 *
 * El contenido nunca depende de este script: si no carga, si no existe
 * IntersectionObserver o si hay movimiento reducido, todo queda visible.
 */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
  const seen = new WeakSet<Element>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const target = entry.target;
        const firstReport = !seen.has(target);
        seen.add(target);

        if (entry.isIntersecting) {
          target.classList.add("is-visible");
          observer.unobserve(target);
        } else if (firstReport) {
          target.classList.add("reveal-pending");
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
  );

  document.querySelectorAll("[data-reveal]").forEach((target) => observer.observe(target));
}
