import ServicePage from '@/components/ServicePage';
import { findServicePage } from '@/data/service-pages';
import { pageMetadata } from '@/lib/seo';

const service = findServicePage('renovation')!;
export const metadata = pageMetadata(service.title, service.description, '/services/renovation', service.image);
export default function Page() { return <ServicePage slug="renovation" />; }

