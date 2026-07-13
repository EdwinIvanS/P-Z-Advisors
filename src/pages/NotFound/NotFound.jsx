import { useLocation } from 'react-router-dom';
import Seo from '../../components/seo/Seo';
import Button from '../../components/ui/Button/Button';
import styles from './NotFound.module.css';

/**
 * NotFound
 * Página 404 mostrada cuando ninguna ruta configurada coincide con
 * la URL solicitada. Es la razón por la que el servidor de producción
 * debe redirigir siempre a index.html (ver README de despliegue) —
 * así React Router puede tomar el control y decidir mostrar esta vista.
 *
 * SEO: marcada como `noindex` — una 404 nunca debe indexarse.
 */
export default function NotFound() {
  const location = useLocation();

  return (
    <>
      <Seo
        title="Página no encontrada"
        description="La página que buscas no existe o fue movida. Vuelve al inicio para seguir navegando por los servicios de P&Z Advisors."
        path={location.pathname}
        noindex
      />

      <section className={`container ${styles.section}`}>
        <div>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>Página no encontrada</h1>
          <p className={styles.text}>
            La página que buscas no existe o fue movida. Verifica la dirección o vuelve al inicio
            para continuar navegando por nuestros servicios.
          </p>
          <Button href="/" variant="primary">
            Volver al inicio
          </Button>
        </div>
      </section>
    </>
  );
}
