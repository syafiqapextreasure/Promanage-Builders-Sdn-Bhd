import type { Metadata } from 'next';
import { BUSINESS_ID, SITE_URL, SOCIAL_IMAGE, jsonLdText } from '@/lib/seo';
import { PROMANAGE_CONTACT } from '@/lib/whatsapp';
import { SERVICE_PAGES } from '@/data/service-pages';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: '/images/promanage-logo-original.png', apple: '/images/promanage-logo-original.png' },
  title: 'Renovation & House Extensions Petaling Jaya | Promanage',
  description: 'CIDB registered contractor in SS2, Petaling Jaya. Renovation, house extensions, wet works, interior design and JMB building maintenance across Klang Valley.',
  authors: [{ name: 'Promanage Builders Sdn Bhd' }],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HomeAndConstructionBusiness', '@id': BUSINESS_ID,
      name: PROMANAGE_CONTACT.companyName, legalName: PROMANAGE_CONTACT.companyName,
      identifier: { '@type': 'PropertyValue', propertyID: 'SSM registration', value: PROMANAGE_CONTACT.registrationNumber },
      url: `${SITE_URL}/`, logo: `${SITE_URL}/images/promanage-logo-original.png`,
      image: `${SITE_URL}${SOCIAL_IMAGE}`,
      description: 'CIDB registered contractor in Petaling Jaya providing renovation, house extensions, wet works, interior design, project management and building maintenance for JMBs, MCs and MOs in Klang Valley.',
      telephone: `+${PROMANAGE_CONTACT.phoneRaw}`, email: PROMANAGE_CONTACT.email,
      address: { '@type': 'PostalAddress', streetAddress: '33, Jalan SS2/24, SS2', addressLocality: 'Petaling Jaya', addressRegion: 'Selangor', postalCode: '47300', addressCountry: 'MY' },
      contactPoint: { '@type': 'ContactPoint', telephone: `+${PROMANAGE_CONTACT.phoneRaw}`, contactType: 'Project enquiries', name: PROMANAGE_CONTACT.managingDirector },
      areaServed: [{ '@type': 'City', name: 'Petaling Jaya' }, { '@type': 'Place', name: 'Klang Valley' }],
      hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Renovation, construction and building maintenance services',
        itemListElement: SERVICE_PAGES.map(service => ({ '@type': 'Offer', itemOffered: {
          '@type': 'Service', '@id': `${SITE_URL}/services/${service.slug}#service`, name: service.name,
          url: `${SITE_URL}/services/${service.slug}`, description: service.description, provider: { '@id': BUSINESS_ID },
        } })),
      },
    },
    { '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: 'Promanage Builders Sdn Bhd', publisher: { '@id': BUSINESS_ID }, inLanguage: 'en-MY' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-MY" className="scroll-smooth"><head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdText(jsonLd) }} /></head><body>{children}</body></html>;
}
