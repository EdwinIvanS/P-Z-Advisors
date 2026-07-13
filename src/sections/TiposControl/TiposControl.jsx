import { Link } from 'react-router-dom';
import Icon from '../../components/ui/Icon/Icon';
import { tiposControl } from '../../data/controlInternoContent';
import articleStyles from '../../styles/article.module.css';
import styles from './TiposControl.module.css';

/**
 * TiposControl
 * Tercer bloque: los tres frentes de control interno (contable,
 * operativo y tecnológico), presentados como tarjetas con ícono.
 */
export default function TiposControl() {
  return (
    <section className={articleStyles.section} id="tipos-de-control">
      <h2 className={articleStyles.heading}>Control interno contable, operativo y tecnológico</h2>
      <p className={articleStyles.paragraph}>
        La evaluación de control interno contable se enfoca en la confiabilidad de los registros,
        cierres, conciliaciones, soportes, reportes y estados financieros. Este frente es clave
        para reducir errores, mejorar la trazabilidad de la información y apoyar decisiones
        basadas en datos más consistentes.
      </p>

      <div className={styles.grid}>
        {tiposControl.map((tipo) => (
          <div className={styles.card} key={tipo.title}>
            <div className={styles.cardIcon}>
              <Icon name={tipo.icon} size={26} />
            </div>
            <h3 className={styles.cardTitle}>{tipo.title}</h3>
            <p className={styles.cardText}>{tipo.description}</p>
          </div>
        ))}
      </div>

      <p className={articleStyles.paragraph} style={{ marginTop: 24 }}>
        Cuando la organización requiere una revisión más especializada de TI, este diagnóstico
        puede complementarse con servicios de{' '}
        <Link to="/auditoria-ti/auditoria-de-ti-y-cumplimiento">auditoría de TI y cumplimiento</Link>.
      </p>
    </section>
  );
}
