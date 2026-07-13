import { useState } from 'react';
import Icon from '../Icon/Icon';
import styles from './Accordion.module.css';

/**
 * Accordion
 * Lista de preguntas/respuestas colapsables. Permite un único item
 * abierto a la vez (patrón típico de secciones de FAQ).
 *
 * @param {{question: string, answer: string}[]} items
 * @param {number} defaultOpenIndex - índice abierto por defecto (-1 = ninguno)
 */
export default function Accordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <div className={styles.accordion}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const triggerId = `faq-trigger-${index}`;

        return (
          <div key={item.question} className={`${styles.item} ${isOpen ? styles.open : ''}`}>
            <button
              type="button"
              id={triggerId}
              className={styles.trigger}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className={styles.question}>{item.question}</span>
              <span className={styles.iconWrap}>
                <Icon name="chevronDown" size={18} />
              </span>
            </button>
            <div
              className={styles.panel}
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
            >
              <div className={styles.panelInner}>
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
