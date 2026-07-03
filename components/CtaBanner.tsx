/**
 * CtaBanner
 * Bold, full-width blue call-to-action strip with a single primary button.
 */
'use client';
import Link from 'next/link';
import { useSite } from '@/lib/SiteContext';
import styles from './CtaBanner.module.css';

interface CtaBannerProps {
  title?: string;
  buttonLabel?: string;
  href?: string;
}

export default function CtaBanner({
  title,
  buttonLabel,
  href = '/contact',
}: CtaBannerProps) {
  const { tr } = useSite();
  return (
    <section className={styles.banner} aria-label="Call to action">
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>{title ?? tr('cta_heading')}</h2>
        <p className={styles.sub}>{tr('cta_sub')}</p>
        <Link href={href} className="btn btn--outline">{buttonLabel ?? tr('cta_btn')}</Link>
      </div>
    </section>
  );
}
