import { useEffect, useState } from 'react';

/**
 * Hook que indica si la página ha superado un umbral de scroll vertical.
 * Se usa para aplicar estilos "compactos" / sombra al navbar fijo.
 *
 * @param {number} threshold - píxeles de scroll a partir de los cuales se activa
 * @returns {boolean} isScrolled
 */
export default function useScrollPosition(threshold = 40) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Estado inicial (por si la página carga ya desplazada, ej. al volver con el back button)
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
