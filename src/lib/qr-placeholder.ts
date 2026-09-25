/**
 * QR de EJEMPLO para el modal de descarga: dibuja algo con la forma de un código QR
 * (los tres "ojos" de las esquinas y módulos al azar) para diseñar el modal mientras no
 * exista el real. No codifica nada y no se puede escanear — por eso el modal lo rotula
 * como "Código de ejemplo".
 *
 * Es determinista (semilla fija): el SVG sale igual en cada build. Corre en build, no
 * en el navegador.
 */
const SIZE = 25;

const isFinder = (x: number, y: number) => {
  const inBox = (ox: number, oy: number) => x >= ox && x < ox + 7 && y >= oy && y < oy + 7;
  return inBox(0, 0) || inBox(SIZE - 7, 0) || inBox(0, SIZE - 7);
};

// Zona libre alrededor de los ojos y en el centro (para el ícono de fiao).
const isReserved = (x: number, y: number) => {
  const nearFinder = (x < 8 && y < 8) || (x >= SIZE - 8 && y < 8) || (x < 8 && y >= SIZE - 8);
  const center = Math.abs(x - 12) <= 3 && Math.abs(y - 12) <= 3;
  return nearFinder || center;
};

export const placeholderQrPath = (): { path: string; size: number } => {
  let seed = 20260925;
  const random = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };

  const cells: string[] = [];
  for (let y = 0; y < SIZE; y++) {
    for (let x = 0; x < SIZE; x++) {
      if (isFinder(x, y) || isReserved(x, y)) continue;
      const timing = (x === 6 || y === 6) && (x + y) % 2 === 0;
      if (timing || random() > 0.52) cells.push(`M${x} ${y}h1v1h-1z`);
    }
  }
  return { path: cells.join(""), size: SIZE };
};

/** Posición de los tres ojos del QR (se dibujan aparte, con esquinas redondeadas). */
export const finderOrigins = [
  [0, 0],
  [SIZE - 7, 0],
  [0, SIZE - 7],
] as const;
