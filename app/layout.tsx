import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  icons: { icon: '/images/promanage-logo-original.png', apple: '/images/promanage-logo-original.png' },
  title: 'PROMANAGE BUILDERS SDN BHD | Interior Design, Renovation & Construction',
  description:
    'Interior design, renovation, construction, project management and building maintenance for homes, businesses, JMBs and MCs in Petaling Jaya and Klang Valley. Led by Benedict Tan.',
  keywords: [
    'Promanage Builders Sdn Bhd',
    'Benedict Tan',
    'Interior Design Petaling Jaya',
    'Renovation Contractor PJ SS2',
    'Selangor House Extension',
    'Commercial Office Fit-Out',
    'Kitchen Remodeling Malaysia'
  ],
  authors: [{ name: 'Promanage Builders Sdn Bhd' }],
  openGraph: {
    title: 'PROMANAGE BUILDERS SDN BHD | Interior Design, Renovation & Construction',
    description:
      'Interior design, renovation and structural construction for homes and businesses in Petaling Jaya, Selangor and Klang Valley.',
    type: 'website',
    locale: 'en_MY',
    siteName: 'Promanage Builders Sdn Bhd'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PROMANAGE BUILDERS SDN BHD | Interior Design, Renovation & Construction',
    description:
      'Interior design, renovation and structural construction for homes and businesses in Petaling Jaya, Selangor and Klang Valley.'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'PROMANAGE BUILDERS SDN BHD',
  legalName: 'PROMANAGE BUILDERS SDN BHD',
  taxID: '202401013030 (1558880-H)',
  description:
    'Specialist in interior design, space planning, full-house renovation, custom built-ins, house extensions, and structural alterations in Petaling Jaya, Selangor and Klang Valley.',
  telephone: '+60163281581',
  email: 'promanagebuilders1558880h@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '33, Jalan SS2/24, SS2',
    addressLocality: 'Petaling Jaya',
    addressRegion: 'Selangor',
    postalCode: '47300',
    addressCountry: 'MY'
  },
  founder: {
    '@type': 'Person',
    name: 'Benedict Tan',
    jobTitle: 'Managing Director'
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Petaling Jaya' },
    { '@type': 'AdministrativeArea', name: 'Kuala Lumpur' },
    { '@type': 'AdministrativeArea', name: 'Selangor' },
    { '@type': 'AdministrativeArea', name: 'Klang Valley' }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Core Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Interior Design',
          description: 'Residential & commercial interior design, space planning, and 3D visualization.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Renovation & Repairs',
          description: 'Full house renovation, kitchen and bathroom remodeling, custom built-ins, and repairs.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Construction Works',
          description: 'Design and build, residential and commercial construction, house extensions and structural alterations.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Project Management',
          description: 'Accurate budget planning, strict progress scheduling, and contractor coordination.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Building Maintenance & Repairs',
          description: 'Common-area repairs, waterproofing, plumbing, pavement, signage and fire-door replacement for JMBs and MCs.'
        }
      }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}


