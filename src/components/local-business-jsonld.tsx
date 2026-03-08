import { siteConfig } from '@/config/site';

export function LocalBusinessJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ConstructionCompany',
    name: siteConfig.company.name,
    url: siteConfig.domain,
    telephone: siteConfig.company.phoneDisplay,
    areaServed: siteConfig.seo.areaServed,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.company.address.streetAddress,
      postalCode: siteConfig.company.address.postalCode,
      addressLocality: siteConfig.company.address.addressLocality,
      addressCountry: siteConfig.company.address.addressCountry
    },
    sameAs: []
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
