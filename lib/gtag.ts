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
      page_title: document.title,
      
      // Explicitly set consent parameters to ensure proper tracking
      'consent': {
        'analytics_storage': 'granted',
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      }
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

// TypeScript declarations for global functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
} 