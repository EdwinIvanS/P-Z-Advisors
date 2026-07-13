import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
//
// Configuración pensada para desplegar tanto en local como en un
// servidor de pruebas/producción, incluyendo el caso de publicar el
// sitio dentro de un subdirectorio (ej: https://dominio.com/subcarpeta/).
//
// `base` se toma de la variable de entorno VITE_BASE_PATH (definible por
// entorno en un archivo .env.production / .env.staging). Si no se define,
// por defecto es "/" (despliegue en la raíz del dominio).
//
// React Router (ver src/router/AppRouter.jsx) usa `import.meta.env.BASE_URL`
// como `basename`, por lo que ambos quedan siempre sincronizados
// automáticamente sin tener que tocar el código de las rutas.
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const basePath = env.VITE_BASE_PATH || '/';

  return {
    base: basePath,
    plugins: [react()],
    server: {
      port: 5173,
      open: false,
    },
    preview: {
      port: 4173,
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
  };
});
