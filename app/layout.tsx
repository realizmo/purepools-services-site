import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import TopBar from '@/components/TopBar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PurePools Services | Long Island Pool Company — Repairs, Installations & Maintenance',
  description:
    "PurePools Services is a full-service Long Island pool company offering pool repairs, installations, maintenance, openings and closings across Nassau & Suffolk counties.",
  keywords: [
    'pool company Long Island',
    'pool installations',
    'pool repairs',
    'pool maintenance',
    'pool openings',
    'pool closings',
  ],
  openGraph: {
    title: 'PurePools Services | Long Island Pool Company',
    description:
      'Full-service Long Island pool company — your pool should be fun, not work.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body>
        <a href="#main" className="sr-skip">Skip to main content</a>
        <TopBar />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
