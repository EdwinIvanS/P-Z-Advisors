import styles from './Button.module.css';

/**
 * Button
 * Botón reutilizable. Se renderiza como <a> si recibe `href`, o como
 * <button> en caso contrario. Soporta variantes visuales y tamaños.
 *
 * @param {'primary'|'secondary'|'outline'|'outlineDark'|'whatsapp'} variant
 * @param {'sm'|'md'|'lg'} size
 */
export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon = null,
  className = '',
  target,
  rel,
  ...rest
}) {
  const classes = [
    styles.btn,
    styles[variant],
    size !== 'md' ? styles[size] : '',
    fullWidth ? styles.fullWidth : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel} {...rest}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
      {icon}
    </button>
  );
}
