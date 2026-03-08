import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { Container } from '@/components/container';
import { Cta } from '@/components/cta';
import { Section } from '@/components/section';
import { siteConfig } from '@/config/site';
import { getAllProjects, getAllServices } from '@/lib/content';

export default function HomePage() {
  const services = getAllServices().slice(0, 4);
  const projects = getAllProjects().slice(0, 3);

  return (
    <>
      <section className="bg-brand-50 py-16 sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">Bauunternehmen in Berlin</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Qualitätsarbeit für Putz, Estrich und Fassade
            </h1>
            <p className="mt-6 max-w-reading text-lg text-slate-600">
              {siteConfig.company.name} realisiert Bauprojekte im Bestand und Neubau mit klarem Prozess,
              verbindlichen Zeitplänen und sauberer Ausführung.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/kontakt">Angebot anfragen</Button>
              <Button href={siteConfig.company.phoneHref} variant="secondary">
                Jetzt anrufen
              </Button>
            </div>
          </div>
          <div className="relative h-[340px] overflow-hidden rounded-xl shadow-soft sm:h-[420px]">
            <Image
              src="/placeholders/hero-construction.svg"
              alt="Baustelle in Berlin"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </Container>
      </section>

      <Section title="Unsere Leistungen" description="Putz- und Estricharbeiten sowie Fassadenarbeiten aus einer Hand.">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card
              key={service.slug}
              href={`/leistungen/${service.slug}`}
              title={service.title}
              description={service.excerpt}
              image={service.image}
            />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/leistungen" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
            Alle Leistungen ansehen
          </Link>
        </div>
      </Section>

      <Section title="Referenzen" description="Ausgewählte Projekte aus Berlin und Umgebung.">
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.slug}
              href={`/referenzen/${project.slug}`}
              title={project.title}
              description={project.excerpt}
              image={project.imageAfter}
              metadata={`${project.location} | ${project.year}`}
            />
          ))}
        </div>
      </Section>

      <Section title="Warum MB Bauausführungen?">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-slate-900">Verbindliche Planung</h3>
            <p className="mt-3 text-slate-600">Klare Projektstruktur mit transparenten Abläufen und festen Ansprechpartnern.</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-slate-900">Handwerkliche Qualität</h3>
            <p className="mt-3 text-slate-600">Sorgfältige Ausführung, hochwertige Materialien und saubere Baustellen.</p>
          </article>
          <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-slate-900">Regional in Berlin</h3>
            <p className="mt-3 text-slate-600">Kurze Wege, schnelle Abstimmung und fundierte Ortskenntnis im Berliner Markt.</p>
          </article>
        </div>
      </Section>

      <Section title="Häufige Fragen" className="bg-slate-50">
        <div className="space-y-6">
          <article>
            <h3 className="text-lg font-semibold text-slate-900">Welche Leistungen bieten Sie an?</h3>
            <p className="mt-2 text-slate-700">
              Unser Schwerpunkt liegt auf Putz- und Estricharbeiten sowie Fassadenarbeiten.
            </p>
          </article>
          <article>
            <h3 className="text-lg font-semibold text-slate-900">In welchem Gebiet sind Sie tätig?</h3>
            <p className="mt-2 text-slate-700">Unser Schwerpunkt liegt auf Berlin und angrenzenden Stadtteilen.</p>
          </article>
          <article>
            <h3 className="text-lg font-semibold text-slate-900">Wie schnell erhalte ich ein Angebot?</h3>
            <p className="mt-2 text-slate-700">
              Nach dem Erstgespräch und einer kurzen Sichtung der Unterlagen erhalten Sie in der Regel zeitnah ein
              strukturiertes Angebot.
            </p>
          </article>
        </div>
      </Section>

      <Cta />
    </>
  );
}
