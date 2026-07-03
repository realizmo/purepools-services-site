/**
 * Homepage
 * Composes the section components in the order seen on skybluepools.net.
 */
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import CtaBanner from '@/components/CtaBanner';
import ReviewsCarousel from '@/components/ReviewsCarousel';
import Poster from '@/components/Poster';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <CtaBanner />
      <ReviewsCarousel />
      <Poster />
    </>
  );
}
