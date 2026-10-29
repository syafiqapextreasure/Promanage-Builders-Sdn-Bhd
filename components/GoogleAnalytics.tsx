'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { GA_MEASUREMENT_ID, contactMethodFromUrl, trackContact } from '@/lib/analytics';

export default function GoogleAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Keep local previews and unrelated hosts out of the client's reports.
    if (!GA_MEASUREMENT_ID || !['promanagebuilders.com', 'www.promanagebuilders.com'].includes(window.location.hostname)) return;
    setEnabled(true);
    function handleClick(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest('a[href]');
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const method = contactMethodFromUrl(anchor.href);
      if (method) trackContact(method);
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (!enabled) return null;

  return <>
    <Script id="promanage-ga4-init" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      window.gtag = function(){window.dataLayer.push(arguments);};
      window.gtag('js', new Date());
      window.gtag('config', '${GA_MEASUREMENT_ID}', {
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      });
    `}</Script>
    <Script id="promanage-ga4-library" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
  </>;
}
