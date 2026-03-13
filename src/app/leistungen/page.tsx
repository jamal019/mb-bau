import { Metadata } from 'next';
import { Card } from '@/components/card';
import { Cta } from '@/components/cta';
import { Section } from '@/components/section';
import { siteConfig } from '@/config/site';
import { getAllServices } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Leistungen',
  description: 'Übersicht der Bauleistungen der MB Bauausführungen GmbH in Berlin.',
  alternates: {
    canonical: '/leistungen'
  },
  openGraph: {
    title: 'Leistungen | MB Bauausführungen GmbH',
    description: 'Innenputz, Estrich, Malerarbeiten, Fassadenarbeiten und Verlegearbeiten aus einer Hand.',
    url: `${siteConfig.domain}/leistungen`
  }
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      <Section
        title="Leistungen"
        description="Wir realisieren Bauvorhaben mit qualifizierten Teams und einem klaren Qualitätsanspruch."
      >
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
      </Section>
      <Cta />
    </>
  );
}
