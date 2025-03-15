'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { getConsentStatus, updateGoogleConsent } from '@/lib/consent';

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    
    // Check for existing consent
    const consentStatus = getConsentStatus();
    
    if (consentStatus && typeof window !== 'undefined' && typeof window.gtag === 'function') {
      updateGoogleConsent(consentStatus);
    }
  }, [GA_MEASUREMENT_ID]);

  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID is not defined');
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          // Set default consent to denied
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'functionality_storage': 'denied',
            'personalization_storage': 'denied',
            'wait_for_update': 500
          });
          
          // Configure GA with consent mode
          gtag('config', '${GA_MEASUREMENT_ID}', {
            'anonymize_ip': true,
            'cookie_flags': 'SameSite=None;Secure'
          });
        `}
      </Script>
    </>
  );
} 