'use client';
/**
 * Hero
 * Full-bleed hero with a rotating image+headline slider and dual CTA buttons.
 * - Auto-advances every 6 seconds; pauses on hover/focus.
 * - Click indicators or keyboard arrows to navigate.
 */
import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HERO_SLIDES } from '@/lib/data';
import styles from './Hero.module.css';

const AUTO_MS = 6000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = HERO_SLIDES.length;

  const goTo = useCallback((i: number) => setIndex(((i % total) + total) % total), [total]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, AUTO_MS);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, total]);

  return (
    <section
      className={styles.hero}
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') prev();
        if (e.key === 'ArrowRight') next();
      }}
      tabIndex={0}
    >
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.title}
          className={`${styles.slide} ${i === index ? styles.slideActive : ''}`}
          aria-hidden={i !== index}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${total}`}
        >
          <Image
            src={slide.image}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={styles.bg}
          />
          <div className={styles.overlay} />
        </div>
      ))}

      <div className={`container ${styles.content}`}>
        {HERO_SLIDES[index].eyebrow && (
          <span className={styles.eyebrow}>{HERO_SLIDES[index].eyebrow}</span>
        )}
        <h1 className={styles.title}>{HERO_SLIDES[index].title}</h1>
        <p className={styles.subtitle}>{HERO_SLIDES[index].subtitle}</p>
        <div className={styles.ctas}>
          <Link href="/contact" className="btn btn--primary">Get a Free Estimate</Link>
          <Link href="/services" className="btn btn--outline">Our Services</Link>
        </div>
      </div>

      {/* Controls */}
      <button className={`${styles.arrow} ${styles.arrowLeft}`} aria-label="Previous slide" onClick={prev}>
        <Arrow direction="left" />
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`} aria-label="Next slide" onClick={next}>
        <Arrow direction="right" />
      </button>

      {/* Dots */}
      <div className={styles.dots} role="tablist" aria-label="Slide selectors">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.title}
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </section>
  );
}

function Arrow({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ transform: direction === 'left' ? 'rotate(180deg)' : 'none' }}>
      <polyline points="9,6 15,12 9,18" />
    </svg>
  );
}
