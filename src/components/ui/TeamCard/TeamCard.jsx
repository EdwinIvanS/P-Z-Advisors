import Icon from '../Icon/Icon';
import styles from './TeamCard.module.css';

/**
 * TeamCard
 * Tarjeta individual de un miembro del equipo: avatar con iniciales
 * (placeholder visual, sin depender de fotografías externas), nombre,
 * cargo y enlace a LinkedIn.
 */
export default function TeamCard({ name, role, linkedin }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={styles.card}>
      <div className={styles.avatar} aria-hidden="true">
        {initials}
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkedinBtn}
          aria-label={`LinkedIn de ${name}`}
        >
          <Icon name="linkedin" size={16} />
        </a>
      </div>
    </div>
  );
}
