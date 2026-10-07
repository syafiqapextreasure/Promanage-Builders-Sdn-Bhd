import type { Metadata } from 'next';

export const SITE_URL = 'https://promanagebuilders.com';
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const SOCIAL_IMAGE = '/images/projects/rimbayu-robin-teluk-panglima-02.webp';

export function pageMetadata(title: string, description: string, path: string, image = SOCIAL_IMAGE): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title, description, url: `${SITE_URL}${path}`, type: 'website', locale: 'en_MY',
      siteName: 'Promanage Builders Sdn Bhd',
      images: [{ url: `${SITE_URL}${image}`, alt: 'Promanage Builders project showcase' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [`${SITE_URL}${image}`] },
  };
}

export function jsonLdText(value: unknown): string {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
