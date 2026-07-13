import styles from './Logo.module.css';

/**
 * Logo
 * @param {'header'|'full'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean} badge - aplica esquinas redondeadas + sombra (recomendado sobre fondos claros)
 */
export default function Logo({ variant = 'header', size = 'lg', badge = false, className = '' }) {
  const src = variant === 'full'
    ? `${import.meta.env.BASE_URL}brand/logo-full.png`
    : `${import.meta.env.BASE_URL}brand/logo-header.png`;

  const classes = [styles.logo, styles[size], badge ? styles.badge : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes}>
      <img src={src} alt="P&Z Advisors — Audit · Tax · Advisory" className={styles.img} />
    </span>
  );
}
