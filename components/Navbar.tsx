'use client';
/**
 * Navbar
 * Primary site navigation with desktop dropdowns and a mobile slide-down menu.
 * - Uses semantic <nav> + ARIA attributes for the disclosure buttons.
 * - Tracks scroll to add a subtle shadow once the user scrolls past the hero.
 */
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRIMARY_NAV, type NavItem } from '@/lib/data';
import { useSite } from '@/lib/SiteContext';
import styles from './Navbar.module.css';

const NAV_KEYS: Record<string, 'nav_services' | 'nav_reviews' | 'nav_contact'> = {
  Services: 'nav_services',
  Reviews: 'nav_reviews',
  Contact: 'nav_contact',
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="PurePools Services home">
          <Image
            src="/logo.png"
            alt="PurePools Services"
            width={64}
            height={64}
            priority
            className={styles.logoMark}
          />
          <span className={styles.logoText}>
            <span className={styles.logoTop}>PUREPOOLS</span>
            <span className={styles.logoBottom}>SERVICES</span>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul className={styles.navList}>
            {PRIMARY_NAV.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                isOpen={openMenu === item.label}
                onOpen={(open) => setOpenMenu(open ? item.label : null)}
              />
            ))}
          </ul>
        </nav>

        <button
          className={styles.burger}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`${styles.burgerLine} ${mobileOpen ? styles.burgerLine1Open : ''}`} />
          <span className={`${styles.burgerLine} ${mobileOpen ? styles.burgerLine2Open : ''}`} />
          <span className={`${styles.burgerLine} ${mobileOpen ? styles.burgerLine3Open : ''}`} />
        </button>
      </div>

      {/* Mobile nav drawer */}
      <div
        id="mobile-nav"
        className={`${styles.mobileNav} ${mobileOpen ? styles.mobileNavOpen : ''}`}
        aria-hidden={!mobileOpen}
      >
        <ul className={styles.mobileList}>
          {PRIMARY_NAV.map((item) => (
            <MobileNavItem key={item.label} item={item} onNavigate={() => setMobileOpen(false)} />
          ))}
        </ul>
      </div>
    </header>
  );
}

interface NavLinkProps {
  item: NavItem;
  isOpen: boolean;
  onOpen: (open: boolean) => void;
}

function NavLink({ item, isOpen, onOpen }: NavLinkProps) {
  const { tr } = useSite();
  const label = NAV_KEYS[item.label] ? tr(NAV_KEYS[item.label]) : item.label;
  const hasChildren = !!item.children?.length;
  if (!hasChildren) {
    return (
      <li className={styles.navItem}>
        <Link href={item.href} className={styles.navLink}>{label}</Link>
      </li>
    );
  }
  return (
    <li
      className={styles.navItem}
      onMouseEnter={() => onOpen(true)}
      onMouseLeave={() => onOpen(false)}
    >
      <button
        className={styles.navLink}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => onOpen(!isOpen)}
      >
        {label}
        <Chevron />
      </button>
      <ul className={`${styles.dropdown} ${isOpen ? styles.dropdownOpen : ''}`}>
        {item.children!.map((c) => (
          <li key={c.label}>
            <Link href={c.href} className={styles.dropdownLink}>{c.label}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

function MobileNavItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const { tr } = useSite();
  const label = NAV_KEYS[item.label] ? tr(NAV_KEYS[item.label]) : item.label;
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;
  return (
    <li className={styles.mobileItem}>
      <div className={styles.mobileRow}>
        <Link href={item.href} onClick={onNavigate} className={styles.mobileLink}>
          {label}
        </Link>
        {hasChildren && (
          <button
            className={styles.mobileToggle}
            aria-expanded={open}
            aria-label={`Toggle ${item.label} submenu`}
            onClick={() => setOpen((v) => !v)}
          >
            <Chevron open={open} />
          </button>
        )}
      </div>
      {hasChildren && open && (
        <ul className={styles.mobileSubList}>
          {item.children!.map((c) => (
            <li key={c.label}>
              <Link href={c.href} onClick={onNavigate} className={styles.mobileSubLink}>{c.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function Chevron({ open = false }: { open?: boolean }) {
  return (
    <svg
      width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease' }}
      aria-hidden="true"
    >
      <polyline points="6,9 12,15 18,9" />
    </svg>
  );
}

