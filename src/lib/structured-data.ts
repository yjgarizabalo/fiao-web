/**
 * JSON-LD en un solo @graph: Organization, WebSite, WebPage, MobileApplication,
 * FAQPage y HowTo, enlazados por @id. Todo sale de los mismos datos que se ven en la
 * página (src/data/landing.ts), así que nunca se desincronizan.
 *
 * Deliberadamente NO incluye: aggregateRating, reviews, offers/precio, número de
 * descargas ni premios. fiao no tiene esos datos públicos todavía y el JSON-LD no debe
 * afirmar nada que la página no muestre.
 */
import { site, absoluteUrl } from "./seo";
import {
  faqItems,
  howItWorksSteps,
  howItWorksContent,
  featureHighlights,
  faqContent,
  storeLinks,
} from "@/data/landing";

const ids = {
  organization: absoluteUrl("/#organization"),
  website: absoluteUrl("/#website"),
  webpage: absoluteUrl("/#webpage"),
  app: absoluteUrl("/#app"),
  faq: absoluteUrl("/#preguntas-frecuentes"),
  howto: absoluteUrl("/#como-funciona"),
};

interface GraphOptions {
  logoUrl: string;
  /** URL absoluta de la imagen de compartir (Open Graph), optimizada en build. */
  ogImageUrl: string;
  /** Nodos propios de la home. En otras páginas solo van Organization y WebSite. */
  home?: boolean;
}

export const buildStructuredData = ({ logoUrl, ogImageUrl, home = false }: GraphOptions) => {
  const organization = {
    "@type": "Organization",
    "@id": ids.organization,
    name: site.name,
    url: site.url,
    slogan: site.tagline,
    logo: { "@type": "ImageObject", url: logoUrl, width: 512, height: 512 },
    areaServed: { "@type": "Country", name: "Colombia" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: faqContent.supportEmail,
      availableLanguage: ["es"],
    },
  };

  const website = {
    "@type": "WebSite",
    "@id": ids.website,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: site.language,
    publisher: { "@id": ids.organization },
  };

  if (!home) {
    return { "@context": "https://schema.org", "@graph": [organization, website] };
  }

  const installUrls = [storeLinks.ios, storeLinks.android].filter((url): url is string => Boolean(url));

  const app = {
    "@type": "MobileApplication",
    "@id": ids.app,
    name: site.name,
    alternateName: "fiao: control de fiado",
    description: site.description,
    url: site.url,
    image: ogImageUrl,
    operatingSystem: "Android, iOS",
    applicationCategory: "FinanceApplication",
    applicationSubCategory: "Control de fiado y cuentas por cobrar",
    inLanguage: site.language,
    countriesSupported: site.country,
    audience: { "@type": "BusinessAudience", audienceType: "Tenderos y pequeños negocios que venden fiado" },
    featureList: featureHighlights.map((feature) => feature.title),
    publisher: { "@id": ids.organization },
    ...(installUrls.length > 0 ? { installUrl: installUrls } : {}),
  };

  const webpage = {
    "@type": "WebPage",
    "@id": ids.webpage,
    url: site.url,
    name: site.homeTitle,
    description: site.description,
    inLanguage: site.language,
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.app },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ogImageUrl,
      width: site.ogImage.width,
      height: site.ogImage.height,
    },
  };

  const faq = {
    "@type": "FAQPage",
    "@id": ids.faq,
    isPartOf: { "@id": ids.webpage },
    inLanguage: site.language,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const howto = {
    "@type": "HowTo",
    "@id": ids.howto,
    name: howItWorksContent.title,
    description: howItWorksContent.description,
    inLanguage: site.language,
    tool: { "@type": "HowToTool", name: "Un celular Android o iPhone con la app fiao" },
    step: howItWorksSteps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
      url: `${ids.howto}`,
    })),
  };

  return { "@context": "https://schema.org", "@graph": [organization, website, webpage, app, faq, howto] };
};
