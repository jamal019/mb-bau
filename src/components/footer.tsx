import Link from 'next/link';
import { Container } from '@/components/container';
import { siteConfig } from '@/config/site';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="py-6 md:py-12">
        <div className="space-y-3 text-sm text-slate-600 md:hidden">
          <p className="font-semibold text-slate-900">{siteConfig.company.name}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link href="/kontakt" className="hover:text-brand-600">
              Kontakt
            </Link>
            <Link href="/impressum" className="hover:text-brand-600">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-brand-600">
              Datenschutz
            </Link>
          </div>
        </div>

        <div className="hidden gap-10 md:grid md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold text-slate-900">{siteConfig.company.name}</h2>
            <p className="mt-3 text-sm text-slate-600">Geschäftsführer: {siteConfig.company.managingDirector}</p>
            <p className="mt-2 text-sm text-slate-600">
              {siteConfig.company.address.streetAddress}, {siteConfig.company.address.postalCode}{' '}
              {siteConfig.company.address.addressLocality}
            </p>
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900">Kontakt</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href={siteConfig.company.phoneHref} className="hover:text-brand-600">
                  Tel: {siteConfig.company.phoneDisplay}
                </Link>
              </li>
              <li>
                <Link href={`mailto:${siteConfig.company.email}`} className="hover:text-brand-600">
                  {siteConfig.company.email}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-base font-semibold text-slate-900">Rechtliches</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/impressum" className="hover:text-brand-600">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-brand-600">
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
