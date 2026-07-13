import Icon from '../../components/ui/Icon/Icon';
import { whyChooseFeatures } from '../../data/controlInternoContent';
import styles from './WhyChoose.module.css';

const icons = ['target', 'shield', 'workflow', 'checkCircle'];

/**
 * WhyChoose
 * Sección de valor diferencial: "¿Por qué elegir P&Z Advisors para la
 * evaluación de control interno?", con texto y tarjetas de features.
 */
export default function WhyChoose() {
  return (
    <section className={styles.section} id="por-que-elegirnos">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className={styles.eyebrow}>Nuestro diferencial</span>
            <h2 className={styles.title}>¿Por qué elegir P&Z Advisors para la evaluación de control interno?</h2>
            <p className={styles.text}>
              Elegir a P&Z Advisors para una evaluación de control interno significa contar con un
              aliado que entiende la importancia de revisar los procesos empresariales con
              criterio técnico, enfoque preventivo y visión integral.
            </p>
            <p className={styles.text}>
              Acompañamos a las organizaciones en la identificación de riesgos, revisión de
              controles y definición de oportunidades de mejora para fortalecer la confiabilidad
              de la información, la eficiencia operativa y la toma de decisiones.
            </p>
          </div>

          <div className={styles.featureGrid}>
            {whyChooseFeatures.map((feature, index) => (
              <div className={styles.featureCard} key={feature}>
                <div className={styles.featureIcon}>
                  <Icon name={icons[index % icons.length]} size={20} />
                </div>
                <p className={styles.featureText}>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
