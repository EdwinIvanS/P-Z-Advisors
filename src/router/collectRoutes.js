import { navigation, utilityLinks } from '../data/navigation';
import { relatedServices } from '../data/controlInternoContent';

/**
 * collectRoutes
 * Recorre las estructuras de datos de navegación (menú principal,
 * mega menús, enlaces utilitarios y servicios relacionados) para
 * generar automáticamente un mapa { ruta: título } con TODAS las
 * rutas internas declaradas en el sitio. Esto garantiza que cada
 * enlace visible en el Header, el Footer o la barra lateral tenga
 * una ruta válida registrada en React Router, evitando 404 al
 * navegar y facilitando agregar nuevas páginas reales más adelante.
 */
export function collectRoutes() {
  const routes = new Map();

  const addRoute = (href, label) => {
    if (!href || href === '#' || href.startsWith('http')) return;
    if (!routes.has(href)) routes.set(href, label);
  };

  navigation.forEach((item) => {
    addRoute(item.href, item.label);
    item.submenu?.forEach((col) => {
      addRoute(col.href, col.heading);
      col.items.forEach((sub) => addRoute(sub.href, sub.label));
    });
  });

  utilityLinks.forEach((link) => addRoute(link.href, link.label));
  relatedServices.forEach((service) => addRoute(service.href, service.label));

  // Rutas institucionales adicionales referenciadas en Footer / textos internos
  addRoute('/servicios-legales', 'Servicios Legales');
  addRoute('/auditoria-ti', 'Auditoría y Consultoría TI');
  addRoute('/sostenibilidad', 'Sostenibilidad');
  addRoute('/tratamiento-de-datos', 'Tratamiento de Datos');
  addRoute('/sitemap', 'Mapa del sitio');
  addRoute('/consultoria', 'Consultoría');

  return routes;
}
