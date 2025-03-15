// Types
import { getConsentStatus } from './consent';

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  const consentStatus = getConsentStatus();
  
  // Only track pageviews if the user has given analytics consent
  if (typeof window.gtag === 'function' && consentStatus?.analytics) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string, {
      page_location: url,
      page_title: document.title
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  const consentStatus = getConsentStatus();
  
  // Only track events if the user has given analytics consent
  if (typeof window.gtag === 'function' && consentStatus?.analytics) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Declare gtag as a global function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
} 