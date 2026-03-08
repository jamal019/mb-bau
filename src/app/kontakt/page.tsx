import { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/section';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie die MB Bauausführungen GmbH für Ihr Bauvorhaben in Berlin.',
  alternates: {
    canonical: '/kontakt'
  },
  openGraph: {
    title: 'Kontakt | MB Bauausführungen GmbH',
    description: 'Telefon, E-Mail und Adresse für Ihre Anfrage.',
    url: `${siteConfig.domain}/kontakt`
  }
};

export default function ContactPage() {
  return (
    <Section title="Kontakt">
      <div className="max-w-reading space-y-4 text-slate-700">
        <p>
          <strong>Telefon:</strong>{' '}
          <Link href={siteConfig.company.phoneHref} className="text-brand-600 hover:text-brand-700">
            {siteConfig.company.phoneDisplay}
          </Link>
        </p>
        <p>
          <strong>E-Mail:</strong>{' '}
          <Link href={`mailto:${siteConfig.company.email}`} className="text-brand-600 hover:text-brand-700">
            {siteConfig.company.email}
          </Link>
        </p>
        <p className="text-sm text-slate-600">
          Wir melden uns schnellstmöglich bei Ihnen zurück und besprechen die nächsten Schritte für Ihr Bauvorhaben.
        </p>
        </div>
    </Section>
  );
}
