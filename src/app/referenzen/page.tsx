import { Metadata } from 'next';
import { Card } from '@/components/card';
import { Cta } from '@/components/cta';
import { Section } from '@/components/section';
import { siteConfig } from '@/config/site';
import { getAllProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Referenzen',
  description: 'Ausgewählte Referenzprojekte der MB Bauausführungen GmbH in Berlin.',
  alternates: {
    canonical: '/referenzen'
  },
  openGraph: {
    title: 'Referenzen | MB Bauausführungen GmbH',
    description: 'Einblick in abgeschlossene Bauprojekte in Berlin.',
    url: `${siteConfig.domain}/referenzen`
  }
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <Section title="Referenzen" description="Beispiele für unsere Arbeit in Wohn- und Gewerbeobjekten in Berlin.">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
      <Cta />
    </>
  );
}
