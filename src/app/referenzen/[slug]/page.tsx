import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Cta } from '@/components/cta';
import { Section } from '@/components/section';
import { siteConfig } from '@/config/site';
import { getAllProjects, getProjectBySlug, markdownToHtml } from '@/lib/content';

type ProjectDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Referenz nicht gefunden'
    };
  }

  return {
    title: project.seoTitle ?? project.title,
    description: project.seoDescription ?? project.excerpt,
    alternates: {
      canonical: `/referenzen/${project.slug}`
    },
    openGraph: {
      title: project.seoTitle ?? `${project.title} | ${siteConfig.company.name}`,
      description: project.seoDescription ?? project.excerpt,
      url: `${siteConfig.domain}/referenzen/${project.slug}`,
      images: [{ url: project.imageAfter, alt: project.title }]
    }
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const html = await markdownToHtml(project.body);

  return (
    <>
      <Section>
        <article className="mx-auto max-w-reading">
          <p className="text-sm font-semibold text-brand-600">
            {project.location} | {project.year}
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900">{project.title}</h1>
          <p className="mt-4 text-lg text-slate-600">{project.excerpt}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-sm font-medium text-slate-700">Vorher</p>
              <div className="relative h-56 overflow-hidden rounded-xl">
                <Image
                  src={project.imageBefore}
                  alt={`${project.title} vorher`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-slate-700">Nachher</p>
              <div className="relative h-56 overflow-hidden rounded-xl">
                <Image
                  src={project.imageAfter}
                  alt={`${project.title} nachher`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          <div className="prose-content mt-8" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </Section>
      <Cta title="Ähnliches Projekt geplant?" text="Wir schätzen den Aufwand transparent ein und beraten Sie zu Varianten." />
    </>
  );
}
