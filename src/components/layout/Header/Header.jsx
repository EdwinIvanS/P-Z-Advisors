import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../ui/Icon/Icon';
import Button from '../../ui/Button/Button';
import Logo from '../../ui/Logo/Logo';
import NavItem from './NavItem';
import MobileDrawer from './MobileDrawer';
import useScrollPosition from '../../../hooks/useScrollPosition';
import useBodyScrollLock from '../../../hooks/useBodyScrollLock';
import { navigation } from '../../../data/navigation';
import { contactInfo } from '../../../data/controlInternoContent';
import styles from './Header.module.css';

/**
 * Header
 * Navbar principal de la aplicación. Queda fija (position: fixed) y
 * gana sombra/altura reducida al hacer scroll. En pantallas grandes
 * muestra el mega menú; en móvil, un botón hamburguesa abre el drawer.
 */
export default function Header() {
  const isScrolled = useScrollPosition(40);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useBodyScrollLock(isDrawerOpen);

  const whatsappLink = `https://api.whatsapp.com/send/?phone=${contactInfo.whatsapp}&text&type=phone_number&app_absent=0`;

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link to="/" className={styles.logoLink} aria-label="P&Z Advisors - Inicio">
            <Logo variant="header" size="md" badge />
          </Link>

          <nav className={styles.nav} aria-label="Navegación principal">
            {navigation.map((item) => (
              <NavItem key={item.label} item={item} />
            ))}
          </nav>

          <div className={styles.actions}>
            <Button href="/contactanos" variant="outlineDark" size="sm">
              Contáctanos
            </Button>
            <Button
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="whatsapp"
              size="sm"
              icon={<Icon name="whatsapp" size={16} />}
            >
              Habla con un asesor
            </Button>
          </div>

          <button
            type="button"
            className={styles.hamburger}
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Abrir menú de navegación"
          >
            <Icon name="menu" size={22} />
          </button>
        </div>
      </header>

      <MobileDrawer navigation={navigation} isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
