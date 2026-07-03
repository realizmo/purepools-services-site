'use client';
/**
 * ReviewsCarousel
 * Auto-rotating testimonials with manual prev/next controls and dot pagination.
 * Fetches live Google reviews from /api/reviews; falls back to static data.
 * Visible slides per view: 1 on mobile, 2 on tablet, 3 on desktop.
 */
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { REVIEWS, type Review } from '@/lib/data';
import { useSite } from '@/lib/SiteContext';
import styles from './ReviewsCarousel.module.css';

const AUTO_MS = 7000;
const GOOGLE_REVIEW_URL =
  'https://search.google.com/local/reviews?placeid=ChIJG1880ddlwokRD9BS52wUR2g';

export default function ReviewsCarousel() {
  const { tr } = useSite();
  const [reviews, setReviews] = useState<Review[]>(REVIEWS);
  const [overallRating, setOverallRating] = useState<number | null>(null);
  const [totalReviews, setTotalReviews] = useState<number | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = reviews.length;

  useEffect(() => {
    fetch('/api/reviews')
      .then((r) => r.json())
      .then((data) => {
        if (data.reviews?.length) {
          setReviews(data.reviews);
          setOverallRating(data.rating ?? null);
          setTotalReviews(data.total ?? null);
        }
      })
      .catch(() => {});
  }, []);

  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, AUTO_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      className={styles.section}
      id="reviews"
      aria-label="Customer reviews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>{tr('reviews_eyebrow')}</p>
          <h2>{tr('reviews_heading')}</h2>
          {overallRating && (
            <p className={styles.overallRating}>
              <strong>{overallRating.toFixed(1)}</strong> ★ {tr('reviews_on_google')}
              {totalReviews ? ` · ${totalReviews} reviews` : ''}
            </p>
          )}
        </div>

        <div className={styles.viewport} aria-live="polite">
          <div
            className={styles.track}
            style={{ transform: `translateX(calc(-${index} * (100% / var(--per-view))))` }}
          >
            {reviews.map((r, i) => (
              <ReviewCard key={`${r.name}-${i}`} review={r} />
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <button className={styles.ctrl} aria-label="Previous review" onClick={prev}>
            <Arrow direction="left" />
          </button>
          <div className={styles.dots} role="tablist">
            {reviews.map((r, i) => (
              <button
                key={`dot-${i}`}
                role="tab"
                aria-selected={i === index}
                aria-label={`Show review ${i + 1}`}
                className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button className={styles.ctrl} aria-label="Next review" onClick={next}>
            <Arrow direction="right" />
          </button>
        </div>

        <div className={styles.actions}>
          <Link href="/#reviews" className="btn btn--primary">{tr('reviews_read_more')}</Link>
          <Link href={GOOGLE_REVIEW_URL} target="_blank" rel="noreferrer noopener" className="btn btn--navy">
            {tr('reviews_leave')}
          </Link>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className={styles.card}>
      <div className={styles.stars} aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} filled={i < review.rating} />
        ))}
      </div>
      <p className={styles.quote}>&ldquo;{review.quote}&rdquo;</p>
      <p className={styles.name}>— {review.name}</p>
    </article>
  );
}

function Star({ filled }: { filled: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24"
      fill={filled ? 'var(--color-yellow)' : 'none'}
      stroke="var(--color-yellow)" strokeWidth="2" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function Arrow({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
      style={{ transform: direction === 'left' ? 'rotate(180deg)' : 'none' }}>
      <polyline points="9,6 15,12 9,18" />
    </svg>
  );
}
