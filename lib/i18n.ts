export type Lang = 'en' | 'es';

export const t = {
  en: {
    /* TopBar */
    topbar_cta: 'Get a Free Estimate',

    /* Navbar */
    nav_services: 'Services',
    nav_reviews: 'Reviews',
    nav_contact: 'Contact',

    /* Hero slides — pulled from data.ts, kept here for non-data UI */
    hero_cta_primary: 'Get a Free Estimate',
    hero_cta_secondary: 'Our Services',

    /* ServicesGrid */
    services_eyebrow: 'What We Do',
    services_heading: 'We Take Care of Your Pool So You Can Enjoy It',
    services_lead: 'From repairs to weekly service, we take care of it all.',
    services_learn_more: 'Learn more ▼',
    services_show_less: 'Show less ▲',
    services_note_prefix: 'Note: ',

    /* ReviewsCarousel */
    reviews_eyebrow: 'Reviews',
    reviews_heading: 'What Our Customers Say',
    reviews_on_google: 'on Google',
    reviews_read_more: 'Read More',
    reviews_leave: 'Leave a Review',

    /* CtaBanner */
    cta_heading: 'Ready for a Crystal-Clear Pool?',
    cta_sub: 'Get your free estimate today — no obligation, no hassle.',
    cta_btn: 'Contact Us Now',

    /* Footer */
    footer_contact: 'Contact',
    footer_links: 'Quick Links',
    footer_connect: 'Connect',
    footer_area: 'Pool Openings All Across Long Island, Call Us Today!',
    footer_copyright: 'PurePools Services. All Rights Reserved.',

    /* Contact page */
    contact_heading: 'Get in Touch',
    contact_sub: 'We\'re here to help. Reach us by phone or email.',
    contact_en_label: 'English',
    contact_es_label: 'Spanish',
    contact_email_label: 'Email',

    /* Poster */
    poster_cta: 'Get a Free Estimate',
    poster_services: 'View Our Services',
  },

  es: {
    /* TopBar */
    topbar_cta: 'Obtén un Presupuesto Gratis',

    /* Navbar */
    nav_services: 'Servicios',
    nav_reviews: 'Reseñas',
    nav_contact: 'Contacto',

    /* Hero */
    hero_cta_primary: 'Obtén un Presupuesto Gratis',
    hero_cta_secondary: 'Nuestros Servicios',

    /* ServicesGrid */
    services_eyebrow: 'Lo Que Hacemos',
    services_heading: 'Nos encargamos de tu piscina para que la disfrutes',
    services_lead: 'Desde reparaciones hasta servicio semanal, nosotros lo hacemos todo.',
    services_learn_more: 'Ver más ▼',
    services_show_less: 'Ver menos ▲',
    services_note_prefix: 'Nota: ',

    /* ReviewsCarousel */
    reviews_eyebrow: 'Reseñas',
    reviews_heading: 'Lo Que Dicen Nuestros Clientes',
    reviews_on_google: 'en Google',
    reviews_read_more: 'Ver Más',
    reviews_leave: 'Dejar una Reseña',

    /* CtaBanner */
    cta_heading: '¿Lista tu piscina para el verano?',
    cta_sub: 'Obtén tu presupuesto gratis hoy — sin compromiso.',
    cta_btn: 'Contáctanos Ahora',

    /* Footer */
    footer_contact: 'Contacto',
    footer_links: 'Enlaces Rápidos',
    footer_connect: 'Conectar',
    footer_area: '¡Abrimos piscinas en toda Long Island, llámanos hoy!',
    footer_copyright: 'PurePools Services. Todos los derechos reservados.',

    /* Contact page */
    contact_heading: 'Contáctanos',
    contact_sub: 'Estamos aquí para ayudarte. Llámanos o escríbenos.',
    contact_en_label: 'Inglés',
    contact_es_label: 'Español',
    contact_email_label: 'Correo',

    /* Poster */
    poster_cta: 'Obtén un Presupuesto Gratis',
    poster_services: 'Ver Nuestros Servicios',
  },
} as const;

export type TranslationKey = keyof typeof t.en;
