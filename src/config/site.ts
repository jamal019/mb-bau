export const siteConfig = {
  siteName: 'MB Bauausfuehrungen GmbH',
  domain: 'https://jamal019.github.io/mb-bau',
  defaultTitle: 'MB Bauausfuehrungen GmbH | Bauunternehmen in Berlin',
  defaultDescription:
    'MB Bauausfuehrungen GmbH ist Ihr Partner fuer Putz- und Estricharbeiten sowie Fassadenarbeiten in Berlin. Zuverlaessig, termintreu und aus einer Hand.',
  company: {
    name: 'MB Bauausfuehrungen GmbH',
    managingDirector: 'Mahmut Ruhi Bayrak',
    phoneDisplay: '01523 8204702',
    phoneHref: 'tel:+4915238204702',
    email: 'info@mb-bauausfuehrungen.de',
    address: {
      streetAddress: 'Bessemerstrasse 82',
      postalCode: '12103',
      addressLocality: 'Berlin',
      addressCountry: 'DE'
    }
  },
  seo: {
    locale: 'de_DE',
    areaServed: 'Berlin'
  }
} as const;

export const navItems = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Referenzen', href: '/referenzen' },
  { label: 'Ueber uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/kontakt' }
] as const;
