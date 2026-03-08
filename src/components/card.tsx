import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  href: string;
  title: string;
  description: string;
  image: string;
  metadata?: string;
};

export function Card({ href, title, description, image, metadata }: CardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-soft">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className="space-y-3 p-6">
        {metadata ? <p className="text-sm font-medium text-brand-600">{metadata}</p> : null}
        <h3 className="text-xl font-semibold text-slate-900">
          <Link href={href} className="hover:text-brand-600">
            {title}
          </Link>
        </h3>
        <p className="text-slate-600">{description}</p>
        <Link href={href} className="inline-flex text-sm font-semibold text-brand-600 hover:text-brand-700">
          Details ansehen
        </Link>
      </div>
    </article>
  );
}
