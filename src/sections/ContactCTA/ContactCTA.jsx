import Button from '../../components/ui/Button/Button';
import Icon from '../../components/ui/Icon/Icon';
import { contactInfo } from '../../data/controlInternoContent';
import styles from './ContactCTA.module.css';

/**
 * ContactCTA
 * Bloque destacado "¡Hablemos!" con llamado a la acción principal
 * hacia la página de contacto y WhatsApp, más teléfonos de referencia.
 */
export default function ContactCTA() {
  const whatsappLink = `https://api.whatsapp.com/send/?phone=${contactInfo.whatsapp}&text&type=phone_number&app_absent=0`;

  return (
    <section className={styles.section} id="contacto">
      <div className="container">
        <div className={styles.card}>
          <div>
            <h2 className={styles.title}>¡Hablemos!</h2>
            <p className={styles.text}>
              Te asesoramos con soluciones claras, precisas y alineadas a las necesidades de tu
              empresa. Nuestro equipo está listo para ayudarte a avanzar con mayor eficiencia y
              transparencia.
            </p>
            <div className={styles.phones}>
              <span>Línea Comercial: {contactInfo.phoneComercial}</span>
              <span>Línea Admin: {contactInfo.phoneAdmin}</span>
            </div>
          </div>

          <div className={styles.actions}>
            <Button href="/contactanos" variant="primary" size="lg">
              Contáctanos
            </Button>
            <Button
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              icon={<Icon name="whatsapp" size={18} />}
            >
              Envíanos un mensaje
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
