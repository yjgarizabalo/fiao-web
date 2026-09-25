/**
 * Formato de dinero y avatares — mismas reglas que fiao-mobil (src/core/utils/format.ts),
 * para que una cifra o unas iniciales de la web se vean exactamente como en la app.
 * Todo corre en build (Astro estático): no llega JavaScript al navegador por esto.
 */

const moneyFormatter = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
});

/** 15000 → "$ 15.000" (COP, sin decimales, igual que la app). */
export const formatMoney = (value: number): string => moneyFormatter.format(value);

/** Paleta de avatares de la app: el color sale de un hash estable del nombre. */
const AVATAR_COLORS = ["#00B26B", "#5B7CFA", "#7C5CF5", "#C4479B", "#E0714A", "#F5A524", "#0FA3A3", "#3B82F6"] as const;

export const avatarColor = (name: string): string => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) % 2147483647;
  }
  return AVATAR_COLORS[hash % AVATAR_COLORS.length] ?? AVATAR_COLORS[0];
};

/** "María José Pérez" → "MJ"; "Carlos" → "CA". */
export const initials = (name: string): string => {
  const words = name.trim().split(/\s+/).filter(Boolean);
  const [first = "", second = ""] = words;
  const letters = second ? `${first[0] ?? ""}${second[0] ?? ""}` : first.slice(0, 2);
  return letters.toUpperCase();
};
