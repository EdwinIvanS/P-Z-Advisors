import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import WhatsAppButton from '../../ui/WhatsAppButton/WhatsAppButton';
import ScrollToTop from '../../ui/ScrollToTop/ScrollToTop';

/**
 * Layout
 * Estructura común a todas las rutas de la aplicación: navbar fija,
 * contenido de la página vía <Outlet />, footer y el botón flotante
 * de WhatsApp. El <main> recibe un padding-top para compensar el
 * header fijo.
 */
export default function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
