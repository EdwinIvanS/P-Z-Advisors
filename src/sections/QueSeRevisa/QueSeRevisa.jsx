import Icon from '../../components/ui/Icon/Icon';
import { queSeRevisaItems } from '../../data/controlInternoContent';
import styles from '../../styles/article.module.css';

/**
 * QueSeRevisa
 * Segundo bloque: qué aspectos suele incluir una evaluación de
 * control interno empresarial, en formato de checklist visual.
 */
export default function QueSeRevisa() {
  return (
    <section className={styles.section} id="que-se-revisa">
      <h2 className={styles.heading}>¿Qué se revisa en una evaluación de control interno?</h2>
      <p className={styles.paragraph}>
        Una evaluación de control interno empresarial puede incluir la revisión de políticas,
        procedimientos, responsables, evidencias, niveles de autorización y controles aplicados
        en procesos críticos de la compañía. Entre los aspectos que suelen revisarse están:
      </p>

      <ul className={styles.checkList}>
        {queSeRevisaItems.map((item) => (
          <li key={item} className={styles.checkItem}>
            <span className={styles.checkIcon}>
              <Icon name="check" size={14} />
            </span>
            {item}
          </li>
        ))}
      </ul>

      <p className={styles.paragraph} style={{ marginTop: 20 }}>
        El alcance debe definirse de acuerdo con el tamaño de la empresa, sus procesos, su
        estructura interna y las necesidades específicas de la gerencia, junta directiva o áreas
        responsables.
      </p>
    </section>
  );
}
