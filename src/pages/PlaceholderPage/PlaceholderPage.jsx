import { useLocation } from 'react-router-dom';
import Seo from '../../components/seo/Seo';
import Button from '../../components/ui/Button/Button';
import styles from './PlaceholderPage.module.css';

/**
 * PlaceholderPage
 * Página genérica utilizada por las rutas del menú que aún no tienen
 * contenido propio desarrollado (por ejemplo, otros servicios listados
 * en la navegación). Confirma que el enrutamiento de React Router
 * funciona correctamente para cualquier ruta declarada, y sirve como
 * plantilla base para ir construyendo cada página en el futuro.
 *
 * SEO: se marca como `noindex` a propósito. Al no tener contenido
 * único todavía, indexarla en Google generaría "contenido delgado"
 * (thin content) que puede perjudicar el posicionamiento general del
 * sitio. Cuando cada página se desarrolle con contenido real, se
 * reemplaza por su propio <Seo> con index habilitado.
 */
export default function PlaceholderPage({ title = 'Página en construcción' }) {
  const location = useLocation();

  return (
    <>
      <Seo
        title={title}
        description={`Estamos preparando el contenido de "${title}" en P&Z Advisors. Contáctanos y con gusto te asesoramos mientras tanto.`}
        path={location.pathname}
        noindex
      />

      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.text}>
            Estamos preparando el contenido detallado de esta sección. Mientras tanto, puedes
            contactarnos directamente y con gusto te asesoramos.
          </p>
        </div>
      </section>

      <section className={styles.body}>
        <div className="container">
          <p className={styles.bodyText}>
            Ruta solicitada: <code>{location.pathname}</code>. Esta vista confirma que la
            configuración de rutas de React Router funciona correctamente en producción.
          </p>
          <Button href="/" variant="secondary">
            Volver al inicio
          </Button>
        </div>
      </section>
    </>
  );
}
