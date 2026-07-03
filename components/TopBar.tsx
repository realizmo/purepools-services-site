/**
 * TopBar
 * Slim utility strip pinned above the main navbar.
 * Displays the contact phone and email, plus language/theme toggles and a CTA.
 */
'use client';
import Link from 'next/link';
import { CONTACT } from '@/lib/data';
import { useSite } from '@/lib/SiteContext';
import styles from './TopBar.module.css';

export default function TopBar() {
  const { lang, setLang, dark, toggleDark, tr } = useSite();

  return (
    <div className={styles.bar} role="complementary" aria-label="Contact information">
      <div className={`container ${styles.inner}`}>
        <div className={styles.contact}>
          <a href={CONTACT.phoneHref} className={styles.link} aria-label={`Call us at ${CONTACT.phone}`}>
            <PhoneIcon /> <span>{CONTACT.phone}</span>
          </a>
          <a href={CONTACT.emailHref} className={`${styles.link} ${styles.hideSm}`} aria-label={`Email ${CONTACT.email}`}>
            <MailIcon /> <span>{CONTACT.email}</span>
          </a>
        </div>
        <div className={styles.actions}>
          <div className={styles.toggles}>
            <button
              className={`${styles.langBtn} ${lang === 'en' ? styles.langActive : ''}`}
              onClick={() => setLang('en')}
              aria-label="Switch to English"
            >EN</button>
            <span className={styles.langDivider}>|</span>
            <button
              className={`${styles.langBtn} ${lang === 'es' ? styles.langActive : ''}`}
              onClick={() => setLang('es')}
              aria-label="Cambiar a Español"
            >ES</button>
            <button
              className={styles.themeBtn}
              onClick={toggleDark}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
          <Link href="/contact" className={styles.cta}>
            {tr('topbar_cta')}
          </Link>
        </div>
      </div>
    </div>
  );
}

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
