/**
 * AboutSnippet
 * Two-column section: image on one side, narrative copy + CTA on the other.
 */
import Image from 'next/image';
import Link from 'next/link';
import styles from './AboutSnippet.module.css';

export default function AboutSnippet() {
  return (
    <section className={styles.section} aria-label="About PurePools Services">
      <div className={`container ${styles.grid}`}>
        <div className={styles.media}>
          <Image
            src="https://images.unsplash.com/photo-1505881502353-a1986add3762?auto=format&fit=crop&w=1200&q=70"
            alt="Sparkling backyard swimming pool maintained by PurePools Services"
            width={780}
            height={620}
            className={styles.image}
          />
          <div className={styles.badge}>
            <span className={styles.badgeNum}>25+</span>
            <span className={styles.badgeLabel}>Years of<br />Experience</span>
          </div>
        </div>

        <div className={styles.copy}>
          <p className={styles.eyebrow}>Why Choose Us</p>
          <h2 className={styles.title}>Rely on PurePools Services</h2>
          <p className={styles.body}>
            Rely on PurePools Services to open your pool, maintain and repair it throughout the year,
            and close it after the season — we meet the expectations of even the most demanding
            customers. Make your pool more inviting; call us today to be your Long Island pool company.
          </p>
          <ul className={styles.list}>
            <li>✓ Full-service openings &amp; closings</li>
            <li>✓ Liner replacements &amp; equipment repair</li>
            <li>✓ Weekly maintenance routes</li>
            <li>✓ NESPA &amp; APSP member</li>
          </ul>
          <Link href="/contact" className="btn btn--primary">Request an Estimate</Link>
        </div>
      </div>
    </section>
  );
}
