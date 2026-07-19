import { useState, useId } from 'react';
import './Accordion.css';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);
  const idBase = useId();

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const buttonId = `${idBase}-button-${index}`;
        const panelId = `${idBase}-panel-${index}`;

        return (
          <div className="accordion__item" key={index}>
            <h3 className="accordion__heading">
              <button
                type="button"
                id={buttonId}
                className="accordion__trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span>{item.title}</span>
                <span className={`accordion__icon ${isOpen ? 'accordion__icon--open' : ''}`} aria-hidden="true">
                  ▾
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`accordion__panel ${isOpen ? 'accordion__panel--open' : ''}`}
              hidden={!isOpen}
            >
              <div className="accordion__content">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}