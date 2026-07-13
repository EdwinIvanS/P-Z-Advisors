import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { SITE_URL, indexableRoutes } from '../src/data/seoSchemas.js';

/**
 * generate-sitemap
 * Genera public/sitemap.xml a partir de `indexableRoutes`
 * (src/data/seoSchemas.js) — la lista explícita de páginas con
 * contenido real y único. A propósito NO se incluyen las rutas
 * "placeholder" generadas automáticamente por el menú (ver
 * src/router/collectRoutes.js), ya que esas páginas se marcan como
 * `noindex` y no deben enviarse a Google en el sitemap.
 *
 * Se ejecuta automáticamente como paso previo a `npm run build`
 * (ver el script "prebuild" en package.json), así que el sitemap
 * siempre queda sincronizado con el código sin pasos manuales.
 */
const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, '..', 'public', 'sitemap.xml');

const today = new Date().toISOString().slice(0, 10);

const urlEntries = indexableRoutes
  .map(
    (path) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

writeFileSync(outputPath, xml, 'utf-8');
console.log(`✓ sitemap.xml generado con ${indexableRoutes.length} URL(s) en ${outputPath}`);
