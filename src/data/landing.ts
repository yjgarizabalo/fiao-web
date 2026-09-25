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

/**
 * "¿Qué es fiao?" — respuesta directa de 40 a 75 palabras, pensada para que un
 * asistente (Gemini, ChatGPT…) la pueda citar tal cual. Solo hechos del producto.
 */
export const whatIsContent = {
  title: "¿Qué es fiao?",
  answer:
    "fiao es una app para Android y iPhone que reemplaza el cuaderno del fiado. Anotas a quién le fías y cuánto, registras los abonos cuando te pagan y la app te muestra al instante el saldo de cada cliente y el total que tienes por cobrar. Está pensada para tiendas de barrio y pequeños negocios en Colombia, en pesos y en español.",
  points: [
    { icon: "storefront-outline", text: "Para tenderos y pequeños negocios que fían" },
    { icon: "phone-portrait-outline", text: "En el celular que ya tienes, Android o iPhone" },
    { icon: "cash-outline", text: "Todo en pesos colombianos" },
  ] satisfies { icon: IconName; text: string }[],
};

export interface Step {
  number: string;
  title: string;
  description: string;
}

export const howItWorksContent = {
  eyebrow: "Cómo funciona",
  title: "¿Cómo funciona fiao?",
  description:
    "En tres pasos: creas tu negocio, anotas lo que fías y registras los abonos. fiao hace las cuentas y te muestra quién te debe y cuánto.",
};

export const howItWorksSteps: Step[] = [
  {
    number: "1",
    title: "Crea tu negocio",
    description:
      "Te registras con tu correo o tu cédula y creas tu tienda en un minuto. ¿Tienes más de una? Las agregas todas y cambias entre ellas con un toque.",
  },
  {
    number: "2",
    title: "Anota lo que fías",
    description:
      "Escoges al cliente, pones el monto y, si quieres, qué se llevó y para cuándo te paga. Listo, sin dejar de atender.",
  },
  {
    number: "3",
    title: "Registra los abonos",
    description:
      "Cuando te paguen, anotas el pago completo o una parte. fiao descuenta solo y te dice quién está al día.",
  },
];

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

export const featuresContent = {
  eyebrow: "Funciones",
  title: "¿Qué puedes hacer con fiao?",
  description: "Lo que necesita una tienda para no perderle la pista al fiado. Ni más, ni menos.",
};

/** El primero se muestra grande, con la lista de clientes de la app. */
export const featureHighlights: Feature[] = [
  {
    icon: "people-outline",
    title: "Todos tus clientes a la mano",
    description:
      "Busca por nombre, cédula o teléfono y mira en un segundo quién te debe y quién está al día.",
  },
  {
    icon: "calendar-outline",
    title: "Fía con plazo, si quieres",
    description: "Ponle fecha de pago: 8, 15 o 30 días. fiao te marca cuándo una deuda se vence.",
  },
  {
    icon: "cash-outline",
    title: "Abonos como te paguen",
    description:
      "Abona a una deuda puntual o al saldo total, y fiao lo reparte solo. En efectivo o por transferencia.",
  },
  {
    icon: "logo-whatsapp",
    title: "Recordatorios por WhatsApp",
    description: "Un mensaje amable, ya escrito, con el saldo exacto. Lo mandas a uno o a varios desde tu WhatsApp.",
  },
  {
    icon: "storefront-outline",
    title: "Varios negocios, una cuenta",
    description: "Cada tienda con sus clientes y sus saldos, sin mezclar. Cambias de negocio con un toque.",
  },
  {
    icon: "receipt-outline",
    title: "El extracto de cada cliente",
    description: "Cada fiado y cada abono en orden, con su fecha. Si alguien pregunta cuánto debe, se lo muestras.",
  },
];

/** Bloques alternados (el "cómo se siente" de tyba, adaptado al mostrador). */
export const inStoreContent = {
  eyebrow: "En el mostrador",
  title: "Hecha para el afán de la tienda",
  fiar: {
    title: "Fiar te toma cinco segundos",
    description:
      "Tocas el monto, eliges el plazo y listo. El cliente se va con lo suyo y tú sigues atendiendo, sin buscar la página ni el lapicero.",
    bullets: ["Montos rápidos: +$ 2.000, +$ 5.000, +$ 10.000…", "Plazo de 8, 15 o 30 días, o sin plazo", "Una nota para acordarte qué se llevó"],
  },
  cobrar: {
    title: "Cobrar, sin pena",
    description:
      "fiao arma un recordatorio amable con el saldo exacto. Tú lo revisas y lo mandas desde tu WhatsApp, a uno o a varios clientes.",
    bullets: ["Sale desde tu propio WhatsApp", "Con el nombre de tu negocio y el saldo al día", "Tú decides a quién y cuándo"],
  },
};

/** El mensaje real que arma la app (fiao-mobil/src/core/utils/whatsapp.ts). */
export const whatsappExample = {
  business: "Tienda La Esquina",
  client: "María",
  balance: 18500,
};

export interface ComparisonRow {
  topic: string;
  cuaderno: string;
  fiao: string;
}

export const whyFiaoContent = {
  eyebrow: "Por qué fiao",
  title: "¿Por qué pasar del cuaderno a fiao?",
  intro:
    "El cuaderno sirve, pero se moja, se pierde y toca sumarlo a mano. fiao lleva la misma cuenta de siempre, solo que sin errores y siempre a la mano.",
  rows: [
    { topic: "Si se moja o se pierde", cuaderno: "Se pierde todo lo anotado.", fiao: "Tus cuentas quedan guardadas en tu cuenta, no en el papel." },
    { topic: "¿Cuánto me debe un cliente?", cuaderno: "Buscar página por página y sumar.", fiao: "Lo buscas y ves su saldo exacto." },
    { topic: "¿Cuánto tengo por cobrar?", cuaderno: "Sumar a mano todo el cuaderno.", fiao: "Aparece de una en la pantalla de inicio." },
    { topic: "Abonos a medias", cuaderno: "Tachones y restas al margen.", fiao: "Anotas el abono y el saldo se actualiza solo." },
    { topic: "Deudas vencidas", cuaderno: "Te acuerdas si te acuerdas.", fiao: "Ves cuáles se vencieron y hace cuánto." },
    { topic: "Recordarle al cliente", cuaderno: "Te toca decírselo en persona.", fiao: "Le mandas un WhatsApp ya escrito." },
    { topic: "Más de un negocio", cuaderno: "Un cuaderno por tienda.", fiao: "Todos en la misma cuenta, sin mezclar." },
  ] satisfies ComparisonRow[],
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
