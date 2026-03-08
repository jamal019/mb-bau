import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Cta } from '@/components/cta';
import { Section } from '@/components/section';
import { siteConfig } from '@/config/site';
import { getAllServices, getServiceBySlug, markdownToHtml } from '@/lib/content';

type ServiceDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServices().map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({ params }: ServiceDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Leistung nicht gefunden'
    };
  }

  return {
    title: service.seoTitle ?? service.title,
    description: service.seoDescription ?? service.excerpt,
    alternates: {
      canonical: `/leistungen/${service.slug}`
    },
    openGraph: {
      title: service.seoTitle ?? `${service.title} | ${siteConfig.company.name}`,
      description: service.seoDescription ?? service.excerpt,
      url: `${siteConfig.domain}/leistungen/${service.slug}`,
      images: [{ url: service.image, alt: service.title }]
    }
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const html = await markdownToHtml(service.body);

  return (
    <>
      <Section>
        <article className="mx-auto max-w-reading">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">{service.title}</h1>
          <p className="mt-4 text-lg text-slate-600">{service.excerpt}</p>
          <div className="relative mt-8 h-72 overflow-hidden rounded-xl sm:h-96">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <div className="prose-content mt-8" dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </Section>
      <Cta title="Sie benötigen diese Leistung?" text="Wir beraten Sie persönlich und planen die nächsten Schritte." />
    </>
  );
}
