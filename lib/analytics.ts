// GA4 Measurement IDs are public identifiers, not account passwords or API keys.
// Set the build variable below, or add the real G-... ID as the fallback here.
const configuredMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';
export const GA_MEASUREMENT_ID = /^G-[A-Z0-9]+$/.test(configuredMeasurementId.trim())
  ? configuredMeasurementId.trim()
  : '';

type ContactMethod = 'whatsapp' | 'phone' | 'email' | 'directions';
type ContactSource = 'link' | 'enquiry_form';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function contactMethodFromUrl(href: string): ContactMethod | null {
  try {
    const url = new URL(href);
    if (url.protocol === 'tel:') return 'phone';
    if (url.protocol === 'mailto:') return 'email';
    if (url.protocol !== 'https:') return null;
    if (url.hostname === 'wa.me' || url.hostname === 'api.whatsapp.com' || url.hostname === 'web.whatsapp.com') return 'whatsapp';
    if (url.hostname === 'maps.google.com' || (url.hostname === 'www.google.com' && url.pathname.startsWith('/maps'))) return 'directions';
    return null;
  } catch {
    return null;
  }
}

export function trackContact(method: ContactMethod, source: ContactSource = 'link'): void {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  // Deliberately exclude link URLs, WhatsApp message text and all form values.
  window.gtag('event', `${method}_click`, {
    send_to: GA_MEASUREMENT_ID,
    contact_source: source,
    page_path: window.location.pathname,
  });
}
