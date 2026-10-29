import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { SERVICE_PAGES } from '@/data/service-pages';
import { PROJECT_STUDIES } from '@/data/project-studies';
import { MAINTENANCE_VIDEO } from '@/data/maintenance-video';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...['/', '/services', '/portfolio', '/contact', ...SERVICE_PAGES.map(service => `/services/${service.slug}`), ...PROJECT_STUDIES.map(study => `/portfolio/${study.slug}`)]
      .map(path => ({ url: `${SITE_URL}${path}` })),
    { url: `${SITE_URL}${MAINTENANCE_VIDEO.watchPath}`, videos: [{
      title: MAINTENANCE_VIDEO.title,
      description: MAINTENANCE_VIDEO.description,
      thumbnail_loc: `${SITE_URL}${MAINTENANCE_VIDEO.poster}`,
      content_loc: `${SITE_URL}${MAINTENANCE_VIDEO.src}`,
      duration: 55,
      publication_date: MAINTENANCE_VIDEO.uploadDate,
    }] },
  ];
}
