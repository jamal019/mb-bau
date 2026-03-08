import Image from 'next/image';
import { Metadata } from 'next';
import { Button } from '@/components/button';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Landing Page der MB Bauausführungen GmbH für Putz-, Estrich- und Fassadenarbeiten in Berlin.',
  alternates: {
    canonical: '/landing'
  }
};

export default function LandingPage() {
  return (
    <>
      <section className="bg-slate-900 py-16 text-white sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-200">Landing Page Berlin</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Putz-, Estrich- und Fassadenarbeiten vom Fachbetrieb
            </h1>
            <p className="mt-6 max-w-reading text-lg text-slate-200">
              {siteConfig.company.name} unterstützt Bauherren in Berlin mit sauberer Ausführung, klarer Abstimmung und
              termingerechter Umsetzung.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/kontakt">Jetzt Kontakt aufnehmen</Button>
              <Button href="/referenzen" variant="secondary">
                Referenzen ansehen
              </Button>
            </div>
          </div>
          <div className="relative h-[320px] overflow-hidden rounded-xl sm:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80"
              alt="Bauprojekt in Berlin"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Container>
      </section>

      <Section
        title="Warum MB Bauausführungen?"
        description="Fokussiert auf verlässliche Ausführung und professionelle Kommunikation."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-slate-900">Klare Planung</h2>
            <p className="mt-3 text-slate-600">Transparente Abläufe und verlässliche Terminabsprachen.</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-slate-900">Saubere Ausführung</h2>
            <p className="mt-3 text-slate-600">Sorgfältige Arbeit in Putz, Estrich und Fassade.</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-slate-900">Regional vor Ort</h2>
            <p className="mt-3 text-slate-600">Schnelle Abstimmung für Projekte in Berlin und Umgebung.</p>
          </article>
        </div>
      </Section>
    </>
  );
}
