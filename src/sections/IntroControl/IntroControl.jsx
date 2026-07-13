import { Link } from 'react-router-dom';
import styles from '../../styles/article.module.css';

/**
 * IntroControl
 * Primer bloque textual: qué es la evaluación del sistema de control
 * interno y por qué acompañarse de P&Z Advisors.
 */
export default function IntroControl() {
  return (
    <section className={styles.section} id="que-es">
      <h2 className={styles.heading}>Evaluación del sistema de control interno para empresas</h2>
      <p className={styles.paragraph}>
        La evaluación del sistema de control interno permite revisar cómo una organización
        gestiona sus procesos, controles, autorizaciones, responsabilidades y mecanismos de
        seguimiento. Su objetivo es identificar debilidades, oportunidades de mejora y riesgos
        que puedan afectar la confiabilidad de la información, la eficiencia operativa y la toma
        de decisiones.
      </p>
      <p className={styles.paragraph}>
        En P&Z Advisors acompañamos a empresas que necesitan una mirada técnica e independiente
        sobre su control interno financiero, operativo y tecnológico. Este proceso ayuda a
        entender si los controles actuales son suficientes, si están correctamente documentados
        y si funcionan de acuerdo con las necesidades reales de la organización.
      </p>
      <p className={styles.paragraph}>
        También puede ser un punto de partida para fortalecer procesos relacionados con{' '}
        <Link to="/servicios/auditoria-interna">auditoría interna</Link>, gestión de riesgos,
        reportes financieros y cumplimiento interno.
      </p>
    </section>
  );
}
