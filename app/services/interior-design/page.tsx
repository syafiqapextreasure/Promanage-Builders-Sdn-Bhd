import ServicePage from '@/components/ServicePage';
import { findServicePage } from '@/data/service-pages';
import { pageMetadata } from '@/lib/seo';

const service = findServicePage('interior-design')!;
export const metadata = pageMetadata(service.title, service.description, '/services/interior-design', service.image);
export default function Page() { return <ServicePage slug="interior-design" />; }

