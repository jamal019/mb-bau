import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/container';
import { siteConfig } from '@/config/site';
import { assetPath } from '@/lib/asset-path';

export function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-indigo text-brand-100">
      <Container className="py-6 md:py-12">
        <div className="space-y-4 md:hidden">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-white">
              <Image
                src={assetPath('/brand/mb-bau-logo.svg')}
                alt="MB Bau Logo"
                width={32}
                height={32}
                unoptimized
                className="h-8 w-8 object-contain"
              />
            </div>
            <p className="font-semibold text-white">{siteConfig.company.name}</p>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            <Link href="/kontakt" className="hover:text-gold">
              Kontakt
            </Link>
            <Link href="/impressum" className="hover:text-gold">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-gold">
              Datenschutz
            </Link>
          </div>
        </div>

        <div className="hidden gap-10 md:grid md:grid-cols-[1.2fr_0.9fr_0.9fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-3xl bg-white shadow-soft">
                <Image
                  src={assetPath('/brand/mb-bau-logo.svg')}
                  alt="MB Bau Logo"
                  width={40}
                  height={40}
                  unoptimized
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">{siteConfig.company.name}</h2>
                <p className="text-sm uppercase tracking-[0.24em] text-gold">Berlin · Bauausführung</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-brand-100">
              Geschäftsführer: {siteConfig.company.managingDirector}
              <br />
              {siteConfig.company.address.streetAddress}, {siteConfig.company.address.postalCode}{' '}
              {siteConfig.company.address.addressLocality}
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-white">Kontakt</h2>
            <ul className="mt-3 space-y-2 text-sm text-brand-100">
              <li>
                <Link href={siteConfig.company.phoneHref} className="hover:text-gold">
                  Tel: {siteConfig.company.phoneDisplay}
                </Link>
              </li>
              <li>
                <Link href={`mailto:${siteConfig.company.email}`} className="hover:text-gold">
                  {siteConfig.company.email}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-base font-semibold text-white">Rechtliches</h2>
            <ul className="mt-3 space-y-2 text-sm text-brand-100">
              <li>
                <Link href="/impressum" className="hover:text-gold">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-gold">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
