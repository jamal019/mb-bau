'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/container';
import { navItems, siteConfig } from '@/config/site';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
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

          <div className="flex items-center gap-2">
            <Link
              href="/kontakt"
              className="hidden rounded-md bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 md:inline-flex"
            >
              Anfrage starten
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 text-slate-700 md:hidden"
              aria-label="Navigation oeffnen"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((open) => !open)}
            >
              {isOpen ? (
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {isOpen ? (
          <nav aria-label="Mobile Navigation" className="mt-4 space-y-2 border-t border-slate-200 pt-4 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
