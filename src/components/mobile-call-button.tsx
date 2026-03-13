'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MobileCallButton() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 260);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (pathname === '/kontakt') return null;

  return (
    <Link
      href="/kontakt"
      aria-label="Zur Kontaktseite"
      className={`fixed left-1/2 z-40 -translate-x-1/2 rounded-full bg-gold px-5 py-3 text-ink shadow-[0_14px_32px_rgba(35,45,68,0.24)] transition-all duration-200 md:hidden ${
        isVisible
          ? 'pointer-events-auto bottom-[max(0.9rem,env(safe-area-inset-bottom))] opacity-100'
          : 'pointer-events-none bottom-0 opacity-0'
      }`}
    >
      <span className="inline-flex items-center gap-2 text-sm font-semibold">
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
          <path
            d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.08.36 2.23.55 3.42.55a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4.2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.19.19 2.34.55 3.42a1 1 0 0 1-.25 1l-2.2 2.18Z"
            fill="currentColor"
          />
        </svg>
        Kontakt aufnehmen
      </span>
      <span className="sr-only">Kontakt</span>
    </Link>
  );
}
