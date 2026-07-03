/**
 * Poster
 * Full-bleed promotional poster section.
 * The poster image lives in /public/poster.png and is displayed responsively.
 */
import Image from 'next/image';
import styles from './Poster.module.css';

export default function Poster() {
  return (
    <section className={styles.section} aria-label="PurePools Services promotional poster">
      <div className={`container ${styles.wrap}`}>
        <div className={styles.posterFrame}>
          <Image
            src="/poster.png"
            alt="PurePools Services — Maintenance, Repair and Installation. Pool Opening, Maintenance, Repair and Installation of Swimming Pool Equipment, Pool Closure."
            width={1200}
            height={1500}
            sizes="(max-width: 720px) 100vw, 720px"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
