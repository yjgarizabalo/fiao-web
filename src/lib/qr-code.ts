/**
 * Genera un código QR REAL y escaneable (reemplaza al antiguo de ejemplo). Corre en build,
 * no en el navegador: usa qrcode-generator (sin dependencias) para calcular la matriz y
 * devuelve el path de los módulos oscuros más la posición de los tres "ojos", que el modal
 * dibuja como SVG con las esquinas redondeadas del sistema y el asterisco de fiao al centro.
 *
 * Nivel de corrección de errores 'H' (~30 %): tolera el logo superpuesto en el centro sin
 * dejar de leerse. Es determinista: el mismo texto produce el mismo SVG en cada build.
 */
import qrcode from "qrcode-generator";

export interface QrRender {
  /** Módulos oscuros (sin los ojos), como rects 1×1 para un solo <path>. */
  path: string;
  /** Número de módulos por lado. */
  size: number;
  /** Esquina superior-izquierda de cada uno de los tres ojos (bloques 7×7). */
  finders: readonly (readonly [number, number])[];
}

const inFinder = (x: number, y: number, size: number) => {
  const box = (ox: number, oy: number) => x >= ox && x < ox + 7 && y >= oy && y < oy + 7;
  return box(0, 0) || box(size - 7, 0) || box(0, size - 7);
};

/** Construye el QR de `text`. Los ojos se excluyen del path y se dibujan aparte. */
export const buildQr = (text: string): QrRender => {
  const qr = qrcode(0, "H"); // 0 = elige la versión mínima según el largo del texto
  qr.addData(text);
  qr.make();
  const size = qr.getModuleCount();

  const cells: string[] = [];
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (inFinder(col, row, size)) continue; // los ojos van aparte, redondeados
      if (qr.isDark(row, col)) cells.push(`M${col} ${row}h1v1h-1z`);
    }
  }

  return {
    path: cells.join(""),
    size,
    finders: [
      [0, 0],
      [size - 7, 0],
      [0, size - 7],
    ],
  };
};
