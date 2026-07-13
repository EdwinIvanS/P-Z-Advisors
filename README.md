# P&Z Advisors — Evaluación de Control Interno (React + Vite)

Reconstrucción en React 19 + Vite de la página
`https://pzadvisors.com/consultoria/evaluacion-de-control-interno/`,
incluyendo navegación global (mega menú y footer) con datos reales del
sitio original.

## Stack

- **React 19** + **Vite**
- **React Router DOM** (enrutamiento SPA)
- **CSS Modules** (sin Bootstrap ni frameworks CSS externos)
- Componentes 100% propios, sin librerías de UI de terceros

## Estructura del proyecto

```
src/
  components/
    layout/       Header (mega menú + hamburguesa), Footer, Layout
    ui/           Button, Icon, Accordion, Breadcrumb, SectionTitle,
                  WhatsAppButton, ScrollToTop
  sections/       Un componente independiente por cada sección de la
                  página (Hero, IntroControl, QueSeRevisa, TiposControl,
                  Metodos, Senales, Entregables, BrochureCTA, WhyChoose,
                  Memberships, ContactCTA, Specialists, FAQ, News...)
  pages/          Home (la página reconstruida), PlaceholderPage, NotFound
  router/         AppRouter + generación automática de rutas del menú
  data/           Contenido y navegación centralizados (JS, no hardcode)
  hooks/          useScrollPosition, useBodyScrollLock
  styles/         variables.css, global.css, article.module.css
```

## Scripts

```bash
npm install
npm run dev       # entorno de desarrollo (http://localhost:5173)
npm run build     # build de producción -> carpeta dist/
npm run preview   # sirve el build de producción localmente
```

## Despliegue en subcarpeta (opcional)

Si el sitio se publicará bajo un subdirectorio (ej.
`https://midominio.com/microsite/`), define la variable de entorno
`VITE_BASE_PATH` antes del build:

```bash
VITE_BASE_PATH=/microsite/ npm run build
```

`vite.config.js` toma ese valor para `base`, y React Router (en
`src/router/AppRouter.jsx`) usa `import.meta.env.BASE_URL` como
`basename`, por lo que ambos quedan sincronizados automáticamente. Si
no se define, el sitio se sirve desde la raíz (`/`).

## Rutas funcionando correctamente en producción (SPA fallback)

Al ser una Single Page Application, el servidor debe redirigir
cualquier ruta desconocida hacia `index.html` para que React Router
resuelva la navegación en el cliente. Ya están incluidos los archivos
necesarios para los proveedores más comunes:

- **Vercel** → `vercel.json` (rewrites a `/index.html`)
- **Netlify** → `public/_redirects` (`/* /index.html 200`)
- **Apache** → `public/.htaccess` (mod_rewrite)
- **Nginx** (servidor propio) — agregar en el bloque `location /`:
  ```nginx
  try_files $uri $uri/ /index.html;
  ```

Todos estos archivos se copian automáticamente a `dist/` durante el
build (excepto `vercel.json`, que vive en la raíz del proyecto).

## SEO y posicionamiento

El sitio incluye una implementación SEO on-page completa:

- **Título y meta description dinámicos por página** vía el componente `src/components/seo/Seo.jsx`, sin depender de una librería externa.
- **URL canónica** en cada página, para evitar contenido duplicado (por ejemplo `/` y `/consultoria/evaluacion-de-control-interno` apuntan al mismo canonical).
- **Open Graph y Twitter Card** (título, descripción, imagen `og-image.png` de 1200×630) para que los enlaces se vean bien al compartirse en WhatsApp, LinkedIn, Facebook o X.
- **Datos estructurados (JSON-LD)**: `ProfessionalService` (organización), `BreadcrumbList` y `FAQPage` en la página principal — permite que Google muestre resultados enriquecidos (rich snippets).
- **`robots.txt`** y **`sitemap.xml`**: el sitemap se regenera automáticamente antes de cada build (`npm run build` ejecuta `scripts/generate-sitemap.mjs` como paso `prebuild`) a partir de `indexableRoutes` en `src/data/seoSchemas.js`.
- **`noindex` en páginas placeholder**: las rutas del menú que aún no tienen contenido propio (ver `PlaceholderPage`) y la página 404 se marcan como `noindex` a propósito, para no enviarle a Google contenido delgado o vacío.
- **HTML semántico**: `<h1>` único por página, `<nav>`, `<main>`, `<footer>`, jerarquía de encabezados consistente y textos alternativos en imágenes/logo.

### Antes de publicar en producción

1. Reemplaza el dominio placeholder `https://www.pzadvisors.com` por el dominio real en `src/data/seoSchemas.js` (`SITE_URL`) y en `index.html` (canonical, Open Graph, robots.txt).
2. A medida que desarrolles páginas reales (hoy son `PlaceholderPage`), agrégales su propio `<Seo />` con `noindex={false}` y súmalas a `indexableRoutes` para que entren al sitemap.
3. Da de alta el sitio en [Google Search Console](https://search.google.com/search-console) y envía el `sitemap.xml`.

### Límite a tener en cuenta

Este proyecto es una SPA renderizada 100% en el cliente (sin SSR/prerender). Google indexa bien este tipo de sitios porque ejecuta JavaScript, pero algunos rastreadores de redes sociales no lo hacen — por eso `index.html` incluye también una copia estática de las etiquetas Open Graph/Twitter como respaldo. Si más adelante se necesita SEO aún más robusto (o multi-página con contenido único por servicio), lo ideal sería migrar a un framework con SSR/prerendering (ej. Next.js o vite-plugin-ssr).

## Notas de contenido

- Todos los enlaces del mega menú y del footer generan rutas reales
  (ver `src/router/collectRoutes.js`), evitando 404 al navegar. La
  única página con contenido completo es la reconstruida
  (`/consultoria/evaluacion-de-control-interno`, también servida en
  `/`); el resto usa `PlaceholderPage` como base para completarse a
  futuro.
- Los datos de contacto, navegación y contenido textual están
  centralizados en `src/data/`, para editarlos sin tocar los
  componentes.
