import { useEffect } from 'react';

/**
 * Bloquea el scroll del body mientras `locked` sea true.
 * Útil para el menú hamburguesa en móviles y modales.
 */
export default function useBodyScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [locked]);
}
