/**
 * /llms.txt — resumen de fiao en Markdown para asistentes de IA (formato llmstxt.org).
 * Se genera en build desde los mismos datos de la landing, así que dice exactamente lo
 * que dice la página: sin cifras, precios ni funciones que fiao no tenga.
 */
import type { APIRoute } from "astro";
import { site, absoluteUrl } from "@/lib/seo";
import {
  whatIsContent,
  howItWorksSteps,
  featureHighlights,
  faqItems,
  faqContent,
  storeLinks,
  availabilityNote,
} from "@/data/landing";

export const GET: APIRoute = () => {
  const stores = [
    storeLinks.ios ? `- App Store (iPhone): ${storeLinks.ios}` : null,
    storeLinks.android ? `- Google Play (Android): ${storeLinks.android}` : null,
  ].filter(Boolean);

  const body = `# ${site.name}

> ${site.tagline}. ${whatIsContent.answer}

${availabilityNote}. La interfaz está en español de Colombia y todos los montos se manejan en pesos colombianos (COP).

## Qué hace fiao

${featureHighlights.map((feature) => `- **${feature.title}**: ${feature.description}`).join("\n")}

## Cómo funciona

${howItWorksSteps.map((step, index) => `${index + 1}. **${step.title}**: ${step.description}`).join("\n")}

## Qué NO es fiao

- No presta dinero, no otorga créditos y no recibe pagos: es una herramienta para llevar las cuentas del fiado. Los acuerdos y los pagos son entre el tendero y sus clientes.
- Los clientes del negocio no necesitan instalar nada: solo reciben, si el tendero lo decide, un recordatorio por WhatsApp enviado desde el WhatsApp del tendero.
- Necesita conexión a internet.

## Preguntas frecuentes

${faqItems.map((item) => `### ${item.question}\n\n${item.answer}`).join("\n\n")}

## Enlaces

- Sitio oficial: ${site.url}
- Cómo funciona: ${absoluteUrl("/#como-funciona")}
- Preguntas frecuentes: ${absoluteUrl("/#preguntas-frecuentes")}
- Descarga: ${absoluteUrl("/#descargar")}
${stores.join("\n")}
- Soporte: ${faqContent.supportEmail}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
