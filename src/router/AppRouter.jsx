import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound/NotFound';
import PlaceholderPage from '../pages/PlaceholderPage/PlaceholderPage';
import { collectRoutes } from './collectRoutes';

const MAIN_ROUTE = '/consultoria/evaluacion-de-control-interno';

/**
 * AppRouter
 * Define el árbol de rutas de la aplicación.
 *
 * Notas de despliegue:
 * - `basename` toma el valor de `import.meta.env.BASE_URL`, que Vite
 *   completa automáticamente a partir de la opción `base` definida en
 *   `vite.config.js`. Esto permite desplegar el sitio tanto en la raíz
 *   de un dominio (https://midominio.com/) como en un subdirectorio
 *   (https://midominio.com/mi-app/) sin tocar el código de las rutas.
 * - Como es una SPA, el servidor de producción debe redirigir
 *   cualquier ruta desconocida hacia `index.html` para que React
 *   Router pueda resolverla en el cliente (ver los archivos de
 *   configuración `vercel.json`, `public/_redirects` y `.htaccess`
 *   incluidos en el proyecto, listos para Vercel, Netlify y Apache
 *   respectivamente).
 */
export default function AppRouter() {
  const dynamicRoutes = collectRoutes();

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          {/* Home = página reconstruida de Evaluación de Control Interno */}
          <Route index element={<Home />} />
          <Route path={MAIN_ROUTE} element={<Home />} />

          {/* Resto de rutas del sitio (mega menú, footer, sidebar) */}
          {Array.from(dynamicRoutes.entries())
            .filter(([href]) => href !== MAIN_ROUTE)
            .map(([href, label]) => (
              <Route key={href} path={href} element={<PlaceholderPage title={label} />} />
            ))}

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
