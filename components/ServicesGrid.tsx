/**
 * ServicesGrid
 * Four expandable service cards in a 2×2 grid.
 * Click a card to reveal full details.
 */
'use client';
import { useState } from 'react';
import Image from 'next/image';
import { SERVICES, type ServiceCard } from '@/lib/data';
import { useSite } from '@/lib/SiteContext';
import styles from './ServicesGrid.module.css';

export default function ServicesGrid() {
  const { tr } = useSite();
  return (
    <section className={styles.section} aria-label="Our services" id="services">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>{tr('services_eyebrow')}</p>
          <h2>{tr('services_heading')}</h2>
          <p className={styles.lead}>{tr('services_lead')}</p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <Card key={s.title} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ service }: { service: ServiceCard }) {
  const [open, setOpen] = useState(false);
  const { tr } = useSite();
  const slug = service.href.split('#')[1] ?? '';
  return (
    <article className={`${styles.card} ${open ? styles.cardOpen : ''}`} id={slug}>
      <button
        className={styles.cardSummary}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <div className={styles.imgWrap}>
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className={styles.img}
          />
          <div className={styles.imgOverlay} />
        </div>
        <div className={styles.summaryBody}>
          <div className={styles.titleRow}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            {service.price && <span className={styles.price}>{service.price}</span>}
          </div>
          <p className={styles.cardDesc}>{service.description}</p>
          <span className={styles.toggle}>{open ? tr('services_show_less') : tr('services_learn_more')}</span>
        </div>
      </button>

      {open && (
        <div className={styles.body}>
          {service.intro && <p className={styles.intro}>{service.intro}</p>}

          {service.bullets && (
            <ul className={styles.bullets}>
              {service.bullets.map((b, i) => (
                <li key={b.label ?? i}>
                  {b.label ? <><strong>{b.label}:</strong> {b.text}</> : b.text}
                </li>
              ))}
            </ul>
          )}

          {service.closing && <p className={styles.closing}>{service.closing}</p>}

          {service.note && <p className={styles.note}>{tr('services_note_prefix')}{service.note}</p>}
        </div>
      )}
    </article>
  );
}
