import { contactInfo } from './controlInternoContent.js';

/**
 * Configuración SEO centralizada del sitio.
 *
 * IMPORTANTE: `SITE_URL` es un dominio de referencia (placeholder).
 * Antes de publicar en producción, reemplázalo por el dominio real
 * definitivo de P&Z Advisors — se usa para construir URLs canónicas,
 * el sitemap.xml, robots.txt y las etiquetas Open Graph/Twitter.
 */
export const SITE_URL = 'https://www.pzadvisors.com';
export const SITE_NAME = 'P&Z Advisors';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Rutas realmente indexables del sitio (con contenido completo y
 * único). El resto de rutas generadas automáticamente por el menú
 * (ver collectRoutes.js) son páginas "placeholder" y se marcan como
 * `noindex` para no enviar contenido delgado/duplicado a Google.
 *
 * A medida que se desarrollen páginas reales, agrégalas aquí para
 * que entren también al sitemap.xml generado en el build.
 */
export const indexableRoutes = ['/consultoria/evaluacion-de-control-interno'];

/**
 * Datos estructurados (schema.org) de la organización, reutilizables
 * en cualquier página vía el prop `jsonLd` del componente <Seo />.
 * Tipo "ProfessionalService", el recomendado por Google para firmas
 * de servicios profesionales (auditoría, impuestos, consultoría).
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo-full.png`,
  image: DEFAULT_OG_IMAGE,
  description:
    'Firma de auditoría, impuestos y consultoría para empresas y personas naturales en Colombia.',
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: contactInfo.addressBogota,
      addressLocality: 'Bogotá',
      addressCountry: 'CO',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: contactInfo.addressMedellin,
      addressLocality: 'Medellín',
      addressCountry: 'CO',
    },
  ],
  telephone: contactInfo.phonePBXBogota,
  email: contactInfo.email,
  sameAs: Object.values(contactInfo.social),
};

/**
 * buildBreadcrumbSchema
 * Genera un JSON-LD de tipo BreadcrumbList a partir de los mismos
 * items que recibe el componente visual <Breadcrumb />, evitando
 * mantener la ruta de navegación duplicada en dos formatos.
 */
export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE_URL}${item.href}` } : {}),
    })),
  };
}

/**
 * buildFaqSchema
 * Genera un JSON-LD de tipo FAQPage a partir de los mismos items que
 * alimentan el componente visual <Accordion />. Si Google valida el
 * formato, puede mostrar las preguntas directamente en los resultados
 * de búsqueda (rich snippets), aumentando la visibilidad del sitio.
 */
export function buildFaqSchema(faqItems) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
