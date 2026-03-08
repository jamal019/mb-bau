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
      ? 'bg-brand-500 text-white hover:bg-brand-600'
      : 'bg-white text-brand-700 ring-1 ring-brand-200 hover:bg-brand-50';

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition ${styles}`}
    >
      {children}
    </Link>
  );
}
