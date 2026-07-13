import Breadcrumb from '../../components/ui/Breadcrumb/Breadcrumb';
import Button from '../../components/ui/Button/Button';
import Icon from '../../components/ui/Icon/Icon';
import { contactInfo } from '../../data/controlInternoContent';
import styles from './Hero.module.css';

const breadcrumbItems = [
  { label: 'Inicio', href: '/' },
  { label: 'Consultoría', href: '/consultoria' },
  { label: 'Evaluación sistema de control interno para empresas' },
];

/**
 * Hero
 * Sección principal (above the fold) de la página de servicio:
 * migas de pan, título, descripción, llamados a la acción y un
 * panel visual con puntos clave del servicio.
 */
export default function Hero() {
  const whatsappLink = `https://api.whatsapp.com/send/?phone=${contactInfo.whatsapp}&text&type=phone_number&app_absent=0`;

  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.breadcrumbRow}>
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <div className={styles.content}>
          <div>
            <h1 className={styles.title}>Evaluación sistema de control interno para empresas</h1>
            <p className={styles.description}>
              Con P&Z Advisors, acompañamos a empresas en la evaluación de control interno
              para identificar riesgos, revisar controles clave y fortalecer la confiabilidad de
              sus procesos contables, financieros, operativos y tecnológicos.
            </p>
            <div className={styles.actions}>
              <Button
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                icon={<Icon name="arrowRight" size={18} />}
              >
                Habla con un asesor
              </Button>
              <Button href="/contactanos" variant="outline" size="lg">
                Agendar una reunión
              </Button>
            </div>
          </div>

          <div className={styles.visual}>
            <div className={styles.visualCard}>
              <div className={styles.visualStat}>
                <div className={styles.visualStatIcon}>
                  <Icon name="target" size={24} />
                </div>
                <div>
                  <p className={styles.visualStatTitle}>Enfoque técnico e independiente</p>
                  <p className={styles.visualStatText}>Revisión objetiva de controles clave</p>
                </div>
              </div>
              <div className={styles.visualStat}>
                <div className={styles.visualStatIcon}>
                  <Icon name="shield" size={24} />
                </div>
                <div>
                  <p className={styles.visualStatTitle}>Riesgos identificados</p>
                  <p className={styles.visualStatText}>Contables, operativos y tecnológicos</p>
                </div>
              </div>
              <div className={styles.visualStat}>
                <div className={styles.visualStatIcon}>
                  <Icon name="fileText" size={24} />
                </div>
                <div>
                  <p className={styles.visualStatTitle}>Entregables claros</p>
                  <p className={styles.visualStatText}>Hallazgos, matriz de riesgos y plan de mejora</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
