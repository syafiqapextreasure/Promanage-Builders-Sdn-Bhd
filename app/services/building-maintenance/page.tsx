import ServicePage from '@/components/ServicePage';
import { findServicePage } from '@/data/service-pages';
import { pageMetadata } from '@/lib/seo';

const service = findServicePage('building-maintenance')!;
export const metadata = pageMetadata(service.title, service.description, '/services/building-maintenance', service.image);
export default function Page() { return <ServicePage slug="building-maintenance" />; }

