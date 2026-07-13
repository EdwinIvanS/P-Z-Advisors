import Seo from '../components/seo/Seo';
import Hero from '../sections/Hero/Hero';
import RelatedServices from '../sections/RelatedServices/RelatedServices';
import IntroControl from '../sections/IntroControl/IntroControl';
import QueSeRevisa from '../sections/QueSeRevisa/QueSeRevisa';
import TiposControl from '../sections/TiposControl/TiposControl';
import Metodos from '../sections/Metodos/Metodos';
import Senales from '../sections/Senales/Senales';
import Entregables from '../sections/Entregables/Entregables';
import BrochureCTA from '../sections/BrochureCTA/BrochureCTA';
import WhyChoose from '../sections/WhyChoose/WhyChoose';
import Memberships from '../sections/Memberships/Memberships';
import ContactCTA from '../sections/ContactCTA/ContactCTA';
import Specialists from '../sections/Specialists/Specialists';
import FAQ from '../sections/FAQ/FAQ';
import News from '../sections/News/News';
import { organizationSchema, buildBreadcrumbSchema, buildFaqSchema } from '../data/seoSchemas';
import { faqItems } from '../data/controlInternoContent';
import styles from './Home.module.css';

const PAGE_PATH = '/consultoria/evaluacion-de-control-interno';

const breadcrumbSchema = buildBreadcrumbSchema([
  { label: 'Inicio', href: '/' },
  { label: 'Consultoría', href: '/consultoria' },
  { label: 'Evaluación sistema de control interno para empresas', href: PAGE_PATH },
]);

const faqSchema = buildFaqSchema(faqItems);

/**
 * Home
 * Página principal reconstruida: "Evaluación sistema de control
 * interno para empresas". Compone el Hero, el bloque de contenido
 * (con la barra lateral de servicios relacionados) y las secciones
 * institucionales que cierran la página (confianza, equipo, FAQ, blog).
 *
 * Es la única ruta con SEO "index, follow" completo: título, meta
 * description, canonical y datos estructurados (Organización, migas
 * de pan y FAQ) vía el componente <Seo />.
 */
export default function Home() {
  return (
    <>
      <Seo
        title="Evaluación de Control Interno Para Empresas"
        description="Evaluamos el sistema de control interno de tu empresa: identificamos riesgos y revisamos controles contables, operativos y tecnológicos con un enfoque técnico e independiente."
        path={PAGE_PATH}
        jsonLd={[organizationSchema, breadcrumbSchema, faqSchema]}
      />

      <Hero />

      <div className={`container ${styles.contentLayout}`}>
        <div className={styles.grid}>
          <RelatedServices />

          <article>
            <IntroControl />
            <QueSeRevisa />
            <TiposControl />
            <Metodos />
            <Senales />
            <Entregables />
            <div className={styles.brochureWrapper}>
              <BrochureCTA />
            </div>
          </article>
        </div>
      </div>

      <WhyChoose />
      <Memberships />
      <ContactCTA />
      <Specialists />
      <FAQ />
      <News />
    </>
  );
}
