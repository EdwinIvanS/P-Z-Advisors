import Icon from '../../components/ui/Icon/Icon';
import Button from '../../components/ui/Button/Button';
import { contactInfo } from '../../data/controlInternoContent';
import styles from './BrochureCTA.module.css';

/**
 * BrochureCTA
 * Bloque de dos paneles: descarga del brochure del servicio y acceso
 * directo para agendar una reunión / escribir por WhatsApp.
 */
export default function BrochureCTA() {
  const whatsappLink = `https://api.whatsapp.com/send/?phone=${contactInfo.whatsapp}&text&type=phone_number&app_absent=0`;

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.panel} ${styles.panelDark}`}>
        <div className={styles.panelIcon}>
          <Icon name="fileText" size={26} />
        </div>
        <h3 className={styles.panelTitle}>Nuestro Brochure</h3>
        <Button href="https://view.genially.com/67a4b9fbba961589d2f34bf2" target="_blank" rel="noopener noreferrer" variant="primary">
          Brochure
        </Button>
      </div>

      <div className={`${styles.panel} ${styles.panelLight}`}>
        <div className={styles.panelIcon}>
          <Icon name="calendar" size={26} />
        </div>
        <h3 className={styles.panelTitle}>Agendar reunión</h3>
        <Button href={whatsappLink} target="_blank" rel="noopener noreferrer" variant="secondary" icon={<Icon name="whatsapp" size={16} />}>
          Envíanos un mensaje
        </Button>
      </div>
    </div>
  );
}
