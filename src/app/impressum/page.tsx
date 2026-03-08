import { Metadata } from 'next';
import { Section } from '@/components/section';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der MB Bauausführungen GmbH.',
  alternates: {
    canonical: '/impressum'
  }
};

export default function ImprintPage() {
  return (
    <Section title="Impressum">
      <div className="max-w-reading space-y-4 text-slate-700">
        <p>
          <strong>{siteConfig.company.name}</strong>
          <br />
          {siteConfig.company.address.streetAddress}
          <br />
          {siteConfig.company.address.postalCode} {siteConfig.company.address.addressLocality}
          <br />
          Deutschland
        </p>
        <p>
          <strong>Vertreten durch:</strong>
          <br />
          {siteConfig.company.managingDirector}
        </p>
        <p>
          <strong>Angaben gemäß § 5 TMG</strong>
          <br />
          MB Bauausführungen GmbH
        </p>
        <p>
          <strong>Kontakt:</strong>
          <br />
          Telefon: {siteConfig.company.phoneDisplay}
          <br />
          E-Mail: {siteConfig.company.email}
        </p>
        <p>
          <strong>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</strong>
          <br />
          {siteConfig.company.managingDirector}, {siteConfig.company.address.streetAddress},{' '}
          {siteConfig.company.address.postalCode} {siteConfig.company.address.addressLocality}
        </p>
      </div>
    </Section>
  );
}
