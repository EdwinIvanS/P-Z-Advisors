import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../ui/Icon/Icon';
import styles from './Header.module.css';

/**
 * NavItem
 * Ítem individual del navbar de escritorio. Si trae `submenu`, se
 * comporta como disparador de un mega menú que se abre al hacer hover
 * o focus (accesible por teclado) y se cierra al salir del área.
 */
export default function NavItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef(null);

  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setIsOpen(true);
  };

  const closeMenuDelayed = () => {
    closeTimer.current = setTimeout(() => setIsOpen(false), 150);
  };

  if (!item.submenu) {
    return (
      <div className={styles.navItem}>
        {item.external ? (
          <a href={item.href} target="_blank" rel="noopener noreferrer" className={styles.navLink}>
            {item.label}
          </a>
        ) : (
          <Link to={item.href} className={styles.navLink}>
            {item.label}
          </Link>
        )}
      </div>
    );
  }

  return (
    <div
      className={`${styles.navItem} ${isOpen ? styles.megaOpen : ''}`}
      onMouseEnter={openMenu}
      onMouseLeave={closeMenuDelayed}
      onFocus={openMenu}
      onBlur={closeMenuDelayed}
    >
      <button type="button" className={styles.navLink} aria-expanded={isOpen} aria-haspopup="true">
        {item.label}
        <Icon name="chevronDown" size={16} className={styles.chevron} />
      </button>

      <div className={styles.megaMenu} role="menu">
        {item.submenu.map((col) => (
          <div className={styles.megaCol} key={col.heading || col.items[0].label}>
            {col.heading && (
              <Link to={col.href || '#'} className={styles.megaHeading}>
                {col.heading}
              </Link>
            )}
            {col.items.map((sub) => (
              <Link key={sub.label} to={sub.href} className={styles.megaItem} role="menuitem">
                {sub.label}
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
