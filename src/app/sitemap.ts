import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { getAllProjects, getAllServices } from '@/lib/content';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    '',
    '/leistungen',
    '/referenzen',
    '/ueber-uns',
    '/kontakt',
    '/impressum',
    '/datenschutz'
  ].map((path) => ({
    url: `${siteConfig.domain}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.7
  }));

  const serviceRoutes = getAllServices().map((service) => ({
    url: `${siteConfig.domain}/leistungen/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  const projectRoutes = getAllProjects().map((project) => ({
    url: `${siteConfig.domain}/referenzen/${project.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
