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
      className={`fixed z-40 h-12 w-12 rounded-full bg-brand-500 text-white shadow-soft transition-all duration-200 md:hidden ${
        isVisible
          ? 'pointer-events-auto bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 opacity-95'
          : 'pointer-events-none bottom-0 right-4 translate-y-4 opacity-0'
      }`}
    >
      <span className="sr-only">Kontakt</span>
      <svg viewBox="0 0 24 24" className="m-auto h-5 w-5" aria-hidden="true">
        <path
          d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.08.36 2.23.55 3.42.55a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4.2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.19.19 2.34.55 3.42a1 1 0 0 1-.25 1l-2.2 2.18Z"
          fill="currentColor"
        />
      </svg>
    </Link>
  );
}
