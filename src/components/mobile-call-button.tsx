import Link from 'next/link';
import { siteConfig } from '@/config/site';

export function MobileCallButton() {
  return (
    <Link
      href={siteConfig.company.phoneHref}
      className="fixed bottom-4 left-4 right-4 z-50 rounded-md bg-accent px-4 py-3 text-center text-sm font-semibold text-white shadow-soft md:hidden"
    >
      Jetzt anrufen: {siteConfig.company.phoneDisplay}
    </Link>
  );
}
