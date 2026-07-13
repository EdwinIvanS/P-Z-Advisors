import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../ui/Icon/Icon';
import Button from '../../ui/Button/Button';
import Logo from '../../ui/Logo/Logo';
import { utilityLinks } from '../../../data/navigation';
import { contactInfo } from '../../../data/controlInternoContent';
import styles from './Header.module.css';

/**
 * MobileDrawer
 * Panel lateral deslizable con la navegación completa para dispositivos
 * móviles y tablets, incluyendo submenús colapsables tipo acordeón.
 */
export default function MobileDrawer({ navigation, isOpen, onClose }) {
  const [openGroup, setOpenGroup] = useState(null);

  const toggleGroup = (label) => {
    setOpenGroup((current) => (current === label ? null : label));
  };

  const whatsappLink = `https://api.whatsapp.com/send/?phone=${contactInfo.whatsapp}&text&type=phone_number&app_absent=0`;

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.open : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`${styles.drawer} ${isOpen ? styles.open : ''}`}
        aria-hidden={!isOpen}
        aria-label="Menú de navegación móvil"
      >
        <div className={styles.drawerHeader}>
          <Logo variant="header" size="sm" badge />
          <button type="button" className={styles.drawerClose} onClick={onClose} aria-label="Cerrar menú">
            <Icon name="close" size={20} />
          </button>
        </div>

        <nav className={styles.drawerNav}>
          {navigation.map((item) => {
            if (!item.submenu) {
              return item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.drawerSimpleLink}
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.href} className={styles.drawerSimpleLink} onClick={onClose}>
                  {item.label}
                </Link>
              );
            }

            const isGroupOpen = openGroup === item.label;

            return (
              <div key={item.label} className={`${styles.drawerGroup} ${isGroupOpen ? styles.open : ''}`}>
                <button
                  type="button"
                  className={styles.drawerTrigger}
                  onClick={() => toggleGroup(item.label)}
                  aria-expanded={isGroupOpen}
                >
                  {item.label}
                  <Icon name="chevronDown" size={18} className={styles.chevron} />
                </button>
                <div className={styles.drawerPanel}>
                  <div className={styles.drawerPanelInner}>
                    {item.submenu.map((col) => (
                      <div key={col.heading || col.items[0].label}>
                        {col.heading && <p className={styles.drawerSubHeading}>{col.heading}</p>}
                        {col.items.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.href}
                            className={styles.drawerSubLink}
                            onClick={onClose}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className={styles.drawerFooter}>
          {utilityLinks.map((link) => (
            <Link key={link.label} to={link.href} className={styles.drawerUtilLink} onClick={onClose}>
              <Icon name="chevronRight" size={14} />
              {link.label}
            </Link>
          ))}
          <Button href={whatsappLink} target="_blank" rel="noopener noreferrer" variant="whatsapp" fullWidth icon={<Icon name="whatsapp" size={18} />}>
            Escríbenos
          </Button>
        </div>
      </aside>
    </>
  );
}
