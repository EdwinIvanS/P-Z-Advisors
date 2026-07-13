import Icon from '../Icon/Icon';
import { contactInfo } from '../../../data/controlInternoContent';
import styles from './WhatsAppButton.module.css';

/**
 * WhatsAppButton
 * Botón flotante persistente que permite iniciar una conversación de
 * WhatsApp directamente, visible en toda la aplicación.
 */
export default function WhatsAppButton() {
  const link = `https://api.whatsapp.com/send/?phone=${contactInfo.whatsapp}&text&type=phone_number&app_absent=0`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.floatBtn}
      aria-label="Chatea con nosotros por WhatsApp"
    >
      <Icon name="whatsapp" size={30} />
    </a>
  );
}
