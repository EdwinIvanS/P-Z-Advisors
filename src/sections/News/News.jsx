import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import NewsCard from '../../components/ui/NewsCard/NewsCard';
import Button from '../../components/ui/Button/Button';
import { newsItems } from '../../data/controlInternoContent';
import styles from './News.module.css';

/**
 * News
 * Sección "Últimas Noticias": grid de artículos recientes del blog,
 * flash tributario y tax trends de P&Z Advisors.
 */
export default function News() {
  return (
    <section className={styles.section} id="noticias">
      <div className="container">
        <div className={styles.header}>
          <SectionTitle
            eyebrow="P&Z Advisors"
            title="Últimas Noticias"
            subtitle="Lee las noticias más relevantes en P&Z Advisors. Reformas fiscales, cambios legales y tendencias empresariales."
            underline={false}
          />
          <Button href="/blog" variant="outlineDark" size="sm">
            Ver todas
          </Button>
        </div>

        <div className={styles.grid}>
          {newsItems.map((item) => (
            <NewsCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
