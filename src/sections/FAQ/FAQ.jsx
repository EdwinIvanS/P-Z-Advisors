import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import Accordion from '../../components/ui/Accordion/Accordion';
import { faqItems } from '../../data/controlInternoContent';
import styles from './FAQ.module.css';

/**
 * FAQ
 * Sección de preguntas frecuentes sobre el servicio de evaluación
 * de control interno, en formato acordeón accesible.
 */
export default function FAQ() {
  return (
    <section className={styles.section} id="preguntas-frecuentes">
      <div className="container">
        <SectionTitle eyebrow="P&Z Advisors" title="Preguntas Frecuentes" centered />
        <div className={styles.wrapper}>
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
