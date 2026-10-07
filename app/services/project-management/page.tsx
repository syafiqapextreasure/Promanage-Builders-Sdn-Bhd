import ServicePage from '@/components/ServicePage';
import { findServicePage } from '@/data/service-pages';
import { pageMetadata } from '@/lib/seo';

const service = findServicePage('project-management')!;
export const metadata = pageMetadata(service.title, service.description, '/services/project-management', service.image);
export default function Page() { return <ServicePage slug="project-management" />; }

