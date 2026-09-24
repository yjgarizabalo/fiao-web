/**
 * Traducción a JS de src/theme/tokens.ts (fiao-mobil): duraciones en segundos
 * (la librería `motion` los espera así) y los mismos tres springs con nombre.
 */
export const duration = {
  instant: 0.09,
  fast: 0.16,
  normal: 0.24,
  slow: 0.38,
};

export const spring = {
  snappy: { type: "spring", stiffness: 500, damping: 30 } as const,
  soft: { type: "spring", stiffness: 200, damping: 24 } as const,
  bouncy: { type: "spring", stiffness: 400, damping: 12 } as const,
};
