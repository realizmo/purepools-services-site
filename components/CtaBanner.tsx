/**
 * CtaBanner
 * Bold, full-width blue call-to-action strip with a single primary button.
 */
import Link from 'next/link';
import styles from './CtaBanner.module.css';

interface CtaBannerProps {
  title?: string;
  buttonLabel?: string;
  href?: string;
}

export default function CtaBanner({
  title = 'Contact Us Today to Schedule Your Pool Opening!',
  buttonLabel = 'Contact Us',
  href = '/contact',
}: CtaBannerProps) {
  return (
    <section className={styles.banner} aria-label="Call to action">
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>{title}</h2>
        <Link href={href} className="btn btn--outline">{buttonLabel}</Link>
      </div>
    </section>
  );
}
