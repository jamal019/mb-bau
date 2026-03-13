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
    <article className="overflow-hidden rounded-[1.5rem] border border-dusk/10 bg-white/85 shadow-soft backdrop-blur">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(35,45,68,0.02)_0%,rgba(35,45,68,0.24)_100%)]" />
      </div>
      <div className="space-y-3 p-6">
        {metadata ? <p className="text-sm font-medium text-dusk">{metadata}</p> : null}
        <h3 className="text-xl font-semibold text-ink">
          <Link href={href} className="hover:text-dusk">
            {title}
          </Link>
        </h3>
        <p className="text-slate-600">{description}</p>
        <Link href={href} className="inline-flex text-sm font-semibold text-dusk hover:text-indigo">
          Details ansehen
        </Link>
      </div>
    </article>
  );
}
