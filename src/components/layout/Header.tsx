import { useEffect, useState } from "react";
import { navItems, heroContent } from "@/data/landing";
import { pressable } from "@/lib/ui";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Bloquea el scroll del body mientras el menú móvil está abierto.
  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [navbarOpen]);

  const navLinkClass = (href: string) =>
    `text-base font-medium transition-colors ${
      activeHash === href ? "text-primary" : "text-ink-700 hover:text-primary"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 sm:px-6 sm:pt-5">
      {/* Barra flotante tipo cápsula, separada de los bordes y con sombra —
          en vez del header tradicional pegado de borde a borde. */}
      <div className="relative mx-auto w-full max-w-8xl rounded-2xl border border-border bg-background shadow-lg">
        <div className="flex items-center justify-between gap-4 px-5 py-3 sm:px-6 sm:py-4">
          <a href="/" onClick={() => setActiveHash("")} className="shrink-0">
            <img src="/images/logo/logo.png" alt="fiao" className="h-7 w-auto sm:h-8" />
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setActiveHash(item.href)} className={navLinkClass(item.href)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={heroContent.primaryCta.href}
              className={`bg-primary text-primary-foreground px-4 py-2 sm:px-5 sm:py-2.5 rounded-pill hover:bg-brand-600 font-semibold text-sm whitespace-nowrap ${pressable}`}
            >
              {heroContent.primaryCta.label}
            </a>

            <button
              className="lg:hidden relative w-8 h-8 shrink-0 flex flex-col items-center justify-center gap-1.5"
              aria-label={navbarOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={navbarOpen}
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span
                className={`block w-5 h-0.5 bg-ink-900 rounded-full transition-transform duration-300 ${
                  navbarOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-ink-900 rounded-full transition-opacity duration-300 ${
                  navbarOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-ink-900 rounded-full transition-transform duration-300 ${
                  navbarOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Menú móvil: otra tarjeta flotante redondeada, no un drawer de
            pantalla completa — mantiene el mismo lenguaje visual de la cápsula. */}
        {navbarOpen && (
          <div className="lg:hidden absolute inset-x-0 top-full mt-3 rounded-2xl border border-border bg-background shadow-lg p-5">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveHash(item.href);
                    setNavbarOpen(false);
                  }}
                  className={`py-3 border-b border-border last:border-b-0 ${navLinkClass(item.href)}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>

      {navbarOpen && (
        <div
          className="lg:hidden fixed inset-0 -z-10 bg-ink-900/30"
          onClick={() => setNavbarOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
