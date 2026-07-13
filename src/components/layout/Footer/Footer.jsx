import { Link } from 'react-router-dom';
import Icon from '../../ui/Icon/Icon';
import Logo from '../../ui/Logo/Logo';
import { contactInfo } from '../../../data/controlInternoContent';
import styles from './Footer.module.css';

const serviceLinks = [
  { label: 'Auditoría y Revisoría Fiscal', href: '/servicios/auditoria-y-revisoria-fiscal' },
  { label: 'Servicios Tributarios', href: '/servicios/tributarios' },
  { label: 'Outsourcing en Colombia', href: '/servicios/outsourcing' },
  { label: 'Servicios Legales', href: '/servicios-legales' },
  { label: 'Auditoría y Consultoría TI', href: '/auditoria-ti' },
  { label: 'Sostenibilidad', href: '/sostenibilidad' },
  { label: 'Consultoría', href: '/consultoria' },
];

const companyLinks = [
  { label: 'Sobre Nosotros', href: '/sobre-nosotros' },
  { label: 'Nuestros Profesionales', href: '/nuestros-profesionales' },
  /*{ label: 'Trabaja con Nosotros', href: 'https://pzadvisors.buk.co/trabaja-con-nosotros', external: true },*/
  { label: 'Allinial Global', href: '/miembros-allinial-global' },
  { label: 'Blog', href: '/blog' },
];

/**
 * Footer
 * Pie de página reutilizable en toda la aplicación, con datos de marca,
 * enlaces de servicios/compañía, información de contacto y redes sociales.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          {/* Marca */}
          <div className={styles.brandCol}>
            <Logo variant="full" size="lg" />
            <p className={styles.brandText}>
              Firma de auditoría, impuestos y consultoría con domicilio en Bogotá,
              comprometida con un servicio técnico, independiente y cercano a cada cliente.
            </p>
            <div className={styles.socialRow}>
              <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <Icon name="linkedin" size={18} />
              </a>
              <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <Icon name="facebook" size={18} />
              </a>
              <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <Icon name="instagram" size={18} />
              </a>
              <a href={contactInfo.social.twitter} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="X (Twitter)">
                <Icon name="twitter" size={18} />
              </a>
              <a href={contactInfo.social.youtube} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="YouTube">
                <Icon name="youtube" size={18} />
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className={styles.colTitle}>Servicios</h3>
            <div className={styles.linkList}>
              {serviceLinks.map((link) => (
                <Link key={link.label} to={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Nosotros */}
          <div>
            <h3 className={styles.colTitle}>Nosotros</h3>
            <div className={styles.linkList}>
              {companyLinks.map((link) =>
                link.external ? (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.label} to={link.href}>
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className={styles.colTitle}>Contacto</h3>
            <div className={styles.linkList}>
              <div className={styles.contactItem}>
                <Icon name="mapPin" size={16} />
                <span>{contactInfo.addressBogota}</span>
              </div>
              <div className={styles.contactItem}>
                <Icon name="phone" size={16} />
                <span>Comercial: {contactInfo.phonePBXBogota}</span>
              </div>
              <div className={styles.contactItem}>
                <Icon name="phone" size={16} />
                <span>Comercial: {contactInfo.phoneComercial}</span>
              </div>
              <div className={styles.contactItem}>
                <Icon name="mail" size={16} />
                <span>{contactInfo.email}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} P&Z Advisors S.A.S. Todos los derechos reservados.</span>
          <div className={styles.bottomLinks}>
            <Link to="/tratamiento-de-datos">Tratamiento de datos</Link>
            <Link to="/sobre-nosotros">Nosotros</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
