/**
 * Services page (stub)
 * Reuses the homepage ServicesGrid as the page body.
 */
import type { Metadata } from 'next';
import ServicesGrid from '@/components/ServicesGrid';
import CtaBanner from '@/components/CtaBanner';

export const metadata: Metadata = {
  title: 'Services | PurePools Services',
  description: 'Pool repairs, installations, maintenance, openings, and closings on Long Island.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesGrid />
      <CtaBanner />
    </>
  );
}
