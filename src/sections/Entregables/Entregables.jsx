import { Link } from 'react-router-dom';
import styles from '../../styles/article.module.css';

/**
 * Entregables
 * Sexto bloque: qué entrega P&Z Advisors al finalizar el diagnóstico y
 * su relación con otros servicios (EEFF, administración de riesgos).
 */
export default function Entregables() {
  return (
    <section className={styles.section} id="entregables">
      <h2 className={styles.heading}>Entregables del diagnóstico y relación con auditoría interna</h2>
      <p className={styles.paragraph}>
        Los entregables de una evaluación de control interno pueden variar según el alcance
        definido, pero normalmente incluyen un informe de hallazgos, riesgos identificados,
        recomendaciones y oportunidades de mejora para fortalecer el ambiente de control.
      </p>
      <p className={styles.paragraph}>
        También puede incluir una matriz de riesgos y controles, observaciones por proceso,
        priorización de acciones y un plan de mejora sugerido. Cuando el diagnóstico se relaciona
        con información contable o financiera, puede conectarse con procesos de{' '}
        <Link to="/consultoria/elaboracion-y-reporte-de-estados-financieros-eeff">
          elaboración y reporte de estados financieros
        </Link>
        .
      </p>
      <p className={styles.paragraph}>
        La evaluación de control interno también se relaciona con la{' '}
        <Link to="/consultoria/implementacion-evaluacion-sistemas-administracion-riesgos">
          implementación y evaluación de sistemas de administración de riesgos
        </Link>
        , ya que ambos enfoques buscan identificar exposiciones relevantes, fortalecer controles
        y apoyar una gestión empresarial más preventiva.
      </p>
    </section>
  );
}
