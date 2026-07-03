/**
 * Contact page
 * Displays phone (English & Español) and email — no form.
 */
import type { Metadata } from 'next';
import { CONTACT } from '@/lib/data';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact | PurePools Services',
  description:
    'Call or email PurePools Services for a free estimate on your Long Island pool project.',
};

export default function ContactPage() {
  return (
    <section className={styles.section} aria-label="Contact PurePools Services">
      <div className={`container ${styles.wrap}`}>
        <div className={styles.card}>
          <p className={styles.eyebrow}>Contact</p>
          <h1 className={styles.title}>Call today for an estimate</h1>
          <p className={styles.lead}>
            Call or email PurePools Services and we&rsquo;ll get back to you within 24 hours.
            We serve all of Long Island.
          </p>

          <ul className={styles.infoList}>
            <li>
              <span className={styles.infoLabel}>Phone</span>
              <span className={styles.infoValue}>
                <span className={styles.lang}>English:</span>{' '}
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </span>
              <span className={styles.infoValue}>
                <span className={styles.lang}>Español:</span>{' '}
                <a href={CONTACT.phoneEsHref}>{CONTACT.phoneEs}</a>
              </span>
            </li>
            <li>
              <span className={styles.infoLabel}>Email</span>
              <a className={styles.infoValue} href={CONTACT.emailHref}>{CONTACT.email}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
