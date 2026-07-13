import styles from './Logo.module.css';

/**
 * Logo
 * Wordmark oficial de "P&Z Advisors", usando el arte original del
 * cliente (no una recreación tipográfica) para respetar exactamente
 * la fuente, el símbolo "&" caligráfico y los colores del logo.
 *
 * Se usan dos recortes del mismo archivo original:
 * - "header": el símbolo "P&Z" + "ADVISORS" (sin el claim), pensado
 *   para espacios compactos como el navbar o el menú móvil. Al tener
 *   su propio fondo navy funciona como una pequeña insignia sobre
 *   fondos claros.
 * - "full": incluye además la línea divisoria y el claim
 *   "Audit · Tax · Advisory", pensado para el footer (fondo navy),
 *   donde el fondo del logo se funde con el del footer.
 *
 * @param {'header'|'full'} variant
 * @param {'sm'|'md'|'lg'} size
 * @param {boolean} badge - aplica esquinas redondeadas + sombra (recomendado sobre fondos claros)
 */
export default function Logo({ variant = 'header', size = 'lg', badge = false, className = '' }) {
  const src = variant === 'full' ? '/brand/logo-full.png' : '/brand/logo-header.png';

  const classes = [styles.logo, styles[size], badge ? styles.badge : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes}>
      <img src={src} alt="P&Z Advisors — Audit · Tax · Advisory" className={styles.img} />
    </span>
  );
}
