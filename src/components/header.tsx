import Link from 'next/link';
import { Container } from '@/components/container';
import { navItems, siteConfig } from '@/config/site';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
          {siteConfig.company.name}
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-brand-600">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={siteConfig.company.phoneHref}
          className="rounded-md bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600"
        >
          {siteConfig.company.phoneDisplay}
        </Link>
      </Container>
    </header>
  );
}
