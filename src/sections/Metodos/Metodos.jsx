import Icon from '../../components/ui/Icon/Icon';
import { metodosItems } from '../../data/controlInternoContent';
import styles from '../../styles/article.module.css';

/**
 * Metodos
 * Cuarto bloque: métodos utilizados para evaluar el diseño y
 * funcionamiento real de los controles.
 */
export default function Metodos() {
  return (
    <section className={styles.section} id="metodos">
      <h2 className={styles.heading}>Métodos de evaluación de control interno</h2>
      <p className={styles.paragraph}>
        Los métodos de evaluación de control interno deben permitir entender cómo están
        diseñados los controles y cómo funcionan en la práctica. No se trata solo de revisar
        documentos, sino de contrastar procedimientos, evidencias y ejecución real. Algunos
        métodos utilizados pueden incluir:
      </p>

      <ul className={styles.checkList}>
        {metodosItems.map((item) => (
          <li key={item} className={styles.checkItem}>
            <span className={styles.checkIcon}>
              <Icon name="check" size={14} />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <p className={styles.paragraph} style={{ marginTop: 20 }}>
        Este enfoque permite priorizar hallazgos y recomendaciones según su impacto, criticidad
        y relación con los objetivos de control de la empresa.
      </p>
    </section>
  );
}
