import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/section';
import { assetPath } from '@/lib/asset-path';
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
      <div className="overflow-hidden rounded-[2rem] border border-dusk/10 bg-white/85 shadow-soft backdrop-blur lg:grid lg:grid-cols-[360px_minmax(0,1fr)]">
        <div className="bg-[linear-gradient(180deg,#232D44_0%,#244A86_100%)] p-8 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-white">
              <Image
                src={assetPath('/brand/mb-bau-logo.svg')}
                alt="MB Bau Logo"
                width={32}
                height={32}
                unoptimized
                className="h-8 w-8 object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">MB Bau</p>
              <p className="text-sm text-white/72">So erreichen Sie uns</p>
            </div>
          </div>

          <div className="mt-8 space-y-5 text-brand-50">
            <p className="font-semibold text-white">{siteConfig.company.name}</p>
            <p>
              {siteConfig.company.address.streetAddress}
              <br />
              {siteConfig.company.address.postalCode} {siteConfig.company.address.addressLocality}
            </p>
            <p>
              <strong>Telefon:</strong>{' '}
              <Link href={siteConfig.company.phoneHref} className="underline decoration-white/50 underline-offset-4 hover:text-gold">
                {siteConfig.company.phoneDisplay}
              </Link>
            </p>
            <p>
              <strong>E-Mail:</strong>{' '}
              <Link
                href={`mailto:${siteConfig.company.email}`}
                className="underline decoration-white/50 underline-offset-4 hover:text-gold"
              >
                {siteConfig.company.email}
              </Link>
            </p>
            <p className="pt-2">
              <Link
                href={mapsDirectionsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition hover:bg-cream"
              >
                In Google Maps öffnen
              </Link>
            </p>
          </div>
        </div>
        <div className="relative min-h-[360px] bg-slate-100 lg:min-h-full">
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
