import Icon from '../../components/ui/Icon/Icon';
import { senalesItems } from '../../data/controlInternoContent';
import styles from '../../styles/article.module.css';

/**
 * Senales
 * Quinto bloque: señales de alerta frecuentes que indican que una
 * empresa necesita evaluar su control interno.
 */
export default function Senales() {
  return (
    <section className={styles.section} id="senales">
      <h2 className={styles.heading}>Señales de que una empresa necesita evaluar su control interno</h2>
      <p className={styles.paragraph}>
        Una empresa puede necesitar una evaluación del sistema de control interno cuando empieza
        a crecer, cambia su estructura, incorpora nuevas áreas, enfrenta hallazgos recurrentes o
        requiere mayor confiabilidad en su información financiera y operativa. Algunas señales
        frecuentes son:
      </p>

      <ul className={styles.checkList}>
        {senalesItems.map((item) => (
          <li key={item} className={styles.checkItem}>
            <span className={`${styles.checkIcon} ${styles.alertIcon}`}>
              <Icon name="alertTriangle" size={14} />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <p className={styles.paragraph} style={{ marginTop: 20 }}>
        En estos casos, una evaluación técnica ayuda a ordenar prioridades, identificar riesgos y
        definir acciones de mejora viables para la organización.
      </p>
    </section>
  );
}
