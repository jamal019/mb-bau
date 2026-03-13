import Image from 'next/image';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { siteConfig } from '@/config/site';
import { assetPath } from '@/lib/asset-path';

type CtaProps = {
  title?: string;
  text?: string;
};

export function Cta({
  title = 'Planen Sie ein Bauprojekt in Berlin?',
  text = 'Sprechen Sie direkt mit uns. Wir beraten transparent und erstellen ein passendes Angebot.'
}: CtaProps) {
  return (
    <section className="px-4 pb-6 sm:px-6 lg:px-8">
      <Container className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#232D44_0%,#244A86_100%)] py-14 text-white shadow-soft">
        <div className="flex flex-col gap-8 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <div className="max-w-reading">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2">
              <Image
                src={assetPath('/brand/mb-bau-logo.svg')}
                alt="MB Bau Logo"
                width={28}
                height={28}
                unoptimized
                className="h-7 w-7 object-contain"
              />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">MB Bau</span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
            <p className="mt-3 text-brand-100">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={siteConfig.company.phoneHref}>Jetzt anrufen</Button>
            <Button href="/kontakt" variant="secondary">
              Angebot anfragen
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
