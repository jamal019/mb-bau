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
    description: 'Telefon, E-Mail und Karte für Ihre Anfrage.',
    url: `${siteConfig.domain}/kontakt`
  }
};

export default function ContactPage() {
  const fullAddress = `${siteConfig.company.address.streetAddress}, ${siteConfig.company.address.postalCode} ${siteConfig.company.address.addressLocality}, Deutschland`;
  const mapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`;
  const mapsDirectionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;

  return (
    <Section title="Kontakt" description="So erreichen Sie uns direkt per Telefon, E-Mail oder vor Ort.">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft lg:grid lg:grid-cols-[360px_minmax(0,1fr)]">
        <div className="bg-brand-700 p-8 text-white">
          <h2 className="text-3xl font-semibold tracking-tight">So erreichen Sie uns</h2>
          <div className="mt-8 space-y-5 text-brand-50">
            <p className="font-semibold text-white">{siteConfig.company.name}</p>
            <p>
              {siteConfig.company.address.streetAddress}
              <br />
              {siteConfig.company.address.postalCode} {siteConfig.company.address.addressLocality}
            </p>
            <p>
              <strong>Telefon:</strong>{' '}
              <Link href={siteConfig.company.phoneHref} className="underline decoration-white/50 underline-offset-4 hover:text-white">
                {siteConfig.company.phoneDisplay}
              </Link>
            </p>
            <p>
              <strong>E-Mail:</strong>{' '}
              <Link
                href={`mailto:${siteConfig.company.email}`}
                className="underline decoration-white/50 underline-offset-4 hover:text-white"
              >
                {siteConfig.company.email}
              </Link>
            </p>
            <p>
              <Link
                href={mapsDirectionsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-md border border-white/30 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
              >
                In Google Maps öffnen
              </Link>
            </p>
          </div>
        </div>
        <div className="relative min-h-[360px]">
          <iframe
            title="Karte MB Bauausführungen GmbH"
            src={mapsEmbedSrc}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}
