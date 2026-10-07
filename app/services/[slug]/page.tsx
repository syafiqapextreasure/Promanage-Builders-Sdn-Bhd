import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CircleCheck, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CIDBBadge from '@/components/CIDBBadge';
import { VideoPlayer } from '@/components/MediaShowcase';
import { SERVICE_PAGES, findServicePage } from '@/data/service-pages';
import { BUSINESS_ID, SITE_URL, jsonLdText, pageMetadata } from '@/lib/seo';
import { getWhatsAppUrl } from '@/lib/whatsapp';

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return SERVICE_PAGES.map(service => ({ slug: service.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = findServicePage((await params).slug);
  if (!service) notFound();
  return pageMetadata(service.title, service.description, `/services/${service.slug}`, service.image);
}

export default async function ServicePage({ params }: Props) {
  const service = findServicePage((await params).slug);
  if (!service) notFound();
  const url = `${SITE_URL}/services/${service.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Service', '@id': `${url}#service`, name: service.name,
        serviceType: service.name, description: service.description, url,
        provider: { '@id': BUSINESS_ID },
        areaServed: [{ '@type': 'City', name: 'Petaling Jaya' }, { '@type': 'Place', name: 'Klang Valley' }],
      },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: service.name, item: url },
      ] },
    ],
  };
  return <div className="site-shell"><Navbar /><main id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdText(structuredData) }} />
    <section className="page-heading"><div className="container">
      <nav className="breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><Link href="/services">Services</Link><span aria-hidden="true">/</span><span>{service.name}</span></nav>
      <p className="eyebrow">Petaling Jaya & Klang Valley</p><h1>{service.heading}</h1>
      <p className="section-copy">{service.intro}</p>
    </div></section>
    <section className="section"><div className="container service-detail"><div>
      <p className="eyebrow">Our Scope</p><h2>{service.name}</h2>
      <ul className="scope-list">{service.scope.map(item => <li key={item}><CircleCheck size={23} aria-hidden="true" />{item}</li>)}</ul>
      <a className="button button-gold" href={getWhatsAppUrl(`Hello Benedict Tan, I would like to enquire about ${service.name}.`)} target="_blank" rel="noopener noreferrer"><MessageCircle size={21} aria-hidden="true" />Discuss your project <ArrowRight size={20} aria-hidden="true" /></a>
      <CIDBBadge />
    </div><figure className="detail-photo"><img src={service.image} alt={service.alt} width={1200} height={900} /><figcaption>{service.caption}</figcaption></figure></div></section>
    <section className="section"><div className="container service-detail"><div><h2>{service.detailHeading}</h2><p className="section-copy service-paragraph">{service.detail}</p><Link className="text-link" href="/portfolio">Explore our project portfolio <ArrowRight size={20} aria-hidden="true" /></Link></div><div><p className="eyebrow">Start the Conversation</p><h2>What to share with us</h2><p className="section-copy service-paragraph">{service.preparation}</p><p className="section-copy service-paragraph">Our registered office is at 33, Jalan SS2/24, SS2, Petaling Jaya. Contact Benedict Tan to discuss your project location and requirements.</p><Link className="text-link" href="/contact">Contact Promanage <ArrowRight size={20} aria-hidden="true" /></Link></div></div></section>
    {service.slug === 'building-maintenance' && <section className="section"><div className="container"><h2>See our maintenance work</h2><div className="service-video"><VideoPlayer src="/media/building-maintenance.mp4" poster="/images/services/maintenance-cover.webp" title="Promanage building maintenance and repair services" /></div></div></section>}
    <section className="section"><div className="container service-faq"><p className="eyebrow">Useful Details</p><h2>Questions about {service.name.toLowerCase()}</h2>{service.faq.map(item => <details key={item.question}><summary>{item.question}</summary><p className="section-copy">{item.answer}</p></details>)}</div></section>
    <section className="section"><div className="container"><p className="eyebrow">Related Services</p><nav className="related-services" aria-label="Related services">{SERVICE_PAGES.filter(item => item.slug !== service.slug).map(item => <Link className="text-link" key={item.slug} href={`/services/${item.slug}`}>{item.name}<ArrowRight size={18} aria-hidden="true" /></Link>)}</nav></div></section>
  </main><Footer /></div>;
}
