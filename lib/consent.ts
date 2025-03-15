import { parseCookies, setCookie } from 'nookies';

export type ConsentStatus = {
  analytics: boolean;
  preferences: boolean;
  marketing: boolean;
};

const CONSENT_COOKIE_NAME = 'cookie_consent';

export function getConsentStatus(): ConsentStatus | null {
  if (typeof window === 'undefined') return null;
  
  const cookies = parseCookies();
  const consentCookie = cookies[CONSENT_COOKIE_NAME];
  
  if (!consentCookie) return null;
  
  try {
    return JSON.parse(consentCookie) as ConsentStatus;
  } catch (error) {
    console.error('Error parsing consent cookie:', error);
    return null;
  }
}

export function setConsentStatus(status: ConsentStatus): void {
  setCookie(null, CONSENT_COOKIE_NAME, JSON.stringify(status), {
    maxAge: 365 * 24 * 60 * 60, // 1 year
    path: '/',
    sameSite: 'strict'
  });
  
  updateGoogleConsent(status);
}

export function updateGoogleConsent(status: ConsentStatus): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      'analytics_storage': status.analytics ? 'granted' : 'denied',
      'ad_storage': status.marketing ? 'granted' : 'denied',
      'functionality_storage': status.preferences ? 'granted' : 'denied',
      'personalization_storage': status.preferences ? 'granted' : 'denied'
    });
  }
}

export function hasGivenConsent(): boolean {
  return getConsentStatus() !== null;
} 