import styles from './SectionTitle.module.css';

/**
 * SectionTitle
 * Encabezado estandarizado para las secciones de la página: eyebrow
 * (texto pequeño superior), título principal, subtítulo opcional y
 * una línea de acento decorativa.
 */
export default function SectionTitle({ eyebrow, title, subtitle, centered = false, underline = true, as: Tag = 'h2' }) {
  return (
    <div className={`${styles.wrapper} ${centered ? styles.centered : ''}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <Tag className={styles.title}>{title}</Tag>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      {underline && <div className={styles.underline} aria-hidden="true" />}
    </div>
  );
}
