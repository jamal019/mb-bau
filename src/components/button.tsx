import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const styles =
    variant === 'primary'
      ? 'rounded-full bg-gold text-ink shadow-soft hover:bg-cream'
      : 'rounded-full bg-white/10 text-white ring-1 ring-white/30 backdrop-blur hover:bg-white/20';

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-5 py-3 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  );
}
