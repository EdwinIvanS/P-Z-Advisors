import Icon from '../../components/ui/Icon/Icon';
import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import styles from './Memberships.module.css';

/**
 * Memberships
 * Sección de confianza: membresías (Allinial Global), registros
 * (ICDT, PCAOB, INCP) y certificaciones de la firma.
 */
export default function Memberships() {
  return (
    <section className={styles.section} id="membresias">
      <div className="container">
        <SectionTitle title="Respaldo y credenciales" centered underline={false} />

        <div className={styles.group}>
          <p className={styles.groupTitle}>Somos miembros de</p>
          <div className={styles.logosRow}>
            <div className={styles.logoBadge}>
              <Icon name="award" size={20} />
              Allinial Global
            </div>
          </div>
        </div>

        <div className={styles.group}>
          <p className={styles.groupTitle}>Estamos registrados en</p>
          <div className={styles.logosRow}>
            <div className={styles.logoBadge}>
              <Icon name="checkCircle" size={20} />
              ICDT
            </div>
            <div className={styles.logoBadge}>
              <Icon name="checkCircle" size={20} />
              PCAOB
            </div>
            <div className={styles.logoBadge}>
              <Icon name="checkCircle" size={20} />
              INCP
            </div>
          </div>
        </div>

        <div className={styles.group}>
          <p className={styles.groupTitle}>Estamos certificados en</p>
          <div className={styles.logosRow}>
            <div className={styles.logoBadge}>
              <Icon name="shield" size={20} />
              Calidad &amp; Cumplimiento
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
