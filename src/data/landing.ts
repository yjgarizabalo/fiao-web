/**
 * Todo el copy y contenido editorial de la landing vive aquí, en un solo lugar
 * tipado — no es un content collection porque esta página no tiene documentos
 * repetidos (un solo hero, una sola lista de FAQ, etc.).
 *
 * Nota deliberada: no hay cifras de usuarios ni testimonios con nombre. Fiao
 * todavía no tiene esos datos verificados públicamente, e inventarlos sería
 * deshonesto — la persuasión de esta página recae en el producto real.
 */

import type { IconName } from "@/lib/icons";

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Funciones", href: "#funciones" },
  { label: "Por qué fiao", href: "#por-que-fiao" },
  { label: "Preguntas", href: "#preguntas-frecuentes" },
];

/**
 * Enlaces de descarga.
 * TODO(datos): fiao aún no tiene ficha publicada en App Store ni en Google Play (ver
 * Fase 11.6 del CLAUDE.md de fiao-mobil). Mientras tanto los botones llevan a la sección
 * de descarga. Cambiar estas dos URL basta para activarlos en toda la página y en el
 * JSON-LD (que solo publica `installUrl` cuando la URL es real).
 */
export const storeLinks = {
  ios: null as string | null,
  android: null as string | null,
};

/** Nombre de cada tienda, como lo escriben Apple y Google. */
export const storeNames = { ios: "App Store", android: "Google Play" } as const;

export const availabilityNote = "Disponible para Android y iPhone";

export const heroContent = {
  eyebrow: "¿Todavía fías en cuaderno?",
  headline: "Tus vales, siempre al día",
  subheadline:
    "Anota lo que fías, registra cada abono y mira en un segundo quién te debe y cuánto. Todo desde tu celular, sin cuaderno.",
  primaryCta: { label: "Descargar fiao", href: "#descargar" },
  secondaryCta: { label: "Ver cómo funciona", href: "#como-funciona" },
  availabilityNote,
  image: {
    alt: "Pantalla de inicio de la app fiao en un celular: la tienda La Esquina tiene 120.000 pesos por cobrar y la lista de clientes que le deben",
  },
  /** Piezas flotantes alrededor del celular: momentos reales de la app. */
  floating: {
    toast: "Abono de $ 20.000 registrado",
    debtor: { name: "María Pérez", phone: "301 555 0101", balance: 0 },
  },
};

/**
 * Franja de confianza justo debajo del hero — el patrón de tyba.com.co de resolver el
 * "¿esto es serio?" apenas se termina de leer el titular. Fiao no tiene certificaciones
 * ni cifras de escala que mostrar, así que la franja se queda con hechos verificables
 * del producto real. No agregar cifras ni sellos que no existan.
 */
export interface TrustStripItem {
  icon: IconName;
  title: string;
  description: string;
}

export const trustStripItems: TrustStripItem[] = [
  {
    icon: "shield-checkmark-outline",
    title: "Cada negocio, sus cuentas",
    description: "Los clientes y saldos de cada negocio quedan separados, y solo entras tú con tu cuenta.",
  },
  {
    icon: "logo-whatsapp",
    title: "Cobras a tu manera",
    description: "fiao te deja el recordatorio escrito. Tú lo revisas y lo mandas desde tu WhatsApp.",
  },
  {
    icon: "phone-portrait-outline",
    title: "Android y iPhone",
    description: "Funciona igual en los dos. Úsala en el celular que ya tienes en la tienda.",
  },
  {
    icon: "cash-outline",
    title: "Hecha para Colombia",
    description: "Todo en pesos colombianos y en español, pensada para la tienda de barrio.",
  },
];

export interface Step {
  number: string;
  title: string;
  description: string;
}

export const howItWorksSteps: Step[] = [
  {
    number: "01",
    title: "Registra tu negocio",
    description:
      "Crea tu cuenta y arma tu negocio en un par de minutos. Si manejas más de uno, los agregas todos y cambias entre ellos con un toque.",
  },
  {
    number: "02",
    title: "Anota lo que fías",
    description:
      "Cada vez que le fíes a un cliente, regístralo en el momento: nombre, monto y ya. Nada de vueltas mientras estás atendiendo.",
  },
  {
    number: "03",
    title: "Cobra sin enredos",
    description:
      "Cuando te paguen, registra el abono, completo o parcial, y fiao actualiza el saldo solo. Siempre sabes quién está al día.",
  },
];

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

export const featureHighlights: Feature[] = [
  {
    icon: "people-outline",
    title: "Control de clientes y deudas",
    description:
      "Cada cliente con su historial completo: cuánto te debe, desde cuándo y qué te ha pagado hasta ahora.",
  },
  {
    icon: "cash-outline",
    title: "Abonos parciales o pago total",
    description:
      "Registra un abono a una deuda puntual o repártelo entre todo lo que un cliente te debe, como prefieras.",
  },
  {
    icon: "storefront-outline",
    title: "Varios negocios, una sola cuenta",
    description:
      "¿Tienes más de una tienda? Cámbiate entre negocios sin salir de la app ni mezclar las cuentas de cada uno.",
  },
  {
    icon: "logo-whatsapp",
    title: "Recordatorios por WhatsApp",
    description:
      "Envíale a tu cliente un recordatorio de pago respetuoso, ya redactado, directo por WhatsApp desde la app.",
  },
  {
    icon: "receipt-outline",
    title: "Historial de movimientos",
    description:
      "Cada fiado y cada abono queda ordenado por fecha, como el estado de cuenta de tu negocio, siempre a la mano.",
  },
  {
    icon: "shield-checkmark-outline",
    title: "Datos organizados por negocio",
    description:
      "La información de cada negocio y de sus clientes queda separada y protegida — como debe ser.",
  },
];

export interface Comparison {
  cuaderno: string;
  fiao: string;
}

export const whyFiaoContent = {
  eyebrow: "Por qué fiao",
  headline: "Se acabó el cuaderno del mostrador",
  intro:
    "El cuaderno ha sido la forma de fiar de toda la vida en la tienda de barrio. Fiao no le quita el mérito: simplemente hace lo mismo, mejor.",
  comparisons: [
    {
      cuaderno: "Se moja, se raya, se le arrancan hojas o se pierde.",
      fiao: "Vive en tu celular. Siempre contigo, siempre completo.",
    },
    {
      cuaderno: "Solo tú entiendes la letra, y a veces ni tú.",
      fiao: "Números claros y saldo exacto, sin adivinar.",
    },
    {
      cuaderno: "Si alguien pregunta cuánto debe, toca buscar página por página.",
      fiao: "Un toque y ves el saldo de cualquier cliente al instante.",
    },
    {
      cuaderno: "No hay forma de recordarle a nadie que pague.",
      fiao: "Mándale un recordatorio por WhatsApp sin salir de la app.",
    },
  ] satisfies Comparison[],
};

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "¿Fiao funciona en Android y en iPhone?",
    answer:
      "Sí. Fiao está hecha para funcionar igual de bien en Android y en iPhone, con la misma experiencia en los dos.",
  },
  {
    question: "¿Reemplaza completamente el cuaderno del negocio?",
    answer:
      "Sí, para eso está pensada: lo que antes anotabas a mano ahora queda en la app, ordenado y disponible cuando lo necesites.",
  },
  {
    question: "¿Puedo manejar más de un negocio con la misma cuenta?",
    answer:
      "Sí. Puedes registrar varios negocios desde una sola cuenta y cambiar entre ellos cuando quieras, sin mezclar clientes ni saldos.",
  },
  {
    question: "¿Mis datos y los de mis clientes están seguros?",
    answer:
      "Sí. La información de cada negocio queda separada de los demás, y solo tú puedes ver los datos de tus clientes y sus saldos.",
  },
  {
    question: "¿Cómo le recuerdo a un cliente que me debe?",
    answer:
      "Desde el detalle del cliente puedes enviarle un recordatorio de pago ya redactado, directo por WhatsApp, sin salir de la app.",
  },
  {
    question: "¿Necesito internet para usar fiao?",
    answer:
      "Sí, fiao se conecta a internet para mantener tus datos seguros y al día. Con una conexión de datos normal funciona sin problema.",
  },
];

export const downloadCtaContent = {
  headline: "Empieza a llevar tus vales sin cuaderno",
  subheadline:
    "Descarga fiao y ten el control de tu fiado siempre actualizado, en el celular que ya usas todos los días.",
  availabilityNote: "Disponible para Android y iPhone",
};

export const footerContent = {
  tagline: "Tus vales, siempre al día.",
  productHeading: "Producto",
  downloadHeading: "Descarga la app",
  availabilityNote: "Disponible para Android y iPhone",
  copyright: "Hecho en Colombia.",
};
