import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop
 * React Router, a diferencia de un sitio multipágina tradicional, no
 * reinicia el scroll al navegar entre rutas. Este componente restaura
 * ese comportamiento esperado por el usuario.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname]);

  return null;
}
