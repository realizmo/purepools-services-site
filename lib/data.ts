/**
 * Static content used across the PurePools Services site.
 * Kept as plain data so any presentation component can consume it.
 */

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const PRIMARY_NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Reviews', href: '/#reviews' },
  { label: 'Contact', href: '/contact' },
];

export interface ServiceCard {
  title: string;
  description: string;
  href: string;
  image: string;
  icon: string;
  price?: string;
  intro?: string;
  bullets?: { label?: string; text: string }[];
  note?: string;
  closing?: string;
}

export const SERVICES: ServiceCard[] = [
  {
    title: 'Pool Opening',
    price: '$240.00',
    description:
      'Get your pool ready for summer with our Open Pool service!',
    intro:
      "Forget the hassle. We'll take care of the entire opening of your pool so all you have to worry about is jumping in. Our service includes:",
    bullets: [
      {
        text: "Installation and activation of the pump, filter, and salt system (we'll get everything working perfectly!).",
      },
      { text: 'Removal of leaves and floating debris.' },
      { text: 'Thorough brushing of walls and floor.' },
      { text: 'Chlorine shock treatment to guarantee clean and safe water.' },
    ],
    closing:
      "Schedule your appointment today and start the season effortlessly! Don't hesitate to contact us via DM or WhatsApp.",
    href: '/services#openings',
    image: '/hero-2.png',
    icon: 'pool',
  },
  {
    title: 'Power Vac',
    price: '$125/hr',
    description:
      'Pool Floor Cleaning and Chemical Balancing (Post-Opening)',
    intro:
      'Once the debris from the opening settles to the bottom, we return to leave the water spotless, healthy, and 100% safe for swimmers. What does this service include?',
    bullets: [
      {
        label: 'Pool Floor Vacuuming',
        text: 'We completely remove all debris, sediment, and leaves that have settled on the pool floor after opening.',
      },
      {
        label: 'Chemical Analysis and Balancing',
        text: 'We perform a precise water test and adjust key levels to ensure clarity and disinfection: Chlorine and pH, Alkalinity, Cyanuric Acid Stabilizer, Salt Level (if required by the system).',
      },
    ],
    note: 'Important note about chemicals: The service cost includes labor for the analysis and application. The chemicals used (each bag or pound of salt, chlorine, balancers, etc.) are quantified according to the needs of your pool and are charged separately on the final bill.',
    href: '/services#power-vac',
    image:
      'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=900&q=70',
    icon: 'droplet',
  },
  {
    title: 'Weekly Service',
    price: '$95.00',
    description:
      'Keep your pool sparkling clean all week long with our Weekly Service!',
    intro:
      'Forget about maintenance. We come once a week and take care of everything:',
    bullets: [
      {
        label: 'Professional Vacuuming',
        text: 'We use the advanced Riptide system to leave the bottom perfectly clean.',
      },
      {
        label: 'Complete Cleaning',
        text: 'We remove leaves from the surface and clean the skimmers.',
      },
      {
        label: 'All-Inclusive',
        text: 'We test the water and add the chemicals your pool needs at NO EXTRA COST!',
      },
    ],
    note: 'Prices vary depending on pool size (special rates apply for pools 35,000 gallons and larger).',
    href: '/services#weekly-service',
    image:
      'https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=900&q=70',
    icon: 'droplet',
  },
  {
    title: 'Pool Closing',
    price: '$260.00',
    description:
      "It's time to take care of your pool! Season Closing with Purepool Services",
    intro:
      "Summer may be over, but your pool care doesn't have to stop. We handle the entire winterization process to protect your equipment and pipes from the cold. Our service includes:",
    bullets: [
      { text: 'Final cleaning of debris from the bottom.' },
      { text: 'Pressure blowing and drying of lines and skimmers + installation of winter plugs.' },
      { text: 'Strategic lowering of the water level.' },
      { text: 'Chlorine shock treatment for winter.' },
      { text: 'Disconnection and safe storage of your equipment.' },
      { text: 'Installation of the pool cover.' },
    ],
    closing:
      'After that, we eagerly await next year so we can start another summer together with Purepool Services! Contact us to schedule your date.',
    href: '/services#closings',
    image:
      'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=900&q=70',
    icon: 'snowflake',
  },
];

export interface Review {
  name: string;
  quote: string;
  rating: number;
}

export const REVIEWS: Review[] = [
  {
    name: 'Cathy G. — Hicksville, NY',
    quote:
      'Very knowledgeable and reasonable price. Thank you Pablo for your quick response in servicing my pool.',
    rating: 5,
  },
  {
    name: 'Annette M. — Brookhaven, NY',
    quote:
      'Had to have our inground pool filter replaced as the one we had seized. Pablo came that night in the stormy weather took off old one and installed the new one. He was here 3 hours! Came the next day and checked to make sure everything was working. Been using Pablo for 3 years now to open and close our pool always an excellent job! Highly Recommend!',
    rating: 5,
  },
  {
    name: 'Cindy L. — Miller Place, NY',
    quote:
      'Very honest, respectful, and kind. Always does a great job. Knowledgeable concerning pool repairs or pool questions.',
    rating: 5,
  },
];

export const CONTACT = {
  phone: '+1 (516) 201-7929',
  phoneHref: 'tel:+15162017929',
  phoneEs: '+1 (516) 201-7929',
  phoneEsHref: 'tel:+15162017929',
  email: 'service@purepoolsservices.com',
  emailHref: 'mailto:service@purepoolsservices.com',
  addressLine1: '94 North Industry Ct.',
  addressLine2: 'Deer Park, NY 11729',
  mapsHref:
    'https://www.google.com/maps?q=94+N+Industry+Ct,+Deer+Park,+NY+11729',
};

export const HERO_SLIDES = [
  {
    eyebrow: 'Enjoy Your Summer!',
    title: 'PurePools will take care of the rest.',
    subtitle:
      'We service, maintenance and repair pools all across Long Island.',
    image: '/hero-1.png',
  },
  {
    eyebrow: 'The beautiful weather is here!',
    title: 'Let the experts open your pool',
    subtitle: 'Call us today!',
    image: '/hero-2.png',
  },
  {
    eyebrow: 'Call us today because',
    title: 'When PUREPOOLS SERVICES is here',
    subtitle: 'Your pool will be clear all year',
    image: '/hero-3.png',
  },
];

export const SERVICE_AREA = `Bayville, Oyster Bay, Mill Neck, Locust Valley, Glen Cove, Sea Cliff, Glen Head, East Norwich, Syosset, Woodbury, Jericho, Plainview, Hicksville, Westbury, Old Westbury, Greenvale, Roslyn, Roslyn Heights, Old Bethpage, Bethpage`;

export const SUMMER_HOURS = [
  { day: 'Mon – Fri', hours: '8:00 AM – 5:00 PM' },
  { day: 'Saturday', hours: '8:00 AM – 1:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];
