/**
 * AnnouncementBanner
 * Seasonal callout displayed below the hero. Highlights pool opening promo
 * and links to the downloadable opening forms (UI placeholders).
 */
import Link from 'next/link';
import styles from './AnnouncementBanner.module.css';

export default function AnnouncementBanner() {
  return (
    <section className={styles.banner} aria-label="Seasonal announcement">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Seasonal</p>
          <h2 className={styles.title}>It&rsquo;s Almost Time to Open Your Pool</h2>
          <p className={styles.sub}>
            Schedule your pool opening today and let our team get your water crystal clear for the season.
          </p>
        </div>
        <div className={styles.actions}>
          <Link href="/forms/pool-opening" className="btn btn--primary">Pool Opening Form</Link>
          <Link href="/forms/credit-card" className="btn btn--navy">Credit Card Authorization</Link>
        </div>
      </div>
    </section>
  );
}
