/**
 * Footer
 * Three-column footer with contact info, quick links, social links, and service area paragraph.
 */
'use client';
import Link from 'next/link';
import { CONTACT, SERVICE_AREA } from '@/lib/data';
import { useSite } from '@/lib/SiteContext';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const { tr } = useSite();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <h4 className={styles.heading}>{tr('footer_contact')}</h4>
          <ul className={styles.list}>
            <li>
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </li>
            <li>
              <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>{tr('footer_links')}</h4>
          <ul className={styles.list}>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/#reviews">Reviews</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>{tr('footer_connect')}</h4>
          <div className={styles.social}>
            <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61566849680224" target="_blank" rel="noreferrer noopener"><FbIcon /></a>
            <a aria-label="TikTok" href="https://www.tiktok.com/@pure.pool.servicess?_r=1&_t=ZT-97i9nRfJ4yT" target="_blank" rel="noreferrer noopener"><TkIcon /></a>
            <a aria-label="Email" href="mailto:Pure.pool.servicess@gmail.com"><GmailIcon /></a>
          </div>
        </div>
      </div>

      <div className={`container ${styles.area}`}>
        <h5 className={styles.areaHeading}>{tr('footer_area')}</h5>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <span>© {year} {tr('footer_copyright')}</span>
          <span>
            <Link href="/privacy">Privacy Policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FbIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.24 10.44 22v-7.04H7.9v-2.9h2.54V9.84c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22C18.34 21.24 22 17.08 22 12.06z" />
    </svg>
  );
}
function TkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
    </svg>
  );
}
function GmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
    </svg>
  );
}
