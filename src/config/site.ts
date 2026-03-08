export const siteConfig = {
  siteName: 'MB Bauausführungen GmbH',
  domain: 'https://mb-bauausfuehrungen.de',
  defaultTitle: 'MB Bauausführungen GmbH | Bauunternehmen in Berlin',
  defaultDescription:
    'MB Bauausführungen GmbH ist Ihr Partner für Putz- und Estricharbeiten sowie Fassadenarbeiten in Berlin. Zuverlässig, termintreu und aus einer Hand.',
  company: {
    name: 'MB Bauausführungen GmbH',
    managingDirector: 'Mahmut Ruhi Bayrak',
    phoneDisplay: '01523 8204702',
    phoneHref: 'tel:+4915238204702',
    email: 'info@mb-bauausfuehrungen.de',
    address: {
      streetAddress: 'Bessemerstraße 82',
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
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/kontakt' }
] as const;
