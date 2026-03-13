'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/container';
import { navItems } from '@/config/site';
import { assetPath } from '@/lib/asset-path';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-indigo text-brand-100 backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl">
              <Image
                src={assetPath('/brand/mb-bau-logo.svg')}
                alt="MB Bau Logo"
                width={40}
                height={40}
                unoptimized
                className="h-10 w-10 object-contain"
              />
            </div>
            <div className="min-w-0">
              <p className="truncate text-base font-extrabold tracking-tight text-white sm:text-lg">MB Bauausführungen GmbH</p>
              <p className="hidden text-xs font-medium uppercase tracking-[0.22em] text-brand-100/80 sm:block">
                Berlin · Bauausführung
              </p>
            </div>
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-semibold text-brand-100 transition hover:text-gold">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/kontakt"
              className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-cream md:inline-flex"
            >
              Projekt anfragen
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-soft md:hidden"
              aria-label="Navigation öffnen"
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
          <nav aria-label="Mobile Navigation" className="mt-4 space-y-2 rounded-3xl border border-white/10 bg-white/8 p-3 shadow-soft md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-brand-100 transition hover:bg-white/10 hover:text-gold"
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
