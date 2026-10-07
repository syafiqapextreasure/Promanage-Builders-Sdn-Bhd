import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { SERVICE_PAGES } from '@/data/service-pages';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/services', '/portfolio', '/contact', ...SERVICE_PAGES.map(service => `/services/${service.slug}`)]
    .map(path => ({ url: `${SITE_URL}${path}` }));
}
