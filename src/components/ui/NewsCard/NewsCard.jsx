import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import styles from './NewsCard.module.css';

/**
 * NewsCard
 * Tarjeta de artículo/noticia usada en el listado de "Últimas Noticias".
 */
export default function NewsCard({ date, title, excerpt, href, category }) {
  return (
    <article className={styles.card}>
      <div className={styles.thumb}>
        <span className={styles.category}>{category}</span>
        <Icon name="fileText" size={36} />
      </div>
      <div className={styles.body}>
        <span className={styles.date}>{date}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <Link to={href} className={styles.readMore}>
          Leer Más
          <Icon name="arrowRight" size={14} />
        </Link>
      </div>
    </article>
  );
}
