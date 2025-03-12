'use client';

import Script from 'next/script';

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!GA_MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID is not defined');
    return null;
  }

  const onLoad = () => {
    console.log('Google Analytics loaded successfully');
  };

  const onError = (error: Error) => {
    console.error('Google Analytics failed to load:', error);
  };

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        onLoad={onLoad}
        onError={onError}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        onLoad={onLoad}
        onError={onError}
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              debug_mode: true
            });
          `,
        }}
      />
    </>
  );
} 