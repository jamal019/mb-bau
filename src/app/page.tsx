import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/button';
import { Card } from '@/components/card';
import { Container } from '@/components/container';
import { Cta } from '@/components/cta';
import { Section } from '@/components/section';
import { siteConfig } from '@/config/site';
import { getAllProjects, getAllServices } from '@/lib/content';
import { assetPath } from '@/lib/asset-path';

export default function HomePage() {
  const services = getAllServices();
  const projects = getAllProjects().slice(0, 3);

  return (
    <>
      <section className="px-4 pt-6 sm:px-6 lg:px-8">
        <Container className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#232D44_0%,#244A86_58%,#BACFED_100%)] px-6 py-14 text-white shadow-soft sm:px-10 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur">
                <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
                  <Image
                    src={assetPath('/brand/mb-bau-logo.svg')}
                    alt="MB Bau Logo"
                    width={28}
                    height={28}
                    unoptimized
                    className="h-7 w-7 object-contain"
                  />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">MB Bau</p>
                  <p className="text-sm text-white/80">Berlin · Bauausführung</p>
                </div>
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.28em] text-brand-100">Bauunternehmen in Berlin</p>
              <h1 className="mt-4 max-w-[12ch] text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
                Qualitätsarbeit mit klarer Kante.
              </h1>
              <p className="mt-6 max-w-reading text-lg leading-8 text-white/78">
                {siteConfig.company.name} realisiert Innenputz, Estrich, Malerarbeiten, Fassadenarbeiten und
                Verlegearbeiten mit verlässlicher Planung, sauberer Ausführung und einem starken Blick fürs Detail.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button href="/kontakt">Projekt anfragen</Button>
                <Button href="/referenzen" variant="secondary">
                  Referenzen ansehen
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-gold/80 blur-2xl" />
              <div className="absolute -bottom-6 right-6 h-28 w-28 rounded-full bg-white/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-3 backdrop-blur">
                <div className="relative h-[360px] overflow-hidden rounded-[1.5rem] sm:h-[440px]">
                  <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80"
                    alt="Baustelle in Berlin"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(35,45,68,0.06)_0%,rgba(35,45,68,0.42)_100%)]" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-white/20 bg-white/10 p-4 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gold">Markenanspruch</p>
                    <p className="mt-2 text-lg font-semibold text-white">Präzise Ausführung. Verlässliche Abläufe. Saubere Ergebnisse.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section title="Unsere Leistungen" description="Leistungsbereiche mit klarer Spezialisierung und sauberer Umsetzung.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
          <Link href="/leistungen" className="text-sm font-semibold text-dusk hover:text-indigo">
            Alle Leistungen ansehen
          </Link>
        </div>
      </Section>

      <Section title="Referenzen" description="Projekte mit Fokus auf Ausführung, Taktung und belastbare Ergebnisse.">
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
          {[
            ['Verbindliche Planung', 'Klare Projektstruktur mit transparenten Abläufen und festen Ansprechpartnern.'],
            ['Handwerkliche Qualität', 'Sorgfältige Ausführung, hochwertige Materialien und saubere Baustellen.'],
            ['Regional in Berlin', 'Kurze Wege, schnelle Abstimmung und fundierte Ortskenntnis im Berliner Markt.']
          ].map(([title, text]) => (
            <article key={title} className="rounded-[1.5rem] border border-dusk/10 bg-white/80 p-6 shadow-soft backdrop-blur">
              <div className="mb-4 h-2 w-16 rounded-full bg-gold" />
              <h3 className="text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Häufige Fragen" className="bg-white/40">
        <div className="space-y-6 rounded-[2rem] border border-dusk/10 bg-white/75 p-8 shadow-soft backdrop-blur">
          <article>
            <h3 className="text-lg font-semibold text-ink">Welche Leistungen bieten Sie an?</h3>
            <p className="mt-2 text-slate-700">
              Unser Schwerpunkt liegt auf Innenputz, Estrich, Malerarbeiten, Fassadenarbeiten und Verlegearbeiten.
            </p>
          </article>
          <article>
            <h3 className="text-lg font-semibold text-ink">In welchem Gebiet sind Sie tätig?</h3>
            <p className="mt-2 text-slate-700">Unser Schwerpunkt liegt auf Berlin und angrenzenden Stadtteilen.</p>
          </article>
          <article>
            <h3 className="text-lg font-semibold text-ink">Wie schnell erhalte ich ein Angebot?</h3>
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
