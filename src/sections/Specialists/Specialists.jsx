import SectionTitle from '../../components/ui/SectionTitle/SectionTitle';
import TeamCard from '../../components/ui/TeamCard/TeamCard';
import { specialists } from '../../data/controlInternoContent';
import styles from './Specialists.module.css';

/**
 * Specialists
 * Sección "Nuestros Especialistas": equipo técnico responsable del
 * servicio, con acceso directo a sus perfiles de LinkedIn.
 */
export default function Specialists() {
  return (
    <section className={styles.section} id="especialistas">
      <div className="container">
        <SectionTitle eyebrow="Nuestro equipo" title="Nuestros Especialistas" centered />

        <div className={styles.grid}>
          {specialists.map((person) => (
            <TeamCard key={person.name} {...person} />
          ))}
        </div>
      </div>
    </section>
  );
}
