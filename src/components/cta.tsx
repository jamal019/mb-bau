import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { siteConfig } from '@/config/site';

type CtaProps = {
  title?: string;
  text?: string;
};

export function Cta({
  title = 'Planen Sie ein Bauprojekt in Berlin?',
  text = 'Sprechen Sie direkt mit uns. Wir beraten transparent und erstellen ein passendes Angebot.'
}: CtaProps) {
  return (
    <section className="bg-brand-700 py-14 text-white">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-reading">
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-3 text-brand-100">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={siteConfig.company.phoneHref}>Jetzt anrufen</Button>
          <Button href="/kontakt" variant="secondary">
            Angebot anfragen
          </Button>
        </div>
      </Container>
    </section>
  );
}
