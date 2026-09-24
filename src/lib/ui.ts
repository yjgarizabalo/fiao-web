/**
 * Clases Tailwind reutilizables (no una clase custom en global.css): así
 * componen sin choques de capas con las utilidades de transform que ya trae
 * Tailwind (hover:/active: usan las mismas variables --tw-translate-*
 * /--tw-scale-*, así que apilarlas aquí es seguro).
 *
 * Es el equivalente web de PressableScale en fiao-mobil: todo elemento
 * presionable de la app se encoge un poco y baja de opacidad al tacto — acá
 * el "toque" es hover (lift) + active (press).
 *
 * Usa `transition-all` (no `transition-transform`) a propósito: Tailwind no
 * compone dos utilidades `transition-*` en el mismo elemento (cada una pisa
 * la propiedad `transition-property` de la otra, gana la que quede después
 * en la hoja generada) — así que si un elemento también necesita transición
 * de color, esta clase la cubre igual y no hace falta agregar
 * `transition-colors` aparte.
 */
export const pressable =
  "transition-all duration-150 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] active:opacity-90";
