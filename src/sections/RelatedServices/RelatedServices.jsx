import { Link } from 'react-router-dom';
import Icon from '../../components/ui/Icon/Icon';
import { relatedServices } from '../../data/controlInternoContent';
import styles from './RelatedServices.module.css';

/**
 * RelatedServices
 * Panel lateral ("Nuestros Servicios") con enlaces a los demás
 * servicios de la línea de Consultoría, resaltando el activo.
 */
export default function RelatedServices() {
  return (
    <aside className={styles.wrapper} aria-label="Servicios relacionados de consultoría">
      <h2 className={styles.title}>Nuestros Servicios</h2>
      <nav className={styles.list}>
        {relatedServices.map((service) =>
          service.active ? (
            <span key={service.label} className={`${styles.item} ${styles.active}`}>
              <Icon name="chevronRight" size={14} />
              {service.label}
            </span>
          ) : (
            <Link key={service.label} to={service.href} className={styles.item}>
              <Icon name="chevronRight" size={14} />
              {service.label}
            </Link>
          )
        )}
      </nav>
    </aside>
  );
}
