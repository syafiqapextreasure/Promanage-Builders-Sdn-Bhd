import type { Metadata } from 'next';
import { BUSINESS_ID, SITE_URL, SOCIAL_IMAGE, jsonLdText } from '@/lib/seo';
import { PROMANAGE_CONTACT } from '@/lib/whatsapp';
import { SERVICE_PAGES } from '@/data/service-pages';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: { icon: '/images/promanage-logo-original.png', apple: '/images/promanage-logo-original.png' },
  title: 'Renovation & House Extensions Seri Kembangan | Promanage',
  description: 'CIDB registered contractor in Equine Park, Seri Kembangan. House extensions, renovations and building maintenance across Petaling Jaya and Klang Valley.',
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
      description: 'CIDB registered contractor based in Equine Park, Seri Kembangan, providing renovation, house extensions, wet works, interior design, project management and building maintenance for JMBs, MCs and MOs in Petaling Jaya and Klang Valley.',
      telephone: `+${PROMANAGE_CONTACT.phoneRaw}`, email: PROMANAGE_CONTACT.email,
      address: { '@type': 'PostalAddress', streetAddress: PROMANAGE_CONTACT.streetAddress, addressLocality: PROMANAGE_CONTACT.addressLocality, addressRegion: PROMANAGE_CONTACT.addressRegion, postalCode: PROMANAGE_CONTACT.postalCode, addressCountry: 'MY' },
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
