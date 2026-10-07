import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { SERVICE_PAGES } from '@/data/service-pages';
import { PROJECT_STUDIES } from '@/data/project-studies';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/services', '/portfolio', '/contact', ...SERVICE_PAGES.map(service => `/services/${service.slug}`), ...PROJECT_STUDIES.map(study => `/portfolio/${study.slug}`)]
    .map(path => ({ url: `${SITE_URL}${path}` }));
}
