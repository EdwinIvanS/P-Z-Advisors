import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

/**
 * Breadcrumb
 * Ruta de navegación (migas de pan) usada en el hero de páginas internas.
 * @param {{label: string, href?: string}[]} items - último item sin href = página actual
 */
export default function Breadcrumb({ items }) {
  return (
    <nav className={styles.breadcrumb} aria-label="Ruta de navegación">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {item.href && !isLast ? (
              <Link to={item.href} className={styles.link}>
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? styles.current : styles.link}>{item.label}</span>
            )}
            {!isLast && <span className={styles.separator}>–</span>}
          </span>
        );
      })}
    </nav>
  );
}
