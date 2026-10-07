import ServicePage from '@/components/ServicePage';
import { findServicePage } from '@/data/service-pages';
import { pageMetadata } from '@/lib/seo';

const service = findServicePage('construction')!;
export const metadata = pageMetadata(service.title, service.description, '/services/construction', service.image);
export default function Page() { return <ServicePage slug="construction" />; }

