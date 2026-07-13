import { useEffect } from 'react';
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from '../../data/seoSchemas';

/**
 * Utilidades internas para crear o actualizar etiquetas del <head>
 * sin depender de una librería externa (evita sumar dependencias
 * como react-helmet solo para esto). El patrón "buscar o crear" hace
 * que la etiqueta se reutilice entre cambios de ruta en vez de
 * duplicarse.
 */
function setMetaTag(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLinkTag(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function setJsonLd(schemas) {
  // Limpia los JSON-LD inyectados por este componente en la navegación
  // anterior, para no acumular datos estructurados de otras páginas.
  document.head.querySelectorAll('script[data-seo-jsonld]').forEach((el) => el.remove());

  const list = Array.isArray(schemas) ? schemas : schemas ? [schemas] : [];
  list.forEach((schema) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-seo-jsonld', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

/**
 * Seo
 * Componente "headless" (no renderiza nada visible) que centraliza el
 * SEO on-page de cada ruta: title, meta description, robots,
 * canonical, Open Graph, Twitter Card y datos estructurados (JSON-LD).
 * Se coloca al inicio de cada página, igual que antes se hacía con
 * `document.title` directamente en un useEffect.
 *
 * @param {string} title - título específico de la página (se le agrega " | P&Z Advisors")
 * @param {string} description - meta description (idealmente 120-160 caracteres)
 * @param {string} path - ruta canónica de la página, ej: "/consultoria/evaluacion-de-control-interno"
 * @param {string} image - URL absoluta de imagen para compartir (Open Graph/Twitter)
 * @param {boolean} noindex - true para páginas sin contenido real (evita indexar contenido delgado/duplicado)
 * @param {object|object[]} jsonLd - uno o varios objetos de datos estructurados (schema.org)
 */
export default function Seo({
  title,
  description,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  jsonLd = null,
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} — Auditoría, Impuestos y Consultoría`;
    const canonicalUrl = `${SITE_URL}${path}`;

    document.title = fullTitle;

    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', noindex ? 'noindex, follow' : 'index, follow');

    setLinkTag('canonical', canonicalUrl);

    // Open Graph
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:locale', 'es_CO');
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', image);

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', image);

    setJsonLd(jsonLd);
  }, [title, description, path, image, noindex, jsonLd]);

  return null;
}
